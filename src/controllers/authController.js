import axios from "axios";

/**
 * Handles authentication token requests by forwarding credentials to the external auth service
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
export async function getAuthToken(req, res) {
  try {
    const { apiKey, userID, employeeID, name } = req.body;

    if (!apiKey || !userID || !employeeID || !name) {
      return res.status(400).json({
        error: "Missing required fields",
        required: ["apiKey", "userID", "employeeID", "name"],
      });
    }

    if (typeof userID !== "number" || typeof employeeID !== "number") {
      return res.status(400).json({
        error: "Invalid field types",
        details: "userID and employeeID must be numbers",
      });
    }

    const response = await axios.post(
      "https://danella-x.com/api/auth/token",
      {
        apiKey,
        userID,
        employeeID,
        name,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 10000,
      }
    );

    return res.status(200).json({
      access_token: response.data.access_token,
      token_type: response.data.token_type,
      expires_in: response.data.expires_in,
    });
  } catch (error) {
    console.error("Error in getAuthToken:", error.message);

    if (error.response) {
      return res.status(error.response.status).json({
        error: "Authentication service error",
        message: error.response.data?.message || "Failed to obtain token",
        status: error.response.status,
      });
    }

    if (error.code === "ECONNABORTED") {
      return res.status(504).json({
        error: "Request timeout",
        message: "Authentication service took too long to respond",
      });
    }

    if (error.code === "ENOTFOUND" || error.code === "ECONNREFUSED") {
      return res.status(503).json({
        error: "Service unavailable",
        message: "Unable to reach authentication service",
      });
    }

    return res.status(500).json({
      error: "Internal server error",
      message: "An unexpected error occurred while processing your request",
    });
  }
}
