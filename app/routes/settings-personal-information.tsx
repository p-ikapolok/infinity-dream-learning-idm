import Layout from "../components/layout";

export default function ProfilePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 flex flex-col">

        {/* System Status Bar */}
        <div className="flex justify-between items-center bg-gray-100 px-4 py-1 text-xs text-gray-600">
          <span>8:16 PM</span>
          <div className="flex space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6h16v8H2V6z" />
            </svg>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 7h14v6H3V7z" />
            </svg>
          </div>
        </div>

        {/* Banner */}
        <section className="bg-white p-6 flex items-center space-x-6 border-b">
          <img
            src="/profile-photo.png"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-gray-200"
          />

          <div>
            <h2 className="text-2xl font-bold text-gray-800">Peter Ikapolok</h2>
            <p className="text-gray-600">Graphic Designer</p>
            <p className="text-gray-600">Artlink Media Africa Information Service Solution</p>
            <p className="text-sm text-indigo-600 mt-1">Open to Opportunities</p>

            <div className="flex space-x-6 mt-2 text-sm text-gray-700">
              <span className="flex items-center space-x-1">
                {/* Phone SVG */}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92V19a2 2 0 0 1-2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L7 10a16 16 0 0 0 7 7l1.4-1.7a2 2 0 0 1 2.1-.4c.8.3 1.6.5 2.5.6a2 2 0 0 1 2 2z" />
                </svg>
                <span>+254740748621</span>
              </span>

              <span className="flex items-center space-x-1">
                {/* Mail SVG */}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16v16H4z" />
                  <path d="M4 4l8 8 8-8" />
                </svg>
                <span>ikapolokpeter18@gmail.com</span>
              </span>
            </div>
          </div>
        </section>

        {/* Sub Navigation */}
        <nav className="flex bg-gray-100 px-6 py-2 space-x-6 text-sm font-medium text-gray-700">
          <a href="/personal" className="text-indigo-600 border-b-2 border-indigo-600">Personal Info</a>
          <a href="/education" className="hover:text-indigo-600">Education Info</a>
          <a href="/work" className="hover:text-indigo-600">Work Info</a>
          <a href="/demographic" className="hover:text-indigo-600">Demographic Info</a>
        </nav>

        {/* About */}
        <section className="p-6 bg-white shadow mt-4 mx-6 rounded">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">About Me</h2>
          <p className="text-gray-700">
            I am a dedicated Virtual Assistant specializing in administrative support for entrepreneurs
            and small business owners. With a strong focus on efficiency and organization, I help busy
            professionals streamline their daily tasks so they can focus on growing their business.
          </p>
        </section>

        {/* Details */}
        <section className="p-6 grid grid-cols-2 gap-6 mx-6 mt-4">
          <div>
            <h3 className="font-semibold text-gray-800">Languages</h3>
            <p className="text-gray-700">English (Advanced), Swahili (Native)</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Phone Numbers</h3>
            <p className="text-gray-700">Primary: +254739762594</p>
            <p className="text-gray-700">WhatsApp: +254740748621</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Social Profiles</h3>
            <a href="https://linkedin.com" className="text-indigo-600 underline">LinkedIn</a>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Interests</h3>
            <p className="text-gray-700">Software Developer</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Location</h3>
            <p className="text-gray-700">Country of Origin: Kenya</p>
            <p className="text-gray-700">Residence: Malaba, Kenya</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">Profile Completion</h3>
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