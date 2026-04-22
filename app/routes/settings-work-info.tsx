import { NavLink } from "react-router-dom";
import Layout from "../components/layout";

export default function WorkInfo() {
  return (
    <Layout>
      {/* TABS */}
      <div className="mt-8 flex gap-8 text-sm font-semibold text-gray-600">
        <NavLink
          to="/settings-personal-information"
          className={({ isActive }) =>
            isActive ? "text-blue-700" : "hover:text-blue-700"
          }
        >
          Personal Information
        </NavLink>

        <NavLink
          to="/settings-education-info"
          className={({ isActive }) =>
            isActive ? "text-blue-700" : "hover:text-blue-700"
          }
        >
          Education Info
        </NavLink>

        <NavLink
          to="/settings-work-info"
          className={({ isActive }) =>
            isActive ? "text-blue-700" : "hover:text-blue-700"
          }
        >
          Work Info
        </NavLink>

        <span className="hover:text-blue-700 cursor-pointer">
          Demographic Info
        </span>
      </div>

      {/* LOCKED GRID */}
      <div className="mt-6 grid grid-cols-3 grid-rows-[280px_150px_90px_120px_280px_150px] gap-6 pb-12">
        {/* Experience */}
        <div className="col-start-1 col-span-3 row-start-1 bg-white rounded-xl shadow border p-6 relative flex flex-col items-center justify-center text-center">
          <h3 className="absolute top-6 left-6 font-bold text-lg text-gray-900">
            Experience
          </h3>

          <button className="absolute top-6 right-6 text-gray-500 hover:text-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6v-2z" />
            </svg>
          </button>

          <div className="w-16 h-12 bg-gray-200 rounded-lg flex items-center justify-center border mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 text-gray-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2zm4 4V4h-4v2h4zm8 4H2v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-9z" />
            </svg>
          </div>

          <p className="text-blue-700 font-semibold text-sm mb-2">
            Where have you worked before?
          </p>

          <p className="text-gray-600 text-sm mb-5 max-w-md">
            Share your work experience to enhance visibility and attract ideal
            employers
          </p>

          <button className="px-6 py-2 rounded-full border border-blue-300 text-blue-700 bg-blue-50 font-semibold text-sm">
            Add Experience
          </button>
        </div>

        {/* LinkedIn */}
        <div className="col-start-1 col-span-2 row-start-2 bg-white rounded-xl shadow border p-6 relative">
          <h3 className="font-bold text-lg mb-4">LinkedIn profile</h3>

          <button className="absolute top-6 right-6 text-gray-500 hover:text-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
            </svg>
          </button>

          <p className="text-blue-700 text-sm underline break-all">
            linkedin.com/https://linkedin.com/in/peterikapolok-virtual-assistant
          </p>
        </div>

        {/* Employment */}
        <div className="col-start-3 col-span-1 row-start-2 bg-white rounded-xl shadow border p-6 relative">
          <h3 className="font-bold text-lg mb-4">Employment status</h3>

          <button className="absolute top-6 right-6 text-gray-500 hover:text-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
            </svg>
          </button>

          <p className="text-red-600 text-sm font-semibold">Please select</p>
        </div>

        {/* Years Experience */}
        <div className="col-start-1 col-span-3 row-start-3 bg-white rounded-xl shadow border p-6 flex flex-col justify-center">
          <h3 className="font-bold text-lg mb-1">Years of experience</h3>
          <p className="text-gray-700 text-sm">0 years · 0 months</p>
        </div>

        {/* Experience in Tech */}
        <div className="col-start-1 col-span-1 row-start-4 bg-white rounded-xl shadow border p-6">
          <h3 className="font-bold text-lg mb-2">Experience in Tech</h3>
          <p className="text-gray-700 text-sm">0 years · 0 months</p>
        </div>

        {/* Looking for job */}
        <div className="col-start-2 col-span-1 row-start-4 bg-white rounded-xl shadow border p-6">
          <h3 className="font-bold text-lg mb-2">Looking for a job?</h3>
          <p className="text-gray-700 text-sm mb-3">
            Are you looking for a job?
          </p>

          <div className="w-12 h-6 bg-blue-700 rounded-full relative border border-blue-800">
            <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-1 shadow border"></div>
          </div>
        </div>

        {/* Career Goal */}
        <div className="col-start-3 col-span-1 row-start-4 bg-white rounded-xl shadow border p-6 relative">
          <h3 className="font-bold text-lg mb-2">Top career goal</h3>

          <button className="absolute top-6 right-6 text-gray-500 hover:text-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
            </svg>
          </button>
        </div>

        {/* Skills */}
        <div className="col-start-1 col-span-3 row-start-5 bg-white rounded-xl shadow border p-6 relative flex flex-col items-center justify-center text-center">
          <h3 className="absolute top-6 left-6 font-bold text-lg text-gray-900">
            Skills
          </h3>

          <button className="absolute top-6 right-6 text-gray-500 hover:text-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
            </svg>
          </button>

          <div className="w-16 h-12 bg-gray-200 rounded-lg flex items-center justify-center border mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 text-gray-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
            </svg>
          </div>

          <p className="text-blue-700 font-semibold text-sm mb-2">
            Share your amazing skills!
          </p>

          <p className="text-gray-600 text-sm mb-5 max-w-md">
            Tell us what you're good at to help employers find the right match
          </p>

          <button className="px-6 py-2 rounded-full border border-blue-300 text-blue-700 bg-blue-50 font-semibold text-sm">
            Add Skills
          </button>
        </div>

        {/* Profile & Projects */}
        <div className="col-start-1 col-span-1 row-start-6 bg-white rounded-xl shadow border p-6 relative">
          <h3 className="font-bold text-lg mb-2">Profile & Projects</h3>

          <button className="absolute top-6 right-6 text-gray-500 hover:text-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
            </svg>
          </button>
        </div>

        {/* Resume */}
        <div className="col-start-2 col-span-1 row-start-6 bg-white rounded-xl shadow border p-6 relative">
          <h3 className="font-bold text-lg mb-2">Resume</h3>

          <button className="absolute top-6 right-6 text-gray-500 hover:text-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
            </svg>
          </button>

          <div className="flex items-center gap-2 text-green-600 text-sm font-semibold mt-4">
            <span className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-white text-xs">
              ✓
            </span>
            Peter Ikapolok resume
          </div>

          <div className="flex gap-6 mt-3 text-sm">
            <button className="text-blue-700 underline">Download</button>
            <button className="text-red-600 underline">Remove</button>
          </div>
        </div>

        {/* Work Info Progress */}
        <div className="col-start-3 col-span-1 row-start-6 bg-white rounded-xl shadow border p-6">
          <h3 className="font-bold text-lg mb-6">Work Info</h3>

          <div className="flex items-center justify-center">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 rounded-full border-[14px] border-gray-300"></div>
              <div className="absolute inset-0 rounded-full border-[14px] border-purple-600 border-t-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-gray-900">
                33%
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-3 text-sm text-gray-700">
            <div className="flex items-center gap-3 text-green-600 font-semibold">
              <span className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-white text-xs">
                ✓
              </span>
              LinkedIn
            </div>

            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full border border-gray-600"></span>
              Employment status
            </div>

            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full border border-gray-600"></span>
              Top career goal
            </div>

            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full border border-gray-600"></span>
              Skills
            </div>

            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full border border-gray-600"></span>
              Portfolio & Projects
            </div>

            <div className="flex items-center gap-3 text-green-600 font-semibold">
              <span className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-white text-xs">
                ✓
              </span>
              Resume
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}