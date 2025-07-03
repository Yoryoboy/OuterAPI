export function validateField(req, res, next) {
  try {
    const fieldUpdated = req.body.history_items.find(
      (item) =>
        item.custom_field && item.custom_field.name === "CONTRACTOR_KING"
    );

    if (fieldUpdated) {
      next();
    } else {
      res.status(204).json({
        message:
          "Campo no relevante actualizado, no se requiere procesamiento.",
      });
    }
  } catch (error) {
    res.status(204).json({
      message: "Invalid data in body",
      error,
    });
  }
}
