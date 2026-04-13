import { useState } from "react";
import LoginForm from "./components/LoginForm";
import FeedbackForm from "./components/FeedbackForm";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("my_real_token")
  );
  const [token, setToken] = useState(
    localStorage.getItem("my_real_token") || ""
  );

  const handleLogin = (token: string) => {
    setToken(token);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("my_real_token");
    setToken("");
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans">
      {isLoggedIn ? (
        <div className="w-full max-w-md">
          {/* Top Bar */}
          <div className="bg-gray-900 text-white p-4 rounded-xl flex justify-between items-center shadow mb-6">
            <span className="text-green-400 font-semibold">
              ✓ Logged In
            </span>

            <div className="bg-white text-gray-700 text-xs p-2 rounded w-40 truncate">
              Token:
              <br />
              {token}
            </div>

            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded font-bold"
            >
              Logout
            </button>
          </div>

          {/* Protected Area */}
          <FeedbackForm />
        </div>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}