import { useState } from "react";
import { Link } from "react-router";

function EhubFullDashboard({ onBack }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-700">aIx eHub</h1>
        <div className="flex items-center space-x-6">
          <span className="text-sm text-gray-600">4210 Points</span>
          <button className="text-gray-600 hover:text-purple-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002     
                  6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67     
                  6.165 6 8.388 6 11v3.159c0 .538-.214     
                  1.055-.595 1.436L4 17h5m6 0v1a3 3 0     
                  11-6 0v-1m6 0H9"
              />
            </svg>
          </button>

          {/* 9-dots menu */}
          <button className="text-gray-600 hover:text-purple-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
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

          <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center">PI</div>
        </div>
      </header>

      {/* Purple Banner */}
      <section className="text-center py-10 bg-gradient-to-r from-purple-700 to-pink-500 text-white">
        <h2 className="text-3xl font-bold">Your Learning Resources</h2>
        <p className="mt-2 text-lg">View Your Program and Track Your Progress</p>
        <p className="mt-4 text-sm text-gray-100">
          Find detailed information about your enrolled program here.
        </p>
      </section>

      {/* Current Programs */}
      <section className="px-6 py-10">
        <h3 className="text-2xl font-bold mb-4">Current Programs</h3>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <p className="text-gray-600 mb-2">No Programs Yet</p>
          <p className="text-sm text-gray-500 mb-4">
            Explore a world of knowledge. Start your learning journey today!
          </p>
          <button className="bg-purple-600 text-white px-6 py-2 rounded">Apply to new programs</button>
        </div>
      </section>

      {/* Past Programs */}
      <section className="px-6 py-10">
        <h3 className="text-2xl font-bold mb-6">Past Programs</h3>
        <div className="space-y-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h4 className="font-bold">Professional Foundations ✅ Completed</h4>
            <p className="text-gray-600">
              Learn key leadership and professional skills that will help you navigate and succeed in the workplace.
            </p>
            <button className="mt-2 text-blue-600">Continue</button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="px-6 py-10">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Graphic Design */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img src="/images/graphic-design.png" alt="Graphic Design" className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Graphic Design</h3>
              <p className="text-gray-600 mb-4">
                This programme redefines graphic design by merging universal
                design principles with Afrocentric creativity, allowing
                participants to craft authentic visual narratives with global
                appeal.
              </p>
              <p className="text-sm text-gray-500 mb-2">Start Date: 25 May 2026 • Duration: 7 Months</p>
              <div className="flex space-x-4">
                <button className="border px-4 py-2 rounded">View Details</button>
                <button className="bg-purple-600 text-white px-4 py-2 rounded">Enroll Now</button>
              </div>
            </div>
          </div>

          {/* AI Career Essentials */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img src="/images/ai-career.png" alt="AI Career Essentials" className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">AI Career Essentials</h3>
              <p className="text-gray-600 mb-4">
                Develop key professional and technical skills using AI technology
                that will help you succeed in today’s digital workplace.
              </p>
              <p className="text-sm text-gray-500 mb-2">Start Date: 04 May 2026 • Duration: 6 Weeks</p>
              <div className="flex space-x-4">
                <button className="border px-4 py-2 rounded">View Details</button>
                <button className="bg-purple-600 text-white px-4 py-2 rounded">Enroll Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button onClick={onBack} className="bg-gray-300 text-gray-800 px-6 py-2 rounded">
            Back to Dashboard
          </button>
        </div>
      </section>

      {/* Support + Withdraw */}
      <section className="px-6 py-10 grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h4 className="font-bold mb-2">Support</h4>
          <p className="text-gray-600 mb-4">
            Get instant help on administrative issues from LEA, our AI assistant,
            or contact our support team.
          </p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded">Continue</button>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h4 className="font-bold mb-2">Withdraw</h4>
          <p className="text-gray-600 mb-4">
            Withdrawing from your program will end it permanently. You will need to reapply.
          </p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded">Continue</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow px-6 py-10 mt-auto">
        <h2 className="text-xl font-bold text-purple-700 mb-2">aIx eHub</h2>
        <p className="text-gray-600 mb-6">The community of those who Do Hard Things.</p>
      </footer>
    </div>
  );
}

export default function EhubDashboard() {
  const [showFull, setShowFull] = useState(false);

  if (showFull) return <EhubFullDashboard onBack={() => setShowFull(false)} />;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-700">aIx eHub</h1>
        <div className="flex items-center space-x-6">
          <button className="text-gray-600 hover:text-purple-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002   
                  6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67   
                  6.165 6 8.388 6 11v3.159c0 .538-.214   
                  1.055-.595 1.436L4 17h5m6 0v1a3 3 0   
                  11-6 0v-1m6 0H9"
              />
            </svg>
          </button>

          <button className="text-gray-600 hover:text-purple-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
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

          <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center">PI</div>
        </div>
      </header>

      {/* Welcome Banner */}
      <section className="text-center py-10 bg-gradient-to-r from-purple-700 to-pink-500 text-white">
        <h2 className="text-3xl font-bold">Welcome to the eHub</h2>
        <p className="mt-2 text-lg">Your ALX Learning Journey Starts Here – Track your progress, achieve your goals.</p>
        <p className="mt-4 text-xl">Welcome, Peter! Your learning journey begins today. Let’s explore together!</p>
      </section>

      {/* Current Programs */}
      <section className="px-6 py-10">
        <h3 className="text-2xl font-bold mb-4">Current Programs</h3>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <p className="text-gray-600 mb-2">No Programs Yet</p>
          <p className="text-sm text-gray-500 mb-4">Explore a world of knowledge. Start your learning journey today!</p>
          <button className="bg-purple-600 text-white px-6 py-2 rounded">Apply to new programs</button>
        </div>
      </section>

      {/* Recommended Programs */}
      <section className="px-6 py-10">
        <h3 className="text-2xl font-bold mb-6">Recommended Programs</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* AI Career Essentials */}
          <div className="bg-white shadow rounded-lg p-6">
            <h4 className="text-xl font-bold mb-2">AI Career Essentials</h4>
            <p className="text-gray-600 mb-4">
              Develop key professional and technical skills using AI technology that will help you succeed in today’s digital workplace.
            </p>
            <p className="text-sm text-gray-500 mb-2">Start Date: 04 May 2026 • Duration: 6 Weeks</p>
            <div className="flex space-x-4">
              <button className="border px-4 py-2 rounded">View Details</button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded">Enroll Now</button>
            </div>
          </div>

          {/* Content Creation */}
          <div className="bg-white shadow rounded-lg p-6">
            <h4 className="text-xl font-bold mb-2">Content Creation</h4>
            <p className="text-gray-600 mb-4">
              This programme enables learners to master content strategy and creation across various platforms.
            </p>
            <p className="text-sm text-gray-500 mb-2">Start Date: 25 May 2026 • Duration: 7 Months</p>
            <div className="flex space-x-4">
              <button className="border px-4 py-2 rounded">View Details</button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded">Enroll Now</button>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button onClick={() => setShowFull(true)} className="bg-purple-600 text-white px-6 py-2 rounded">
            View All Programs
          </button>
        </div>
      </section>
    </div>
  );
}