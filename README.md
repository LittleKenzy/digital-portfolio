# 🚀 Kenzy Digital Portfolio

A high-performance, interactive, and "Agentic" digital portfolio built with **Vanilla JavaScript** and **TailwindCSS**. This project showcases modern web development practices, featuring real-time messaging, a dynamic admin dashboard, and seamless GitHub integration.

![Portfolio Preview](https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop)

## ✨ Key Features

- **🎨 Dynamic & Reactive UI**: Built with a custom Vanilla JS component architecture (no frameworks like React/Vue), offering blazing fast performance.
- **🔐 User Authentication**: Complete Login/Register system powered by **Firebase Auth**.
- **📨 Real-time Inbox System**: 
  - Visitors can send messages via the Contact form.
  - **Admin Dashboard** to read, reply, and delete messages.
  - **Two-way Communication**: Users receive Admin replies instantly with real-time "Red Dot" notifications.
  - **Optimistic UI & Offline Fallback**: Messages are saved locally if the network is unstable, ensuring zero data loss.
- **🐙 GitHub Integration**: Automatically fetches and displays your public repositories on the Projects page with smart image mapping and fallback support.
- **💬 Public Chat Room**: A real-time community chat feature for logged-in users.
- **✨ Enhanced Aesthetics**:
  - **Dark "Glassmorphism" Design**: Modern frosted glass effects.
  - **GSAP Animations**: Smooth page transitions and element reveals.
  - **Custom Cursor**: Interactive magnetic cursor effects.

## 🛠️ Tech Stack

- **Frontend Core**: HTML5, Modern ES6+ JavaScript.
- **Styling**: [TailwindCSS](https://tailwindcss.com/) (v3) via CLI.
- **Animations**: [GSAP (GreenSock)](https://greensock.com/).
- **Backend / Database**: [Firebase](https://firebase.google.com/) (Firestore & Authentication).
- **Icons**: [Phosphor Icons](https://phosphoricons.com/).
- **Build Tool**: [Vite](https://vitejs.dev/) (for fast HMR and bundling).

## 🚀 Getting Started

Follow these steps to set up the project locally.

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/kenzy-digital-portfolio.git
cd kenzy-digital-portfolio
```

### 2. Install Dependencies
Make sure you have [Node.js](https://nodejs.org/) installed.
```bash
npm install
```

### 3. Firebase Configuration
1. Create a project at [Firebase Console](https://console.firebase.google.com/).
2. Enable **Authentication** (Email/Password).
3. Enable **Cloud Firestore** and set up security rules.
4. Update `src/config/firebase.js` with your config keys:

```javascript
// src/config/firebase.js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "...",
  appId: "..."
};
```

### 4. Run Development Server
Start the local server with hot reloading:
```bash
npm run dev
```
Open `http://localhost:5173` (or the port shown) in your browser.

## 📂 Project Structure

```
kenzy-digital-portfolio/
├── index.html              # Entry point
├── src/
│   ├── main.js             # Main application logic & Router
│   ├── config/             # Firebase configuration
│   ├── components/         # Reusable UI components (Cursor, etc.)
│   ├── layouts/            # Layout wrappers (Sidebar, MainLayout)
│   ├── pages/              # Page views (Home, About, Projects, Inbox...)
│   │   ├── admin/          # Admin-specific pages
│   │   ├── auth/           # Login/Register pages
│   └── services/           # Business logic (Inbox, Auth, Data, Chat)
├── styles/                 # Tailwind input CSS
├── tailwind.config.js      # Tailwind configuration
└── package.json            # Project dependencies
```

## 🛡️ Admin Access
To access the Admin Dashboard features (Inbox, etc.):
1. Register a new account.
2. Manually update the user's `role` to `'admin'` in your Firebase Firestore `users` collection.
3. Log out and log back in to see the Admin Sidebar options.

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

---
*Built with ❤️ by LittleKenzy*
