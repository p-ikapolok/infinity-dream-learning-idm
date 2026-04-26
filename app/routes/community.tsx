import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NotificationMenu from "../components/NotificationMenu";
import NineDotsMenu from "../components/NineDotsMenu";
import ProfileMenu from "../components/ProfileMenu"; // adjust path if needed

export default function CommunityFullPage() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">

      {/* Header */}
      <header className="relative flex justify-between items-center px-6 py-4 bg-white shadow">
        <h1 className="text-xl font-bold text-gray-800">Infinity Hub</h1>
        <div className="flex items-center space-x-6">
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

  {/* Dropdown menu */}
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

  {/* Profile dropdown menu connected */}
    {profileOpen && (
  <div className="absolute right-0 mt-3 z-50">
    <ProfileMenu menuOpen={profileOpen} />
  </div>
)}
      </div>
        </div>
      </header>

      {/* Banner */}
      <section className="relative">
        <img
          src="/images/banner.png"
          alt="Banner"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4">
          <h2 className="text-2xl font-bold">Welcome to the Hub</h2>
          <p className="mt-2 text-lg">
            Your Infinity Dream Learning Journey Starts Here
          </p>
          <p className="mt-1">Track your progress, achieve your goals.</p>
        </div>
      </section>

      {/* Greeting */}
      <section className="px-6 py-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Welcome back, Peter!
        </h2>
        <p className="text-gray-600 mt-1">
          Let's turn those lessons into action.
        </p>
      </section>

      {/* Community Section */}
      <div className="flex flex-1 min-h-[500px]">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="w-64 bg-white shadow-lg flex flex-col justify-between">
            <div className="p-6 space-y-6 overflow-y-auto">
              <nav className="space-y-2">
                <a href="#" className="block text-gray-700 hover:text-blue-600">
                  Search
                </a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">
                  Notifications
                </a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">
                  Direct messages
                </a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">
                  Bookmarks
                </a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">
                  Feed
                </a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">
                  Events
                </a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">
                  Leaderboard
                </a>
              </nav>

              {/* Infinity */}
              <div>
                <h4 className="text-sm font-semibold text-gray-800">Infinity</h4>
                <nav className="space-y-2 mt-2">
                  <a href="#" className="block text-gray-700 hover:text-blue-600">
                    Our Community
                  </a>
                  <a href="#" className="block text-gray-700 hover:text-blue-600">
                    Infinity Community
                  </a>
                  <a href="#" className="block text-gray-700 hover:text-blue-600">
                    Infinity Events
                  </a>
                  <a href="#" className="block text-gray-700 hover:text-blue-600">
                    Infinity Announcements
                  </a>
                  <a href="#" className="block text-gray-700 hover:text-blue-600">
                    Infinity Alumni Community
                  </a>
                </nav>
              </div>

              {/* Welcome */}
              <div>
                <h4 className="text-sm font-semibold text-gray-800">Welcome</h4>
                <nav className="space-y-2 mt-2">
                  <a href="#" className="block text-gray-700 hover:text-blue-600">
                    Start Here!
                  </a>
                  <a href="#" className="block text-gray-700 hover:text-blue-600">
                    Welcome Checklist
                  </a>
                  <a href="#" className="block text-gray-700 hover:text-blue-600">
                    Introduce Yourself
                  </a>
                </nav>
              </div>

              {/* Community */}
              <div>
                <h4 className="text-sm font-semibold text-gray-800">Community</h4>
                <nav className="space-y-2 mt-2">
                  <a href="#" className="block text-gray-700 hover:text-blue-600">
                    Announcements
                  </a>
                  <a href="#" className="block text-gray-700 hover:text-blue-600">
                    Member Spotlight
                  </a>
                  <a href="#" className="block text-gray-700 hover:text-blue-600">
                    Share Your Wins
                  </a>
                  <a href="#" className="block text-gray-700 hover:text-blue-600">
                    Interest Groups
                  </a>
                  <a href="#" className="block text-gray-700 hover:text-blue-600">
                    Community Events
                  </a>
                  <a href="#" className="block text-gray-700 hover:text-blue-600">
                    Community Corner
                  </a>
                </nav>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-sm font-semibold text-gray-800">Resources</h4>
                <nav className="space-y-2 mt-2">
                  <a href="#" className="block text-gray-700 hover:text-blue-600">
                    Download Android App
                  </a>
                  <a href="#" className="block text-gray-700 hover:text-blue-600">
                    Download iOS App
                  </a>
                </nav>
              </div>
            </div>

            <div className="p-6 border-t">
              <div className="flex items-center space-x-3">
                <img
                  src="/images/profile.png"
                  alt="Peter Ikapolok"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-800 font-semibold">Peter Ikapolok</p>
                  <p className="text-sm text-gray-600">
                    Virtual Assistant | Specializing in Administrative Support |
                    Helping Entrepreneurs Increase Productivity
                  </p>
                </div>
              </div>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Community Header */}
          <div className="flex items-center justify-between p-6 bg-white shadow mb-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-gray-600 hover:text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="3" y1="6" x2="15" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="15" y2="18" />
                </svg>
              </button>

              <img src="/images/alx-logo.png" alt="ALX Logo" className="h-8" />
            </div>

            <button className="text-gray-600 hover:text-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="1.5" />
                <circle cx="12" cy="12" r="1.5" />
                <circle cx="12" cy="19" r="1.5" />
              </svg>
            </button>
          </div>

          <main className="px-6 flex-1 overflow-y-auto">
            <h1 className="text-center text-xl font-bold text-gray-800 mb-6">
              We Are Infinity Dream
            </h1>

            {/* Video */}
            <div className="mb-6">
              <div className="bg-gray-200 h-48 flex items-center justify-center rounded-lg">
                <span className="text-gray-600">
                  Welcome to Infinity Dream! (Video)
                </span>
              </div>
            </div>

            {/* Mission Text */}
            <article className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Africa is a continent brimming with talent, ambition, and a
                desire to innovate. At Infinity Dream, we believe you hold the
                key to unlocking its extraordinary potential for progress.
              </p>

              <p>
                <strong>Our Mission:</strong> To Create 2 Million Opportunities
                and Positively Change Lives. We equip young Africans with the
                skills, connections, and opportunities they need to build
                fulfilling careers.
              </p>

              <p>
                <strong>Join a Movement – Led by You.</strong> When you join
                Infinity Dream, you become part of a vibrant, pan-African
                community that believes in collaboration and mutual support.
              </p>

              <p>
                <strong>Your All-Access Fee:</strong> Fueling Your Community
                Experience. Keep your membership current to unlock exclusive
                resources, events, and support.
              </p>
            </article>

            {/* Buttons */}
            <div className="mt-8 flex space-x-4">
              <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                Programs
              </button>

              <button className="px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700">
                Instagram
              </button>

              <button className="px-6 py-2 bg-blue-800 text-white rounded-full hover:bg-blue-900">
                LinkedIn
              </button>
            </div>
          </main>
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
    </div>
  );
}