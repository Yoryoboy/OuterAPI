export function eventRouter(eventHandlers) {
  return (req, res, next) => {
    try {
      const updateType = req.updateType || req.body.event;

      if (!updateType || !eventHandlers[updateType]) {
        return res.status(204).end();
      }

      req.eventHandler = eventHandlers[updateType];
      next();
    } catch (error) {
      console.error("Error in event router middleware:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };
}
