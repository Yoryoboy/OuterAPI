export function validateField(req, res, next) {
  const fieldUpdated = req.body.history_items.find(
    (item) => item.custom_field && item.custom_field.name === "CONTRACTOR_KING"
  );

  if (fieldUpdated) {
    next();
  } else {
    const message =
      "Campo no relevante actualizado, no se requiere procesamiento.";
    res.status(200).json({
      message: message,
    });
  }
}
