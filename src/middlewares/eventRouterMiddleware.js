export const eventRouter = (eventHandlers) => {
  return (req, res, next) => {
    try {
      const eventType = req.body.event;
      
      if (!eventType || !eventHandlers[eventType]) {
        console.log(`Event type not supported or missing: ${eventType || 'undefined'}`);
        return res.status(204).end();
      }
      
      req.eventHandler = eventHandlers[eventType];
      next();
    } catch (error) {
      console.error("Error in event router middleware:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };
};
