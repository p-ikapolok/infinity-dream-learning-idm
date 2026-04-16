"use client";
import { useState } from "react";
import {
  ChevronDown,
  Eye,
  Download,
} from "lucide-react";

type TabType = "payments" | "faq" | "attendance" | "password";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<TabType>("payments");

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow p-6">

        {/* Title */}
        <h1 className="text-2xl font-semibold mb-4">Account</h1>

        {/* Tabs */}
        <div className="flex gap-6 border-b mb-6">
          {[
            { id: "payments", label: "Payments" },
            { id: "faq", label: "Payments FAQ" },
            { id: "attendance", label: "Hub Attendance" },
            { id: "password", label: "Password" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`pb-3 text-sm font-medium ${
                activeTab === tab.id
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        {activeTab === "payments" && <Payments />}
        {activeTab === "faq" && <PaymentsFAQ />}
        {activeTab === "attendance" && <Attendance />}
        {activeTab === "password" && <Password />}
      </div>
    </div>
  );
}