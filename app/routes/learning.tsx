import {
  HomeIcon,
  ClipboardDocumentListIcon,
  AcademicCapIcon,
  BookOpenIcon,
  PuzzlePieceIcon,
  UsersIcon,
  RectangleStackIcon,
  VideoCameraIcon,
  ChatBubbleLeftRightIcon,
  BellIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

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

          <button className="text-gray-600 hover:text-gray-800 relative">
            <BellIcon className="w-6 h-6" />
            <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <button className="text-gray-600 hover:text-gray-800">
            <Squares2X2Icon className="w-6 h-6" />
          </button>

          <img
            src="/images/profile.png"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg flex flex-col justify-between">
          <div className="p-6 space-y-6">
            <nav className="space-y-2">
              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <HomeIcon className="w-5 h-5" />
                <span>Home</span>
              </a>

              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <ClipboardDocumentListIcon className="w-5 h-5" />
                <span>My Planning</span>
              </a>

              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <AcademicCapIcon className="w-5 h-5" />
                <span>Projects</span>
              </a>

              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <BookOpenIcon className="w-5 h-5" />
                <span>Evaluation quizzes</span>
              </a>

              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <PuzzlePieceIcon className="w-5 h-5" />
                <span>My courses</span>
              </a>

              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <UsersIcon className="w-5 h-5" />
                <span>Concepts</span>
              </a>

              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <RectangleStackIcon className="w-5 h-5" />
                <span>Conference rooms</span>
              </a>

              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <RectangleStackIcon className="w-5 h-5" />
                <span>Sandboxes</span>
              </a>

              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <VideoCameraIcon className="w-5 h-5" />
                <span>Video on demand</span>
              </a>

              <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                <ChatBubbleLeftRightIcon className="w-5 h-5" />
                <span>Discord</span>
              </a>
            </nav>
          </div>

          {/* Profile */}
          <div className="p-6 border-t">
            <div className="flex items-center space-x-3">
              <img
                src="/images/profile.png"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-gray-800 font-semibold">My Profile</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-10">
          <header className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Front-End Web Development
            </h1>
            <p className="text-gray-600">Average Score: 87.93%</p>
          </header>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Upcoming events
              </h2>
              <p className="text-gray-600">No upcoming event</p>
            </div>

            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Current projects
              </h2>
              <p className="text-gray-600">None, enjoy the silence</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { title: "ALX AiCE - AI Career Essentials", status: "Validated", avg: "79.28%", overall: "79.28%" },
              { title: "Front-End Web Development", status: "Validated", avg: "87.93%", overall: "87.93%" },
              { title: "Virtual Assistant", status: "Validated", avg: "98.04%", overall: "98.04%" },
              { title: "Professional Foundations", status: "Validated", avg: "97.37%", overall: "97.37%" },
              { title: "Freelancer Academy - 4-week", status: "Not validated", avg: "0.0%", overall: "0.0%" },
            ].map((course, idx) => (
              <div key={idx} className="bg-white shadow rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Scores - {course.title}
                </h3>
                <p className="text-gray-600">Status: {course.status}</p>
                <p className="text-gray-600">Average: {course.avg}</p>
                <p className="text-gray-600">Overall: {course.overall}</p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <footer className="bg-blue-900 text-white px-6 py-6 mt-10">
            <div className="text-center mb-4">
              <h2 className="text-lg font-bold">alx eHub</h2>
              <p className="text-sm">The community of those who Do Hard Things.</p>
            </div>

            <div className="flex flex-wrap justify-center space-x-4 text-sm mb-4">
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