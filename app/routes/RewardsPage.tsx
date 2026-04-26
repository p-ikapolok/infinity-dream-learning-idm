import React, { useState } from "react";
import NotificationMenu from "../components/NotificationMenu";
import NineDotsMenu from "../components/NineDotsMenu";
import ProfileMenu from "../components/ProfileMenu";

const RewardsPage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="bg-[#f4f6f9] min-h-screen font-sans">

      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center px-4 md:px-6 py-3 bg-white border-b">

        <div className="flex items-center gap-2">
          <span className="font-bold text-lg md:text-xl">alx</span>
          <span className="text-gray-600 text-sm md:text-lg">Rewards</span>
        </div>

        <div className="flex items-center gap-3 md:gap-4">

          {/* POINTS */}
          <div className="hidden sm:flex items-center gap-2 bg-[#fff7e6] border border-[#f3d9a4] px-3 py-1 rounded-full text-xs md:text-sm">
            <CoinIcon />
            <span className="font-semibold">4210 points</span>
          </div>

          {/* NOTIFICATIONS */}
          <div className="relative">
            <button onClick={() => setShowNotifications(!showNotifications)}>
              <BellIcon />
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-3 z-50">
                <NotificationMenu />
              </div>
            )}
          </div>

          {/* GRID (9 DOTS) */}
          <div className="relative">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <NineDotsIcon />
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-3 z-50">
                <NineDotsMenu />
              </div>
            )}
          </div>

          {/* PROFILE */}
          <div className="relative">
            <button
              onClick={() => {
                setProfileOpen(!profileOpen);
                setMenuOpen(false);
                setShowNotifications(false);
              }}
            >
              <div className="w-8 h-8 rounded-full bg-gray-300" />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-3 z-50">
                <ProfileMenu />
              </div>
            )}
          </div>

        </div>
      </div>

      {/* ================= BLUE BANNER ================= */}
      <div className="bg-gradient-to-r from-[#0d3b66] to-[#6a11cb] text-white px-4 md:px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">

        <div>
          <p className="font-semibold text-sm md:text-lg">
            Be Career Ready and Earn 250 Legacy Points!
          </p>
          <p className="text-xs md:text-sm opacity-90">
            Upload your CV and your profile today. Share your success and boost your rewards today!
          </p>
        </div>

        <button className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold text-sm w-full md:w-auto">
          Tell us now
        </button>
      </div>

      {/* ================= RED ALERT ================= */}
      <div className="bg-[#ff4d4f] text-white px-4 md:px-6 py-3 flex gap-3 text-xs md:text-sm items-start">
        <CoinIcon />
        <span>
          With personalised expiry dates, you can now see when your Legacy Points are set to expire.
          Go ahead and plan your next redemption!
        </span>
      </div>

      {/* ================= POINTS ================= */}
      <div className="px-4 md:px-6 py-6">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0d3b66]">210</h1>
            <p className="text-gray-500 text-sm">Points Available</p>
          </div>

          <div className="flex items-center gap-2 border px-4 py-2 rounded-lg bg-white text-xs md:text-sm text-gray-600 w-fit">
            <ClockIcon />
            <span>0 Legacy Points expiring this month</span>
          </div>

        </div>

        {/* INFO CARD */}
        <div className="bg-white rounded-xl mt-6 p-4 md:p-6 shadow-sm">

          <h2 className="text-center text-lg md:text-xl font-semibold text-[#0d3b66]">
            Make the Most of Your Legacy Points
          </h2>

          <p className="text-center text-gray-500 text-xs md:text-sm mt-2 max-w-2xl mx-auto">
            Legacy Points is designed to support and celebrate your progress on your learning journey.
            As you complete key actions, you'll earn points that can be redeemed for exciting rewards.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-center">

            <div>
              <CoinIcon large />
              <p className="font-semibold mt-3 text-sm md:text-base">Earn Points</p>
            </div>

            <div>
              <GraduateIcon />
              <p className="font-semibold mt-3 text-sm md:text-base">Graduate</p>
            </div>

            <div>
              <GiftIcon />
              <p className="font-semibold mt-3 text-sm md:text-base">Redeem Rewards</p>
            </div>

            <div>
              <MedalIcon />
              <p className="font-semibold mt-3 text-sm md:text-base">Celebrate</p>
            </div>

          </div>
        </div>

      </div>

      {/* ================= WAYS TO EARN ================= */}
      <div className="px-4 md:px-6 pb-10">
        <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">

          <h2 className="text-lg md:text-xl font-semibold text-[#0d3b66] mb-4">
            Ways to Earn Legacy Points?
          </h2>

          <SectionTitle text="Complete your ALX Programme" />
          <PointsRow pts="250 pts">Complete programme on time</PointsRow>
          <PointsRow pts="100 pts">First milestone submission</PointsRow>
          <PointsRow pts="50 pts">Weekly milestone submission</PointsRow>

          <div className="bg-[#eef5fb] rounded-lg p-4 mt-5 flex flex-col md:flex-row gap-4">
            <BoostIcon />
            <div>
              <h3 className="font-semibold text-[#0d3b66]">
                Earn up to 50 Extra Legacy Points
              </h3>
              <p className="text-xs md:text-sm text-gray-600">
                Higher performance = more points
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default RewardsPage;

/* ================= SVG ICONS ================= */

const NineDotsIcon = () => (
  <svg width="20" height="20" fill="currentColor">
    {[5, 12, 19].map((x) =>
      [5, 12, 19].map((y) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" />
      ))
    )}
  </svg>
);

const BellIcon = () => (
  <svg width="20" height="20" fill="none" stroke="black" strokeWidth="2">
    <path d="M10 2C7 2 5 4 5 7v3l-2 3h14l-2-3V7c0-3-2-5-5-5z"/>
  </svg>
);

const CoinIcon = ({ large }: any) => (
  <svg width={large ? 48 : 18} height={large ? 48 : 18} fill="none">
    <circle cx="12" cy="12" r="10" stroke="#F4C430" strokeWidth="2"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="18" height="18" fill="none" stroke="#ff4d4f" strokeWidth="2">
    <circle cx="9" cy="9" r="7"/>
    <path d="M9 5v4l2 2"/>
  </svg>
);

const GraduateIcon = () => (
  <svg width="48" height="48" fill="none" stroke="#F4C430" strokeWidth="2">
    <path d="M2 12l10-5 10 5-10 5-10-5z"/>
  </svg>
);

const GiftIcon = () => (
  <svg width="48" height="48" fill="none" stroke="#F4C430" strokeWidth="2">
    <rect x="4" y="10" width="16" height="10"/>
  </svg>
);

const MedalIcon = () => (
  <svg width="48" height="48" fill="none" stroke="#F4C430" strokeWidth="2">
    <circle cx="12" cy="12" r="6"/>
  </svg>
);

const BoostIcon = () => (
  <svg width="60" height="60" fill="none">
    <circle cx="30" cy="30" r="28" stroke="#1da1f2" strokeWidth="3"/>
  </svg>
);

const SectionTitle = ({ text }: any) => (
  <div className="bg-[#eef2f7] inline-block px-4 py-2 rounded-full mt-6 mb-3 text-sm md:text-base">
    {text}
  </div>
);

const PointsRow = ({ pts, children }: any) => (
  <div className="flex gap-4 md:gap-6 py-2 border-b text-sm">
    <div className="w-16 md:w-20">{pts}</div>
    <div>{children}</div>
  </div>
);