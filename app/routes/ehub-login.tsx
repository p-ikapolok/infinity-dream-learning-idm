import { useState } from "react";
import { useNavigate, Link } from "react-router";

export default function EhubLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate login validation
    if (email && password) {
      // Here you can add real authentication logic
      // After successful login, redirect to dashboard
      navigate("/ehub-dashboard");
    } else {
      alert("Please enter your email and password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-2">Login to Ehub</h2>
        <p className="text-gray-600 mb-6">
          Access your Infinity Dream Ehub account.
        </p>

        {/* Social sign in */}
        <div className="flex justify-center space-x-4 mb-6">
          <button className="border rounded px-4 py-2">Google</button>
          <button className="border rounded px-4 py-2">LinkedIn</button>
          <button className="border rounded px-4 py-2">Facebook</button>
        </div>

        {/* Manual sign in */}
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium">Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password *</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter your password"
            />
            <Link to="/forgot" className="text-sm text-blue-600">
              Forgot password
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Login to Ehub
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600">
            Create Ehub account
          </Link>
        </p>

        <p className="text-center mt-6 text-xs text-gray-500">
          Want to go to learning?{" "}
          <Link to="/learning-login" className="text-blue-600">
            Login to Learning
          </Link>
        </p>
      </div>
    </div>
  );
}