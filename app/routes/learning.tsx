import { useState } from "react";
import {
  Menu,
  Home,
  Folder,
  BookOpen,
  Video,
  MessageCircle,
  CheckCircle,
  Calendar,
  LayoutGrid,
  Code,
  Lightbulb,
  Users,
} from "lucide-react";

export default function ALXLearningDashboard() {
  const scores = [
    {
      title: "ALX AiCE – AI Career Essentials",
      validated: true,
      score: "79.28%",
    },
    {
      title: "Front-End Web Development",
      validated: true,
      score: "87.93%",
    },
    {
      title: "Virtual Assistant",
      validated: true,
      score: "98.04%",
    },
    {
      title: "Professional Foundations",
      validated: true,
      score: "97.37%",
    },
    {
      title: "Freelancer Academy - 4-week",
      validated: false,
      score: "0.0%",
    },
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r">
        <div className="p-4 flex items-center gap-2 font-bold text-lg">
          <Menu size={18} />
          <span className="font-black">alx</span>
          <span className="text-gray-500 font-normal">Learning</span>
        </div>

        <nav className="mt-6 space-y-1 px-3">
          <SidebarItem icon={<Home size={18} />} label="Home" active />
          <SidebarItem icon={<LayoutGrid size={18} />} label="My Planning" />
          <SidebarItem icon={<Folder size={18} />} label="Projects" />
          <SidebarItem icon={<CheckCircle size={18} />} label="Evaluation quizzes" />
          <SidebarItem icon={<BookOpen size={18} />} label="My courses" />
          <SidebarItem icon={<Lightbulb size={18} />} label="Concepts" />
          <SidebarItem icon={<Video size={18} />} label="Conference rooms" />
          <SidebarItem icon={<Code size={18} />} label="Sandboxes" />
          <SidebarItem icon={<Video size={18} />} label="Video on demand" />
          <SidebarItem icon={<Users size={18} />} label="Discord" />
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
            <img src="https://i.pravatar.cc/40" className="w-8 h-8 rounded-full" />
            <span className="text-sm">My Profile</span>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex-1">

        {/* HEADER (FIXED EXACT ORDER) */}
        <header className="bg-white border-b px-6 py-3 flex items-center justify-between">

  {/* LEFT */}
  <div className="flex items-center gap-4">

    {/* LOGO */}
    <div className="font-black text-lg text-red-600">alx</div>

    {/* HAMBURGER (VISIBLE FIX) */}
    <button className="p-2 rounded-md hover:bg-gray-100">
      <Menu size={26} color="#111827" strokeWidth={2.5} />
    </button>

  </div>

  {/* RIGHT */}
  <div className="flex items-center gap-4">

    {/* POINTS */}
    <div className="bg-yellow-200 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
      4210 pts
    </div>

    {/* NOTIFICATION BELL (FORCED VISIBILITY) */}
    <button className="p-2 rounded-md hover:bg-gray-100">
      <Bell size={24} color="#111827" strokeWidth={2.5} />
    </button>

    {/* 9 DOTS (FORCED VISIBILITY) */}
    <button className="p-2 rounded-md hover:bg-gray-100">
      <Grid3X3 size={24} color="#111827" strokeWidth={2.5} />
    </button>

    {/* PROFILE */}
    <img
      src="https://i.pravatar.cc/40"
      className="w-9 h-9 rounded-full border-2 border-gray-300"
    />

  </div>
</header>

        {/* SECOND BAR (COURSE SELECTOR) */}
        <div className="bg-white border-b px-6 py-3 flex items-center gap-2 font-semibold text-gray-700">
          Front-End Web Development
          <ChevronDownIcon />
        </div>

        {/* CONTENT */}
        <div className="p-6 space-y-4">

          <Card>
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-gray-700">Upcoming events</h2>
              <button className="border px-3 py-1 rounded text-sm">
                View all
              </button>
            </div>

            <div className="flex flex-col items-center py-10 text-gray-400">
              <Calendar size={32} />
              <p>No upcoming event</p>
            </div>
          </Card>

          <Card>
            <h2 className="font-semibold text-gray-700 mb-2">
              Current projects
            </h2>
            <p className="text-gray-500">None, enjoy the silence.</p>
          </Card>

          {scores.map((item, index) => (
            <Card key={index}>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold text-gray-700">
                    Scores - {item.title}
                  </h3>

                  <span className={`text-xs px-2 py-1 rounded mt-1 inline-block ${
                    item.validated
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {item.validated ? "Validated" : "Not validated"}
                  </span>
                </div>

                <div className="text-right font-semibold">
                  {item.score}
                  {item.validated && (
                    <CheckCircle size={16} className="text-green-600 inline ml-1" />
                  )}
                </div>
              </div>
            </Card>
          ))}

        </div>

        <div className="text-center text-xs text-gray-400 py-6">
          Copyright © 2025 ALX
        </div>

        <button className="fixed bottom-6 right-6 bg-yellow-400 p-4 rounded-full shadow-lg">
          <MessageCircle />
        </button>
      </div>
    </div>
  );
}

/* SIDEBAR ITEM */
function SidebarItem({ icon, label, active }) {
  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer ${
      active ? "bg-red-50 text-red-500" : "text-gray-600 hover:bg-gray-100"
    }`}>
      {icon}
      <span className="text-sm">{label}</span>
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

/* SVG ICONS (HEADER) */
function BellIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7z"
        stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 4h4v4H4V4zm6 0h4v4h-4V4zm6 0h4v4h-4V4zM4 10h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 16h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4z"
        stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}