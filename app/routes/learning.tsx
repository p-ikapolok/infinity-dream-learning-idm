import React from "react";

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
        <div className="px-6 py-4 border-b flex items-center gap-2 font-bold">
          alx <span className="text-gray-500 font-normal">Learning</span>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 text-sm">
          <SidebarItem icon={<HomeIcon />} label="Home" active />
          <SidebarItem icon={<BookIcon />} label="My Planning" />
          <SidebarItem icon={<FolderIcon />} label="Projects" />
          <SidebarItem icon={<CheckIcon />} label="Evaluation quizzes" />
          <SidebarItem icon={<BookIcon />} label="My courses" />
          <SidebarItem icon={<LightIcon />} label="Concepts" />
          <SidebarItem icon={<VideoIcon />} label="Conference rooms" />
          <SidebarItem icon={<CodeIcon />} label="Sandboxes" />
          <SidebarItem icon={<VideoIcon />} label="Video on demand" />
          <SidebarItem icon={<DiscordIcon />} label="Discord" />
        </nav>

        <div className="p-4 border-t flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            className="w-8 h-8 rounded-full"
            alt="profile"
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
            <ChevronDown />
          </div>

          {/* RIGHT SIDE (FIXED ORDER: bell → 9 dots → profile) */}
          <div className="flex items-center gap-6">

            <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
              4210 points
            </div>

            {/* BELL */}
            <button>
              <BellIcon />
            </button>

            {/* 9 DOT GRID (BETWEEN BELL AND PROFILE) */}
            <button>
              <GridIcon />
            </button>

            {/* PROFILE */}
            <img
              src="https://i.pravatar.cc/40"
              className="w-8 h-8 rounded-full"
              alt="profile"
            />
          </div>
        </header>

        {/* CONTENT */}
        <div className="p-6 space-y-4 flex-1">

          <Card>
            <h2 className="font-semibold mb-2">Upcoming events</h2>
            <div className="flex flex-col items-center py-10 text-gray-400">
              <CalendarIcon />
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
                  <h3 className="font-semibold">
                    Scores - {score.title}
                  </h3>

                  <span
                    className={`text-xs px-2 py-1 rounded inline-block mt-1 ${
                      score.status === "validated"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {score.status === "validated"
                      ? "Validated"
                      : "Not validated"}
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
          Copyright © 2025 ALX
        </footer>

        <button className="fixed bottom-6 right-6 bg-yellow-400 p-4 rounded-full shadow-lg">
          <ChatIcon />
        </button>
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
  icon: React.ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
        active ? "bg-red-50 text-red-600" : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}
      {label}
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      {children}
    </div>
  );
}

/* ================= SVG ICONS ================= */

function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M3 10L12 3l9 7v10a2 2 0 0 1-2 2h-5v-6H10v6H5a2 2 0 0 1-2-2V10z"
        stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M3 7h6l2 2h10v10a2 2 0 0 1-2 2H3V7z"
        stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M4 4h14v16H4z" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M15 10l4.55-2.27A1 1 0 0 1 21 8.62v6.76a1 1 0 0 1-1.45.89L15 14V10z"
        stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M8 9l-3 3 3 3M16 9l3 3-3 3"
        stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

function LightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M9 21h6M12 3v2m0 14v2M5 12H3m18 0h-2"
        stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M20 4s-2-2-8-2-8 2-8 2v14s2 2 8 2 8-2 8-2V4z"
        stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

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

function CalendarIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <path d="M4 7h16M7 3v4M17 3v4M5 11h14v10H5V11z"
        stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"
        stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}