import { NavLink } from "react-router-dom";
import Layout from "../components/layout";

export default function DemographicInfo() {
  return (
    <Layout>
      {/* BANNER */}
<div className="mt-8 bg-white rounded-xl shadow border relative">
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
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.07 21 3 13.93 3 5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.59a1 1 0 0 1-.25 1.01l-2.2 2.19z" />
        </svg>
        <span>+254739762594</span>
      </div>

      <div className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
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

      <button className="w-10 h-10 rounded-lg bg-blue-700 text-white flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
        </svg>
      </button>
    </div>
  </div>

  {/* Profile Image (NOT INSIDE overflow-hidden) */}
  <div className="absolute left-8 top-24 w-28 h-28 rounded-full border-4 border-white bg-gray-200 shadow"></div>

  {/* Bottom Profile Info */}
  <div className="pt-16 pb-6 px-8">
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
        <NavLink to="/settings-personal-information" className={({ isActive }) => (isActive ? "text-blue-700" : "hover:text-blue-700")}>
          Personal Information
        </NavLink>
        <NavLink to="/settings-education-info" className={({ isActive }) => (isActive ? "text-blue-700" : "hover:text-blue-700")}>
          Education Info
        </NavLink>
        <NavLink to="/settings-work-info" className={({ isActive }) => (isActive ? "text-blue-700" : "hover:text-blue-700")}>
          Work Info
        </NavLink>
        <NavLink
  to="/demographic-info"
  className={({ isActive }) =>
    isActive ? "text-blue-700" : "hover:text-blue-700"
  }
>
  Demographic Info
</NavLink>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-6 pb-12">
            {/* Left */}
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg text-gray-900">
                  Diversity and inclusion
                </h3>

                <button>
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6-4 1 1-4z" />
                  </svg>
                </button>
              </div>

              <div className="text-sm mt-5 space-y-4 text-gray-700">
                <p>
                  Your current guardianship{" "}
                  <span className="text-red-500 font-semibold">
                    Please enter
                  </span>
                </p>
                <p>
                  Description of the location you live in{" "}
                  <span className="text-red-500 font-semibold">
                    Please enter
                  </span>
                </p>
                <p>
                  Your current living circumstances{" "}
                  <span className="text-red-500 font-semibold">
                    Please enter
                  </span>
                </p>
                <p>
                  Your household monthly income{" "}
                  <span className="text-red-500 font-semibold">
                    Please enter
                  </span>
                </p>
                <p>
                  Do you have a disability?{" "}
                  <span className="text-red-500 font-semibold">
                    Please enter
                  </span>
                </p>
              </div>
            </div>

            {/* Middle */}
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg text-gray-900">
                  Humanitarian status
                </h3>

                <button>
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6-4 1 1-4z" />
                  </svg>
                </button>
              </div>

              <div className="text-sm mt-5 text-gray-700">
                <p className="mb-2">Do you have a humanitarian status?</p>
                <p className="text-red-500 font-semibold">Please select</p>
              </div>
            </div>

            {/* Right */}
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <div className="flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border-[14px] border-gray-300 flex items-center justify-center text-xl font-bold text-gray-900">
                  0%
                </div>
              </div>

              <div className="text-left mt-6 text-sm space-y-3 text-gray-800">
                {[
                  "Current Guardianship",
                  "Location description",
                  "Living Circumstances",
                  "Household monthly income",
                  "Disability",
                  "Humanitarian status",
                ].map((item, i) => (
                  <label key={i} className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full border border-gray-600"></span>
                    {item}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}