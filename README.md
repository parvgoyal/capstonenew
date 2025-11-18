# Auth App - Production-Ready Authentication

A beautiful, secure authentication system with Login/Signup functionality built with React, Node.js, Express, JWT, and bcrypt.

## Features

- 🔐 Secure authentication with JWT tokens
- 🔒 Password hashing with bcrypt
- 🎨 Beautiful, handcrafted UI with smooth animations
- 📱 Fully responsive design
- ⚡ Fast and lightweight
- 🎯 Production-ready code structure
- ✨ Polished user experience

## Tech Stack

**Frontend:**
- React 18
- Custom CSS (no UI libraries)
- JWT token management

**Backend:**
- Node.js
- Express
- bcryptjs for password hashing
- jsonwebtoken for JWT authentication
- CORS enabled

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone or download this repository

2. Install backend dependencies:
```bash
npm install
```

3. Install frontend dependencies:
```bash
cd client
npm install
cd ..
```

4. Create environment file:
```bash
cp .env.example .env
```

5. Update the `.env` file with your own JWT secret:
```
PORT=5000
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
```

## Running Locally

### Development Mode (Recommended)

Run both frontend and backend concurrently:

```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:5000`
- React dev server on `http://localhost:3000`

The app will automatically open in your browser at `http://localhost:3000`

### Production Mode

1. Build the React app:
```bash
npm run build
```

2. Start the server:
```bash
npm start
```

## Usage

1. Open `http://localhost:3000` in your browser
2. Toggle between Login and Sign Up tabs
3. For Sign Up:
   - Enter your full name
   - Enter a valid email
   - Create a password (minimum 6 characters)
4. For Login:
   - Enter your registered email
   - Enter your password
5. After successful authentication, you'll see the dashboard
6. Click "Sign Out" to logout

## API Endpoints

### POST `/api/auth/signup`
Create a new user account
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### POST `/api/auth/login`
Login with existing credentials
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

### GET `/api/auth/verify`
Verify JWT token (requires Authorization header)
```
Authorization: Bearer <token>
```

## Security Features

- Passwords are hashed using bcrypt with salt rounds
- JWT tokens for stateless authentication
- Token expiration (7 days)
- Secure password validation (minimum 6 characters)
- CORS protection
- Input validation and sanitization

## Project Structure

```
auth-app/
├── client/                 # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── AuthForm.js
│   │   │   ├── AuthForm.css
│   │   │   ├── Dashboard.js
│   │   │   └── Dashboard.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── server/                 # Express backend
│   ├── routes/
│   │   └── auth.js
│   └── index.js
├── .env                    # Environment variables
├── .env.example           # Example environment file
├── package.json           # Backend dependencies
└── README.md
```

## Production Deployment

For production deployment:

1. Replace the in-memory user store with a real database (MongoDB, PostgreSQL, etc.)
2. Use a strong, random JWT secret
3. Enable HTTPS
4. Add rate limiting
5. Implement refresh tokens
6. Add email verification
7. Set up proper logging
8. Configure environment-specific settings

## Database

This app is connected to **MongoDB** for persistent data storage:
- User accounts are stored in MongoDB Atlas
- Data persists across server restarts
- Passwords are securely hashed with bcrypt before storage

## Notes

- The JWT secret in `.env` should be changed to a secure random string in production
- MongoDB connection string is stored in `.env` file
- Consider adding password reset, email verification, and 2FA for production use

## License

MIT
