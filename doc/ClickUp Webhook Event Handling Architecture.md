# 📘 ClickUp Webhook Event Handling Architecture

This document explains the architecture used to handle multiple types of ClickUp webhook events in a scalable and maintainable way. It also includes a detailed example walkthrough of the request flow, helping you visualize how everything works under the hood.

---

## 🏗️ Architecture Overview

### 🔧 Purpose

This architecture allows your Express app to:

* Dynamically route ClickUp events to the correct handler.
* Attach a custom middleware chain to each event type.
* Keep route definitions clean and decoupled.

### 🧠 Key Concepts

* **`buildEventHandlers()`**: A factory function that builds an object mapping event names (e.g., `taskStatusUpdated`) to handler functions.
* **`eventRouter()`**: A middleware that inspects the `req.body.event`, and sets the correct handler on `req.eventHandler`.
* **`executeEventHandler()`**: A middleware that simply calls the handler assigned to `req.eventHandler`.
* **`eventHandlerConfig`**: A registry where you define middlewares and handlers for each event type.

### 🗂️ File Structure (Example)

```
src/
├── middlewares/
│   ├── eventRouterMiddleware.js
│   ├── eventHandlerMiddleware.js
│   ├── validateStatusField.js
│   ├── validStatusValidator.js
├── handlers/
│   └── eventHandlers.js
├── controllers/
│   └── statusChangeController.js
└── routes/
    └── webhookRoutes.js
```

---

## ⚙️ Explanation

### 🔧 Step 1: `buildEventHandlers()` returns an object containing functions

When you run:

```js
const eventHandlers = buildEventHandlers();
```

you're **executing** `buildEventHandlers`, not storing the function itself. So the result of that execution is stored in `eventHandlers`.

### 🎁 What does `buildEventHandlers()` return?

```js
{
  "taskStatusUpdated": (req, res) => { ... },
  "taskUpdated": (req, res) => { ... },
  ...
}
```

So `eventHandlers` is an object where each key is an event type like `"taskStatusUpdated"`, and each value is a function of the form `(req, res) => { ... }` that includes its own middleware chain internally.

In other words:

```js
typeof eventHandlers // "object"
typeof eventHandlers.taskStatusUpdated // "function"
```

### 🚦 Step 2: `eventRouter(eventHandlers)`

Now that `eventHandlers` is a function map, you pass it to the `eventRouter`:

```js
eventRouter(eventHandlers)
```

This returns a middleware function for Express:

```js
(req, res, next) => {
  // Logic to determine the event type
  // and assign `req.eventHandler`
}
```

The purpose of `eventRouter` is to extract the `req.body.event` field and assign the corresponding handler function to `req.eventHandler`:

```js
const eventType = req.body.event;
req.eventHandler = eventHandlers[eventType];
```

If no matching handler exists, it returns `204 No Content`.

### ⚡ Step 3: `executeEventHandler` runs the selected handler

In your route definition:

```js
router.post("/cci/webhook", eventRouter(eventHandlers), executeEventHandler);
```

When a request comes in:

1. `eventRouter(eventHandlers)` runs

   * Reads `req.body.event`
   * Stores the appropriate handler in `req.eventHandler`

2. `executeEventHandler` runs

   * Calls `req.eventHandler(req, res)`
   * Which then runs: `middleware1 → middleware2 → finalHandler`

### 🧠 Why this setup?

You get a scalable and decoupled system:

* No need for `if (event === ...)` conditions
* Each event can have a different middleware chain
* Clean and dynamic router definitions

### 🧩 Visual Summary

```
POST /cci/webhook
↓
eventRouter(eventHandlers)
  - req.body.event = "taskStatusUpdated"
  - req.eventHandler = eventHandlers["taskStatusUpdated"]
↓
executeEventHandler
  - Calls req.eventHandler(req, res)
↓
Runs:
  middleware1 → middleware2 → finalHandler
```

---

## 🔄 How to Add New Event Types

Adding support for a new ClickUp event type is straightforward with this architecture. Follow these steps:

### 1. Create Controller and Middleware

First, create any necessary controller functions and middleware for the new event type:

```js
// src/controllers/taskUpdateController.js
export const handleTaskUpdated = (req, res) => {
  // Logic to handle taskUpdated event
  console.log("Processing taskUpdated event");
  
  // Do something with the task data
  const taskId = req.body.task_id;
  
  // Return a success response
  return res.status(200).json({
    success: true,
    message: "Task update processed successfully"
  });
};
```

