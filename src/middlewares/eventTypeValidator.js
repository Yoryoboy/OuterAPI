/**
 * Factory that enforces the incoming webhook event type.
 * Returns 204 when the event does not match so the pipeline can exit quietly.
 *
 * @param {string} expectedEvent - ClickUp webhook event type (e.g., "taskUpdated")
 * @returns {Function} Express middleware
 */
export function validateEventType(expectedEvent) {
  return (req, res, next) => {
    try {
      const eventType = req.body?.event;

      if (!eventType) {
        return res
          .status(400)
          .json({ error: "Missing event type in webhook payload" });
      }

      if (eventType !== expectedEvent) {
        return res.status(204).end();
      }

      next();
    } catch (error) {
      console.error("Error validating event type:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };
}

export const requireTaskUpdatedEvent = validateEventType("taskUpdated");
