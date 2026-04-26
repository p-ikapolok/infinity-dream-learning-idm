import React, { useState } from "react";
import NotificationMenu from "../components/NotificationMenu";
import NineDotsMenu from "../components/NineDotsMenu";
import ProfileMenu from "../components/ProfileMenu";

const RewardsPage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="bg-[#f5f7fa] min-h-screen font-sans">

      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl">alx</span>
          <span className="text-gray-600 text-lg">Rewards</span>
        </div>

        <div className="flex items-center gap-5">

          {/* Points Badge */}
          <div className="flex items-center gap-2 bg-[#fff7e6] px-3 py-1 rounded-full">
            <svg width="18" height="18" fill="none" stroke="#f59e0b" strokeWidth="2">
              <circle cx="9" cy="9" r="7"/>
              <path d="M6 9h6M9 6v6"/>
            </svg>
            <span className="text-yellow-600 font-semibold text-sm">
              4210 points
            </span>
          </div>

          {/* Notification */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setMenuOpen(false);
                setProfileOpen(false);
              }}
              className="text-gray-600 hover:text-gray-800"
            >
              <svg width="20" height="20" fill="none" stroke="#000" strokeWidth="1.5">
                <path d="M10 2a4 4 0 00-4 4v3c0 .7-.3 1.4-.8 1.9L4 13h12l-1.2-2.1c-.5-.5-.8-1.2-.8-1.9V6a4 4 0 00-4-4z"/>
                <path d="M8 17a2 2 0 004 0"/>
              </svg>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-3 z-50">
                <NotificationMenu />
              </div>
            )}
          </div>

          {/* 9 dots */}
          <div className="relative">
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
                setShowNotifications(false);
                setProfileOpen(false);
              }}
              className="text-gray-600 hover:text-gray-800"
            >
              <svg width="20" height="20" fill="none" stroke="#000" strokeWidth="1.5">
                <rect x="3" y="3" width="4" height="4"/>
                <rect x="13" y="3" width="4" height="4"/>
                <rect x="3" y="13" width="4" height="4"/>
                <rect x="13" y="13" width="4" height="4"/>
              </svg>
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-3 z-50">
                <NineDotsMenu />
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => {
                setProfileOpen(!profileOpen);
                setMenuOpen(false);
                setShowNotifications(false);
              }}
              className="w-8 h-8 bg-gray-300 rounded-full"
            />

            {profileOpen && (
              <div className="absolute right-0 mt-3 z-50">
                <ProfileMenu menuOpen={profileOpen} />
              </div>
            )}
          </div>

        </div>
      </div>

      {/* ================= BANNER ================= */}
      <div className="bg-gradient-to-r from-blue-700 to-purple-600 text-white px-6 py-5">
        <p className="font-semibold text-lg">
          Be Career Ready and Earn 250 Legacy Points!
        </p>
        <button className="mt-3 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-medium">
          Tell us now
        </button>
      </div>

      {/* ALERT */}
      <div className="bg-red-500 text-white px-6 py-3 text-sm">
        With personalised expiry dates, you can now see when your Legacy Points are set to expire.
      </div>

      {/* ================= POINTS ================= */}
      <div className="p-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-[#1c2b4a]">210</h1>
              <p className="text-gray-500">Points Available</p>
            </div>

            <div className="border rounded-lg px-4 py-2 text-sm text-gray-600 flex items-center gap-2">
              <svg width="16" height="16" fill="none" stroke="#ef4444" strokeWidth="2">
                <circle cx="8" cy="8" r="6"/>
                <path d="M8 4v4l2 2"/>
              </svg>
              0 expiring this month
            </div>
          </div>

          {/* ICON GRID */}
          <div className="mt-8 bg-[#f5f7fa] rounded-xl p-6 text-center">
            <h2 className="text-xl font-semibold text-[#1c2b4a]">
              Make the Most of Your Legacy Points
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
              <div>
                <svg width="40" height="40" fill="none" stroke="#f59e0b" strokeWidth="2">
                  <circle cx="20" cy="20" r="15"/>
                </svg>
                <p className="font-semibold mt-2 text-[#007b8f]">Earn Points</p>
              </div>

              <div>
                <svg width="40" height="40" fill="none" stroke="#f59e0b" strokeWidth="2">
                  <path d="M2 15l18-8 18 8-18 8-18-8z"/>
                </svg>
                <p className="font-semibold mt-2 text-[#007b8f]">Graduate</p>
              </div>

              <div>
                <svg width="40" height="40" fill="none" stroke="#f59e0b" strokeWidth="2">
                  <rect x="5" y="10" width="30" height="20"/>
                  <path d="M5 15h30"/>
                </svg>
                <p className="font-semibold mt-2 text-[#007b8f]">Redeem</p>
              </div>

              <div>
                <svg width="40" height="40" fill="none" stroke="#f59e0b" strokeWidth="2">
                  <circle cx="20" cy="20" r="10"/>
                  <path d="M20 5v5M20 30v5"/>
                </svg>
                <p className="font-semibold mt-2 text-[#007b8f]">Celebrate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= REWARDS GRID ================= */}
      <div className="px-6 pb-10">
        <h2 className="text-2xl font-semibold mb-6 text-[#1c2b4a]">Rewards</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((_, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow-sm border">
              <div className="h-28 bg-gray-200 rounded mb-3"></div>

              <span className="text-xs bg-orange-100 px-2 py-1 rounded-full text-orange-600">
                4000 pts
              </span>

              <h3 className="font-semibold mt-2 text-[#1c2b4a]">
                Reward Item
              </h3>

              <button className="mt-4 w-full bg-[#007b8f] text-white py-2 rounded-full">
                Redeem Reward
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ================= ACTIVITY ================= */}
      <div className="px-6 pb-10">
        <h2 className="text-2xl font-semibold mb-4 text-[#1c2b4a]">
          Your Activity
        </h2>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-3 px-6 py-3 text-sm font-medium border-b">
            <span>Date</span>
            <span>Amount</span>
            <span>Details</span>
          </div>

          {[1,2,3,4].map((_, i) => (
            <div key={i} className="grid grid-cols-3 px-6 py-4 border-b text-sm">
              <span>2026-03-06</span>
              <span className="text-green-600 font-medium">250</span>
              <span>Transaction detail</span>
            </div>
          ))}

          <div className="p-4">
            <button className="w-full bg-[#007b8f] text-white py-2 rounded">
              Load More
            </button>
          </div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0c2d57] text-white px-6 py-10">
        <h3 className="font-bold text-lg mb-2">alx eHub</h3>
        <p className="text-sm mb-6">The community of those who Do Hard Things.</p>

        <div className="flex gap-6 text-sm mb-6 flex-wrap">
          <span>Home</span>
          <span>Learning</span>
          <span>Community</span>
          <span>Rewards</span>
          <span>Support</span>
          <span>Privacy policy</span>
          <span>Terms & Conditions</span>
        </div>

        <div className="border-t pt-4 flex justify-between text-sm">
          <span>© 2026 All rights reserved.</span>

          <div className="flex gap-4">
            <svg width="18" height="18" fill="none" stroke="white">
              <path d="M3 3l12 12M15 3L3 15"/>
            </svg>

            <svg width="18" height="18" fill="none" stroke="white">
              <rect x="2" y="2" width="14" height="14"/>
              <path d="M6 8v4M6 6v.01M10 8v4M10 8c0-1 2-1 2 0v4"/>
            </svg>

            <svg width="18" height="18" fill="none" stroke="white">
              <path d="M10 6h2V3h-2c-2 0-3 1-3 3v2H5v3h2v6h3v-6h2l1-3h-3V6c0-.5.5-1 1-1z"/>
            </svg>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default RewardsPage;