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

                      {/* Points */}
          <span
  onClick={() => navigate("/RewardsPage")}
  className="text-gray-700 font-semibold cursor-pointer hover:text-blue-600"
>
  4210 points
</span>

                      {/* Notification bell */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="text-gray-600 hover:text-gray-800 relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1" />
              </svg>

              <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {showNotifications && (
  <div className="absolute right-0 mt-3 z-50">
    <NotificationMenu />
  </div>
)}
          </div>

                      {/* 9-dots menu */}
          <div className="relative">
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

            {menuOpen && (
  <div className="absolute right-0 mt-3 z-50">
    <NineDotsMenu />
  </div>
)}
          </div>

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