import Layout from "../components/layout";

export default function ProfilePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 flex flex-col">

        {/* System Status Bar */}
        <div className="flex justify-between items-center bg-gray-100 px-4 py-1 text-xs text-gray-600">
          <span>8:16 PM</span>
          <div className="flex space-x-2">

            {/* signal icon */}
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 10h2v10H3V10zm4-4h2v14H7V6zm4 6h2v8h-2v-8zm4-3h2v11h-2V9zm4-3h2v14h-2V6z"/>
            </svg>

            {/* battery icon */}
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 7h-1V5H9v2H8a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V9a2 2 0 00-2-2zm-7 3h6v8H9v-8z"/>
            </svg>

          </div>
        </div>

        {/* Sub-Navigation Tabs */}
        <nav className="flex bg-gray-100 px-6 py-2 space-x-6 text-sm font-medium text-gray-700">
          <a href="/payments" className="text-indigo-600 border-b-2 border-indigo-600">Payments</a>
          <a href="/faq" className="hover:text-indigo-600">Payments FAQ</a>
          <a href="/attendance" className="hover:text-indigo-600">Hub Attendance</a>
          <a href="/password" className="hover:text-indigo-600">Password</a>
          <a href="/profile" className="hover:text-indigo-600">Profile</a>
        </nav>

        {/* Profile Banner */}
        <section className="bg-indigo-50 p-6 flex items-center space-x-6">
          <img
            src="/profile-photo.png"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-white shadow"
          />

          <div>
            <h2 className="text-2xl font-bold text-gray-800">Peter Ikapolok</h2>
            <p className="text-gray-600">Graphic Designer</p>
            <p className="text-gray-600">
              Artlink Media Africa Information Service Solution
            </p>

            <div className="flex space-x-6 mt-2 text-sm text-gray-700">

              {/* phone icon */}
              <span className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8a15.05 15.05 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.36 2.3.56 3.5.56a1 1 0 011 1V21a1 1 0 01-1 1C10.3 22 2 13.7 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.4.56 3.5a1 1 0 01-.24 1z"/>
                </svg>
                <span>+254739762594</span>
              </span>

              {/* mail icon */}
              <span className="flex items-center space-x-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5L4 8V6l8 5 8-5v2z"/>
                </svg>
                <span>peter@example.com</span>
              </span>

            </div>
          </div>
        </section>

        {/* About Me */}
        <section className="p-6 bg-white shadow mt-4 mx-6 rounded">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">About Me</h3>
          <p className="text-gray-700">
            Dedicated Virtual Assistant specializing in administrative support for entrepreneurs
            and small business owners. Focused on efficiency, organization, and productivity.
          </p>
        </section>

        {/* Details Grid */}
        <section className="p-6 grid grid-cols-2 gap-6 mx-6 mt-4">
          <div>
            <h4 className="font-semibold text-gray-800">Languages</h4>
            <p className="text-gray-700">English (Advanced), Swahili (Native)</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800">Phone Numbers</h4>
            <p className="text-gray-700">Primary: +254739762594</p>
            <p className="text-gray-700">WhatsApp: +254740748621</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800">Social Profiles</h4>
            <a href="https://linkedin.com" className="text-indigo-600 underline">
              LinkedIn
            </a>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800">Interests</h4>
            <p className="text-gray-700">Software Developer</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800">Location</h4>
            <p className="text-gray-700">Origin: Kenya</p>
            <p className="text-gray-700">Residence: Malaba, Kenya</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800">Profile Completion</h4>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full w-full"></div>
            </div>
            <p className="text-sm mt-1 text-gray-600">100% Complete</p>
          </div>
        </section>

      </div>
    </Layout>
  );
}