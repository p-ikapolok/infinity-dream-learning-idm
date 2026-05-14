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
import SidebarItem from "./SidebarItem";

export default function LearningSidebar({ collapsed }) {
  const [search, setSearch] = useState("");

  return (
      <>
          {/* SIDEBAR */}
      <aside className={`bg-white border-r relative transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}>

        {/* SIDEBAR HEADER */}
        <div className="p-4 flex items-center gap-2 font-bold text-lg">
          <Menu size={18} />
          {!collapsed && <span className="font-black">infinity</span>}
        </div>

{/* SIDEBAR SEARCH (FIXED COLLAPSE) */}
{!collapsed && (
  <div className="px-3 mt-2">
    <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">

      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="#6B7280" strokeWidth="2" />
        <path d="M20 20l-3-3" stroke="#6B7280" strokeWidth="2" />
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

        {/* NAV */}
        <nav className="mt-6 space-y-1 px-3">

                    <SidebarItem
    to="/learning"
    collapsed={collapsed}
    icon={<HiHome size={18} />}
    label="Home"
  />

  <SidebarItem
    to="/MyPlanning"
    collapsed={collapsed}
    icon={<HiOutlineSquares2X2 size={18} />}
    label="My Planning"
  />

  <SidebarItem
    to="/Projects"
    collapsed={collapsed}
    icon={<HiFolder size={18} />}
    label="Projects"
  />

  <SidebarItem
    to="/EvaluationQuizzers"
    collapsed={collapsed}
    icon={<HiCheckCircle size={18} />}
    label="Evaluation quizzes"
  />

  <SidebarItem
    to="/MyCourse"
    collapsed={collapsed}
    icon={<HiBookOpen size={18} />}
    label="My courses"
  />

  <SidebarItem
    to="/LearningCourseView"
    collapsed={collapsed}
    icon={<HiLightBulb size={18} />}
    label="Concepts"
  />

  <SidebarItem
    to="/conference"
    collapsed={collapsed}
    icon={<SiZoom size={18} />}
    label="Conference rooms"
  />

  <SidebarItem
    to="/Sandboxes"
    collapsed={collapsed}
    icon={<SiCodesandbox size={18} />}
    label="Sandboxes"
  />

  <SidebarItem
    to="/VideoOnDemand"
    collapsed={collapsed}
    icon={<SiYoutube size={18} />}
    label="Video on demand"
  />

  <SidebarItem
    to="/DiscordIntergration"
    collapsed={collapsed}
    icon={<FaDiscord size={18} />}
    label="Discord"
  />
        </nav>

        {/* PROFILE */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 justify-center">
            <img src="https://i.pravatar.cc/40" className="w-8 h-8 rounded-full" />
            {!collapsed && <span className="text-sm">My Profile</span>}
          </div>
        </div>
      </aside>
</>
  );
}
