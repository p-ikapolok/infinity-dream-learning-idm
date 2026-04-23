import { NavLink } from "react-router-dom";
import Layout from "../components/layout";

export default function DemographicInfo() {
  return (
    <Layout>
      {/* PAGE WRAPPER */}
      <div className="mt-8">

        {/* BANNER */}
        <div className="bg-white rounded-xl shadow border relative">
          {/* Cover */}
          <div className="h-44 rounded-t-xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 relative overflow-hidden">

            {/* Globe */}
            <div className="absolute top-6 right-6 w-20 h-20 rounded-full border-4 border-white/40 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm6.93 9h-2.02a15.72 15.72 0 0 0-1.2-5.09A8.03 8.03 0 0 1 18.93 11zM12 4c.83 0 2.14 2.05 2.73 6H9.27C9.86 6.05 11.17 4 12 4zM4.07 13h2.02c.2 1.85.67 3.62 1.2 5.09A8.03 8.03 0 0 1 4.07 13zm2.02-2H4.07a8.03 8.03 0 0 1 3.22-5.09A15.72 15.72 0 0 0 6.09 11zM12 20c-.83 0-2.14-2.05-2.73-6h5.46c-.59 3.95-1.9 6-2.73 6zm3.69-1.91c.53-1.47 1-3.24 1.2-5.09h2.02a8.03 8.03 0 0 1-3.22 5.09zM16.91 11H7.09c.21-2.05.75-3.99 1.42-5.32C9.5 4.59 10.75 4 12 4s2.5.59 3.49 1.68c.67 1.33 1.21 3.27 1.42 5.32z" />
              </svg>
            </div>

            {/* Contact Info */}
            <div className="absolute bottom-6 right-6 text-white text-xs space-y-2">
              <div className="flex items-center gap-2">
                <span>+254739762594</span>
              </div>

              <div className="flex items-center gap-2">
                <span>ikapolokpeter@gmail.com</span>
              </div>
            </div>

            {/* Banner Name */}
            <div className="absolute left-44 top-12 text-white">
              <h2 className="text-2xl font-bold">Peter Ikapolok</h2>
              <p className="text-sm opacity-90">Graphic designer</p>
            </div>

            {/* Buttons */}
            <div className="absolute right-6 top-24 flex gap-3">
              <button className="px-4 py-2 rounded-lg bg-blue-100 text-blue-700 font-semibold text-sm border border-blue-200">
                Copy link
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="absolute left-8 top-24 w-28 h-28 rounded-full border-4 border-white bg-gray-200 shadow"></div>

          {/* Bottom Profile Info */}
          <div className="pt-16 pb-6 px-8">
            <h3 className="text-xl font-bold text-gray-900">Peter ikapolok</h3>
            <p className="text-gray-600 text-sm mt-1">Mr · Kenya Busia</p>

            <div className="mt-2 inline-flex items-center px-4 py-1 rounded-full border border-green-400 bg-green-50 text-green-700 text-sm font-semibold">
              Open to Opportunities
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="mt-6 flex gap-8 text-sm font-semibold text-gray-600">
          <NavLink to="/settings-personal-information" className={({ isActive }) => (isActive ? "text-blue-700" : "hover:text-blue-700")}>
            Personal Information
          </NavLink>

          <NavLink to="/settings-education-info" className={({ isActive }) => (isActive ? "text-blue-700" : "hover:text-blue-700")}>
            Education Info
          </NavLink>

          <NavLink to="/settings-work-info" className={({ isActive }) => (isActive ? "text-blue-700" : "hover:text-blue-700")}>
            Work Info
          </NavLink>

          <NavLink to="/demographic-info" className={({ isActive }) => (isActive ? "text-blue-700" : "hover:text-blue-700")}>
            Demographic Info
          </NavLink>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6 mt-6 pb-12">

          {/* LEFT */}
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h3 className="font-bold text-lg text-gray-900">
              Diversity and inclusion
            </h3>

            <div className="text-sm mt-5 space-y-4 text-gray-700">
              <p>Your current guardianship <span className="text-red-500 font-semibold">Please enter</span></p>
              <p>Location description <span className="text-red-500 font-semibold">Please enter</span></p>
              <p>Living circumstances <span className="text-red-500 font-semibold">Please enter</span></p>
              <p>Monthly income <span className="text-red-500 font-semibold">Please enter</span></p>
              <p>Disability <span className="text-red-500 font-semibold">Please enter</span></p>
            </div>
          </div>

          {/* MIDDLE */}
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h3 className="font-bold text-lg text-gray-900">
              Humanitarian status
            </h3>

            <p className="mt-5 text-sm text-gray-700">
              Do you have a humanitarian status?
            </p>

            <p className="text-red-500 font-semibold text-sm mt-2">
              Please select
            </p>
          </div>

          {/* RIGHT */}
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-[14px] border-gray-300 flex items-center justify-center text-xl font-bold">
                0%
              </div>
            </div>
          </div>

        </div>

      </div>
    </Layout>
  );
}