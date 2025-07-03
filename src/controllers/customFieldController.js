import { apiKey } from "../config/config.js";
import axios from "axios";

/**
 * Handles updates to the ESTIMATED DELIVERY DATE custom field
 */
/**
 * Calculates the next business day after a given date
 * Only skips Sunday (day 0), as Saturday is a working day
 * @param {number} timestamp - Unix timestamp in milliseconds
 * @returns {number} - Unix timestamp for the next business day
 */
const getNextBusinessDay = (timestamp) => {
  const date = new Date(parseInt(timestamp));

  date.setDate(date.getDate() + 1);

  const dayOfWeek = date.getDay();

  if (dayOfWeek === 0) {
    // If Sunday, move to Monday
    date.setDate(date.getDate() + 1);
  }
  // Saturday (dayOfWeek === 6) is a working day, so we don't skip it

  return date.getTime();
};

export const handleEstimatedDeliveryDateUpdate = async (req, res) => {
  try {
    const taskId = req.body.task_id;
    const { fieldName, after } = req.customFieldData;

    console.log("=============================");
    console.log(`Processing ${fieldName} update for task ${taskId}`);
    console.log("=============================");

    let formattedDate = "N/A";
    if (after) {
      const date = new Date(parseInt(after));
      formattedDate = date.toISOString().split("T")[0];
    }

    if (after) {
      const nextBusinessDayTimestamp = getNextBusinessDay(after);

      try {
        const options = {
          method: "PUT",
          url: `https://api.clickup.com/api/v2/task/${taskId}`,
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            Authorization: apiKey,
          },
          data: JSON.stringify({
            due_date: nextBusinessDayTimestamp,
          }),
        };

        await axios(options);
      } catch (apiError) {
        console.error("Error updating ClickUp due date:", apiError.message);
      }
    }

    let dueDateFormatted = "N/A";
    if (after) {
      const nextBusinessDay = getNextBusinessDay(after);
      const dueDateObj = new Date(nextBusinessDay);
      dueDateFormatted = dueDateObj.toISOString().split("T")[0];
    }

    return res.status(200).json({
      success: true,
      message: `Due date updated to ${dueDateFormatted}`,
      data: {
        taskId,
        fieldName,
        newValue: formattedDate,
        dueDate: dueDateFormatted,
      },
    });
  } catch (error) {
    console.error("Error handling estimated delivery date update:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
