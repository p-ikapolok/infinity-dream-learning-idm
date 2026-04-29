import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function EhubLoadingScreen() {
  const navigate = useNavigate();

  // Auto redirect after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard"); // change to your main page
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-white text-center px-6">
      
      {/* Logo */}
      <h1 className="text-7xl font-bold text-blue-600 mb-6">
        Hi!
      </h1>

      {/* Title */}
      <h2 className="text-xl font-semibold text-blue-600 mb-4">
        Welcome to the eHub.
      </h2>

      {/* Subtitle */}
      <p className="text-gray-500 max-w-xs leading-relaxed">
        We are setting up your profile
        <br />
        this might take a while.
      </p>

      {/* Optional spinner */}
      <div className="mt-6">
        <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>

    </div>
  );
}