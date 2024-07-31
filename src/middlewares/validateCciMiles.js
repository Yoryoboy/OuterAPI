export function validateCciMiles(req, res, next) {
  try {
    const { asbuilt_miles, design_miles } = req.query;
    if (!asbuilt_miles && !design_miles) {
      res.json({
        message: "Invalid data in query",
      });
    } else {
      next();
    }
  } catch (error) {
    res.json({
      message: "There was an error validating the data",
    });
  }
}
