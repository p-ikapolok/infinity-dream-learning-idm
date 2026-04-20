"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import { Eye, EyeOff } from "lucide-react";

export default function Password() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <Layout>

      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow">

        {/* Page Title */}
        <h1 className="text-xl mb-4">Account</h1>

        {/* Tabs */}
        <div className="flex gap-6 border-b mb-6 text-sm">
          <span>Payments</span>
          <span>Payments FAQ</span>
          <span>Hub Attendance</span>
          <span className="text-blue-600 border-b-2 border-blue-600 pb-2">
            Password
          </span>
        </div>

        {/* Password Form */}
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
                className="w-full border rounded-md px-3 py-2 pr-10 focus:outline-none"
              />

              <button
                onClick={() => setShowCurrent(!showCurrent)}
                className="absolute right-3 top-2.5 text-gray-400"
              >
                {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
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
                className="w-full border rounded-md px-3 py-2 pr-10 focus:outline-none"
              />

              <button
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 top-2.5 text-gray-400"
              >
                {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
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
                className="w-full border rounded-md px-3 py-2 pr-10 focus:outline-none"
              />

              <button
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-2.5 text-gray-400"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
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