🎬 CineVault Frontend
Frontend for CineVault, a fullstack application to manage movies and watchlists. Built with React + Vite.
🚀 Live Demo
App URL: https://cinevault-frontend.netlify.app
🛠️ Tech Stack

React + Vite — UI and build tool
React Router — client-side routing
Axios — HTTP requests
useContext — global state management
CSS Modules — component scoped styles

📁 Project Structure
cinevault-frontend/
├── public/
├── src/
│   ├── context/
│   │   └── AuthContext.jsx       # Global auth context
│   ├── layouts/
│   │   ├── MainLayout.jsx        # Main layout with navbar
│   │   └── MainLayout.module.css
│   ├── pages/
│   │   ├── HomePage.jsx          # Movie grid
│   │   ├── MovieDetailPage.jsx   # Movie detail
│   │   ├── LoginPage.jsx         # Login form
│   │   ├── RegisterPage.jsx      # Register form
│   │   ├── WatchlistPage.jsx     # User watchlist
│   │   └── *.module.css          # Page styles
│   ├── services/
│   │   ├── api.js                # Axios instance + interceptors
│   │   ├── authService.js        # Auth requests
│   │   ├── movieService.js       # Movie requests
│   │   └── watchlistService.js   # Watchlist requests
│   ├── App.jsx                   # Routes setup
│   ├── main.jsx                  # App entry point
│   └── index.css                 # Global styles
├── .env.example
├── .gitignore
└── package.json
⚙️ Installation & Setup
1. Clone the repository
bashgit clone https://github.com/IgnacioZambudio/cinevault-frontend.git
cd cinevault-frontend
2. Install dependencies
bashnpm install
3. Configure environment variables
Create a .env file in the root based on .env.example:
VITE_API_URL=https://cinevault-backend-gmzp.onrender.com/api
4. Run the app
bash# Development
npm run dev

# Production build
npm run build
The app will start at http://localhost:5173
📱 Pages
PageRouteDescriptionHome/Movie grid with all moviesMovie Detail/movies/:idMovie info + add to watchlistLogin/loginLogin formRegister/registerRegister formWatchlist/watchlistUser's personal watchlist
🔐 Authentication

JWT token stored in localStorage
Axios interceptor automatically adds token to all requests
Global AuthContext manages user state across the app
Protected features (watchlist, add to watchlist) only visible when logged in

🌍 Deployment
This app is deployed on Netlify: https://cinevault-frontend.netlify.app
Backend API: https://cinevault-backend-gmzp.onrender.com
👤 Author
Ignacio Zambudio

GitHub: @IgnacioZambudio
