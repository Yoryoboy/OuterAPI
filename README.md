# OuterAPI

## Description

OuterAPI is an internal API consumed by the company Bl Technology (https://www.bl-technology.com/) developed by Jorge Diaz for automating tasks in ClickUp. This API receives and processes webhooks from ClickUp, enabling the integration and management of automated tasks specific to the company's projects.

## Technologies Used

- Node.js
- Express.js
- Axios
- ClickUp API
- Render

## Key Features

- Receiving and processing webhooks from ClickUp
- Middleware for data validation and event routing
- Integration with the ClickUp API for task management
- Automated handling of task status changes
- Automated due date updates based on estimated delivery dates
- Custom field updates and validations
- Email notifications for specific events
- Deployment on Render

## Architecture

OuterAPI follows a modular architecture with:

- **Event Router System**: Routes different webhook event types to specific handlers
- **Middleware Chains**: Customizable middleware chains for each event type
- **Update Type Identification**: Analyzes webhook payloads to determine specific update types
- **Service-Controller Pattern**: Separation of business logic and request handling

### Detailed Architecture

The application implements a sophisticated webhook handling system that efficiently processes ClickUp events:

#### Single Webhook Subscription with Granular Handling
- Rather than subscribing to multiple specific webhook events, the system subscribes only to the broader `taskUpdated` event
- Uses middleware to analyze and route different types of updates to specialized handlers

#### Dynamic Event Routing System
- The `identifyUpdateType` middleware examines webhook payloads to determine specific update types
- For status changes: sets `req.updateType = "taskStatusUpdated"`
- For custom fields: sets `req.updateType = "customField_FIELD_NAME"`

#### Request Flow
```
Webhook → identifyUpdateType → eventRouter → executeEventHandler → Specific Handler
```

#### Key Benefits
- **Scalability**: Easily add new event handlers without modifying routes
- **Maintainability**: Clean separation of concerns with dedicated handlers for each event type
- **Flexibility**: Custom middleware chains for each event type

For a complete technical explanation of the architecture, including code examples and detailed diagrams, refer to the documentation at `doc/ClickUp Webhook Event Handling Architecture.md`.

## Installation

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which includes [npm](http://npmjs.com)) installed on your computer.

```bash
# Clone the repository
git clone https://github.com/yourusername/outerapi.git

# Navigate to the project directory
cd outerapi

# Install dependencies
npm install

# Create a .env file and add the necessary environment variables
PORT=3000
API_KEY=your_clickup_api_key
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
DEFAULT_USER=default_user_email

# Start the application
npm run dev
```

## Usage

### Endpoints

#### POST /webhook/king/add_to_contractor_list

- Description: Endpoint to add a task to a contractor's list based on the update of a custom field.
- Request Example:

```bash
{
  "task_id": "86b16vm66",
  "history_items": [
    {
      "user": {
        "username": "Jorge Diaz"
      },
      "before": "32beab3b-1daf-41cc-aa0f-d9d95eba1e17",
      "after": "35acd46d-4e7f-4050-bd47-5bbf2a6b9b03",
      "custom_field": {
        "name": "CONTRACTOR_KING"
      }
    }
  ]
}
```

#### POST /webhook/cci/round_miles

- Description: Endpoint to round miles in a custom field.
- Validates that the task contains the necessary custom fields.

#### POST /webhook/cci/add_qc_points

- Description: Endpoint to add QC points based on design points.

#### POST /webhook/cci/validate_sent_task

- Description: Validates sent tasks and sends email notifications if codes are missing.

#### POST /webhook/cci/webhook

- Description: Main webhook endpoint that handles various ClickUp events.
- Uses middleware to identify update types and route to appropriate handlers.
- Currently handles:
  - `taskStatusUpdated`: Processes status changes with validation
  - `customField_ESTIMATED_DELIVERY_DATE`: Updates task due dates to the next business day after the estimated delivery date

## Key Implemented Features

### Status Change Handling

- Detects specific status transitions (e.g., to "asbuilt ready for qc")
- Performs automated actions based on status changes
- Updates custom date fields when specific statuses are reached

### Estimated Delivery Date Automation

- Automatically updates a task's due date to the next business day after the estimated delivery date is changed
- Skips Sundays when calculating the next business day
- Only applies to tasks from specific lists (e.g., BAU list)

### Event Routing System

- Scalable architecture for handling multiple event types
- Each event type has its own middleware chain and handler
- Identifies specific update types within broader webhook events

## Contributing

For contributing to this project, please contact Jorge Diaz.

## License

This project is proprietary and owned by Bl Technology.
