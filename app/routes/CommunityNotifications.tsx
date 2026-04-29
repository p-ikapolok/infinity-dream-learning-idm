import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NotificationMenu from "../components/NotificationMenu";
import NineDotsMenu from "../components/NineDotsMenu";
import ProfileMenu from "../components/ProfileMenu";
import SearchModal from "../components/SearchModal";

export default function NotificationsPage() {
  const navigate = useNavigate();

  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const [activeTab, setActiveTab] = useState("Inbox");

  const tabs = ["Inbox", "Mentions", "Following", "All", "Archived"];

  /* NAV ITEM */
  const NavItem = ({ icon, text, children, onClick }) => (
    <div
      onClick={onClick}
      className="flex items-center justify-between group cursor-pointer"
    >
      <div className="flex items-center gap-3 group-hover:text-black">
        <span className="w-5 h-5">{icon}</span>
        <span>{text}</span>
      </div>
      {children}
    </div>
  );

  /* ICONS */
  const SearchIcon = () => (
    <svg className="w-5 h-5 stroke-[1.6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="7" />
      <line x1="20" y1="20" x2="16.5" y2="16.5" />
    </svg>
  );

  const BellIcon = () => (
    <svg className="w-5 h-5 stroke-[1.6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M18 16H6l-1 1h14l-1-1z" />
      <path d="M6 16V11a6 6 0 0112 0v5" />
      <path d="M10 18a2 2 0 004 0" />
    </svg>
  );

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">

      {/* HEADER */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <h1 className="text-xl font-bold text-gray-800">Infinity Hub</h1>

        <div className="flex items-center space-x-6">

          {/* POINTS */}
          <span
            onClick={() => navigate("/RewardsPage")}
            className="text-gray-700 font-semibold cursor-pointer hover:text-blue-600"
          >
            4210 points
          </span>

          {/* NOTIFICATIONS */}
          <div className="relative">
            <button onClick={() => setShowNotifications(!showNotifications)}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1" />
              </svg>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-3 z-50">
                <NotificationMenu />
              </div>
            )}
          </div>

          {/* 9 DOTS */}
          <div className="relative">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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

          {/* PROFILE */}
          <div className="relative">
            <button onClick={() => setProfileOpen(!profileOpen)}>
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20a8 8 0 0116 0" />
                </svg>
              </div>
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-3 z-50">
                <ProfileMenu />
              </div>
            )}
          </div>

        </div>
      </header>

      {/* BODY */}
      <div className="flex flex-1">

        {/* SIDEBAR */}
        {sidebarOpen && (
          <aside className="w-72 bg-white border-r p-4 space-y-4">

            <NavItem
              icon={<SearchIcon />}
              text="Search"
              onClick={() => setSearchOpen(true)}
            />

            <NavItem
              icon={<BellIcon />}
              text="Notifications"
              onClick={() => navigate("/notifications")}
            />

          </aside>
        )}

        {/* MAIN CONTENT */}
        <div className="flex-1 bg-white">

          {/* PAGE HEADER */}
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <h1 className="text-lg font-semibold text-gray-800">
              Notifications
            </h1>

            <div className="flex items-center gap-4 text-gray-500">

              {/* DOUBLE CHECK */}
              <svg className="w-5 h-5 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 13l3 3 5-5" />
                <path d="M10 13l3 3 7-7" />
              </svg>

              {/* SETTINGS */}
              <svg className="w-5 h-5 stroke-[1.8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1 1 0 00.2 1.1..." />
              </svg>

            </div>
          </div>

          {/* TABS */}
          <div className="flex gap-6 px-6 py-3 text-sm text-gray-500">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 ${
                  activeTab === tab
                    ? "text-black font-medium border-b-2 border-black"
                    : "hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* EMPTY STATE */}
          <div className="flex flex-col items-center justify-center h-[75vh] text-center">
            <h2 className="text-lg font-semibold text-gray-800">
              No notifications
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Notifications will show up here.
            </p>
          </div>

        </div>
      </div>

               {/* Footer */}
      <footer className="bg-blue-900 text-white px-6 py-10 mt-10">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold">infinity Hub</h2>
          <p className="mt-2">The community of those who value time.</p>
        </div>

        <div className="flex flex-wrap justify-center space-x-4 text-sm mb-6">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Learning
          </a>
          <a href="#" className="hover:underline">
            Community
          </a>
          <a href="#" className="hover:underline">
            Rewards
          </a>
          <a href="#" className="hover:underline">
            Support
          </a>
          <a href="#" className="hover:underline">
            Privacy policy
          </a>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
        </div>

        <div className="flex justify-center space-x-6 mb-6">
          <img src="/icons/x.png" alt="X" className="w-6 h-6" />
          <img src="/icons/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
          <img src="/icons/facebook.png" alt="Facebook" className="w-6 h-6" />
          <img src="/icons/instagram.png" alt="Instagram" className="w-6 h-6" />
        </div>

        <p className="text-center text-sm">© 2026 Infinity. All rights reserved.</p>
      </footer>
      {/* SEARCH MODAL */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />

    </div>
  );
}