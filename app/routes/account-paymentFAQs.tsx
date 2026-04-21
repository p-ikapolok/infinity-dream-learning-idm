import { useState } from "react";
import Layout from "../components/Layout";
import { Link, useLocation } from "react-router-dom";

export default function AccountFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const location = useLocation();

  const tabs = [
    { path: "/account/payments", label: "Payments" },
    { path: "/account/faq", label: "Payments FAQ" },
    { path: "/account/attendance", label: "Hub Attendance" },
    { path: "/account/password", label: "Password" },
  ];

  const faqs = [
    "My payment link is not accessible on e-Hub / I don’t see a payment plan",
    "I don’t see the prompt to make payment on e-Hub",
    "The payment link is not working",
    "I have paid but it is not reflected on the payment tab.",
  ];

  return (
    <Layout>
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

        <h2 className="text-center font-semibold mb-6">
          Everything you need to know about the payments
        </h2>

        {faqs.map((q, i) => (
          <div key={i} className="border-b py-3">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between"
            >
              {q}
              <span>{open === i ? "⌃" : "⌄"}</span>
            </button>

            {open === i && (
              <p className="text-gray-500 text-sm mt-2">
                Answer...
              </p>
            )}
          </div>
        ))}

      </div>
    </Layout>
  );
}