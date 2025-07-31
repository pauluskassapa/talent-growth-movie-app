# 🎬 Movie Explorer

Movie Explorer is a React-based web application that allows users to explore popular movies from [The Movie Database (TMDB)](https://www.themoviedb.org). It includes features like search, infinite scroll, manual pagination, and a simple login flow.

---

## 🔥 Features

- 🔍 Search for movies by title  
- 🔄 Infinite scroll to auto-load more results  
- ⏪ Manual pagination (Previous / Next buttons)  
- 🔐 Simple authentication (mock login)  
- ⚠️ Error handling for API failures  
- 🖼️ Placeholder for missing images  
- 📱 Responsive grid layout  

---

## 🚀 Getting Started

Follow the steps below to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/movie-explorer.git
cd movie-explorer

## 2. Install dependecies
npm install
3. Set your TMDB API Key
Create a .env file in the root directory:

VITE_TMDB_API_KEY=your_tmdb_api_key_here
You can get your API key at https://www.themoviedb.org/settings/api
4. Run the development server
npm run dev
Open http://localhost:5173 in your browser.

🔐 Login Credentials

Mock login is enabled for demonstration purposes:

Username: admin  
Password: admin123
No backend is involved. Token is stored in localStorage for session persistence.
📝 Assumptions & Limitations

✅ Assumptions
Authentication is handled locally (mock login).
Public movie data is fetched directly from TMDB's API.
UI is designed to be mobile-friendly.
⚠️ Limitations
No real user authentication (login is hardcoded).
No backend / database support.
No unit tests or e2e testing yet.
📸 Evidence

✅ Screenshots
Place your screenshots in a /screenshots folder and attach here:

Home Page	Movie Cards
🔗 Live Demo (Optional)
If deployed, link it here:

🌐 Live Demo: https://movie-explorer-demo.vercel.app

You get bonus points for publishing the project live and including the link.


