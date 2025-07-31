# 🎬 Movie Explorer

Movie Explorer is a React-based web application that allows users to explore popular movies from [The Movie Database (TMDB)](https://www.themoviedb.org). It includes features like search, infinite scroll, manual pagination, and a simple login flow.

---

## 🔥 Features

- 🔍 Search for movies by title  
- 🔄 Infinite scroll to auto-load more results  
- 🔐 Simple authentication (mock login)  
- 📝 Registration page (mock)  
- 🔓 Login and Logout buttons  
- 🌙 Toggle dark mode (light/dark theme switch)  
- ⚠️ Error handling for API failures  
- 🖼️ Placeholder for missing images  
- 📱 Responsive grid layout

---

## 🚀 Getting Started

Follow the steps below to run the project locally.

### 1. Clone the repository
git clone https://github.com/your-username/movie-explorer.git
cd movie-explorer

## 2. Install dependecies
npm install
## 3. Set your TMDB API Key
Create a .env file in the root directory:
VITE_TMDB_API_KEY=your_tmdb_api_key_here
You can get your API key at https://www.themoviedb.org/settings/api

## 4. Run the development server
npm run dev
Open http://localhost:5173 in your browser.

## 5.🔐 Login Credentials

Mock login is enabled for demonstration purposes:
Username: admin  
Password: admin123
No backend is involved. Token is stored in localStorage for session persistence.

## Assumptions & Limitations
✅ Assumptions
Authentication is handled locally (mock login).
Public movie data is fetched directly from TMDB's API.
UI is designed to be mobile-friendly.
⚠️ Limitations
No real user authentication (login is hardcoded).
No backend / database support.
No unit tests or e2e testing yet.

### 📸 Evidence
Screenshots
<img width="1512" height="857" alt="Screenshot 2025-07-31 at 12 45 01" src="https://github.com/user-attachments/assets/0c5753ea-8bae-41f8-bb6e-27f2004418a6" />
<img width="1512" height="856" alt="Screenshot 2025-07-31 at 12 44 48" src="https://github.com/user-attachments/assets/0845148c-e4f8-40b8-adb0-3a0838b42bc9" />
<img width="1512" height="856" alt="Screenshot 2025-07-31 at 12 44 36" src="https://github.com/user-attachments/assets/4ad4bf6c-3e49-40a8-b9ed-a0f75bf3b38b" />



🔗 Live Demo: https://goodmovieapp.netlify.app


