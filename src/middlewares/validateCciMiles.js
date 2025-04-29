import { getCodesCustomFields } from "../utils/helperFunctions.js";

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
      error,
    });
  }
}

export function validateSentTask(req, res, next) {
  try {
    const { date, payload } = req.body;
    const { id, name, assignees } = payload;
    const users = assignees.map((assignee) => assignee.email);
    const codes = getCodesCustomFields(payload);
    const isAnyCodeValueZero = codes.some((code) => code.value === 0);

    if (codes.length === 0 || isAnyCodeValueZero) {
      console.log(
        `Task name: ${name}, codes not found. Sending email to ${users.join(
          ", "
        )}`
      );
      const task = {
        date: new Date(date).toLocaleDateString(),
        id,
        name,
        users,
        codes,
      };
      req.body.task = task;
      next();
    } else {
      const message = `Task ID: ${id}, name: ${name}, users: ${users.join(
        ", "
      )} has been validated`;
      res.status(204).json({
        stage: "validateSentTask",
        message,
      });
      console.log(message);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      stage: "validateSentTask",
      message: "There was an error validating the task",
    });
  }
}
