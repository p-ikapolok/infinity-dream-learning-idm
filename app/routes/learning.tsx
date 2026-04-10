import {
  Bell,
  ChevronDown,
  Calendar,
  CheckCircle,
  MessageCircle,
  Grid3X3,
} from "lucide-react";

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
      {/* Sidebar */}
      <aside className="w-[260px] bg-white border-r min-h-screen flex flex-col">
        {/* Logo */}
        <div className="px-6 py-4 border-b flex items-center gap-2">
          <span className="font-black text-lg">alx</span>
          <span className="text-gray-500">Learning</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1 text-sm">
          <SidebarItem active label="Home" />
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

        {/* Profile */}
        <div className="p-4 border-t flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm">My Profile</span>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-medium">
            Front-End Web Development
            <ChevronDown size={16} />
          </div>

          <div className="flex items-center gap-6">
            <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
              4210 points
            </div>

            <Grid3X3 size={20} className="text-gray-600 cursor-pointer" />
            <Bell size={20} className="text-gray-600 cursor-pointer" />

            <img
              src="https://i.pravatar.cc/40"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </header>

        {/* Content */}
        <div className="p-6 space-y-4 flex-1">
          {/* Upcoming Events */}
          <Card>
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-gray-700">
                Upcoming events
              </h2>

              <button className="border px-3 py-1 rounded text-sm">
                View all
              </button>
            </div>

            <div className="flex flex-col items-center py-10 text-gray-400">
              <Calendar size={32} />
              <p>No upcoming event</p>
            </div>
          </Card>

          {/* Current Projects */}
          <Card>
            <h2 className="font-semibold text-gray-700 mb-2">
              Current projects
            </h2>
            <p className="text-gray-500">None, enjoy the silence.</p>
          </Card>

          {/* Scores */}
          {scores.map((score, index) => (
            <Card key={index}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-700">
                    Scores - {score.title}
                  </h3>

                  <span
                    className={`text-xs px-2 py-1 rounded mt-1 inline-block ${
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

                <div className="text-right">
                  <p className="text-sm text-gray-500">Average</p>

                  <div className="flex items-center gap-1 justify-end font-semibold">
                    {score.average}

                    {score.status === "validated" && (
                      <CheckCircle size={16} className="text-green-600" />
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center text-xs text-gray-400 py-6">
          Copyright © 2025 ALX, All rights reserved.
        </footer>

        {/* Floating Chat Button */}
        <button className="fixed bottom-6 right-6 bg-yellow-400 p-4 rounded-full shadow-lg">
          <MessageCircle />
        </button>
      </main>
    </div>
  );
}

/* Sidebar Item */
type SidebarProps = {
  label: string;
  active?: boolean;
};

function SidebarItem({ label, active }: SidebarProps): JSX.Element {
  return (
    <div
      className={`px-3 py-2 rounded-lg cursor-pointer ${
        active
          ? "bg-red-50 text-red-600"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {label}
    </div>
  );
}

/* Card */
type CardProps = {
  children: React.ReactNode;
};

function Card({ children }: CardProps): JSX.Element {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      {children}
    </div>
  );
}