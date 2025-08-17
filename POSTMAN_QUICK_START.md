# 🚀 Postman Collection - Quick Start

## ⚡ Super Fast Setup (2 minutes!)

### 1. Import Collection
- Open Postman
- Click **Import** → Drag `Game-Sandbox-API.postman_collection.json`

### 2. Import Environment
- Click **Import** → Drag `Game-Sandbox-Local.postman_environment.json`
- Select **"Game-Sandbox - Local"** from environment dropdown

### 3. Test Health Check
- Run **"Health Check"** request
- Should return `200 OK` with server status

### 4. Create User & Login
- Run **"Register User"** with your details
- Run **"Login User"** with same credentials
- **🎉 AUTH_TOKEN is automatically set!**

### 5. Start Testing!
- All authenticated endpoints now work automatically
- Create characters, start battles, manage inventory

---

## 🔑 Key Features

✅ **Automatic Token Management** - No manual copying!  
✅ **3 Environments** - Local, Staging, Production  
✅ **All API Endpoints** - Organized by category  
✅ **Example Data** - Ready-to-use request bodies  
✅ **Smart Scripts** - Pre/post-request automation  

---

## 📱 What You Get

- **Health Check** - Server status
- **Authentication** - Register, Login, Logout
- **Characters** - Create, manage, level up
- **Equipment** - Browse weapons, armor, accessories
- **Monsters** - View enemies and stats
- **Maps** - Explore game areas
- **Battle** - Combat system testing
- **Inventory** - Item management

---

## 🎯 Pro Tips

1. **Start with unauthenticated endpoints** (Health, Equipment, Monsters)
2. **Login once** - token handles everything else
3. **Use character ID** from creation in other requests
4. **Check console** for automatic token updates
5. **Switch environments** for different deployment stages

---

## 🚨 Need Help?

- **Full Setup Guide**: See `POSTMAN_SETUP.md`
- **API Documentation**: Check `README.md`
- **Server Issues**: Run `npm run dev` and check logs
- **Database**: Use `npm run db:studio` to view data

---

**Ready to test your Game Sandbox API! 🎮**
