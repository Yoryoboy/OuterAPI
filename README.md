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

- Receiving and processing webhooks from ClickUp.
- Middleware for data validation.
- Integration with the ClickUp API for task management.
- Deployment on Render.

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

# Start the application
npm run dev
```
## Usage
### Endpoints
#### POST /webhook/king/freedom/add_to_contractor_list
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