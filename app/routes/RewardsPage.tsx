import React, { useState } from "react";
import NotificationMenu from "../components/NotificationMenu";
import NineDotsMenu from "../components/NineDotsMenu";
import ProfileMenu from "../components/ProfileMenu";

const RewardsPage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="bg-[#f4f6f9] min-h-screen text-gray-800">

      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-center px-6 py-3 bg-white border-b">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl text-black">alx</span>
          <span className="text-gray-600 text-lg">Rewards</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 bg-[#fff7e6] border border-[#f3d9a4] px-3 py-1 rounded-full text-sm">
            <CoinIcon />
            <span className="font-semibold">4210 points</span>
          </div>

          <button onClick={() => setShowNotifications(!showNotifications)}>
            <BellIcon />
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)}>
            <NineDotsIcon />
          </button>

          <button onClick={() => setProfileOpen(!profileOpen)}>
            <div className="w-8 h-8 rounded-full bg-gray-300" />
          </button>
        </div>
      </div>

      {/* ================= BANNER ================= */}
      <div className="bg-gradient-to-r from-[#0d3b66] to-[#6a11cb] text-white px-6 py-5 flex justify-between items-center">
        <div>
          <p className="font-semibold text-lg">
            Be Career Ready and Earn 250 Legacy Points! Upload your CV and your profile today.
          </p>
          <p className="text-cyan-300">
            Share your success and boost your rewards today!
          </p>
        </div>

        <button className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold">
          Tell us now
        </button>
      </div>

      {/* ================= ALERT ================= */}
      <div className="bg-[#ff4d4f] text-white px-6 py-3 flex gap-3 items-center text-sm">
        <CoinIcon />
        <span>
          With personalised expiry dates, you can now see when your Legacy Points are set to expire. Go ahead and plan your next redemption!
        </span>
      </div>

      {/* ================= POINTS ================= */}
      <div className="px-6 py-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-bold text-[#0d3b66]">210</h1>
            <p className="text-gray-500">Points Available</p>
          </div>

          <div className="flex items-center gap-2 bg-white border px-4 py-2 rounded-lg text-gray-600">
            <ClockIcon />
            <span>0 Legacy Points expiring this month</span>
          </div>
        </div>

        {/* INFO CARD */}
        <div className="bg-white rounded-xl mt-6 p-6 text-center shadow-sm">
          <h2 className="text-xl font-semibold text-[#0d3b66]">
            Make the Most of Your Legacy Points
          </h2>

          <p className="text-gray-500 text-sm mt-2 max-w-2xl mx-auto">
            Legacy Points is designed to support and celebrate your progress on your learning journey.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6">
            <InfoItem icon={<EarnIcon />} title="Earn Points" />
            <InfoItem icon={<GraduateIcon />} title="Graduate" />
            <InfoItem icon={<GiftIcon />} title="Redeem Rewards" />
            <InfoItem icon={<MedalIcon />} title="Celebrate Your Success" />
          </div>
        </div>
      </div>

      {/* ================= REWARDS ================= */}
      <div className="px-6 pb-10">
        <h2 className="text-xl font-semibold text-[#0d3b66] mb-4">Rewards</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <RewardCard title="Save on Your Next Ride with Bolt!" pts="600 pts" />
          <RewardCard title="Boost your career with a professional CV!" pts="1500+ pts" />
          <RewardCard title="Show Off Your ALX Pride with an ALX T-shirt" pts="4000+ pts" progress />
          <RewardCard title="Celebrate in Style with an ALX Hoodie" pts="4500+ pts" disabled />
          <RewardCard title="Reward Your Next Ride" pts="5000 pts" disabled />
          <RewardCard title="Resume Review with ALX Professionals" pts="6000+ pts" disabled />
          <RewardCard title="Subscription" pts="8000+ pts" disabled />
          <RewardCard title="Sessions with an Industry Expert" pts="10000+ pts" disabled />
        </div>
      </div>

      {/* ================= ACTIVITY ================= */}
      <div className="px-6 pb-10">
        <h2 className="text-xl font-semibold text-[#0d3b66] mb-2">Your Activity</h2>
        <p className="text-sm text-gray-500 mb-4">
          Track how you've earned and spent your Legacy Points here.
        </p>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b font-semibold">
            Your transaction history <span className="text-gray-400">41</span>
          </div>

          <div className="grid grid-cols-3 p-4 text-sm text-gray-500 border-b">
            <span>Date</span>
            <span>Amount</span>
            <span>Details</span>
          </div>

          {[...Array(6)].map((_, i) => (
            <div key={i} className="grid grid-cols-3 p-4 text-sm border-b">
              <span>2026-03-06</span>
              <span className="text-green-600">250</span>
              <span>Impact Survey – thank you for your feedback!</span>
            </div>
          ))}

          <button className="w-full bg-blue-600 text-white py-3">
            Load More
          </button>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="bg-[#0d3b66] text-white px-6 py-10">
        <h3 className="text-lg font-semibold">alx eHub</h3>
        <p className="text-sm mt-2 opacity-80">
          The community of those who Do Hard Things.
        </p>

        <div className="flex gap-6 mt-6 text-sm opacity-90 flex-wrap">
          <span>Home</span>
          <span>Learning</span>
          <span>Community</span>
          <span>Rewards</span>
          <span>Support</span>
          <span className="underline">Privacy policy</span>
          <span className="underline">Terms & Conditions</span>
        </div>

        <div className="border-t border-white/20 mt-6 pt-6 text-sm opacity-70">
          © 2026 All rights reserved.
        </div>
      </div>

    </div>
  );
};

export default RewardsPage;

/* ================= COMPONENTS ================= */

const InfoItem = ({ icon, title }: any) => (
  <div>
    <div className="flex justify-center text-black">{icon}</div>
    <p className="font-semibold mt-2">{title}</p>
  </div>
);

const RewardCard = ({ title, pts, progress, disabled }: any) => (
  <div className="bg-white rounded-xl p-4 shadow-sm">
    <div className="text-xs bg-yellow-100 inline-block px-2 py-1 rounded mb-2">
      {pts}
    </div>

    <p className="font-semibold text-sm mb-2">{title}</p>

    {progress && (
      <div className="h-2 bg-gray-200 rounded mb-2">
        <div className="h-2 bg-blue-500 rounded w-[80%]" />
      </div>
    )}

    <button
      className={`w-full py-2 rounded-full ${
        disabled
          ? "bg-gray-200 text-gray-400"
          : "bg-blue-600 text-white"
      }`}
    >
      Redeem Reward
    </button>
  </div>
);

/* ================= ICONS ================= */

const BellIcon = () => (
  <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
    <path d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1" />
  </svg>
);

const NineDotsIcon = () => (
  <svg className="w-6 h-6 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
    {[6,12,18].map(x =>
      [6,12,18].map(y => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" />
      ))
    )}
  </svg>
);

const CoinIcon = () => (
  <svg className="w-5 h-5 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
);

/* BLACK OUTLINE ICONS */

const EarnIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="4" y="4" width="16" height="16" rx="4"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const GraduateIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M2 12l10-5 10 5-10 5-10-5z"/>
  </svg>
);

const GiftIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="4" y="10" width="16" height="10"/>
    <path d="M4 10h16"/>
  </svg>
);

const MedalIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="10" r="5"/>
    <path d="M8 15l-2 6 6-3 6 3-2-6"/>
  </svg>
);