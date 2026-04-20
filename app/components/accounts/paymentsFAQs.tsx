"use client";
import { useState } from "react";
import Layout from "./components/Layout";

export default function AccountFAQ() {
  const [open, setOpen] = useState<number | null>(null);

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

        <div className="flex gap-6 border-b mb-6 text-sm">
          <span>Payments</span>
          <span className="text-blue-600 border-b-2 border-blue-600 pb-2">
            Payments FAQ
          </span>
          <span>Hub Attendance</span>
          <span>Password</span>
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