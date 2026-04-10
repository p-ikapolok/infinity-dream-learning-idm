import { useState } from "react";
import { CheckCircle, Calendar, MessageCircle } from "lucide-react";

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
  const [search, setSearch] = useState("");

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

        {/* HEADER */}
        <div className="p-4 flex items-center gap-2 font-bold text-lg">
          <button onClick={() => setCollapsed(!collapsed)}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16"
                stroke="#111827"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {!collapsed && <span className="font-black">alx</span>}
        </div>

        {/* SEARCH */}
        {!collapsed && (
          <div className="px-3">
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">

              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="#6B7280" strokeWidth="2"/>
                <path d="M20 20l-3-3" stroke="#6B7280" strokeWidth="2"/>
              </svg>

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="bg-transparent outline-none text-sm w-full"
              />
            </div>
          </div>
        )}

        {/* COLLAPSED SEARCH ICON */}
        {collapsed && (
          <div className="flex justify-center mt-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="#6B7280" strokeWidth="2"/>
              <path d="M20 20l-3-3" stroke="#6B7280" strokeWidth="2"/>
            </svg>
          </div>
        )}

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
      <div className="flex-1 p-6 space-y-4">

        <Card>
          <div className="flex justify-between mb-4">
            <h2 className="font-semibold">Upcoming events</h2>
            <button className="border px-3 py-1 rounded text-sm">View all</button>
          </div>

          <div className="flex flex-col items-center py-10 text-gray-400">
            <Calendar size={32} />
            <p>No upcoming event</p>
          </div>
        </Card>

        <Card>
          <h2 className="font-semibold mb-2">Current projects</h2>
          <p className="text-gray-500">None, enjoy the silence.</p>
        </Card>

        {scores.map((item, index) => (
          <Card key={index}>
            <div className="flex justify-between">
              <div>
                <h3 className="font-semibold">
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

        <div className="min-h-screen flex flex-col">
  <main className="flex-1">
    {/* page content */}
  </main>

  <footer className="text-center text-xs text-gray-400 py-2">
    Copyright © 2025 ALX
  </footer>

  <button className="fixed bottom-6 right-6 bg-yellow-400 p-4 rounded-full shadow-lg">
    <MessageCircle />
  </button>
</div>

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