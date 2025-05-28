export const eventRouter = (eventHandlers) => {
  return (req, res, next) => {
    try {
      // Check for updateType (set by updateTypeMiddleware) or fall back to event type
      const updateType = req.updateType || req.body.event;
      
      if (!updateType || !eventHandlers[updateType]) {
        // Return 204 without logging for cleaner logs
        return res.status(204).end();
      }
      
      req.eventHandler = eventHandlers[updateType];
      next();
    } catch (error) {
      console.error("Error in event router middleware:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };
};
