import { ReactNode } from "react";
import {
  FaHome,
  FaFolder,
  FaBook,
  FaDiscord,
  FaVideo,
  FaCode,
  FaCheckCircle,
  FaLightbulb,
} from "react-icons/fa";

import { FiBell } from "react-icons/fi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { HiChevronDown } from "react-icons/hi2";

type Score = {
  title: string;
  status: "validated" | "not_validated";
  average: string;
};

const scores: Score[] = [
  {
    title: "ALX AiCE – AI Career Essentials",
    status: "validated",
    average: "79.28%",
  },
  {
    title: "Front-End Web Development",
    status: "validated",
    average: "87.93%",
  },
  {
    title: "Virtual Assistant",
    status: "validated",
    average: "98.04%",
  },
  {
    title: "Professional Foundations",
    status: "validated",
    average: "97.37%",
  },
  {
    title: "Freelancer Academy - 4-week",
    status: "not_validated",
    average: "0.0%",
  },
];

export default function ALXDashboard(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* SIDEBAR */}
      <aside className="w-[260px] bg-white border-r min-h-screen flex flex-col">
        <div className="px-6 py-4 border-b font-bold text-lg">
          alx <span className="text-gray-500 font-normal">Learning</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 text-sm">
          <SidebarItem label="Home" icon={<FaHome size={18} />} active />
          <SidebarItem label="My Planning" icon={<FaBook size={18} />} />
          <SidebarItem label="Projects" icon={<FaFolder size={18} />} />
          <SidebarItem label="Evaluation quizzes" icon={<FaCheckCircle size={18} />} />
          <SidebarItem label="My courses" icon={<FaBook size={18} />} />
          <SidebarItem label="Concepts" icon={<FaLightbulb size={18} />} />
          <SidebarItem label="Conference rooms" icon={<FaVideo size={18} />} />
          <SidebarItem label="Sandboxes" icon={<FaCode size={18} />} />
          <SidebarItem label="Discord" icon={<FaDiscord size={18} />} />
        </nav>

        <div className="p-4 border-t flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm">My Profile</span>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 flex flex-col">
        {/* HEADER */}
        <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-medium">
            Front-End Web Development
            <HiChevronDown />
          </div>

          <div className="flex items-center gap-5">
            <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
              4210 points
            </div>

            <FiBell size={18} />

            {/* 9 DOT GRID ICON (REAL) */}
            <HiOutlineSquares2X2 size={20} />

            <img
              src="https://i.pravatar.cc/40"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </header>

        {/* CONTENT */}
        <div className="p-6 space-y-4 flex-1">
          <Card>
            <h2 className="font-semibold mb-2">Upcoming events</h2>
            <div className="flex flex-col items-center py-10 text-gray-400">
              <p>No upcoming event</p>
            </div>
          </Card>

          <Card>
            <h2 className="font-semibold">Current projects</h2>
            <p className="text-gray-500">None, enjoy the silence.</p>
          </Card>

          {scores.map((score, i) => (
            <Card key={i}>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold">{score.title}</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      score.status === "validated"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {score.status}
                  </span>
                </div>

                <div className="text-right font-semibold">
                  {score.average}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <footer className="text-center text-xs text-gray-400 py-6">
          © 2026 ALX Learning
        </footer>
      </main>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function SidebarItem({
  label,
  icon,
  active,
}: {
  label: string;
  icon: ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
        active ? "bg-red-50 text-red-600" : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

function Card({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      {children}
    </div>
  );
}