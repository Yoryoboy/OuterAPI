export function validateCciMiles(req, res, next) {
  try {
    const { asbuilt_miles, design_miles } = req.query;

    if (asbuilt_miles !== undefined) {
      const asbuiltValue = Number(asbuilt_miles);
      if (asbuiltValue > 0 && asbuiltValue < 1) {
        req.query.asbuilt_miles = 1;
      } else {
        req.query.asbuilt_miles = asbuiltValue;
      }
      req.query.action = "asbuilt";
      next();
    } else if (design_miles !== undefined) {
      const designValue = Number(design_miles);
      if (designValue > 0 && designValue < 1) {
        req.query.design_miles = 1;
      } else {
        req.query.design_miles = designValue;
      }
      req.query.action = "design";
      next();
    } else {
      res.status(400).json({
        stage: "validateCciMiles",
        message: "Invalid data in query",
      });
    }
  } catch (error) {
    res.status(500).json({
      stage: "validateCciMiles",
      message: "There was an error validating the data",
    });
  }
}

export function validateSentTask(req, res, next) {
  try {
    const { date, payload } = req.body;
    const { id, name, assignees, custom_fields } = payload;
    console.log(date, id, name, assignees, custom_fields[0]);
    res.status(200).json({
      stage: "validateSentTask",
      message: "Task validated",
    });
  } catch (error) {
    console.log(error);
  }
}
