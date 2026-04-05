import { Link } from "react-router";

export default function Ehub() {
  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h1 className="text-2xl font-bold">
          Ehub
        </h1>

        <p className="text-gray-600 mt-1">
          Access tools and platforms
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-8">

          <Link to="/learning">
            <div className="bg-white border rounded-2xl p-6 hover:shadow-sm">
              <div className="text-2xl">🎓</div>
              <h3 className="mt-3 font-semibold">
                Learning
              </h3>
              <p className="text-sm text-gray-500">
                Courses & lessons
              </p>
            </div>
          </Link>

          <Link to="/marketplace">
            <div className="bg-white border rounded-2xl p-6 hover:shadow-sm">
              <div className="text-2xl">📚</div>
              <h3 className="mt-3 font-semibold">
                Courses
              </h3>
              <p className="text-sm text-gray-500">
                Browse programs
              </p>
            </div>
          </Link>

          <Link to="/community">
            <div className="bg-white border rounded-2xl p-6 hover:shadow-sm">
              <div className="text-2xl">💬</div>
              <h3 className="mt-3 font-semibold">
                Community
              </h3>
              <p className="text-sm text-gray-500">
                Discussions
              </p>
            </div>
          </Link>

          <Link to="/dashboard">
            <div className="bg-white border rounded-2xl p-6 hover:shadow-sm">
              <div className="text-2xl">📊</div>
              <h3 className="mt-3 font-semibold">
                Dashboard
              </h3>
              <p className="text-sm text-gray-500">
                Track progress
              </p>
            </div>
          </Link>

          <Link to="/rewards">
            <div className="bg-white border rounded-2xl p-6 hover:shadow-sm">
              <div className="text-2xl">🏆</div>
              <h3 className="mt-3 font-semibold">
                Rewards
              </h3>
              <p className="text-sm text-gray-500">
                Earn badges
              </p>
            </div>
          </Link>

          <Link to="/ai">
            <div className="bg-white border rounded-2xl p-6 hover:shadow-sm">
              <div className="text-2xl">🤖</div>
              <h3 className="mt-3 font-semibold">
                AI Tools
              </h3>
              <p className="text-sm text-gray-500">
                AI assistant
              </p>
            </div>
          </Link>

          <Link to="/support">
            <div className="bg-white border rounded-2xl p-6 hover:shadow-sm">
              <div className="text-2xl">🛟</div>
              <h3 className="mt-3 font-semibold">
                Support
              </h3>
              <p className="text-sm text-gray-500">
                Get help
              </p>
            </div>
          </Link>

          <Link to="/instructor">
            <div className="bg-white border rounded-2xl p-6 hover:shadow-sm">
              <div className="text-2xl">🧑‍🏫</div>
              <h3 className="mt-3 font-semibold">
                Instructor
              </h3>
              <p className="text-sm text-gray-500">
                Teach courses
              </p>
            </div>
          </Link>

        </div>

      </div>

    </div>
  );
}