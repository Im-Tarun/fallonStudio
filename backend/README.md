# Backend API Documentation

This document provides an overview of the API routes available in the backend of the FallonStudio project.

## Base URL
The base URL for all API routes is `/api`.

---

## Routes

### 1. **Get All Feedbacks**
- **Endpoint**: `/feedbacks`
- **Method**: `GET`
- **Description**: Fetches all feedback entries from the database.
- **Response**:
  - **Success (200)**:
    ```json
    {
      "success": true,
      "data": [
        {
          "_id": "feedback_id",
          "name": "User Name",
          "email": "user@example.com",
          "message": "Feedback message"
        }
      ]
    }
    ```
  - **Error (404)**:
    ```json
    {
      "success": false,
      "message": "feedbacks not found"
    }
    ```

---

### 2. **Submit Feedback**
- **Endpoint**: `/submit-feedbacks`
- **Method**: `POST`
- **Description**: Submits a new feedback entry to the database.
- **Request Body**:
  ```json
  {
    "name": "User Name",
    "email": "user@example.com",
    "message": "Feedback message"
  }
  ```
- **Response**:
  - **Success (201)**:
    ```json
    {
      "success": true,
      "data": {
        "_id": "feedback_id",
        "name": "User Name",
        "email": "user@example.com",
        "message": "Feedback message"
      }
    }
    ```
  - **Error (400)**:
    ```json
    {
      "success": false,
      "message": "Please enter all the details"
    }
    ```
  - **Error (500)**:
    ```json
    {
      "success": false,
      "message": "server error"
    }
    ```

---

## Notes
- Ensure the `.env` file is properly configured with the `MONGO_URI` and `PORT` values.
- For production, the frontend is served from the `frontend/dist` directory.

