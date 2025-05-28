export const executeEventHandler = (req, res) => {
  try {
    if (!req.eventHandler) {
      console.error("No event handler found in request object");
      return res.status(500).json({ error: "Internal server error" });
    }
    
    req.eventHandler(req, res);
  } catch (error) {
    console.error("Error executing event handler:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
