# ChatApp

## Overview
ChatApp is a modern real-time chat application designed for seamless communication. Built using React, Node.js, Express, and Socket.IO, it enables users to send messages, share images, and view online/offline statuses. The application also supports user authentication and unseen message tracking.

## Features
- **Real-Time Messaging**: Instant communication powered by Socket.IO.
- **Online/Offline Status**: View the status of connected users.
- **Image Sharing**: Share images directly in chat.
- **Unseen Message Count**: Track unread messages for each user.
- **User Authentication**: Secure login and signup functionality.
- **Profile Management**: Update profile details and upload profile pictures.

## Technologies Used
### Frontend
- **React**: Component-based UI development.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Fast development environment for React.

### Backend
- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web framework for building REST APIs.
- **Socket.IO**: Real-time communication between clients and server.
- **MongoDB**: NoSQL database for storing user and message data.
- **Cloudinary**: Cloud service for image uploads.

## Installation

### Prerequisites
- **Node.js**: Ensure Node.js is installed on your system.
- **MongoDB**: Set up MongoDB locally or use a cloud service like MongoDB Atlas.
- **Cloudinary Account**: Create a Cloudinary account for image uploads.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ChatApp.git
   cd ChatApp
   ```

2. Install dependencies for the backend:
   ```bash
   cd server
   npm install
   ```

3. Install dependencies for the frontend:
   ```bash
   cd ../client
   npm install
   ```

4. Configure environment variables:
   - Backend (`server/.env`):
     ```env
     MONGODB_URI=<your-mongodb-uri>
     PORT=5000
     JWT_SECRET=<your-jwt-secret>
     CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
     CLOUDINARY_API_KEY=<your-cloudinary-api-key>
     CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
     ```
   - Frontend (`client/.env`):
     ```env
     VITE_BACKEND_URL=http://localhost:5000
     ```

5. Start the backend server:
   ```bash
   cd server
   npm run server
   ```

6. Start the frontend development server:
   ```bash
   cd ../client
   npm run dev
   ```

7. Open the application in your browser:
   - Frontend: `http://localhost:5173`
   - Backend: `http://localhost:5000`

## Folder Structure
```
ChatApp/
├── client/
│   ├── .env
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── README.md
│   ├── vite.config.js
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── ChatContext.jsx
│   ├── public/
│   │   ├── favicon.svg
│   │   ├── vite.svg
│   ├── src/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── assets/
│   │   ├── components/
│   │   ├── lib/
│   │   ├── pages/
├── server/
│   ├── .env
│   ├── package.json
│   ├── server.js
│   ├── controllers/
│   │   ├── messageController.js
│   │   ├── userController.js
│   ├── lib/
│   │   ├── cloudinary.js
│   │   ├── db.js
│   │   ├── utils.js
│   ├── middleware/
│   │   ├── auth.js
│   ├── models/
│   │   ├── Message.js
│   │   ├── User.js
│   ├── routes/
│   │   ├── messageRoutes.js
│   │   ├── userRoutes.js
```

## API Endpoints
### Authentication
- `POST /api/auth/signup`: Create a new user account.
- `POST /api/auth/login`: Log in to an existing account.
- `GET /api/auth/check`: Verify user authentication.
- `PUT /api/auth/update-profile`: Update user profile details.

### Messaging
- `GET /api/messages/users`: Get all users for the sidebar.
- `GET /api/messages/:id`: Get messages for a selected user.
- `PUT /api/messages/mark/:id`: Mark a message as seen.
- `POST /api/messages/send/:id`: Send a message to a selected user.

## Features in Detail
### Real-Time Messaging
Messages are sent and received instantly using Socket.IO, ensuring seamless communication.

### Online/Offline Status
Users can view the online/offline status of other users in real-time.

### Image Sharing
Images can be uploaded and shared in chat using Cloudinary.

### Unseen Message Count
Unseen messages are tracked and displayed next to each user in the sidebar.

### User Authentication
Secure authentication using JWT tokens ensures user data is protected.

### Profile Management
Users can update their profile details, including uploading a profile picture.

## License
This project is licensed under the MIT License.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

