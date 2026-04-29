import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function EhubLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email && password) {
      // Save login state
      localStorage.setItem("isLoggedIn", "true");

      // Go to loading screen FIRST
      navigate("/EhubLoadingScreen");
    } else {
      alert("Please enter your email and password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-2">Login to Hub</h2>
        <p className="text-gray-600 mb-6">
          Access your Infinity Dream Hub account.
        </p>

        {/* Social sign in */}
        <div className="flex justify-center space-x-4 mb-6">
          
          {/* Google */}
          <button className="border rounded px-4 py-2 flex items-center gap-2">
            <svg viewBox="0 0 48 48" className="w-5 h-5">
              <path fill="#EA4335" d="M24 9.5c3.4 0 6.4 1.2 8.7 3.2l6.5-6.5C35.7 2.2 30.2 0 24 0 14.6 0 6.5 5.6 2.6 13.7l7.8 6C12.5 13.1 17.8 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.1 24.5c0-1.7-.2-3.4-.5-5H24v9.5h12.4c-.5 2.7-2 5-4.2 6.5l6.6 5.1c3.8-3.5 6-8.6 6-16.1z"/>
              <path fill="#FBBC05" d="M10.4 28.1c-.5-1.5-.8-3.1-.8-4.6s.3-3.1.8-4.6l-7.8-6C1 16.5 0 20.1 0 24s1 7.5 2.6 11.1l7.8-7z"/>
              <path fill="#34A853" d="M24 48c6.2 0 11.5-2 15.3-5.5l-6.6-5.1c-2 1.3-4.6 2.1-8.7 2.1-6.2 0-11.5-3.6-13.6-8.8l-7.8 6C6.5 42.4 14.6 48 24 48z"/>
            </svg>
            Google
          </button>

          {/* LinkedIn */}
          <button className="border rounded px-4 py-2 flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <path fill="#0A66C2" d="M22 0H2C.9 0 0 .9 0 2v20c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z"/>
              <path fill="#fff" d="M7 19H4V9h3v10zM5.5 7.7C4.7 7.7 4 7 4 6.2S4.7 4.7 5.5 4.7 7 5.4 7 6.2 6.3 7.7 5.5 7.7zM20 19h-3v-5.4c0-1.3-.5-2.1-1.7-2.1-.9 0-1.4.6-1.6 1.2-.1.2-.1.6-.1.9V19h-3s.1-9 0-10h3v1.4c.4-.7 1.2-1.6 3-1.6 2.2 0 3.8 1.4 3.8 4.3V19z"/>
            </svg>
            LinkedIn
          </button>

          {/* Facebook */}
          <button className="border rounded px-4 py-2 flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-5 h-5">
              <path fill="#1877F2" d="M24 12a12 12 0 10-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.6.2 2.6.2v2.9h-1.5c-1.5 0-2 1-2 2v2.3h3.4l-.5 3.5h-2.9v8.4A12 12 0 0024 12z"/>
            </svg>
            Facebook
          </button>

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
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-600">
            Create Hub account
          </Link>
        </p>

        <p className="text-center mt-6 text-xs text-gray-500">
          Want to go to learning?{" "}
          <Link to="/learning-login" className="text-blue-600">
            Login to learning 
          </Link>
        </p>
      </div>
    </div>
  );
}