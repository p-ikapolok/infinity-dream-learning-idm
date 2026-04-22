import { NavLink } from "react-router-dom";
import Layout from "../components/layout";

export default function EducationInfo() {
  return (
    <Layout>
      {/* BANNER */}
      <div className="mt-8 bg-white rounded-xl shadow border overflow-hidden relative">
        <div className="h-44 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 relative">
          {/* globe circle */}
          <div className="absolute top-6 right-6 w-20 h-20 rounded-full border-4 border-white/40 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-9 h-9 text-white"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm6.93 9h-2.02a15.72 15.72 0 0 0-1.2-5.09A8.03 8.03 0 0 1 18.93 11zM12 4c.83 0 2.14 2.05 2.73 6H9.27C9.86 6.05 11.17 4 12 4zM4.07 13h2.02c.2 1.85.67 3.62 1.2 5.09A8.03 8.03 0 0 1 4.07 13zm2.02-2H4.07a8.03 8.03 0 0 1 3.22-5.09A15.72 15.72 0 0 0 6.09 11zM12 20c-.83 0-2.14-2.05-2.73-6h5.46c-.59 3.95-1.9 6-2.73 6zm3.69-1.91c.53-1.47 1-3.24 1.2-5.09h2.02a8.03 8.03 0 0 1-3.22 5.09zM16.91 11H7.09c.21-2.05.75-3.99 1.42-5.32C9.5 4.59 10.75 4 12 4s2.5.59 3.49 1.68c.67 1.33 1.21 3.27 1.42 5.32z" />
            </svg>
          </div>
        </div>

        {/* profile image */}
        <div className="absolute -bottom-10 left-8 w-28 h-28 rounded-full border-4 border-white bg-gray-200 shadow"></div>

        {/* name overlay */}
        <div className="absolute bottom-4 left-44 text-white">
          <h2 className="text-2xl font-bold">Peter Ikapolok</h2>
          <p className="text-sm opacity-90">Graphic designer</p>
        </div>

        {/* buttons right */}
        <div className="absolute bottom-6 right-8 flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-semibold text-sm border border-blue-200">
            Copy link
          </button>

          <button className="w-10 h-10 rounded-lg bg-blue-700 text-white flex items-center justify-center">
            {/* edit */}
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

        {/* bottom info */}
        <div className="pt-14 pb-6 px-8">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-gray-900">Peter ikapolok</h3>

            <div className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-sm text-xs font-bold">
              in
            </div>
          </div>

          <p className="text-gray-600 text-sm mt-1">Mr · Kenya Busia</p>

          <div className="mt-2 inline-flex items-center px-4 py-1 rounded-full border border-green-400 bg-green-50 text-green-700 text-sm font-semibold">
            Open to Opportunities
          </div>
        </div>
      </div>

      {/* TABS */}
      <div className="mt-6 flex gap-8 text-sm font-semibold text-gray-600">
        <NavLink
          to="/personal-information"
          className={({ isActive }) =>
            isActive ? "text-blue-700" : "hover:text-blue-700"
          }
        >
          Personal Information
        </NavLink>

        <NavLink
          to="/education-info"
          className={({ isActive }) =>
            isActive ? "text-blue-700" : "hover:text-blue-700"
          }
        >
          Education Info
        </NavLink>

        <NavLink
          to="/work-info"
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

      {/* EXACT GRID */}
      <div className="mt-6 grid grid-cols-3 gap-6 pb-12">
        {/* EDUCATION MAIN (span 2 cols) */}
        <div className="col-span-2 bg-white rounded-xl shadow border p-6 relative h-[260px] flex flex-col items-center justify-center text-center">
          <h3 className="absolute top-6 left-6 font-bold text-lg text-gray-900">
            Education
          </h3>

          {/* plus icon */}
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

          {/* center icon */}
          <div className="w-16 h-12 bg-gray-200 rounded-lg flex items-center justify-center border mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 text-gray-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3zm0 10.18L4.24 9 12 4.82 19.76 9 12 13.18z" />
              <path d="M11 12h2v7h-2z" />
            </svg>
          </div>

          <p className="text-blue-700 font-semibold text-sm mb-2">
            You didn't add your Education level yet...
          </p>

          <p className="text-gray-600 text-sm mb-5 max-w-md">
            Share your education to stand out and catch the attention of
            relevant employers
          </p>

          <button className="px-6 py-2 rounded-full border border-blue-300 text-blue-700 bg-blue-50 font-semibold text-sm">
            Add Education
          </button>
        </div>

        {/* EDUCATION PROGRESS (right) */}
        <div className="col-span-1 bg-white rounded-xl shadow border p-6 h-[460px]">
          <h3 className="font-bold text-lg mb-6">Education</h3>

          <div className="flex items-center justify-center">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 rounded-full border-[14px] border-gray-300"></div>
              <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-gray-900">
                0%
              </div>
            </div>
          </div>

          <div className="mt-10 space-y-4 text-sm text-gray-700">
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full border border-gray-600"></span>
              Education
            </div>

            <div className="flex items-center gap-3">
              <span className="w-4 h-4 rounded-full border border-gray-600"></span>
              Achievement
            </div>
          </div>
        </div>

        {/* PREVIOUS ENROLLMENTS (span 2 cols like screenshot row) */}
        <div className="col-span-2 bg-white rounded-xl shadow border p-6 h-[140px]">
          <h3 className="font-bold text-lg mb-4">Previous Enrollments</h3>

          <div className="flex items-center justify-between">
            <p className="text-gray-700 text-sm">
              Have you enrolled in an ALX course before?
            </p>

            <div className="flex items-center gap-3">
              {/* toggle */}
              <div className="w-12 h-6 bg-gray-300 rounded-full relative border">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-1 shadow border"></div>
              </div>

              <span className="text-gray-700 text-sm font-semibold">No</span>
            </div>
          </div>
        </div>

        {/* ACHIEVEMENT */}
        <div className="col-span-1 bg-white rounded-xl shadow border p-6 relative h-[140px]">
          <h3 className="font-bold text-lg mb-4">Achievement</h3>

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

          <p className="text-gray-700 text-sm mb-2">
            <span className="font-semibold">Highest Level</span> ·
          </p>

          <p className="text-gray-700 text-sm">
            <span className="font-semibold">Field of study</span> ·
          </p>
        </div>
      </div>
    </Layout>
  );
}