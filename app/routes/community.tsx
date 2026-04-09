// app/routes/community.tsx
import { useState } from "react";
import NineDotsMenu from "../components/NineDotsMenu"; // adjust path if needed

export default function LearningResourcesCommunityPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ================= Header + Hero ================= */}
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        {/* Left: Logo */}
        <h1 className="font-bold text-lg">ALX eHub</h1>

        {/* Center: Points */}
        <div>4210 points</div>

        {/* Right: Profile, Notification Bell, NineDotsMenu */}
        <div className="flex items-center gap-4 relative">
          {/* Notification Bell */}
          <button>
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V11a6 6 0 10-12 0v3c0 .386-.149.735-.395 1L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
            </svg>
          </button>

          {/* Nine Dots Menu */}
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 6h2v2H6V6zM10 6h2v2h-2V6zM14 6h2v2h-2V6zM6 10h2v2H6v-2zM10 10h2v2h-2v-2zM14 10h2v2h-2v-2zM6 14h2v2H6v-2zM10 14h2v2h-2v-2zM14 14h2v2h-2v-2z"/>
            </svg>
          </button>

          <NineDotsMenu menuOpen={menuOpen} />
        </div>
      </header>

      {/* Banner / Hero */}
      <section className="relative">
        <img
          src="/images/resources-banner.png"
          alt="Learning Resources Banner"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4">
          <h2 className="text-2xl font-bold">Your Learning Resources</h2>
        </div>
      </section>

      {/* ================= Community Page Body ================= */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg flex flex-col justify-between">
          <div className="p-6 space-y-4">
            <nav className="space-y-2">
              <a href="#" className="block text-gray-700 hover:text-blue-600">Search</a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">Notifications</a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">Direct messages</a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">Bookmarks</a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">Feed</a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">Events</a>
              <a href="#" className="block text-gray-700 hover:text-blue-600">Leaderboard</a>
            </nav>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-800">ALX</h4>
              <nav className="space-y-2 mt-2">
                <a href="#" className="block text-gray-700 hover:text-blue-600">Our Community</a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">ALX Community</a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">ALX Events</a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">ALX Announcements</a>
              </nav>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-800">Welcome</h4>
              <nav className="space-y-2 mt-2">
                <a href="#" className="block text-gray-700 hover:text-blue-600">Start Here!</a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">Welcome Checklist</a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">Introduce Yourself</a>
              </nav>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-800">Community</h4>
              <nav className="space-y-2 mt-2">
                <a href="#" className="block text-gray-700 hover:text-blue-600">Announcements</a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">Member Spotlight</a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">Share Your Wins</a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">Interest Groups</a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">Community Events</a>
                <a href="#" className="block text-gray-700 hover:text-blue-600">Community Corner</a>
              </nav>
            </div>
          </div>

          {/* Profile card */}
          <div className="p-6 border-t">
            <div className="flex items-center space-x-3">
              <img src="/images/profile.png" alt="Peter Ikapolok" className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="text-gray-800 font-semibold">Peter Ikapolok</p>
                <p className="text-sm text-gray-600">Virtual Assistant • Admin Support</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-10">
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">We Are ALX</h1>
          </header>

          {/* Video thumbnail */}
          <div className="mb-6">
            <div className="bg-gray-200 h-48 flex items-center justify-center rounded-lg">
              <span className="text-gray-600">Welcome to ALX! (Video)</span>
            </div>
          </div>

          {/* Mission and community text */}
          <article className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Africa is a continent brimming with talent, ambition, and a desire to innovate. At ALX, we believe you hold the key to unlocking its extraordinary potential for progress.
            </p>
            <p>
              <strong>Our Mission:</strong> To Create 2 Million Opportunities and Positively Change Lives. We equip young Africans with the skills, connections, and opportunities they need to build fulfilling careers.
            </p>
            <p>
              <strong>Join a Movement – Led by You.</strong> When you join ALX, you become part of a vibrant, pan-African community that believes in collaboration and mutual support.
            </p>
            <p>
              <strong>Your All-Access Fee:</strong> Fueling Your Community Experience. Keep your membership current to unlock exclusive resources, events, and support.
            </p>
          </article>

          {/* Footer buttons */}
          <div className="mt-8 flex space-x-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">Programs</button>
            <button className="px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700">Instagram</button>
            <button className="px-6 py-2 bg-blue-800 text-white rounded-full hover:bg-blue-900">LinkedIn</button>
          </div>
        </main>
      </div>

      {/* ================= Footer ================= */}
      <footer className="bg-blue-900 text-white px-6 py-10 mt-10">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold">aIx eHub</h2>
          <p className="mt-2">The community of those who Do Hard Things.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center space-x-4 text-sm mb-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Learning</a>
          <a href="#" className="hover:underline">Community</a>
          <a href="#" className="hover:underline">Rewards</a>
          <a href="#" className="hover:underline">Support</a>
          <a href="#" className="hover:underline">Privacy policy</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <img src="/icons/x.png" alt="X" className="w-6 h-6" />
          <img src="/icons/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
          <img src="/icons/facebook.png" alt="Facebook" className="w-6 h-6" />
          <img src="/icons/instagram.png" alt="Instagram" className="w-6 h-6" />
        </div>

        {/* Copyright */}
        <p className="text-center text-sm">© 2026 Sand. All rights reserved.</p>
      </footer>
    </div>
  );
}