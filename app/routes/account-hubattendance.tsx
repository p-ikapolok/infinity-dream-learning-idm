import Layout from "../components/Layout";
import { Link, useLocation } from "react-router-dom";

export default function AccountAttendance() {
  const location = useLocation();

  const tabs = [
    { path: "/account/payments", label: "Payments" },
    { path: "/account/faq", label: "Payments FAQ" },
    { path: "/account/attendance", label: "Hub Attendance" },
    { path: "/account/password", label: "Password" },
  ];

  return (
    <Layout>
      <div className="p-6">
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow">

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