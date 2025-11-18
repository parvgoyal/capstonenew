# Deploy NutriMix to Render

## Prerequisites
1. GitHub account
2. Render account (free at https://render.com)
3. MongoDB Atlas connection string

## Step-by-Step Deployment

### 1. Push to GitHub

```bash
# Create a new repository on GitHub (https://github.com/new)
# Name it: nutrimix-auth
# Don't initialize with README

# Then run these commands:
git remote add origin https://github.com/YOUR_USERNAME/nutrimix-auth.git
git branch -M main
git push -u origin main
```

### 2. Deploy Backend on Render

1. Go to https://dashboard.render.com
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name:** nutrimix-backend
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `node server/index.js`
   - **Instance Type:** Free

5. Add Environment Variables:
   - `PORT` = `8080`
   - `NODE_ENV` = `production`
   - `JWT_SECRET` = (generate a random string)
   - `MONGO_URI` = (your MongoDB Atlas connection string)

6. Click "Create Web Service"

### 3. Deploy Frontend on Render

1. Click "New +" → "Static Site"
2. Connect your GitHub repository
3. Configure:
   - **Name:** nutrimix-frontend
   - **Build Command:** `cd client && npm install && npm run build`
   - **Publish Directory:** `client/build`

4. Add Environment Variable:
   - `REACT_APP_API_URL` = (your backend URL from step 2)

5. Click "Create Static Site"

### 4. Update Frontend to Use Backend URL

Update `client/src/components/AuthForm.js` to use the environment variable:

```javascript
const API_URL = process.env.REACT_APP_API_URL || '';
const endpoint = `${API_URL}/api/auth/${isLogin ? 'login' : 'signup'}`;
```

### Alternative: Deploy as Single Service

You can also deploy both frontend and backend together:

1. Update `server/index.js` to serve the React build
2. Deploy as one web service
3. Build command: `npm install && cd client && npm install && npm run build && cd ..`
4. Start command: `node server/index.js`

## Environment Variables for Render

```
PORT=8080
NODE_ENV=production
JWT_SECRET=your-super-secret-random-string-here
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/nutrimix?retryWrites=true&w=majority
```

## After Deployment

Your app will be live at:
- Backend: `https://nutrimix-backend.onrender.com`
- Frontend: `https://nutrimix-frontend.onrender.com`

**Note:** Free tier on Render spins down after inactivity. First request may take 30-60 seconds.

## Troubleshooting

- Check logs in Render dashboard
- Ensure MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
- Verify all environment variables are set correctly
- Make sure CORS is configured for your frontend URL
