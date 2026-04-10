import React from "react";
import { Link } from "react-router";

export default function EhubFullPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <h1 className="text-xl font-bold text-gray-800">Infinity Hub</h1>
        <div className="flex items-center space-x-6">
          <span className="text-gray-700 font-semibold">4210 points</span>

          {/* Notification bell */}
          <button className="text-gray-600 hover:text-gray-800 relative">
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

          {/* 9-dots menu */}
          <button className="text-gray-600 hover:text-gray-800">
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
          <p className="mt-2 text-lg">Your Infinity Learning Journey Starts Here</p>
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

      {/* Past Programs */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Past Programs</h2>
        <div className="space-y-6">
          {[
            {
              title: "Professional Foundations",
              status: "✅ Completed",
              statusColor: "green-600",
              desc: "Learn key leadership and professional skills that will help you navigate and succeed in the workplace.",
            },
            {
              title: "AI Career Essentials",
              status: "✅ Completed",
              statusColor: "green-600",
              desc: "Develop key professional and technical skills using AI technology that will help you succeed in today’s digital workplace.",
            },
            {
              title: "Freelancer Academy – 4 weeks online",
              status: "🔴 Withdrawn",
              statusColor: "red-600",
              desc: "This program was created for talented, skilled individuals who want to learn how to monetize their skills. This is an online program so you can be located anywhere in the world.",
            },
            {
              title: "Front-End Web Development",
              status: "✅ Completed",
              statusColor: "green-600",
              desc: "Learn to code and level up your web development skills. You’ll learn HTML, CSS, and Javascript through hands-on projects.",
            },
            {
              title: "Back-End Web Development",
              status: "🔴 Withdrawn",
              statusColor: "red-600",
              desc: "Become a back-end pro and build powerful apps from the ground up. You’ll learn Python and SQL for data management.",
            },
            {
              title: "Back-End Development",
              status: "❌ Failed",
              statusColor: "red-600",
              desc: "Learn Python and frameworks like Django to develop robust back-end systems and dynamic web applications.",
            },
            {
              title: "Virtual Assistant",
              status: "✅ Completed",
              statusColor: "green-600",
              desc: "Gain practical experience to develop the right skill sets, tools, and mindsets to thrive as a VA in a rapidly evolving global workplace.",
            },
          ].map((prog, idx) => (
            <div key={idx} className="bg-white shadow rounded-lg p-6">
              <h3 className={`text-lg font-semibold text-gray-800 flex items-center`}>
                {prog.title}{" "}
                <span className={`ml-2 text-${prog.statusColor}`}>{prog.status}</span>
              </h3>
              <p className="text-gray-600 mt-2">{prog.desc}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                Continue
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Programs */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Recommended Programs
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Graphic Design",
              img: "/images/graphic-design.png",
              desc: "This programme redefines graphic design by merging universal design principles with Afrocentric creativity, allowing participants to craft authentic visual narratives with global appeal.",
              start: "25 May 2026",
              duration: "7 Months",
            },
            {
              title: "AI Career Essentials",
              img: "/images/ai-career.png",
              desc: "Develop key professional and technical skills using AI technology that will help you succeed in today’s digital workplace.",
              start: "04 May 2026",
              duration: "6 Weeks",
            },
            {
              title: "Virtual Assistant",
              img: "/images/virtual-assistant.png",
              desc: "Gain practical experience to develop the right skill sets, tools, and mindsets to thrive as a VA in a rapidly evolving global workplace.",
              start: "04 May 2026",
              duration: "10 Weeks",
            },
          ].map((prog, idx) => (
            <div key={idx} className="bg-white shadow rounded-lg overflow-hidden flex flex-col">
              <img src={prog.img} alt={prog.title} className="h-40 w-full object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">{prog.title}</h3>
                <p className="text-gray-600 mt-2 flex-grow">{prog.desc}</p>
                <p className="mt-3 text-sm text-gray-500">Start Date: {prog.start}</p>
                <p className="text-sm text-gray-500">Duration: {prog.duration}</p>
                <div className="mt-4 flex space-x-3">
                  <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50">View Details</button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">Enroll Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
            View All Programs
          </button>
        </div>
      </section>

      {/* Explore eHub / Assistance */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Need Assistance with Your Course?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-600 text-white rounded-lg p-6 flex flex-col">
            <h3 className="text-lg font-semibold">Support</h3>
            <p className="mt-2 flex-grow">
              Get instant help on administrative issues from Finley, our AI assistant, or contact our support team.
            </p>
            <button className="mt-4 px-6 py-2 bg-white text-blue-600 rounded-full hover:bg-gray-100">Continue</button>
          </div>
          <div className="bg-blue-600 text-white rounded-lg p-6 flex flex-col">
            <h3 className="text-lg font-semibold">Withdraw</h3>
            <p className="mt-2 flex-grow">
              Withdrawing from your program will end it permanently. You will need to reapply.
            </p>
            <button className="mt-4 px-6 py-2 bg-white text-blue-600 rounded-full hover:bg-gray-100">Continue</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white px-6 py-10 mt-10">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold">aIx eHub</h2>
          <p className="mt-2">The community of those who value time.</p>
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
          <img src="/icons/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
          <img src="/icons/facebook.png" alt="Facebook" className="w-6 h-6" />
          <img src="/icons/instagram.png" alt="Instagram" className="w-6 h-6" />
        </div>

        <p className="text-center text-sm">© 2026 Infinity. All rights reserved.</p>
      </footer>
    </div>
  );
}