import { useState } from "react";
import { Link } from "react-router";

export default function LearningCommunityPage() {
  const [menu, setMenu] = useState(false);
  const [programs, setPrograms] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="font-bold text-lg text-gray-800">
            ALX eHub
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-gray-800">
            <button
              type="button"
              onClick={() => setPrograms(!programs)}
              className="relative font-semibold"
            >
              Programs
            </button>

            <Link to="/programs/ai">AI Data & Tech</Link>
            <Link to="/programs/creative">Creative</Link>
            <Link to="/programs/business">Entrepreneurship</Link>
            <Link to="/about">About</Link>
            <Link to="/pricing">All Access</Link>
            <Link to="/support">Support</Link>

            <Link to="/login" className="border border-gray-800 px-4 py-2 rounded-xl">
              Login
            </Link>
            <Link to="/register" className="bg-gray-800 text-white px-4 py-2 rounded-xl">
              Get Started
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden text-gray-800"
            onClick={() => setMenu(!menu)}
          >
            {menu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Programs dropdown */}
        {programs && (
          <div className="absolute left-0 right-0 bg-white text-black shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-6 grid md:grid-cols-3 gap-6">
              <Link to="/programs/ai" className="block border p-4 rounded-xl">AI Data & Tech</Link>
              <Link to="/programs/creative" className="block border p-4 rounded-xl">Creative</Link>
              <Link to="/programs/business" className="block border p-4 rounded-xl">Entrepreneurship</Link>
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {menu && (
          <div className="md:hidden bg-black/90 text-white px-6 py-6 flex flex-col gap-4">
            <Link to="/">Programs</Link>
            <Link to="/programs/ai">AI Data & Tech</Link>
            <Link to="/programs/creative">Creative</Link>
            <Link to="/programs/business">Entrepreneurship</Link>
            <Link to="/about">About</Link>
            <Link to="/pricing">All Access</Link>
            <Link to="/support">Support</Link>
            <Link to="/login" className="font-semibold">Log In</Link>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative mt-24">
        <img
          src="/images/resources-banner.png"
          alt="Learning Resources Banner"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4">
          <h2 className="text-2xl font-bold">Your Learning Resources</h2>
        </div>
      </section>

      {/* Layout: Sidebar + Main Content */}
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

        {/* Main Content */}
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
    </div>
  );
}