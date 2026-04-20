"use client";

import Layout from "@/components/Layout";

export default function AccountPayments() {
  return (
    <Layout>

      <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow">

        <h1 className="text-xl font-semibold mb-4">Account</h1>

        {/* Tabs */}
        <div className="flex gap-6 border-b mb-6 text-sm">
          <span className="text-blue-600 border-b-2 border-blue-600 pb-2">
            Payments
          </span>
          <span className="text-gray-500 pb-2">Payments FAQ</span>
          <span className="text-gray-500 pb-2">Hub Attendance</span>
          <span className="text-gray-500 pb-2">Password</span>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">

          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-500">
              Your Payment Status for <b>ALX Access</b> is
            </p>
            <div className="flex gap-2 mt-2">
              <span className="text-orange-500 font-semibold">Active</span>
              <span className="bg-orange-100 text-orange-600 text-xs px-2 rounded-full">
                At risk
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Your access is valid until 13 Oct 2025
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <p className="text-sm text-gray-500">Payment due is</p>
            <h2 className="text-3xl text-blue-600 font-bold mt-2">
              USD 5.00
            </h2>
            <p className="text-sm text-gray-500">Due on 13 Oct 2025</p>
            <p className="text-blue-600 mt-2 text-sm">
              Make payment now →
            </p>
          </div>

        </div>

        {/* Billing */}
        <h2 className="font-semibold mb-4">Billing History</h2>

        <div className="flex justify-between mb-3">
          <span className="text-sm text-gray-500">Receipts</span>

          <button className="flex items-center gap-2 border px-3 py-1 rounded-full text-blue-600 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor">
              <path d="M12 16v-8M8 12l4 4 4-4"/>
            </svg>
            Download
          </button>
        </div>

        <div className="border rounded-lg overflow-hidden">
          {[1,2,3,4,5,6].map((_, i) => (
            <div key={i} className="flex justify-between items-center p-4 border-b">
              <div className="flex gap-3 items-center">
                <input type="checkbox"/>
                <span>Receipt ALX Access #{420000 + i}</span>
              </div>

              <span className="text-gray-500 text-sm">Jul 27, 2025</span>
              <span>USD 5.00</span>

              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor">
                <path d="M1 12s4-6 11-6 11 6 11 6-4 6-11 6S1 12 1 12z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
          ))}
        </div>

      </div>

    </Layout>
  );
}