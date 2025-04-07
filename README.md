# FallonStudio - Full Stack MERN Application

FallonStudio is a full-stack MERN (MongoDB, Express, React, Node.js) application designed to collect and display user feedback. The project includes a backend API for managing feedback and a frontend interface for submitting and viewing feedback.

---

## Features

- Submit feedback with name, email, and message.
- View all submitted feedback (admin mode).
- Responsive design using TailwindCSS.
- Backend API with MongoDB for data storage.
- Proxy setup for seamless frontend-backend communication.

---

## Technologies Used

- **Frontend**: React, Vite, TailwindCSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Other Tools**: React Hook Form, ESLint, dotenv, cors

---

## Project Structure

```
fallonStudio/
├── backend/
│   ├── config/          # Database connection
│   ├── controllers/     # API controllers
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   ├── server.js        # Main server file
│   └── .env             # Environment variables
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── App.jsx      # Main App component
│   │   ├── main.jsx     # Entry point
│   │   └── index.css    # Global styles
│   ├── vite.config.js   # Vite configuration
│   └── package.json     # Frontend dependencies
├── .gitignore           # Ignored files
├── README.md            # Project documentation
└── package.json         # Root dependencies
```

---

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/fallonStudio.git
   cd fallonStudio
   ```

2. Install dependencies for both backend and frontend:
   ```bash
   npm install
   npm install --prefix frontend
   ```

3. Configure environment variables:
   - Create a `.env` file in the `backend` directory.
   - Add the following variables:
     ```
     MONGO_URI=<your-mongodb-uri>
     PORT=5000
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Access the application:
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000/api`

---

## Available Scripts

### Root Scripts

- `npm run dev`: Starts the backend and frontend in development mode.
- `npm run build`: Builds the frontend for production.
- `npm run start`: Starts the backend in production mode.

### Frontend Scripts

- `npm run dev`: Starts the frontend development server.
- `npm run build`: Builds the frontend for production.
- `npm run preview`: Previews the production build.

---

## API Documentation

Refer to the [Backend API Documentation](./backend/README.md) for detailed information about the available API routes.

---

## Environment Variables

The following environment variables are required:

- `MONGO_URI`: MongoDB connection string.
- `PORT`: Port for the backend server (default: 5000).

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.
