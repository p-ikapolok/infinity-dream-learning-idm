import React from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

export default function EhubPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">

      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <h1 className="text-xl font-bold text-gray-800">ALX eHub</h1>
        <div className="flex items-center space-x-6">
          {/* Points */}
          <span className="text-gray-700 font-semibold">4210 points</span>

          {/* Notification bell */}
          <button className="text-gray-600 hover:text-gray-800 relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1" />
            </svg>
            <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* 9-dots menu */}
          <button className="text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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

          {/* Profile image */}
          <img
            src="/images/profile.png"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
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
          <h2 className="text-2xl font-bold">Welcome to the eHub</h2>
          <p className="mt-2 text-lg">Your ALX Learning Journey Starts Here</p>
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

      {/* Current Programs */}
      <section className="px-6 py-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-gray-800">Current Programs</h3>
          <a onClick={() => navigate("/learning-resources")} className="flex items-center text-blue-600 hover:underline">
            View More
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h4 className="text-gray-800 font-semibold">No Programs Yet</h4>
          <p className="text-gray-600 mt-2">
            Explore a world of knowledge. Start your learning journey today!
          </p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            Apply to new programs
          </button>
        </div>
      </section>

      {/* Recommended Programs */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Recommended Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Graphic Design */}
          <div className="bg-white shadow rounded-lg overflow-hidden flex flex-col">
            <img
              src="/images/graphic-design.png"
              alt="Graphic Design"
              className="h-40 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800">Graphic Design</h3>
              <p className="text-gray-600 mt-2 flex-grow">
                This programme redefines graphic design by merging universal design principles with Afrocentric creativity, allowing participants to craft authentic visual narratives with global...
              </p>
              <p className="mt-3 text-sm text-gray-500">Start Date: 25 May 2026</p>
              <p className="text-sm text-gray-500">Duration: 7 Months</p>
              <div className="mt-4 flex space-x-3">
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50">
                  View Details
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>

          {/* AI Career Essentials */}
          <div className="bg-white shadow rounded-lg overflow-hidden flex flex-col">
            <img
              src="/images/ai-career.png"
              alt="AI Career Essentials"
              className="h-40 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800">AI Career Essentials</h3>
              <p className="text-gray-600 mt-2 flex-grow">
                Develop key professional and technical skills using AI technology that will help you succeed in today’s digital workplace.
              </p>
              <p className="mt-3 text-sm text-gray-500">Start Date: 04 May 2026</p>
              <p className="text-sm text-gray-500">Duration: 6 Weeks</p>
              <div className="mt-4 flex space-x-3">
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50">
                  View Details
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>

          {/* Virtual Assistant */}
          <div className="bg-white shadow rounded-lg overflow-hidden flex flex-col">
            <img
              src="/images/virtual-assistant.png"
              alt="Virtual Assistant"
              className="h-40 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800">Virtual Assistant</h3>
              <p className="text-gray-600 mt-2 flex-grow">
                Gain practical experience to develop the right skill sets, tools, and mindsets to thrive as a VA in a rapidly evolving global workplace.
              </p>
              <p className="mt-3 text-sm text-gray-500">Start Date: 04 May 2026</p>
              <p className="text-sm text-gray-500">Duration: 10 Weeks</p>
              <div className="mt-4 flex space-x-3">
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50">
                  View Details
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            View All Programs
          </button>
        </div>
      </section>

      {/* Explore the eHub */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore the eHub</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Start Learning */}
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <div className="mb-4">
              <img src="/icons/learning.png" alt="Start Learning" className="mx-auto w-12 h-12" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Start Learning</h3>
            <p className="text-gray-600 mt-2">
              Access your program and stay on track with your learning journey here.
            </p>
          </div>

          {/* Connect to Community */}
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <div className="mb-4">
              <img src="/icons/community.png" alt="Community" className="mx-auto w-12 h-12" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Connect to Community</h3>
            <p className="text-gray-600 mt-2">
              Collaborate with fellow learners to get peer support and celebrate successes.
            </p>
          </div>

          {/* Earn Rewards */}
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <div className="mb-4">
              <img src="/icons/rewards.png" alt="Rewards" className="mx-auto w-12 h-12" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Earn Rewards</h3>
            <p className="text-gray-600 mt-2">
              Check how many Legacy Points you have earned and how you can redeem them.
            </p>
          </div>

          {/* Need Support */}
          <div className="bg-white shadow rounded-lg p-6 text-center">
            <div className="mb-4">
              <img src="/icons/support.png" alt="Support" className="mx-auto w-12 h-12" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Need Support?</h3>
            <p className="text-gray-600 mt-2">
              Chat with our AI learner support expert, LEA, or contact our support team directly.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white px-6 py-10 mt-10">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold">aIx eHub</h2>
          <p className="mt-2">The community of those who Do Hard Things.</p>
        </div>

        <div className="flex flex-wrap justify-center space-x-4 text-sm mb-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Learning</a>
          <a href="#" className="hover:underline">Community</a>
          <a href="#" className="hover:underline">Rewards</a>
          <a href="#" className="hover:underline">Support</a>
          <a href="#" className="hover:underline">Privacy policy</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </div>

        <div className="flex justify-center space-x-6 mb-6">
          <img src="/icons/x.png" alt="X" className="w-6 h-6" />
          <img src="/icons/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
          <img src="/icons/facebook.png" alt="Facebook" className="w-6 h-6" />
          <img src="/icons/instagram.png" alt="Instagram" className="w-6 h-6" />
        </div>

        <p className="text-center text-sm">© 2026 Sand. All rights reserved.</p>
      </footer>

    </div>
  );
}




const navigate = useNavigate();

<button onClick={() => navigate("/learning-resources")}>
  View More
</button>