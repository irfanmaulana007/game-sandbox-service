# Postman Collection Setup Guide

## 📥 Importing the Collection

1. **Open Postman**
2. **Click "Import"** button
3. **Drag and drop** the `Game-Sandbox-API.postman_collection.json` file
4. **Import the collection**

## 🌍 Setting Up Environments

### Import Environment Files

1. **Click "Import"** in Postman
2. **Import each environment file**:
   - `Game-Sandbox-Local.postman_environment.json`
   - `Game-Sandbox-Staging.postman_environment.json`
   - `Game-Sandbox-Production.postman_environment.json`

### Select Environment

1. **Click the environment dropdown** (top-right corner)
2. **Select your desired environment** (Local, Staging, or Production)
3. **Verify BASE_URL is set correctly**

## 🔐 Authentication Setup

### Automatic Token Handling

The collection includes **automatic token management**:

1. **Login first** using the "Login User" endpoint
2. **AUTH_TOKEN is automatically set** in your environment
3. **All authenticated requests** will use this token automatically
4. **No manual token copying** required!

### Manual Token Setup (if needed)

1. **Run the "Login User" request**
2. **Copy the token** from the response
3. **Set AUTH_TOKEN** in your environment variables
4. **Or let the automatic script handle it**

## 🚀 Getting Started

### 1. Health Check
- Start with "Health Check" to verify server is running

### 2. User Registration
- Use "Register User" to create a test account

### 3. User Login
- Use "Login User" with your credentials
- Token is automatically saved

### 4. Create Character
- Use "Create Character" to make your first character
- Note the character ID for other requests

### 5. Explore Other Endpoints
- All endpoints are organized by category
- Use the character ID from step 4 in other requests

## 🔧 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `BASE_URL` | API base URL | `http://localhost:8000` |
| `AUTH_TOKEN` | JWT authentication token | `eyJhbGciOiJIUzI1NiIs...` |

## 📝 Request Variables

Some requests use **dynamic variables** that you need to set:

| Variable | Description | How to Set |
|----------|-------------|-------------|
| `{{character_id}}` | Character UUID | Copy from character creation response |
| `{{battle_id}}` | Battle UUID | Copy from battle start response |

## 🎯 Tips for Testing

1. **Start with unauthenticated endpoints** (Health, Equipment, Monsters, Maps, Experience)
2. **Create a user account** and login to get authentication
3. **Create a character** to test character-related endpoints
4. **Use the automatic token handling** - no need to manually copy tokens
5. **Check response status codes** and error messages
6. **Use the environment variables** for different deployment stages

## 🚨 Troubleshooting

### Common Issues

1. **"AUTH_TOKEN not set" warning**
   - Make sure you've logged in first
   - Check that the login request succeeded

2. **"401 Unauthorized" errors**
   - Verify your AUTH_TOKEN is set
   - Try logging in again

3. **"404 Not Found" errors**
   - Check that your BASE_URL is correct
   - Verify the server is running

4. **"500 Internal Server Error"**
   - Check server logs
   - Verify database connection

### Environment Issues

1. **Variables not updating**
   - Refresh the environment
   - Check for syntax errors in environment values

2. **Wrong BASE_URL**
   - Verify your server is running on the expected port
   - Check firewall and network settings

## 📚 Additional Resources

- **API Documentation**: Check the README.md in the project
- **Prisma Studio**: Run `npm run db:studio` to view database
- **Server Logs**: Check console output for detailed error information

---

**Happy Testing! 🧪**
