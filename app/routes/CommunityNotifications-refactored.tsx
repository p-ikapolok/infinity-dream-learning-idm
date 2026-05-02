import React, { useState } from "react";
import CommunityLayout from "../components/CommunityLayout";
import SearchModal from "../components/SearchModal";

export default function CommunityNotificationsPage() {
  const [activeTab, setActiveTab] = useState("Inbox");
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const tabs = ["Inbox", "Mentions", "Following", "All", "Archived"];

  return (
    <CommunityLayout
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
    >
      <div className="flex-1 bg-gray-50 min-h-screen">
        {/* NOTIFICATIONS HEADER */}
        <div className="bg-white border-b px-6 py-4">
          <h1 className="text-lg font-semibold text-gray-800">
            Notifications
          </h1>
        </div>

        {/* TABS */}
        <div className="bg-white border-b px-6">
          <div className="flex items-center justify-between">
            {/* Left Tabs */}
            <div className="flex space-x-6 text-sm">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 border-b-2 transition ${
                    activeTab === tab
                      ? "border-gray-800 text-gray-900 font-medium"
                      : "border-transparent text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4 text-gray-500">
              {/* Check icon */}
              <button className="hover:text-gray-700">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 13l3 3 6-8" />
                  <path d="M10 13l3 3 7-9" />
                </svg>
              </button>

              {/* Settings icon */}
              <button className="hover:text-gray-700">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.7 1.7 0 000-6l2-1-2-3-2.3 1a6.5 6.5 0 00-3-1.7L13 2h-2l-.6 2.3a6.5 6.5 0 00-3 1.7L5 5 3 8l2 1a1.7 1.7 0 000 6l-2 1 2 3 2.3-1a6.5 6.5 0 003 1.7L11 22h2l.6-2.3a6.5 6.5 0 003-1.7L19 19l2-3-2-1z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* EMPTY STATE */}
        <div className="flex flex-col items-center justify-center text-center h-[70vh] text-gray-500">
          <h2 className="text-lg font-semibold text-gray-700">
            No notifications
          </h2>
          <p className="text-sm mt-1">
            Notifications will show up here.
          </p>
        </div>
      </div>

      {/* SEARCH MODAL */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </CommunityLayout>
  );
}