```js
// src/middlewares/validateTaskUpdateFields.js
export const validateTaskUpdateFields = (req, res, next) => {
  // Validate that the request has the necessary fields
  if (!req.body.task_id) {
    return res.status(400).json({ error: "Missing task_id field" });
  }
  
  // Continue to the next middleware
  next();
};
```

### 2. Register the Event Handler

Add the new event type to the `eventHandlerConfig` object in `src/handlers/eventHandlers.js`:

```js
import { handleTaskUpdated } from "../controllers/taskUpdateController.js";
import { validateTaskUpdateFields } from "../middlewares/validateTaskUpdateFields.js";

export const eventHandlerConfig = {
  // Existing handlers
  "taskStatusUpdated": {
    middlewares: [validateStatusField, validateValidStatus],
    handler: handleStatusChange
  },
  
  // New handler for taskUpdated event
  "taskUpdated": {
    middlewares: [validateTaskUpdateFields],
    handler: handleTaskUpdated
  }
};
```

### 3. That's it!

No changes to routes are needed. The `eventRouter` and `executeEventHandler` will automatically handle the new event type.

When a webhook with `event: "taskUpdated"` arrives at your `/cci/webhook` endpoint, it will be routed to your new handler with its middleware chain.

### 🧪 Testing the New Event Type

You can test your new event handler using a tool like Postman or curl:

```bash
curl -X POST http://your-api.com/webhook/cci/webhook \
  -H "Content-Type: application/json" \
  -d '{"event": "taskUpdated", "task_id": "123456"}'
```

---

## 📊 Examples and Diagrams

### 🔄 Request Flow Diagram

```
┌─────────────────┐                 ┌─────────────────┐                 ┌─────────────────┐
│                 │                 │                 │                 │                 │
│  ClickUp        │───Webhook────▶  │  Express        │───Event Type──▶  │  Event Router   │
│  (Event Source) │                 │  (API Server)   │                 │  Middleware     │
│                 │                 │                 │                 │                 │
└─────────────────┘                 └─────────────────┘                 └─────────────────┘
                                                                                │
                                                                                │
                                                                                ▼
┌─────────────────┐                 ┌─────────────────┐                 ┌─────────────────┐
│                 │                 │                 │                 │                 │
│  Controller     │◀───Handler─────│  Event Handler  │◀───req.event────│  Event Handler  │
│  (Final Logic)  │                 │  Executor      │                 │  Registry       │
│                 │                 │                 │                 │                 │
└─────────────────┘                 └─────────────────┘                 └─────────────────┘
```

### 🌐 Complete Example: Task Comment Added Event

Let's walk through adding support for a "taskCommentAdded" event:

#### 1. Create the Controller (src/controllers/commentController.js)

```js
export const handleTaskCommentAdded = (req, res) => {
  try {
    const { task_id, comment } = req.body;
    
    console.log(`New comment added to task ${task_id}: ${comment.text}`);
    
    // Maybe notify team members or update some statistics
    
    return res.status(200).json({
      success: true,
      message: "Comment processed successfully"
    });
  } catch (error) {
    console.error("Error processing comment:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
```

#### 2. Create Middleware (src/middlewares/validateCommentFields.js)

```js
export const validateCommentFields = (req, res, next) => {
  if (!req.body.task_id || !req.body.comment || !req.body.comment.text) {
    return res.status(400).json({ 
      error: "Missing required fields for comment event" 
    });
  }
  
  next();
};
```

#### 3. Register in Event Handlers (src/handlers/eventHandlers.js)

```js
import { handleTaskCommentAdded } from "../controllers/commentController.js";
import { validateCommentFields } from "../middlewares/validateCommentFields.js";

export const eventHandlerConfig = {
  // Existing handlers...
  
  "taskCommentAdded": {
    middlewares: [validateCommentFields],
    handler: handleTaskCommentAdded
  }
};
```

#### 4. Example Payload

```json
{
  "event": "taskCommentAdded",
  "task_id": "abc123",
  "comment": {
    "id": "comment123",
    "text": "This looks great! Ready for review.",
    "user": {
      "id": "user456",
      "username": "john.doe"
    },
    "date_created": "2025-05-28T12:30:45Z"
  }
}
```

### 🔄 Event Handling Sequence

```
┌───────────────┐     ┌───────────────┐     ┌───────────────┐     ┌───────────────┐
│ POST Request  │────▶│ eventRouter   │────▶│ Middleware 1  │────▶│ Middleware 2  │
└───────────────┘     └───────────────┘     └───────────────┘     └───────────────┘
                                                                          │
                                                                          ▼
                      ┌───────────────┐                           ┌───────────────┐
                      │ HTTP Response │◀──────────────────────────│ Final Handler │
                      └───────────────┘                           └───────────────┘
```

---


