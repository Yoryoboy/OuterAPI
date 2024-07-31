export function validateCciMiles(req, res, next) {
  try {
    const { asbuilt_miles, design_miles } = req.query;
    if (asbuilt_miles && 0 < Number(asbuilt_miles) < 1) {
      req.query.asbuilt_miles = 1;
      req.query.action = "asbuilt";
      next();
    } else if (design_miles && 0 < design_miles < 1) {
      req.query.design_miles = 1;
      req.query.action = "design";
      next();
    } else {
      res.json({
        stage: "validateCciMiles",
        message: "Invalid data in query",
      });
    }
  } catch (error) {
    res.json({
      stage: "validateCciMiles",
      message: "There was an error validating the data",
    });
  }
}
