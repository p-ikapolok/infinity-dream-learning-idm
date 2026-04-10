import { useState, ReactNode } from "react";
import {
  Bell,
  Calendar,
  ChevronDown,
  Menu,
  Home,
  Folder,
  BookOpen,
  Video,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

type Score = {
  title: string;
  validated: boolean;
  score: string;
};

export default function ALXLearningDashboard() {
  const [open, setOpen] = useState<boolean>(false);

  const scores: Score[] = [
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
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r">
        <div className="p-4 flex items-center gap-2 font-bold text-lg">
          <Menu size={18} />
          <span className="font-black">alx</span>
          <span className="text-gray-500 font-normal">Learning</span>
        </div>

        <nav className="mt-6 space-y-1 px-3">
          <SidebarItem icon={<Home size={18} />} label="Home" active />
          <SidebarItem label="My Planning" />
          <SidebarItem label="Projects" />
          <SidebarItem label="Evaluation quizzes" />
          <SidebarItem label="My courses" />
          <SidebarItem label="Concepts" />
          <SidebarItem label="Conference rooms" />
          <SidebarItem label="Sandboxes" />
          <SidebarItem label="Video on demand" />
          <SidebarItem label="Discord" />
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
            <img
              src="https://i.pravatar.cc/40"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm">My Profile</span>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-semibold">
            Front-End Web Development
            <ChevronDown size={16} />
          </div>

          <div className="flex items-center gap-6">
            <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
              4210 points
            </div>

            <Bell size={20} className="text-gray-600" />

            <img
              src="https://i.pravatar.cc/40"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </header>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Upcoming events */}
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

          {/* Current projects */}
          <Card>
            <h2 className="font-semibold text-gray-700 mb-2">
              Current projects
            </h2>

            <p className="text-gray-500">None, enjoy the silence.</p>
          </Card>

          {/* Scores */}
          {scores.map((item, index) => (
            <Card key={index}>
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold text-gray-700">
                    Scores - {item.title}
                  </h3>

                  <span
                    className={`text-xs px-2 py-1 rounded mt-1 inline-block ${
                      item.validated
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.validated ? "Validated" : "Not validated"}
                  </span>
                </div>

                <div className="text-right">
                  <div className="text-sm text-gray-500">
                    Average
                  </div>

                  <div className="font-semibold flex items-center gap-1 justify-end">
                    {item.score}
                    {item.validated && (
                      <CheckCircle
                        size={16}
                        className="text-green-600"
                      />
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-400 py-6">
          Copyright © 2025 ALX, All rights reserved.
        </div>

        {/* Floating chat */}
        <button className="fixed bottom-6 right-6 bg-yellow-400 p-4 rounded-full shadow-lg">
          <MessageCircle />
        </button>
      </div>
    </div>
  );
}

type SidebarItemProps = {
  icon?: ReactNode;
  label: string;
  active?: boolean;
};

function SidebarItem({ icon, label, active }: SidebarItemProps) {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer
      ${active ? "bg-red-50 text-red-500" : "text-gray-600 hover:bg-gray-100"}`}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
}

type CardProps = {
  children: ReactNode;
};

function Card({ children }: CardProps) {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      {children}
    </div>
  );
}