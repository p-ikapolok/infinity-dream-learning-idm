"use client";

import Layout from "./components/Layout";

export default function AccountAttendance() {
  return (
    <Layout>
      <div className="p-6">
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow">

          <h1 className="text-xl mb-4">Account</h1>

          <div className="flex gap-6 border-b mb-6 text-sm">
            <span>Payments</span>
            <span>Payments FAQ</span>
            <span className="text-blue-600 border-b-2 border-blue-600 pb-2">
              Hub Attendance
            </span>
            <span>Password</span>
          </div>

          <h2 className="font-semibold">Hub Attendance</h2>
          <p className="text-sm text-gray-500 mb-4">
            Below is a list of your attendances
          </p>

          <div className="flex gap-3 mb-4">
            <select className="border p-2 rounded">
              <option>Hub Name</option>
            </select>

            <select className="border p-2 rounded">
              <option>Date Range</option>
            </select>

            <button className="border px-3 py-2 text-blue-600 rounded">
              Clear Filters
            </button>
          </div>

          <div className="border p-6 text-center text-gray-400 rounded">
            No data to display
          </div>

        </div>
      </div>
    </Layout>
  );
}