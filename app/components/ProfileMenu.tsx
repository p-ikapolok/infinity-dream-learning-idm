import React from "react";
import { useNavigate } from "react-router-dom";

interface ProfileMenuProps {
  menuOpen: boolean;
}

export default function ProfileMenu({ menuOpen }: ProfileMenuProps) {
  const navigate = useNavigate();

  if (!menuOpen) return null;

  return (
    <div className="w-64 bg-white shadow-lg rounded-lg p-4 space-y-4">

      {/* Dark theme toggle */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z"/>
          </svg>
          <span className="text-gray-700">View dark theme</span>
        </div>

        <div className="w-10 h-5 bg-gray-300 rounded-full relative">
          <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full" />
        </div>
      </div>

      <button onClick={() => navigate("/settings-personal-information")} className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-blue-600">
        <span>View profile</span>
      </button>

      <button onClick={() => navigate("/account-payments")} className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-blue-600">
        <span>Settings</span>
      </button>

      <button onClick={() => navigate("/support")} className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-blue-600">
        <span>Support</span>
      </button>

      <button onClick={() => navigate("/ehub-login")} className="flex items-center space-x-2 w-full text-left text-gray-700 hover:text-blue-600">
        <span>Log out</span>
      </button>

    </div>
  );
}