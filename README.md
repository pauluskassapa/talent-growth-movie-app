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
<img width="1512" height="865" alt="Screenshot 2025-07-31 at 15 38 25" src="https://github.com/user-attachments/assets/92c455da-7dec-433f-b93a-34009d44a9b6" />
<img width="1512" height="865" alt="Screenshot 2025-07-31 at 15 38 16" src="https://github.com/user-attachments/assets/021a658d-ac91-4f96-8dc8-50818a09fdf8" />


🔗 Live Demo: https://goodmovieapp.netlify.app


