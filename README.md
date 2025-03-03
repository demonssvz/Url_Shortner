# 🔗 URL Shortener - MERN Stack

This is a **MERN-based URL Shortener** that allows users to shorten long URLs and retrieve the shortened version.

## 🚀 Live Demo

- **Frontend**: [https://url-shortner-frontend-henna.vercel.app/](https://url-shortner-frontend-henna.vercel.app/)
- **Backend**: [https://url-shortner-api-rho.vercel.app/](https://url-shortner-api-rho.vercel.app/)

---

## 📌 Features

✅ Shorten long URLs\
✅ Retrieve shortened URLs\
✅ Built using **MERN Stack (MongoDB, Express, React, Node.js)**\
✅ Fully deployed on **Vercel**

---

## 🛠️ Tech Stack Used

- **Frontend**: React + Vite
- **Backend**: Node.js, Express, TypeScript
- **Database**: MongoDB (via MongoDB Atlas)
- **Deployment**: Vercel (for frontend & backend)

---

## 📂 Project Structure

```
url-shortener/
│── client-app/               # React (Frontend)
│   ├── src/                  # React Components
│   ├── public/               # Public Assets
│   ├── vite.config.ts        # Vite Configuration
│   ├── package.json          # Dependencies
│── server-app/               # Express + TypeScript (Backend)
│   ├── src/                  # API Logic
│   ├── config/               # Database Configuration
│   ├── routes/               # API Endpoints
│   ├── models/               # MongoDB Models
│   ├── package.json          # Backend Dependencies
│   ├── tsconfig.json         # TypeScript Configuration
│   ├── vercel.json           # Vercel Config
└── README.md                 # Project Documentation
```

---

## 🛠️ Installation & Setup

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/demonssvz/Url_Shortener.git
cd Url_Shortener
```

---

## 🌍 Backend Setup (Express + TypeScript)

### **2️⃣ Navigate to Backend Folder**

```sh
cd server-app
```

### **3️⃣ Install Dependencies**

```sh
npm install
```

### **4️⃣ Set Up MongoDB Atlas (Database)**

Create a **MongoDB Atlas account** and get your connection string.\
In **Vercel Dashboard → Environment Variables**, set:

```
MONGO_URI = your-mongodb-connection-string
```

### **5️⃣ Run Backend Locally**

```sh
npm run dev
```

Backend will start at **`http://localhost:5001`**.

### **6️⃣ Deploy Backend on Vercel**

```sh
vercel --prod
```

---

## 🎨 Frontend Setup (React + Vite)

### **7️⃣ Navigate to Frontend Folder**

```sh
cd ../client-app/url-short
```

### **8️⃣ Install Dependencies**

```sh
npm install
```

### **9️⃣ Set API Base URL**

Update `src/constants.ts`:

```ts
export const API_BASE_URL = "https://url-shortner-api.vercel.app/api";
```

### **🔟 Run Frontend Locally**

```sh
npm run dev
```

Frontend will start at **`http://localhost:3000`**.

### **1️⃣1️⃣ Deploy Frontend on Vercel**

```sh
vercel --prod
```

---

## 🔥 Additional Features (Fun Challenges )

🚀 Add User Authentication (JWT)\
🚀 Track Number of Clicks on Shortened URLs\
🚀 Custom URL Shortening Feature

---

## 💡 **Troubleshooting & Common Issues**

### **❌ CORS Issue?**

If you get:

```
No 'Access-Control-Allow-Origin' header is present
```

✅ Ensure your **backend CORS settings** are correct:

```ts
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://url-shortner-frontend.vercel.app");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    
    if (req.method === "OPTIONS") {
        return res.sendStatus(200);
    }
    next();
});
```

✅ **Redeploy backend**:

```sh
vercel --prod
```

---

## ⭐️ Show Your Support

If you like this project, give it a **⭐️ on GitHub**!\
Want to contribute? **Feel free to submit a PR!** 🚀

