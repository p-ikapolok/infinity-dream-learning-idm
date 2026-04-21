import { NavLink } from "react-router-dom";
import Layout from "../components/layout";

export default function PersonalInformation() {
  return (
    <Layout>
      {/* PROFILE BANNER */}
      <section className="pt-6">
        <div className="relative bg-white rounded-xl shadow-md overflow-hidden border">
          <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-700 relative">
            <div className="absolute right-6 top-6 w-16 h-16 bg-blue-900 rounded-full opacity-40"></div>
          </div>

          {/* Profile Image */}
          <div className="absolute top-10 left-6 w-24 h-24 rounded-full bg-gray-200 border-4 border-white shadow-md"></div>

          {/* Name Overlay */}
          <div className="absolute top-12 left-36 text-white">
            <h1 className="text-2xl font-bold">Peter Ikapolok</h1>
            <p className="text-sm opacity-90">Graphic designer</p>
          </div>

          {/* Buttons */}
          <div className="absolute bottom-5 right-6 flex gap-3">
            <button className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow text-sm font-semibold border">
              Copy link
            </button>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow text-sm font-semibold flex items-center justify-center">
              {/* Pencil Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm2.92 2.83H5v-.92l9.06-9.06.92.92L5.92 20.08zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
              </svg>
            </button>
          </div>

          {/* Bottom Info */}
          <div className="px-6 pt-28 pb-5">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-gray-900">
                Peter ikapolok
              </h2>
              <span className="text-blue-600 font-semibold">in</span>
            </div>

            <p className="text-gray-600 text-sm mt-1">Mr · Kenya Busia</p>

            <div className="mt-2 inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold border border-green-300">
              Open to Opportunities
            </div>
          </div>
        </div>
      </section>

      {/* TABS */}
      <nav className="mt-6">
        <div className="bg-white rounded-xl shadow-md px-6 py-3 flex gap-6 text-sm font-semibold border">
          <NavLink
            to="/personal-information"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-2"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Personal Information
          </NavLink>

          <NavLink
            to="/education-info"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-2"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Education Info
          </NavLink>

          <NavLink
            to="/work-info"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-2"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Work Info
          </NavLink>

          <button className="text-gray-600 hover:text-blue-600">
            Demographic Info
          </button>
        </div>
      </nav>

      {/* PAGE BODY */}
      <section className="py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ABOUT ME */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6 relative border">
            <h2 className="font-bold text-lg mb-4">About me</h2>

            <button className="absolute top-6 right-6 text-gray-500">
              {/* Pencil Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm2.92 2.83H5v-.92l9.06-9.06.92.92L5.92 20.08zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
              </svg>
            </button>

            <p className="text-gray-700 leading-relaxed text-sm">
              I am a dedicated Virtual Assistant specializing in administrative
              support for entrepreneurs and small business owners. With a strong
              focus on efficiency and organization, I help busy professionals
              streamline their daily tasks so they can focus on growing their
              business.
              <br />
              <br />
              What sets me apart I understand the importance of time and
              productivity in business. By handling routine administrative
              tasks, I provide my clients with more time to focus on strategic
              decision-making and scaling their business.
            </p>
          </div>

          {/* COMPLETION */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center border">
            <div className="w-28 h-28 rounded-full border-[10px] border-purple-500 flex items-center justify-center font-bold text-xl text-gray-800">
              100%
            </div>

            <div className="mt-6 text-sm space-y-2">
              <p className="text-green-600 font-semibold">✔ About Me</p>
              <p className="text-green-600 font-semibold">✔ Languages</p>
              <p className="text-green-600 font-semibold">✔ Social Profiles</p>
              <p className="text-green-600 font-semibold">✔ Interests</p>
            </div>
          </div>

          {/* LANGUAGES */}
          <div className="bg-white rounded-xl shadow-md p-6 relative border">
            <h2 className="font-bold text-lg mb-3">Languages</h2>

            <button className="absolute top-6 right-6 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm2.92 2.83H5v-.92l9.06-9.06.92.92L5.92 20.08zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
              </svg>
            </button>

            <p className="text-gray-700 text-sm">
              <span className="font-semibold">English</span> · Advanced
            </p>
            <p className="text-gray-700 text-sm mt-2">
              <span className="font-semibold">Swahili</span> · Native
            </p>
          </div>

          {/* PHONE NUMBER */}
          <div className="bg-white rounded-xl shadow-md p-6 relative border">
            <h2 className="font-bold text-lg mb-3">Phone Number</h2>

            <button className="absolute top-6 right-6 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm2.92 2.83H5v-.92l9.06-9.06.92.92L5.92 20.08zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
              </svg>
            </button>

            <p className="text-gray-700 text-sm">
              <span className="font-semibold">Primary</span> · +254739762594
            </p>

            <p className="text-gray-700 text-sm mt-2">
              <span className="font-semibold">WhatsApp</span> · +254740748621
            </p>
          </div>

          {/* SOCIAL PROFILES */}
          <div className="bg-white rounded-xl shadow-md p-6 relative border">
            <h2 className="font-bold text-lg mb-3">Social Profiles</h2>

            <button className="absolute top-6 right-6 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm2.92 2.83H5v-.92l9.06-9.06.92.92L5.92 20.08zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
              </svg>
            </button>

            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
              in
            </div>
          </div>

          {/* INTERESTS */}
          <div className="bg-white rounded-xl shadow-md p-6 relative border">
            <h2 className="font-bold text-lg mb-3">Interests</h2>

            <button className="absolute top-6 right-6 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm2.92 2.83H5v-.92l9.06-9.06.92.92L5.92 20.08zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
              </svg>
            </button>

            <span className="inline-block bg-gray-200 px-4 py-1 rounded-full text-sm font-semibold text-gray-700 border">
              Software developer
            </span>
          </div>

          {/* CURRENT LOCATION */}
          <div className="bg-white rounded-xl shadow-md p-6 relative border">
            <h2 className="font-bold text-lg mb-3">Current Location</h2>

            <button className="absolute top-6 right-6 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zm2.92 2.83H5v-.92l9.06-9.06.92.92L5.92 20.08zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
              </svg>
            </button>

            <p className="text-gray-700 text-sm">
              <span className="font-semibold">Country of Origin</span> · Kenya
            </p>

            <p className="text-gray-700 text-sm mt-2">
              <span className="font-semibold">Residence</span> · Malaba, Kenya
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}