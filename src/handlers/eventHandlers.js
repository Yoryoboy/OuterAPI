import { validateValidStatus } from "../middlewares/validStatusValidator.js";
import { handleEstimatedDeliveryDateUpdate } from "../controllers/customFieldController.js";
import { validateList } from "../middlewares/listValidator.js";
import { CCI_BAU_LIST } from "../config/listsDetails.js";
import { identifyParentList } from "../middlewares/identifyParentList.js";
import { handleTaskCreated } from "../controllers/taskCreatedController.js";
import { validateStatusField, validateTaskCreation } from "../middlewares/validateHistoryField.js";
import { handleStatusChange } from "../controllers/statusChangeController.js";

/**
 * Configuration for event handlers with their middleware chains
 * Each event type maps to an object with:
 * - middlewares: Array of middleware functions to execute before the handler
 * - handler: The final handler function for the event
 */
export const eventHandlerConfig = {
  taskStatusUpdated: {
    middlewares: [validateStatusField, validateValidStatus],
    handler: handleStatusChange,
  },
  taskCreated: {
    middlewares: [validateTaskCreation, identifyParentList],
    handler: handleTaskCreated,
  },
  customField_ESTIMATED_DELIVERY_DATE: {
    middlewares: [validateList(CCI_BAU_LIST.id)],
    handler: handleEstimatedDeliveryDateUpdate,
  },
};

/**
 * Builds middleware chains for each event type
 * @returns {Object} Map of event types to their handler functions with middlewares applied
 */
export const buildEventHandlers = () => {
  const handlers = {};

  Object.entries(eventHandlerConfig).forEach(([eventType, config]) => {
    handlers[eventType] = (req, res) => {
      const executeMiddleware = (index) => {
        if (index >= config.middlewares.length) {
          return config.handler(req, res);
        }

        const middleware = config.middlewares[index];
        middleware(req, res, () => executeMiddleware(index + 1));
      };

      executeMiddleware(0);
    };
  });

  return handlers;
};
