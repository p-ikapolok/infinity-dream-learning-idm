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

          <div className="hidden sm:flex items-center gap-2 bg-[#fff7e6] border border-[#f3d9a4] px-3 py-1 rounded-full text-xs md:text-sm">
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
      <div className="bg-gradient-to-r from-[#0d3b66] to-[#6a11cb] text-white px-4 md:px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">

        <div>
          <p className="font-semibold text-sm md:text-lg">
            Be Career Ready and Earn 250 Legacy Points! Upload your CV and your profile today.
          </p>
          <p className="text-xs md:text-sm text-cyan-300">
            Share your success and boost your rewards today!
          </p>
        </div>

        <button className="bg-yellow-400 px-5 py-2 rounded-full font-semibold text-sm">
          Tell us now
        </button>
      </div>

      {/* ================= ALERT ================= */}
      <div className="bg-[#ff4d4f] text-white px-4 md:px-6 py-3 flex gap-3 text-xs md:text-sm items-center">
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
            <p className="text-gray-500">Points Available</p>
          </div>

          <div className="flex items-center gap-2 bg-white border px-4 py-2 rounded-lg text-sm">
            <ClockIcon />
            0 Legacy Points expiring this month
          </div>
        </div>

        {/* INFO CARD */}
        <div className="bg-white rounded-xl mt-6 p-6 shadow-sm text-center">
          <h2 className="text-xl font-semibold text-[#0d3b66]">
            Make the Most of Your Legacy Points
          </h2>

          <p className="text-gray-500 text-sm mt-2 max-w-2xl mx-auto">
            Legacy Points is designed to support and celebrate your progress on your learning journey.
            As you complete key actions, you'll earn points that can be redeemed for exciting rewards.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">

            <InfoItem icon={<CoinIcon large />} title="Earn Points" text="Complete course milestones, engage with the ALX Community and shape your career to stack up points!" />
            <InfoItem icon={<GraduateIcon />} title="Graduate" text="Complete your specialisation course to unlock reward redemption!" />
            <InfoItem icon={<GiftIcon />} title="Redeem Rewards" text="Select exciting rewards, submit your request, and enjoy your reward!" />
            <InfoItem icon={<MedalIcon />} title="Celebrate Your Success" text="Use your reward and celebrate—you’ve earned it!" />

          </div>
        </div>
      </div>

      {/* ================= WAYS ================= */}
      <SectionWrapper title="Ways to Earn Legacy Points?">

        <SectionTitle text="Complete your ALX Programme" />
        <PointsRow pts="250 pts">Complete your ALX Programme on-time (eligible for 1-time redemption per ALX Programme).</PointsRow>
        <PointsRow pts="100 pts">Submission of the first milestone and test on-time.</PointsRow>
        <PointsRow pts="50 pts">Submission of each weekly milestone and test on-time.</PointsRow>

        <BoostBox />

        <SectionTitle text="Engage with the ALX Community" />
        <PointsRow pts="250 pts">Host an event online or in-person (per event)</PointsRow>
        <PointsRow pts="150 pts"><span className="text-blue-500">Onboard to The Portal</span></PointsRow>
        <PointsRow pts="25 pts">Attend In-person event</PointsRow>
        <PointsRow pts="10 pts">Attend Virtual Event</PointsRow>
        <PointsRow pts="10 pts"><span className="text-blue-500">Post</span> in Community</PointsRow>
        <PointsRow pts="5 pts"><span className="text-blue-500">Comment</span></PointsRow>

        <SectionTitle text="Shape your career" />
        <PointsRow pts="250 pts"><span className="text-blue-500">Upload your CV</span></PointsRow>
        <PointsRow pts="250 pts">Complete Survey</PointsRow>
        <PointsRow pts="150 pts"><span className="text-blue-500">LinkedIn URL</span></PointsRow>

      </SectionWrapper>

      {/* ================= REWARDS ================= */}
      <div className="px-4 md:px-6 pb-10">
        <h2 className="text-xl font-semibold text-[#0d3b66] mb-2">Rewards</h2>
        <p className="text-gray-600 text-sm mb-6">
          Graduate from your specialisation to unlock exciting rewards!
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {["600","1500","4000","4500","5000","6000","8000","10000"].map((p,i)=>(
            <RewardCard key={i} pts={p}/>
          ))}
        </div>
      </div>

      {/* ================= ACTIVITY ================= */}
      <div className="px-4 md:px-6 pb-10">
        <h2 className="text-xl font-semibold text-[#0d3b66] mb-4">Your Activity</h2>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b font-semibold">Your transaction history</div>

          {[...Array(6)].map((_,i)=>(
            <div key={i} className="flex justify-between p-4 border-b text-sm">
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

        <div className="flex flex-wrap gap-6 mt-6 text-sm opacity-80">
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

const InfoItem = ({ icon, title, text }: any) => (
  <div>
    {icon}
    <h3 className="font-semibold mt-2 text-[#0d3b66]">{title}</h3>
    <p className="text-sm text-gray-500">{text}</p>
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
  <div className="bg-[#eef2f7] inline-block px-4 py-2 rounded-full mt-6 mb-3">
    {text}
  </div>
);

const PointsRow = ({ pts, children }: any) => (
  <div className="flex gap-6 py-2 border-b text-sm">
    <div className="w-20">{pts}</div>
    <div>{children}</div>
  </div>
);

const BoostBox = () => (
  <div className="bg-[#eef5fb] rounded-lg p-5 mt-5 flex gap-4">
    <BoostIcon />
    <div>
      <h3 className="font-semibold">Earn up to 50 Extra Legacy Points with Graded Boosts!</h3>
      <p className="text-sm text-gray-600">Maximise your rewards!</p>
    </div>
  </div>
);

const RewardCard = ({ pts }: any) => (
  <div className="bg-white rounded-xl p-4 shadow-sm">
    <div className="text-xs bg-yellow-100 inline-block px-2 py-1 rounded">
      {pts}+ pts
    </div>
    <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-full">
      Redeem Reward
    </button>
  </div>
);

/* ================= ICONS ================= */

const NineDotsIcon = () => (
  <svg width="20" height="20">
    {[5,12,19].map(x=>[5,12,19].map(y=><circle key={x+y} cx={x} cy={y} r="1.5"/>))}
  </svg>
);

const BellIcon = () => (
  <svg width="20" height="20" stroke="black" fill="none">
    <path d="M10 2C7 2 5 4 5 7v3l-2 3h14l-2-3V7c0-3-2-5-5-5z"/>
  </svg>
);

const CoinIcon = ({ large }: any) => (
  <svg width={large ? 48 : 18} height={large ? 48 : 18}>
    <circle cx="12" cy="12" r="10" stroke="#F4C430" />
  </svg>
);

const ClockIcon = () => (
  <svg width="18" height="18" stroke="#ff4d4f" fill="none">
    <circle cx="9" cy="9" r="7"/>
    <path d="M9 5v4l2 2"/>
  </svg>
);

const GraduateIcon = () => (
  <svg width="48" height="48"><path d="M2 12l10-5 10 5-10 5z"/></svg>
);

const GiftIcon = () => (
  <svg width="48" height="48"><rect x="4" y="10" width="16" height="10"/></svg>
);

const MedalIcon = () => (
  <svg width="48" height="48"><circle cx="12" cy="12" r="6"/></svg>
);

const BoostIcon = () => (
  <svg width="60" height="60">
    <circle cx="30" cy="30" r="28" stroke="#1da1f2"/>
  </svg>
);