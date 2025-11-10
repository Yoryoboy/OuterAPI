# High Split Billing Automation

## Event Flow
- `/src/middlewares/updateTypeMiddleware.js` now scans every `history_items` entry (not just the first one) so it tags any ClickUp `taskUpdated` event that touches one of the High Split billing custom fields with the synthetic `highSplitAutomation` update type. The middleware still stores the standard `req.customFieldData`, `req.taskId`, and `req.listId`.
- `/src/handlers/eventHandlers.js` registers a single handler for that update type. The chain ensures the request is a `taskUpdated` event, contains a `custom_field` history item, and that the task belongs to the CCI High Split list before delegating to the controller.
- `/src/controllers/highSplitBillingController.js` delegates the heavy lifting to the service and converts the service response into the HTTP response expected by the webhook route.

## Middleware Additions
- `validateHighSplitList` (`/src/middlewares/highSplitListMiddleware.js`) wraps the existing list validator so the automation can stay scoped to the High Split list.
- `requireTaskUpdatedEvent` (`/src/middlewares/eventTypeValidator.js`) is a reusable event-type guard so future automations can assert other ClickUp webhook event names without new bespoke logic.
- `validateCustomFieldHistory` (`/src/middlewares/customFieldHistoryValidator.js`) hardens the pipeline by requiring that at least one history item of type `custom_field` is present and exposes it via both `req.historyItem` and `req.customFieldHistoryItem`.

## Configuration
`/src/config/highSplitAutomationConfig.js` centralizes every field that belongs to the High Split automations:

| Segment   | Status Field ID | Ready Option ID | Billed Option ID | Metric Field ID | Metric Name |
|-----------|-----------------|-----------------|------------------|-----------------|-------------|
| ASBUILT   | `0dc606a1-e128-487e-9ba0-69e9cf636123` | `7ced988f-49e8-4b8b-a19c-b28e10af78a0` | `e82b12d5-5186-4f6b-8a52-07dc8f1bc915` | `d281788f-5911-4954-82db-3616de342644` | ASBUILT ROUNDED MILES |
| DESIGN    | `a263dd91-993e-4758-b112-07be364f3d0a` | `87fbd12d-4cd2-4c0e-9d9c-fb5b2b3931c1` | `16447d35-5678-4162-8249-5a50ade9a053` | `e1edd040-64af-4036-8012-9b9c29fc5f11` | DESIGN ROUNDED MILES |
| REDESIGN  | `2ba7840b-7ff1-4e37-b519-2f7741e45170` | `b72a35ef-df4f-43e1-b9bc-8c1aa8fac08a` | `86e072c0-7078-45a6-929c-0bf6071cce1e` | `4ec8d659-1037-4662-b228-e05c3228b374` | REDESIGN TIME |

The file also exports:
- `HIGH_SPLIT_AUTOMATION_EVENT`: shared constant used by the update-type middleware and the event handler map.
- `HIGH_SPLIT_AUTOMATION_FIELD_IDS`: `Set` leveraged by the update-type middleware to opt requests into the shared handler.
- `HIGH_SPLIT_AUTOMATIONS_BY_FIELD_ID`: lookup table consumed by the service so it always knows which segment a custom field belongs to and whether the change was on the status or metric side.

Adding another automation later only requires inserting a new segment definition in this config file and pointing the downstream logic to the new field IDs.

## Service Logic
`/src/services/highSplitBillingService.js` encapsulates the business rules:

1. Identify which segment (ASBUILT, DESIGN, REDESIGN, etc.) the webhook touched via `HIGH_SPLIT_AUTOMATIONS_BY_FIELD_ID`.
2. Fetch the current task from ClickUp using the shared SDK and read the latest values for both the billing status dropdown and the paired metric field.
3. Normalize numeric payloads so `"0"`, `0`, or `{ value: 0 }` all behave the same.
4. If the billing status is in `READY TO BILL` **and** the metric is exactly zero, call `clickUp.customFields.setCustomFieldValue` to flip the billing status to its `BILLED` option.
5. Return structured metadata (`segment`, `triggerFieldRole`, etc.) so the controller can include it in the webhook response.

When either precondition is not met (status not ready, miles/time not zero, already billed, etc.) the service reports `skipped: true`, letting the webhook exit gracefully.

## Extending The Automation Family
- Add the new field pairing to `HIGH_SPLIT_AUTOMATIONS`.
- If the automation should reuse the “status ready + metric 0” rule, no additional changes are required; the update-type middleware will automatically classify the webhook, and the existing service will evaluate the new rule.
- For different behaviors, create another service/controller pair and register them under the same event type (or a new type) with the existing reusable middlewares.

This keeps `/webhook/cci/webhook` focused on routing while making the High Split automations composable and easy to grow.
