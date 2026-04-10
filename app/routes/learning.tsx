import { useState } from "react";
import {
  Menu,
  Bell,
  Grid3X3,
  CheckCircle,
  Calendar,
  MessageCircle,
} from "lucide-react";

import { FaDiscord } from "react-icons/fa";
import { SiZoom, SiYoutube, SiCodesandbox } from "react-icons/si";
import {
  HiHome,
  HiOutlineSquares2X2,
  HiFolder,
  HiCheckCircle,
  HiBookOpen,
  HiLightBulb,
} from "react-icons/hi2";

export default function ALXLearningDashboard() {
  const [collapsed, setCollapsed] = useState(false);

  const scores = [
    { title: "ALX AiCE – AI Career Essentials", validated: true, score: "79.28%" },
    { title: "Front-End Web Development", validated: true, score: "87.93%" },
    { title: "Virtual Assistant", validated: true, score: "98.04%" },
    { title: "Professional Foundations", validated: true, score: "97.37%" },
    { title: "Freelancer Academy - 4-week", validated: false, score: "0.0%" },
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* SIDEBAR */}
      <aside className={`bg-white border-r relative transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}>

        {/* SIDEBAR HEADER */}
        <div className="p-4 flex items-center gap-2 font-bold text-lg">
          <Menu size={18} />
          {!collapsed && <span className="font-black">alx</span>}
        </div>

        {/* NAV */}
        <nav className="mt-6 space-y-1 px-3">

          <SidebarItem collapsed={collapsed} icon={<HiHome size={18} />} label="Home" active />
          <SidebarItem collapsed={collapsed} icon={<HiOutlineSquares2X2 size={18} />} label="My Planning" />
          <SidebarItem collapsed={collapsed} icon={<HiFolder size={18} />} label="Projects" />
          <SidebarItem collapsed={collapsed} icon={<HiCheckCircle size={18} />} label="Evaluation quizzes" />
          <SidebarItem collapsed={collapsed} icon={<HiBookOpen size={18} />} label="My courses" />
          <SidebarItem collapsed={collapsed} icon={<HiLightBulb size={18} />} label="Concepts" />

          <SidebarItem collapsed={collapsed} icon={<SiZoom size={18} />} label="Conference rooms" />
          <SidebarItem collapsed={collapsed} icon={<SiCodesandbox size={18} />} label="Sandboxes" />
          <SidebarItem collapsed={collapsed} icon={<SiYoutube size={18} />} label="Video on demand" />
          <SidebarItem collapsed={collapsed} icon={<FaDiscord size={18} />} label="Discord" />
        </nav>

        {/* PROFILE */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 justify-center">
            <img src="https://i.pravatar.cc/40" className="w-8 h-8 rounded-full" />
            {!collapsed && <span className="text-sm">My Profile</span>}
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex-1">

        {/* HEADER */}
        <header className="bg-white border-b px-6 py-3 flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-4">

            <div className="font-black text-lg text-red-600">alx</div>

            {/* HAMBURGER TOGGLE */}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="#111827"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            <div className="bg-yellow-200 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
              4210 pts
            </div>

            {/* BELL */}
            <button className="p-2 rounded-md hover:bg-gray-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 8a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7z"
                  stroke="#111827"
                  strokeWidth="2"
                />
                <path
                  d="M13.73 21a2 2 0 01-3.46 0"
                  stroke="#111827"
                  strokeWidth="2"
                />
              </svg>
            </button>

            {/* 9 DOTS */}
            <button className="p-2 rounded-md hover:bg-gray-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="5" cy="5" r="2" fill="#111827" />
                <circle cx="12" cy="5" r="2" fill="#111827" />
                <circle cx="19" cy="5" r="2" fill="#111827" />

                <circle cx="5" cy="12" r="2" fill="#111827" />
                <circle cx="12" cy="12" r="2" fill="#111827" />
                <circle cx="19" cy="12" r="2" fill="#111827" />

                <circle cx="5" cy="19" r="2" fill="#111827" />
                <circle cx="12" cy="19" r="2" fill="#111827" />
                <circle cx="19" cy="19" r="2" fill="#111827" />
              </svg>
            </button>

            <img src="https://i.pravatar.cc/40" className="w-9 h-9 rounded-full border" />
          </div>
        </header>

        {/* CONTENT (UNCHANGED) */}
        <div className="p-6 space-y-4">

          <Card>
            <div className="flex justify-between mb-4">
              <h2 className="font-semibold text-gray-700">Upcoming events</h2>
              <button className="border px-3 py-1 rounded text-sm">View all</button>
            </div>

            <div className="flex flex-col items-center py-10 text-gray-400">
              <Calendar size={32} />
              <p>No upcoming event</p>
            </div>
          </Card>

          <Card>
            <h2 className="font-semibold text-gray-700 mb-2">Current projects</h2>
            <p className="text-gray-500">None, enjoy the silence.</p>
          </Card>

          {scores.map((item, index) => (
            <Card key={index}>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold text-gray-700">
                    Scores - {item.title}
                  </h3>

                  <span className={`text-xs px-2 py-1 rounded inline-block mt-1 ${
                    item.validated
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {item.validated ? "Validated" : "Not validated"}
                  </span>
                </div>

                <div className="font-semibold flex items-center gap-1">
                  {item.score}
                  {item.validated && <CheckCircle size={16} className="text-green-600" />}
                </div>
              </div>
            </Card>
          ))}

        </div>

        <footer className="text-center text-xs text-gray-400 py-6">
          Copyright © 2025 ALX
        </footer>

        <button className="fixed bottom-6 right-6 bg-yellow-400 p-4 rounded-full shadow-lg">
          <MessageCircle />
        </button>

      </div>
    </div>
  );
}

/* SIDEBAR ITEM */
function SidebarItem({ icon, label, active, collapsed }) {
  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer ${
      active ? "bg-red-50 text-red-500" : "text-gray-600 hover:bg-gray-100"
    }`}>
      {icon}
      {!collapsed && <span className="text-sm">{label}</span>}
    </div>
  );
}

/* CARD */
function Card({ children }) {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      {children}
    </div>
  );
}