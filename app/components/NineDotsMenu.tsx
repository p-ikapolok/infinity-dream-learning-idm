import { useState } from "react";
import {
  AcademicCapIcon,
  UsersIcon,
  TrophyIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

export default function EhubNineDotsMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* 9-dots button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-gray-600 hover:text-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
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
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-6 grid grid-cols-2 gap-6 z-50">
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
  );
}