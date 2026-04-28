import React, { useState } from "react";

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("Inbox");

  const tabs = ["Inbox", "Mentions", "Following", "All", "Archived"];

  return (
    <div className="bg-white min-h-screen">

      {/* HEADER */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-lg font-semibold text-gray-800">
          Notifications
        </h1>

        <div className="flex items-center gap-4 text-gray-500">
          
          {/* DOUBLE CHECK ICON (✓✓) */}
          <svg
            className="w-5 h-5 stroke-[1.8]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4 13l3 3 5-5" />
            <path d="M10 13l3 3 7-7" />
          </svg>

          {/* SETTINGS (GEAR) ICON */}
          <svg
            className="w-5 h-5 stroke-[1.8]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1 1 0 00.2 1.1l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1 1 0 00-1.1-.2 1 1 0 00-.6.9V21a2 2 0 11-4 0v-.1a1 1 0 00-.6-.9 1 1 0 00-1.1.2l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1 1 0 00.2-1.1 1 1 0 00-.9-.6H3a2 2 0 110-4h.1a1 1 0 00.9-.6 1 1 0 00-.2-1.1l-.1-.1a2 2 0 112.8-2.8l.1.1a1 1 0 001.1.2h.1a1 1 0 00.6-.9V3a2 2 0 114 0v.1a1 1 0 00.6.9h.1a1 1 0 001.1-.2l.1-.1a2 2 0 112.8 2.8l-.1.1a1 1 0 00-.2 1.1v.1a1 1 0 00.9.6H21a2 2 0 110 4h-.1a1 1 0 00-.9.6z" />
          </svg>

        </div>
      </div>

      {/* TABS */}
      <div className="flex gap-6 px-6 py-3 text-sm text-gray-500">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 ${
              activeTab === tab
                ? "text-black font-medium border-b-2 border-black"
                : "hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* EMPTY STATE */}
      <div className="flex flex-col items-center justify-center h-[75vh] text-center">
        <h2 className="text-lg font-semibold text-gray-800">
          No notifications
        </h2>

        <p className="text-gray-500 text-sm mt-1">
          Notifications will show up here.
        </p>
      </div>

    </div>
  );
}