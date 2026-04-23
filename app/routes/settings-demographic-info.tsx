import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";

export default function DemographicInfo() {
  const tabClass = ({ isActive }) =>
    `pb-3 font-semibold text-sm ${
      isActive
        ? "text-blue-700 border-b-2 border-blue-700"
        : "text-gray-600 hover:text-blue-700"
    }`;

  return (
    <Layout>
      <div className="bg-[#f5f7fb] min-h-screen py-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Banner */}
          <div className="relative rounded-xl overflow-hidden">
            <img src="/banner.jpg" className="w-full h-40 object-cover" />
            <div className="absolute -bottom-12 left-6">
              <img
                src="/avatar.jpg"
                className="w-24 h-24 rounded-full border-4 border-white"
              />
            </div>
          </div>

          {/* Profile */}
          <div className="mt-16 flex justify-between items-center">
            <div>
              <h1 className="text-xl font-semibold">Peter Ikapolok</h1>
              <p className="text-gray-500 text-sm">Mr • Kenya Busia</p>

              <span className="inline-block mt-2 text-green-600 text-xs border border-green-500 px-3 py-1 rounded-full font-semibold bg-green-50">
                Open to Opportunities
              </span>
            </div>

            <div className="flex gap-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold">
                Copy link
              </button>

              {/* Edit Icon */}
              <button className="border p-2 rounded-md bg-white">
                <svg
                  className="w-4 h-4 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6-4 1 1-4z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-10 mt-8 border-b border-gray-200">
            <NavLink to="/personal-info" className={tabClass}>
              Personal Information
            </NavLink>

            <NavLink to="/education-info" className={tabClass}>
              Education Info
            </NavLink>

            <NavLink to="/work-info" className={tabClass}>
              Work Info
            </NavLink>

            <NavLink to="/demographic-info" className={tabClass}>
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