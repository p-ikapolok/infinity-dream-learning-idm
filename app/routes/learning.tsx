export default function LearningPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <div className="flex items-center space-x-3">
          <img src="/images/alx-logo.png" alt="ALX Logo" className="h-8" />
          <h1 className="text-xl font-bold text-gray-800">Learning</h1>
        </div>

        <div className="flex items-center space-x-6">
          <span className="text-gray-700 font-semibold">4210 points</span>

          {/* Bell Icon */}
          <button className="relative text-gray-600 hover:text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1" />
            </svg>
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* 9 dots menu */}
          <button className="text-gray-600 hover:text-gray-800">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="5" cy="5" r="2" />
              <circle cx="12" cy="5" r="2" />
              <circle cx="19" cy="5" r="2" />
              <circle cx="5" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="19" cy="12" r="2" />
              <circle cx="5" cy="19" r="2" />
              <circle cx="12" cy="19" r="2" />
              <circle cx="19" cy="19" r="2" />
            </svg>
          </button>

          <img
            src="/images/profile.png"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar (FULL - NO REMOVALS) */}
        <aside className="w-64 bg-white shadow-lg flex flex-col justify-between">
          <div className="p-6 space-y-6">
            <nav className="space-y-2">

              {/* Home */}
              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l9-7 9 7v11a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2z" />
                </svg>
                <span>Home</span>
              </a>

              {/* My Planning */}
              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>My Planning</span>
              </a>

              {/* Projects */}
              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Projects</span>
              </a>

              {/* Evaluation quizzes */}
              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 20h9" />
                </svg>
                <span>Evaluation quizzes</span>
              </a>

              {/* My courses */}
              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 4v16" />
                </svg>
                <span>My courses</span>
              </a>

              {/* Concepts */}
              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span>Concepts</span>
              </a>

              {/* Conference rooms */}
              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <span>Conference rooms</span>
              </a>

              {/* Sandboxes */}
              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <span>Sandboxes</span>
              </a>

              {/* Video on demand */}
              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <span>Video on demand</span>
              </a>

              {/* Discord */}
              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <span>Discord</span>
              </a>

            </nav>
          </div>

          {/* Profile */}
          <div className="p-6 border-t">
            <div className="flex items-center space-x-3">
              <img src="/images/profile.png" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold text-gray-800">My Profile</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Front-End Web Development
          </h1>
          <p className="text-gray-600 mb-6">Average Score: 87.93%</p>

          <div className="space-y-4">
            {["ALX AiCE", "Front-End Web Development", "Virtual Assistant"].map((item, i) => (
              <div key={i} className="bg-white p-4 shadow rounded-lg">
                <h2 className="font-semibold">{item}</h2>
                <p className="text-gray-600">Validated</p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <footer className="bg-blue-900 text-white px-6 py-6 mt-10">
            <div className="text-center mb-4">
              <h2 className="text-lg font-bold">alx eHub</h2>
              <p className="text-sm">The community of those who Do Hard Things.</p>
            </div>

            <div className="flex justify-center space-x-4 text-sm mb-4">
              <a href="#">Home</a>
              <a href="#">Learning</a>
              <a href="#">Community</a>
              <a href="#">Support</a>
            </div>

            <p className="text-center text-xs">© 2026 Sand. All rights reserved.</p>
          </footer>

        </main>
      </div>
    </div>
  );
}