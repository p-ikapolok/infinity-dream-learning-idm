import { Link } from "react-router";

export default function LearningLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-center text-3xl font-bold mb-6 text-purple-600">
          Infinity Learning
        </h1>

        <button className="w-full bg-gray-800 text-white py-2 rounded mb-4">
          Log in with Ehub
        </button>

        <p className="text-center text-gray-500 mb-4">– OR –</p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span className="text-sm">Remember me</span>
            </label>
            <Link to="/forgot" className="text-sm text-blue-600">
              Forgot your password?
            </Link>
          </div>

          <button className="w-full bg-purple-600 text-white py-2 rounded">
            Login to Learning
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6">
          Infinity Dream Learning © 2026
        </p>
      </div>
    </div>
  );
}