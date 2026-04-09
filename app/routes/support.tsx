import { useState } from "react";

export default function SupportCentrePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <div className="flex items-center space-x-3">
          <img src="/images/alx-logo.png" alt="ALX Logo" className="h-8" />
          <h1 className="text-xl font-bold text-gray-800">ALX eHub</h1>
        </div>
        <div className="flex items-center space-x-6">
          <span className="text-gray-700 font-semibold">4210 points</span>

          {/* Notification bell SVG */}
          <button className="relative text-gray-600 hover:text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1"
              />
            </svg>
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Nine dots menu SVG */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-600 hover:text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <circle cx="5" cy="5" r="2" />
              <circle cx="12" cy="5" r="2" />
              <circle cx="19" cy="5" r="2" />
              <circle cx="5" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="19" cy="12" r="2" />
              <circle cx="5" cy="19" r="2" />
              <circle cx="12" cy="19" r="2" />
              <circle cx="19" cy="19" r="2" />
            </svg>
          </button>

          {/* Profile image */}
          <img
            src="/images/profile.png"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-white text-center py-16 bg-purple-700">
        <div className="absolute inset-0 bg-purple-700 bg-opacity-70"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold">Your Support Centre</h2>
          <p className="mt-2 text-lg">We Are Here to Support Your Journey</p>
          <p className="mt-1">
            Chat with our AI learner support expert, LEA, or contact the support team.
          </p>
        </div>
      </section>

      {/* Chat Section */}
      <main className="flex-1 px-6 py-10">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="bg-blue-600 text-white px-4 py-2 font-semibold">
            ALX E-hub Support – Ask LEA
          </div>
          <div className="p-6 space-y-4">
            {/* LEA greeting */}
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full">
                <span className="text-blue-600 font-bold">LEA</span>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 max-w-md">
                <p className="text-gray-800">
                  Hello, I am LEA. How can I assist you today😊?
                </p>
              </div>
            </div>

            {/* User messages */}
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white rounded-lg p-3 max-w-md">
                <p>I am in DA C7, and I am unable to access Python.</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white rounded-lg p-3 max-w-md">
                <p>
                  I am meant to start my DA track on 18th August, and my e-hub is still displaying that it is not available.
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-blue-600 text-white rounded-lg p-3 max-w-md">
                <p>see more</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white px-6 py-6">
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold">alx eHub</h2>
          <p className="text-sm">The community of those who Do Hard Things.</p>
        </div>
        <div className="flex flex-wrap justify-center space-x-4 text-sm mb-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Learning</a>
          <a href="#" className="hover:underline">Community</a>
          <a href="#" className="hover:underline">Rewards</a>
          <a href="#" className="hover:underline">Support</a>
          <a href="#" className="hover:underline">Privacy policy</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </div>
        <p className="text-center text-xs">© 2026 Sand. All rights reserved.</p>
      </footer>
    </div>
  );
}