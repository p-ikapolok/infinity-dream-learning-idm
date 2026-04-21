import { useState } from "react";
import Layout from "../components/Layout";
import { Link, useLocation } from "react-router-dom";

export default function Password() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const location = useLocation();

  const tabs = [
    { path: "/account/payments", label: "Payments" },
    { path: "/account/faq", label: "Payments FAQ" },
    { path: "/account/attendance", label: "Hub Attendance" },
    { path: "/account/password", label: "Password" },
  ];

  return (
    <Layout>
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow">

        {/* Title */}
        <h1 className="text-xl mb-4">Account</h1>

        {/* Tabs */}
        <div className="flex gap-6 border-b mb-6 text-sm">
          {tabs.map((tab) => (
            <Link
              key={tab.path}
              to={tab.path}
              className={`pb-2 ${
                location.pathname === tab.path
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>

        {/* Form */}
        <div className="max-w-md">

          <h2 className="text-lg font-semibold mb-1">Password</h2>
          <p className="text-sm text-gray-500 mb-6">
            Please enter your current password to change your password.
          </p>

          {/* Current Password */}
          <div className="mb-4">
            <label className="text-sm text-gray-600 block mb-1">
              Current password
            </label>

            <div className="relative">
              <input
                type={showCurrent ? "text" : "password"}
                placeholder="Enter your current password"
                className="w-full border rounded-md px-3 py-2 pr-10"
              />

              <button
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-3 top-2.5"
              >
                {showCurrent ? (
                  /* Eye OFF SVG */
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor">
                    <path d="M17.94 17.94A10.94 10.94 0 0112 20C5 20 1 12 1 12a21.77 21.77 0 015.06-6.94"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                ) : (
                  /* Eye SVG */
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor">
                    <path d="M1 12s4-6 11-6 11 6 11 6-4 6-11 6S1 12 1 12z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div className="mb-4">
            <label className="text-sm text-gray-600 block mb-1">
              New password
            </label>

            <div className="relative">
              <input
                type={showNew ? "text" : "password"}
                placeholder="Enter the new password"
                className="w-full border rounded-md px-3 py-2 pr-10"
              />

              <button
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 top-2.5"
              >
                {showNew ? (
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor">
                    <path d="M17.94 17.94A10.94 10.94 0 0112 20C5 20 1 12 1 12"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor">
                    <path d="M1 12s4-6 11-6 11 6 11 6"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="text-sm text-gray-600 block mb-1">
              Confirm new password
            </label>

            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm new password"
                className="w-full border rounded-md px-3 py-2 pr-10"
              />

              <button
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-2.5"
              >
                {showConfirm ? (
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor">
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full">
            Update password
          </button>

        </div>
      </div>
    </Layout>
  );
}