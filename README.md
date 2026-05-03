# 🎬 MovieVerse – Full Stack Movie Search Application

## 📌 Project Overview

MovieVerse is a full-stack web application that allows users to search for movies, view trending movies, and filter results by year. The application fetches real-time movie data using the OMDb API and displays it in a clean, user-friendly interface.

---

## 🚀 Features

* 🔍 Search movies by name
* 🎞️ Display trending movies on load
* 📅 Filter movies by year
* 🌐 Real-time data using OMDb API
* ⚡ Fast and responsive UI
* 🔐 Backend integration to secure API key

---

## 🧩 Tech Stack

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### API

* OMDb API (Open Movie Database)

---

## 📁 Project Structure

```
movieverse/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone / Download Project

```bash
git clone <your-repo-link>
cd movieverse
```

---

### 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install express cors dotenv
```

---

### 3️⃣ Configure Environment Variables

Create a `.env` file inside the backend folder:

```
API_KEY=your_omdb_api_key
PORT=5000
```

---

### 4️⃣ Run Backend Server

```bash
node server.js
```

Server will run on:

```
http://localhost:5000
```

---

### 5️⃣ Run Frontend

Open using Live Server or browser:

```
frontend/index.html
```

---

## 🔄 Application Flow

```
Frontend (UI)
     ↓
Fetch Request
     ↓
Backend (Node.js API)
     ↓
OMDb API
     ↓
Response → Frontend → Display Movies
```

---

## 🧠 Key Concepts Used

* REST API Integration
* Asynchronous JavaScript (fetch / async-await)
* DOM Manipulation
* Client-Server Architecture
* Environment Variables (dotenv)

---

## 🎯 Future Enhancements

* ⭐ Movie details popup
* ❤️ Add to favorites
* 🔐 User authentication
* 📊 Advanced filters

---

## 🧑‍💻 Author

Mohit Choudhary

---

## 📜 License

This project is for educational purposes.
