import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();

  const [mounted, setMounted] = useState(false);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogin = () => {
    if (!mounted) return;

    const saved = localStorage.getItem("registeredUser");

    if (!saved) {
      setLoginError("No user found. Please register.");
      return;
    }

    const user = JSON.parse(saved);

    if (loginEmail === user.email && loginPassword === user.password) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/dashboard");
    } else {
      setLoginError("Invalid email or password");
    }
  };

  const handleSocialLogin = (provider: string) => {
    const user = {
      fullName: provider,
      email: provider + "@social.com",
    };

    localStorage.setItem("currentUser", JSON.stringify(user));
    navigate("/dashboard");
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white w-80 p-6 rounded-xl shadow">
        <h1 className="text-xl font-bold text-purple-700">Login</h1>

        <input
          placeholder="Email"
          className="border p-2 w-full mt-2 rounded"
          onChange={(e) => setLoginEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mt-2 rounded"
          onChange={(e) => setLoginPassword(e.target.value)}
        />

        {loginError && (
          <p className="text-red-500 text-sm mt-2">{loginError}</p>
        )}

        <button
          onClick={handleLogin}
          className="bg-purple-600 text-white w-full py-2 mt-4 rounded"
        >
          Login
        </button>

        <div className="flex gap-2 mt-3">
          <button
            onClick={() => handleSocialLogin("Google")}
            className="border w-full py-2 rounded flex justify-center gap-2"
          >
            <FaGoogle /> Google
          </button>

          <button
            onClick={() => handleSocialLogin("Github")}
            className="border w-full py-2 rounded flex justify-center gap-2"
          >
            <FaGithub /> Github
          </button>
        </div>

        <Link
          to="/register"
          className="block text-sm mt-3 text-purple-600 text-center"
        >
          Create account
        </Link>
      </div>
    </div>
  );
}