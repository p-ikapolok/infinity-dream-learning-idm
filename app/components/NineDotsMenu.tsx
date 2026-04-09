import { useState } from "react";
import {
  AcademicCapIcon,
  UsersIcon,
  TrophyIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

export default function EhubHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow relative">
      <h1 className="text-xl font-bold text-gray-800">ALX eHub</h1>
      <div className="flex items-center space-x-6">
        <span className="text-gray-700 font-semibold">4210 points</span>

        {/* Notification bell */}
        <button className="text-gray-600 hover:text-gray-800 relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1" />
          </svg>
          <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* 9-dots menu */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 hover:text-gray-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="5" cy="5" r="1.5" />
              <circle cx="12" cy="5" r="1.5" />
              <circle cx="19" cy="5" r="1.5" />
              <circle cx="5" cy="12" r="1.5" />
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="19" cy="12" r="1.5" />
              <circle cx="5" cy="19" r="1.5" />
              <circle cx="12" cy="19" r="1.5" />
              <circle cx="19" cy="19" r="1.5" />
            </svg>
          </button>

          {/* Dropdown grid menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-6 grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
                  <AcademicCapIcon className="w-6 h-6 text-blue-600" />
                </div>
                <span className="mt-2 text-gray-700 font-medium">Learning</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
                  <UsersIcon className="w-6 h-6 text-blue-600" />
                </div>
                <span className="mt-2 text-gray-700 font-medium">Community</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
                  <TrophyIcon className="w-6 h-6 text-blue-600" />
                </div>
                <span className="mt-2 text-gray-700 font-medium">Rewards</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
                  <QuestionMarkCircleIcon className="w-6 h-6 text-blue-600" />
                </div>
                <span className="mt-2 text-gray-700 font-medium">Support</span>
              </div>
            </div>
          )}
        </div>

        {/* Profile image */}
        <img src="/images/profile.png" alt="Profile" className="w-10 h-10 rounded-full object-cover" />
      </div>
    </header>
  );
}