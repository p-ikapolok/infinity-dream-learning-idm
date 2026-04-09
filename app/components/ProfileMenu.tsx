import { useState } from "react";

export default function ProfileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className="relative">
      {/* Profile icon button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 focus:outline-none"
      >
        {/* Round SVG profile icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-700"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20a8 8 0 0116 0" />
        </svg>
      </button>

      {/* Dropdown menu */}
      {menuOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 space-y-4 z-50">

          {/* Dark theme toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z"/>
              </svg>
              <span className="text-gray-700">View dark theme</span>
            </div>

            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={darkTheme}
                onChange={() => setDarkTheme(!darkTheme)}
                className="sr-only"
              />
              <div className="w-10 h-5 bg-gray-300 rounded-full relative">
                <div
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                    darkTheme ? "translate-x-5" : ""
                  }`}
                />
              </div>
            </label>
          </div>

          {/* View profile */}
          <button className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-blue-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 20a8 8 0 0116 0"/>
            </svg>
            <span>View profile</span>
          </button>

          {/* Settings */}
          <button className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-blue-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.7 1.7 0 000-6l2.1-1.6-2-3.4-2.5 1a6.9 6.9 0 00-3-1.7L13.5 1h-3l-.5 2.3a6.9 6.9 0 00-3 1.7l-2.5-1-2 3.4L4.6 9a1.7 1.7 0 000 6l-2.1 1.6 2 3.4 2.5-1a6.9 6.9 0 003 1.7l.5 2.3h3l.5-2.3a6.9 6.9 0 003-1.7l2.5 1 2-3.4L19.4 15z"/>
            </svg>
            <span>Settings</span>
          </button>

          {/* Support */}
          <button className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-blue-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 115.82 1c0 2-3 2-3 4"/>
              <path d="M12 17h.01"/>
            </svg>
            <span>Support</span>
          </button>

          {/* Log out */}
          <button className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-blue-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
              <path d="M16 17l5-5-5-5"/>
              <path d="M21 12H9"/>
            </svg>
            <span>Log out</span>
          </button>

        </div>
      )}
    </div>
  );
}