import { useState } from "react";
import { Link } from "react-router";

function CurrentPrograms({ onBack }) {
  return (
    <section className="px-6 py-10">
      <h3 className="text-2xl font-bold mb-4">Your Learning Resources</h3>
      <p className="text-gray-600 mb-2">Check your enrolled programs and track progress.</p>
      <p className="text-sm text-gray-500 mb-6">
        Access detailed content, assignments, and milestones for your current courses.
      </p>

      {/* Current Programs */}
      <div className="bg-white shadow rounded-lg p-6 text-center mb-8">
        <p className="text-gray-600 mb-2">No Active Programs Yet</p>
        <p className="text-sm text-gray-500 mb-4">
          Explore courses and start your learning journey now!
        </p>
        <button className="bg-purple-600 text-white px-6 py-2 rounded">
          Apply to Programs
        </button>
      </div>

      {/* Past Programs */}
      <h4 className="text-xl font-bold mb-4">Completed Programs</h4>
      <div className="space-y-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h5 className="font-bold">Web Development Bootcamp ✔ Completed</h5>
          <p className="text-gray-600">
            Learned HTML, CSS, JavaScript, and built responsive websites.
          </p>
          <button className="mt-2 text-blue-600">Review</button>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h5 className="font-bold">Front-End React Essentials ✔ Completed</h5>
          <p className="text-gray-600">
            Mastered React fundamentals, components, state management, and hooks.
          </p>
          <button className="mt-2 text-blue-600">Review</button>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h5 className="font-bold">Freelancing Basics ❌ Withdrawn</h5>
          <p className="text-gray-600">
            Learned how to start freelancing and build online client relationships.
          </p>
          <button className="mt-2 text-blue-600">Review</button>
        </div>
      </div>

      {/* Recommended Programs */}
      <h4 className="text-xl font-bold mb-6 mt-10">Recommended Programs</h4>
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white shadow rounded-lg p-6">
          <h5 className="font-bold">Advanced Web Development</h5>
          <p className="text-gray-600 mb-2">
            Enhance your web development skills with advanced JavaScript, React, and Node.js projects.
          </p>
          <p className="text-sm text-gray-500 mb-2">Start Date: 15 April 2026 • Duration: 8 Weeks</p>
          <div className="flex space-x-4">
            <button className="border px-4 py-2 rounded">View Details</button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded">Enroll Now</button>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h5 className="font-bold">AI & Data Science Essentials</h5>
          <p className="text-gray-600 mb-2">
            Learn the fundamentals of AI, data analytics, and Python programming for real-world projects.
          </p>
          <p className="text-sm text-gray-500 mb-2">Start Date: 22 April 2026 • Duration: 6 Weeks</p>
          <div className="flex space-x-4">
            <button className="border px-4 py-2 rounded">View Details</button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded">Enroll Now</button>
          </div>
        </div>
      </div>

      {/* Support + Withdraw */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h4 className="font-bold mb-2">Support</h4>
          <p className="text-gray-600 mb-4">
            Get help from LEA, our AI assistant, or reach out to our support team for guidance.
          </p>
          <Link to="/support" className="bg-purple-600 text-white px-4 py-2 rounded inline-block">
            Continue
          </Link>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h4 className="font-bold mb-2">Withdraw</h4>
          <p className="text-gray-600 mb-4">
            Withdraw from programs if necessary. You can re-enroll anytime later.
          </p>
          <Link to="/withdraw" className="bg-red-600 text-white px-4 py-2 rounded inline-block">
            Continue
          </Link>
        </div>
      </div>

      {/* Back button */}
      <button
        onClick={onBack}
        className="mt-10 bg-gray-300 text-gray-800 px-6 py-2 rounded"
      >
        Back to Dashboard
      </button>
    </section>
  );
}

export default function EhubDashboard() {
  const [viewCurrent, setViewCurrent] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-700">Artlink eHub</h1>
        <div className="flex items-center space-x-6">
          <span className="text-sm text-gray-600">4210 Points</span>
          <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
            PI
          </div>
        </div>
      </header>

      {!viewCurrent ? (
        <>
          {/* Welcome Section */}
          <section className="text-center py-10 bg-gradient-to-r from-purple-700 to-pink-500 text-white">
            <h2 className="text-3xl font-bold">Welcome to Artlink eHub</h2>
            <p className="mt-2 text-lg">
              Your learning hub for tech, freelancing, and skill development – track progress, achieve milestones, and grow.
            </p>
            <p className="mt-4 text-xl">Hello, Peter!</p>
          </section>

          {/* Current Programs Preview */}
          <section className="px-6 py-10">
            <h3 className="text-2xl font-bold mb-4">Current Programs</h3>
            <div className="bg-white shadow rounded-lg p-6 text-center">
              <p className="text-gray-600 mb-2">No Active Programs Yet</p>
              <p className="text-sm text-gray-500 mb-4">
                Browse available programs and start learning today!
              </p>
              <button
                onClick={() => setViewCurrent(true)}
                className="bg-purple-600 text-white px-6 py-2 rounded"
              >
                View More
              </button>
            </div>
          </section>

          {/* Recommended Programs Preview */}
          <section className="px-6 py-10">
            <h3 className="text-2xl font-bold mb-6">Recommended Programs</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white shadow rounded-lg p-6">
                <h4 className="text-xl font-bold mb-2">Freelancing Skills</h4>
                <p className="text-gray-600 mb-4">
                  Learn how to earn globally using your skills with practical freelancing tips.
                </p>
                <p className="text-sm text-gray-500 mb-2">Start Date: 25 April 2026 • Duration: 4 Weeks</p>
                <div className="flex space-x-4">
                  <button className="border px-4 py-2 rounded">View Details</button>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded">Enroll Now</button>
                </div>
              </div>

              <div className="bg-white shadow rounded-lg p-6">
                <h4 className="text-xl font-bold mb-2">Web Development</h4>
                <p className="text-gray-600 mb-4">
                  Build websites and web apps with HTML, CSS, JavaScript, and React.
                </p>
                <p className="text-sm text-gray-500 mb-2">Start Date: 01 May 2026 • Duration: 6 Weeks</p>
                <div className="flex space-x-4">
                  <button className="border px-4 py-2 rounded">View Details</button>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded">Enroll Now</button>
                </div>
              </div>
            </div>
          </section>

          {/* Explore the eHub */}
          <section className="px-6 py-10 bg-gray-100">
            <h3 className="text-2xl font-bold mb-6">Explore the eHub</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white shadow rounded-lg p-6">
                <h4 className="font-bold mb-2">Start Learning</h4>
                <p className="text-gray-600">Access courses, track progress, and complete milestones.</p>
              </div>
              <div className="bg-white shadow rounded-lg p-6">
                <h4 className="font-bold mb-2">Connect with Community</h4>
                <p className="text-gray-600">Collaborate with other learners and share knowledge.</p>
              </div>
              <div className="bg-white shadow rounded-lg p-6">
                <h4 className="font-bold mb-2">Earn Rewards</h4>
                <p className="text-gray-600">Gain points and badges as you complete programs and tasks.</p>
              </div>
              <div className="bg-white shadow rounded-lg p-6">
                <h4 className="font-bold mb-2">Get Support</h4>
                <p className="text-gray-600">Chat with LEA or our support team for guidance anytime.</p>
              </div>
            </div>
          </section>
        </>
      ) : (
        <CurrentPrograms onBack={() => setViewCurrent(false)} />
      )}

      {/* Footer */}
      <footer className="bg-white shadow mt-auto px-6 py-6 text-center">
        <h4 className="text-purple-700 font-bold mb-2">Artlink eHub</h4>
        <p className="text-gray-600 mb-4">Empowering learners to gain skills, earn points, and grow their careers.</p>
        <p className="text-xs text-gray-400">© 2026 Artlink Media Africa. All rights reserved.</p>
      </footer>
    </div>
  );
}