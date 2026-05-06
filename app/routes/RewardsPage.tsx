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
      <div className="flex justify-between items-center px-4 md:px-6 py-3 bg-white border-b">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg md:text-xl text-black">Infinity Dream</span>
          <span className="text-gray-600 text-sm md:text-lg">Rewards</span>
        </div>

        <div className="flex items-center gap-4">

          <div className="hidden sm:flex items-center gap-2 bg-[#fff7e6] border border-[#f3d9a4] px-3 py-1 rounded-full text-gray-800">
            <CoinIcon />
            <span className="font-semibold">4210 points</span>
          </div>

          <div className="relative">
            <button onClick={() => setShowNotifications(!showNotifications)}>
              <BellIcon />
            </button>
            {showNotifications && <Dropdown><NotificationMenu /></Dropdown>}
          </div>

          <div className="relative">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <NineDotsIcon />
            </button>
            {menuOpen && <Dropdown><NineDotsMenu /></Dropdown>}
          </div>

          <div className="relative">
            <button onClick={() => setProfileOpen(!profileOpen)}>
              <div className="w-8 h-8 rounded-full bg-gray-300" />
            </button>
            {profileOpen && <Dropdown><ProfileMenu /></Dropdown>}
          </div>

        </div>
      </div>

      {/* ================= BANNER ================= */}
      <div className="bg-gradient-to-r from-[#0d3b66] to-[#6a11cb] text-white px-4 md:px-6 py-5 flex flex-col md:flex-row justify-between gap-4">
        <div>
          <p className="font-semibold text-sm md:text-lg">
            Be Career Ready and Earn 250 Legacy Points! Upload your CV and your profile today.
          </p>
          <p className="text-sm text-cyan-300">
            Share your success and boost your rewards today!
          </p>
        </div>

        <button className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold">
          Tell us now
        </button>
      </div>

      {/* ================= ALERT ================= */}
      <div className="bg-[#ff4d4f] text-white px-4 md:px-6 py-3 flex gap-3 items-center">
        <CoinIcon />
        <span>
          With personalised expiry dates, you can now see when your Legacy Points are set to expire. Go ahead and plan your next redemption!
        </span>
      </div>

      {/* ================= POINTS ================= */}
      <div className="px-4 md:px-6 py-6">

        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h1 className="text-5xl font-bold text-[#0d3b66]">210</h1>
            <p className="text-gray-600">Points Available</p>
          </div>

          <div className="flex items-center gap-2 bg-white border px-4 py-2 rounded-lg text-gray-700">
            <ClockIcon />
            <span>0 Legacy Points expiring this month</span>
          </div>
        </div>

        {/* INFO */}
        <div className="bg-white rounded-xl mt-6 p-6 shadow-sm text-center">
          <h2 className="text-xl font-semibold text-[#0d3b66]">
            Make the Most of Your Legacy Points
          </h2>

          <p className="text-gray-600 text-sm mt-2 max-w-2xl mx-auto">
            Legacy Points is designed to support and celebrate your progress on your learning journey.
            As you complete key actions, you'll earn points that can be redeemed for exciting rewards at graduation.
            Stay on track, and let your hard work be rewarded!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">

            <InfoItem icon={<EarnIcon />} title="Earn Points"
              desc="Complete course milestones, engage with the Infinity Dream Community and shape your career to stack up points!" />

            <InfoItem icon={<GraduateIcon />} title="Graduate"
              desc="Complete your specialisation course to unlock reward redemption!" />

            <InfoItem icon={<GiftIcon />} title="Redeem Rewards"
              desc="Select exciting rewards, submit your request, and enjoy your reward!" />

            <InfoItem icon={<MedalIcon />} title="Celebrate Your Success"
              desc="Use your reward and celebrate—you’ve earned it!" />

          </div>
        </div>
      </div>

      {/* ================= WAYS ================= */}
      <SectionWrapper title="Ways to Earn Legacy Points?">

        <SectionTitle text="Complete your Infinity Dream Programme" />
        <PointsRow pts="250 pts">Complete your Infinity Dream Programme on-time (eligible for 1-time redemption per Infinity Dream Programme).</PointsRow>
        <PointsRow pts="100 pts">Submission of the first milestone and test on-time for your Infinity Dream Programme (eligible for 1-time redemption per Infinity Dream Programme).</PointsRow>
        <PointsRow pts="50 pts">Submission of each weekly Infinity Dream Programme milestone and test on-time.</PointsRow>

        <BoostBox />

        <SectionTitle text="Engage with the Infinity Dream Community" />
        <PointsRow pts="250 pts">Host an event online or in-person (per event)</PointsRow>
        <PointsRow pts="150 pts"><span className="text-blue-500">Onboard to The Portal</span> (eligible for 1-time redemption)</PointsRow>
        <PointsRow pts="25 pts">Attend In-person event (per event)</PointsRow>
        <PointsRow pts="10 pts">Attend a Virtual Event (per event - must be in attendance for minimum 30 mins)</PointsRow>
        <PointsRow pts="10 pts"><span className="text-blue-500">Post</span> in the Community (max 10 redemptions per month)</PointsRow>
        <PointsRow pts="5 pts"><span className="text-blue-500">Comment</span> on post in The Community (max 20 redemptions per month)</PointsRow>

        <SectionTitle text="Shape your career" />
        <PointsRow pts="250 pts"><span className="text-blue-500">Upload your CV</span> to your profile</PointsRow>
        <PointsRow pts="250 pts">Share how Infinity Dream has helped you advance your career or grow your business (Eligible every 90 days, up to 4 times per year)</PointsRow>
        <PointsRow pts="150 pts"><span className="text-blue-500">LinkedIn URL</span> to Profile</PointsRow>

      </SectionWrapper>

      <RewardsGrid />
      <ActivitySection />
      <Footer />

    </div>
  );
};

