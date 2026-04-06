import { Link } from "react-router";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-2">
          Create your Infinity Dream account
        </h2>

        {/* Social sign up */}
        <div className="flex justify-center space-x-4 mb-6">
          <button className="border rounded px-4 py-2">Google</button>
          <button className="border rounded px-4 py-2">LinkedIn</button>
          <button className="border rounded px-4 py-2">Facebook</button>
        </div>

        {/* Manual sign up */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">First Name *</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your first name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Last Name *</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your last name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email *</label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password *</label>
            <input
              type="password"
              className="w-full border rounded px-3 py-2"
              placeholder="Create a password"
            />
            <p className="text-xs text-gray-500 mt-1">
              Must be at least 8 characters, contain uppercase, lowercase,
              numeric and symbol characters.
            </p>
          </div>

          <p className="text-xs text-gray-600">
            By signing up you agree to Infinity Dream Learning terms and privacy policy.
          </p>

          <label className="flex items-center space-x-2 text-sm">
            <input type="checkbox" />
            <span>
              I agree to receive learning updates and platform notifications.
            </span>
          </label>

          {/* CAPTCHA placeholder */}
          <div className="flex items-center space-x-2 border rounded px-3 py-2">
            <input type="checkbox" />
            <span className="text-sm">I’m not a robot</span>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded">
            Create account
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/ehub-login" className="text-blue-600">
            Login to Ehub
          </Link>
        </p>

        <p className="text-center mt-6 text-xs text-gray-500">
          Need help?{" "}
          <Link to="/support" className="text-blue-600">
            Contact support
          </Link>
        </p>
      </div>
    </div>
  );
}