import Layout from "../components/layout";

export default function ProfilePage() {
  return (
    <Layout>
      {/* Header Banner */}
      <header className="bg-white shadow p-6 flex items-center space-x-6">
        <img
          src="/profile-photo.png"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-gray-200"
        />

        <div>
          <h1 className="text-2xl font-bold text-gray-800">Peter Ikapolok</h1>
          <p className="text-gray-600">Graphic Designer</p>
          <p className="text-gray-600">Artlink Media Africa Information Service Solution</p>
          <p className="text-sm text-indigo-600 mt-1">Open to Opportunities</p>

          <div className="flex space-x-6 mt-2 text-sm text-gray-700">
            <span className="flex items-center space-x-1">
              {/* Phone SVG */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92V19a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.18 2 2 0 0 1 4 2h2.09a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L7.1 9.9a16 16 0 0 0 6 6l1.57-1.11a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>+254740748621</span>
            </span>

            <span className="flex items-center space-x-1">
              {/* Mail SVG */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16v16H4z" />
                <path d="m4 4 8 8 8-8" />
              </svg>
              <span>ikapolokpeter18@gmail.com</span>
            </span>
          </div>
        </div>
      </header>

      {/* About Me */}
      <section className="p-6 bg-white shadow mt-4 mx-6 rounded">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">About Me</h2>
        <p className="text-gray-700">
          I am a dedicated Virtual Assistant specializing in administrative support for entrepreneurs
          and small business owners. With a strong focus on efficiency and organization, I help busy
          professionals streamline their daily tasks so they can focus on growing their business.
        </p>
        <p className="text-gray-700 mt-2">
          What sets me apart: I understand the importance of time and productivity in business. By
          handling routine administrative tasks, I provide my clients with more time to focus on
          strategic decision-making and scaling their business.
        </p>
      </section>

      {/* Details Grid */}
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
          <a href="https://linkedin.com" className="text-indigo-600 underline">
            LinkedIn
          </a>
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
    </Layout>
  );
}