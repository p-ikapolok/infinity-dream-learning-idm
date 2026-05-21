import { useState } from "react";
import NotificationMenu from "./NotificationMenu";
import NineDotsMenu from "./NineDotsMenu";
import ProfileMenu from "./ProfileMenu";
import { useNavigate, Link } from "react-router";

export default function Header({ collapsed, setCollapsed }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
              {/* HEADER */}
        <header className="h-16 shrink-0 bg-white border-b px-6 flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-4">

            <div className="font-black text-lg text-red-600">infinity</div>

            {/* HAMBURGER TOGGLE */}
            <button
              onClick={() => setCollapsed(prev=> !prev)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="#111827"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            <span
  onClick={() => navigate("/RewardsPage")}
 className="bg-yellow-200 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
              4210 pts
            </span>

            {/* BELL */}
            <button
              onClick={() => setShowNotifications(!showNotifications)}
 className="p-2 rounded-md hover:bg-gray-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 8a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7z"
                  stroke="#111827"
                  strokeWidth="2"
                />
                <path
                  d="M13.73 21a2 2 0 01-3.46 0"
                  stroke="#111827"
                  strokeWidth="2"
                />
              </svg>
            </button>

            {/* 9 DOTS */}
            <button 
       onClick={() => setMenuOpen(!menuOpen)}
 className="p-2 rounded-md hover:bg-gray-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="5" cy="5" r="2" fill="#111827" />
                <circle cx="12" cy="5" r="2" fill="#111827" />
                <circle cx="19" cy="5" r="2" fill="#111827" />

                <circle cx="5" cy="12" r="2" fill="#111827" />
                <circle cx="12" cy="12" r="2" fill="#111827" />
                <circle cx="19" cy="12" r="2" fill="#111827" />

                <circle cx="5" cy="19" r="2" fill="#111827" />
                <circle cx="12" cy="19" r="2" fill="#111827" />
                <circle cx="19" cy="19" r="2" fill="#111827" />
              </svg>
            </button>

                      {/* Profile icon */}
          <div className="relative">
            <button
              onClick={() => {
  setProfileOpen(!profileOpen);
  setMenuOpen(false);
  setShowNotifications(false);
}}
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 focus:outline-none"
            >
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

              {profileOpen && (
  <div className="absolute right-0 mt-3 z-50">
    <ProfileMenu menuOpen={profileOpen} />
  </div>
)}
     </div>
          </div>
        </header>           
    </>
  );
}