export default RewardsPage;

/* ================= COMPONENTS ================= */

const Dropdown = ({ children }: any) => (
  <div className="absolute right-0 mt-3 bg-white shadow-lg rounded-lg p-2 z-50">
    {children}
  </div>
);

const InfoItem = ({ icon, title, desc }: any) => (
  <div>
    <div className="flex justify-center text-black">{icon}</div>
    <p className="font-semibold mt-2 text-[#0d3b66]">{title}</p>
    <p className="text-sm text-gray-600 mt-1">{desc}</p>
  </div>
);

const SectionWrapper = ({ title, children }: any) => (
  <div className="px-4 md:px-6 pb-10">
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-[#0d3b66] mb-4">{title}</h2>
      {children}
    </div>
  </div>
);

const SectionTitle = ({ text }: any) => (
  <div className="bg-[#eef2f7] inline-block px-4 py-2 rounded-full mt-6 mb-3 text-[#0d3b66]">
    {text}
  </div>
);

const PointsRow = ({ pts, children }: any) => (
  <div className="flex gap-6 py-2 border-b text-sm">
    <div className="w-20 text-gray-700">{pts}</div>
    <div className="text-gray-600">{children}</div>
  </div>
);

const BoostBox = () => (
  <div className="bg-[#eef5fb] rounded-lg p-5 mt-5 flex gap-4">
    <BoostIcon />
    <div>
      <h3 className="font-semibold text-[#0d3b66]">Earn up to 50 Extra Legacy Points with Graded Boosts!</h3>
      <p className="text-sm text-gray-600 mt-1">
        Maximise your rewards! Get up to 50 extra Legacy Points for strong performances.
      </p>
    </div>
  </div>
);

/* ================= REWARDS ================= */

const RewardsGrid = () => (
  <div className="px-4 md:px-6 pb-10">
    <h2 className="text-2xl font-semibold text-[#0d3b66] mb-4">Rewards</h2>

    <div className="grid md:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
          <div className="bg-gray-200 h-36 rounded-lg mb-3" />
          <button className="w-full bg-[#1da1f2] text-white py-2 rounded-full">
            Redeem Reward
          </button>
        </div>
      ))}
    </div>
  </div>
);

/* ================= ACTIVITY ================= */

const ActivitySection = () => (
  <div className="px-4 md:px-6 pb-12">
    <h2 className="text-2xl font-semibold text-[#0d3b66] mb-4">Your Activity</h2>

    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
      <div className="px-6 py-4 border-b flex gap-3">
        <span className="font-semibold">Your transaction history</span>
        <span className="bg-gray-100 px-2 rounded-full text-xs">41</span>
      </div>

      {[...Array(6)].map((_, i) => (
        <div key={i} className="grid grid-cols-3 px-6 py-4 border-b text-sm">
          <span>2026-03-06</span>
          <span className="text-green-600">250</span>
          <span>Impact Survey – thank you for your feedback!</span>
        </div>
      ))}

      <button className="w-full bg-[#1da1f2] text-white py-3">Load More</button>
    </div>
  </div>
);

/* ================= FOOTER ================= */

const Footer = () => (
  <div className="bg-[#0d3b66] text-white px-6 py-10">
    <h3 className="text-lg font-semibold">infinity dream Hub</h3>
    <p className="text-sm mt-2 opacity-80">
      The community of those who Value Time.
    </p>

    <div className="flex flex-wrap gap-6 mt-6 text-sm">
      <span>Home</span>
      <span>Learning</span>
      <span>Community</span>
      <span>Rewards</span>
      <span>Support</span>
      <span>Privacy policy</span>
      <span>Terms & Conditions</span>
    </div>

    <div className="border-t border-white/20 mt-6 pt-6 text-sm opacity-70">
      © 2026 All rights reserved.
    </div>
  </div>
);

/* ================= ICONS ================= */

const BellIcon = () => (
  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
    <path d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1" />
  </svg>
);

const NineDotsIcon = () => (
  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
    {[6,12,18].map(x =>
      [6,12,18].map(y => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" />
      ))
    )}
  </svg>
);

const CoinIcon = () => (
  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
);

/* BLACK ICONS */

const EarnIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="4"/>
    <path d="M8 12h8"/>
  </svg>
);

const GraduateIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M2 12l10-5 10 5-10 5-10-5z"/>
    <path d="M6 14v4a6 3 0 0012 0v-4"/>
  </svg>
);

const GiftIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="3" y="8" width="18" height="13"/>
    <path d="M12 8v13M3 12h18"/>
  </svg>
);

const MedalIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="10" r="4"/>
    <path d="M8 14l-2 6 6-3 6 3-2-6"/>
  </svg>
);

const BoostIcon = () => (
  <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
  </svg>
);