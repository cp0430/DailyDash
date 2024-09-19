# Todo Application

A full-stack Todo application built with **React** and **Vite** for the frontend and **Express**, **MongoDB**, **JWT**, and **Zod** for the backend. This application allows users to register, log in, and manage their todos.

## Project Structure

```
/todo/
 ├── /Frontend/
 │   ├── /public/                        # Public directory for static assets
 │   ├── /node_modules/                  # Node.js dependencies (autogenerated)
 │   ├── /src/                           # Source code for the frontend
 │   │   ├── /components/                # Reusable components for the frontend
 │   │   │   ├── Register.jsx            # Component for user registration
 │   │   │   ├── Login.jsx               # Component for user login
 │   │   │   ├── TodoList.jsx            # Component to display the list of todos
 │   │   │   └── CreateTodo.jsx          # Component to create a new todo
 │   │   ├── App.jsx                     # Main app component
 │   │   ├── App.css                     # Global styles for the app
 │   │   ├── index.css                   # Additional styles for the app
 │   │   ├── main.jsx                    # Main entry point for the React app
 │   │   └── index.js                    # Additional JavaScript entry (if needed)
 │   ├── package.json                    # Frontend package dependencies and scripts
 │   ├── vite.config.js                  # Vite configuration file
 │   └── .env                            # Contains the public IP address for the backend API
 │
 └── /Backend/
     ├── .env                            # Contains MONGODB_URI and Secret Key for backend configuration
     ├── auth.js                         # Authentication logic for backend
     ├── database.js                     # Database connection file (likely MongoDB)
     ├── server.js                       # Main entry point for the backend server
     ├── types.js                        # Type definitions or validations for the backend
```

## Tech Stack

### Frontend:
- **React**: For building user interfaces
- **Vite**: For fast development and optimized builds
- **CSS**: For styling the application

### Backend:
- **Express.js**: For handling server-side logic and API requests
- **MongoDB**: As the NoSQL database to store users and todos
- **JWT (JSON Web Token)**: For handling user authentication securely
- **Zod**: For schema validation and error handling
- **CORS**: For handling Cross-Origin Resource Sharing

## Features
- **User Registration**: New users can register with a username and password.
- **User Login**: Existing users can log in to access their todos.
- **JWT Authentication**: Secure authentication and authorization using tokens.
- **CRUD Operations**: Users can create, read, update, and delete their todos.
- **Responsive Design**: The UI is fully responsive and works on all devices.

## Installation

### Prerequisites:
- **Node.js**: Ensure that Node.js and npm are installed on your machine.
- **MongoDB**: Install MongoDB on your system or use a cloud-based MongoDB service.

### Step-by-Step Setup

1. **Clone the Repository**:
    ```
    git clone https://github.com/your-username/todo-app.git
    cd todo-app
    ```

2. **Set Up the Frontend**:
    - Navigate to the `Frontend` directory:
      ```bash
      cd Frontend
      ```
    - Install the necessary dependencies:
      ```bash
      npm install
      ```
    - Create a `.env` file inside the `Frontend` folder and specify the backend API's public IP address:
      ```
      VITE_URL=http://your-backend-ip:port
      ```
    - Run the development server:
      ```bash
      npm run dev
      ```

3. **Set Up the Backend**:
    - Navigate to the `Backend` directory:
      ```bash
      cd ../Backend
      ```
    - Install the necessary dependencies:
      ```bash
      npm install
      ```
    - Create a `.env` file inside the `Backend` folder and set the following environment variables:
      ```
      MONGODB_URI=mongodb://your-db-uri
      SECRET_KEY=your-secret-key

      ```
    - Start the backend server:
      ```bash
      node server.js
      ```

4. **Access the Application**:
    - Visit the frontend by going to `http://localhost:5173` (or whatever port Vite is using).
    - The frontend will communicate with the backend via the API URL set in the `.env` file.

## Environment Variables

### Frontend:
- **VITE_URL**: The public IP address or localhost for the backend API.

### Backend:
- **MONGODB_URI**: The URI for connecting to your MongoDB database.
- **SECRET_KEY**: A secret key for signing JWT tokens.


## Available Scripts

### Frontend:
- `npm run dev`: Starts the development server.

### Backend:
- `node server.js`: Starts the backend server.


## Contributing
Feel free to submit issues or contribute by making a pull request. For significant changes, please discuss them first to ensure they fit within the project's scope.