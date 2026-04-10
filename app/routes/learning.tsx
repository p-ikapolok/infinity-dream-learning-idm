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
          <SidebarItem icon={<HomeIcon />} active label="Home" />
          <SidebarItem icon={<DocIcon />} label="My Planning" />
          <SidebarItem icon={<FolderIcon />} label="Projects" />
          <SidebarItem icon={<CheckIcon />} label="Evaluation quizzes" />
          <SidebarItem icon={<BookIcon />} label="My courses" />
          <SidebarItem icon={<IdeaIcon />} label="Concepts" />
          <SidebarItem icon={<VideoIcon />} label="Conference rooms" />
          <SidebarItem icon={<BoxIcon />} label="Sandboxes" />
          <SidebarItem icon={<PlayIcon />} label="Video on demand" />
          <SidebarItem icon={<ChatIcon />} label="Discord" />
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
            <ChevronDown />
          </div>

          <div className="flex items-center gap-5">
            <div className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
              4210 points
            </div>

            {/* Bell */}
            <BellIcon />

            {/* 9 dots menu (CENTER) */}
            <Grid9Dots />

            {/* Profile */}
            <img
              src="https://i.pravatar.cc/40"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </header>

        {/* Content */}
        <div className="p-6 space-y-4 flex-1">
          <Card>
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-gray-700">Upcoming events</h2>
              <button className="border px-3 py-1 rounded text-sm">
                View all
              </button>
            </div>

            <div className="flex flex-col items-center py-10 text-gray-400">
              <CalendarIcon />
              <p>No upcoming event</p>
            </div>
          </Card>

          <Card>
            <h2 className="font-semibold text-gray-700 mb-2">
              Current projects
            </h2>
            <p className="text-gray-500">None, enjoy the silence.</p>
          </Card>

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
                      <CheckCircleIcon />
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <footer className="text-center text-xs text-gray-400 py-6">
          Copyright © 2025 ALX, All rights reserved.
        </footer>

        {/* Floating chat */}
        <button className="fixed bottom-6 right-6 bg-yellow-400 p-4 rounded-full shadow-lg">
          <ChatBubbleIcon />
        </button>
      </main>
    </div>
  );
}

/* ================= ICONS (PURE SVG) ================= */

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M15 17H9M18 15V11a6 6 0 10-12 0v4l-2 2h16l-2-2z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const Grid9Dots = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="5" cy="5" r="2" />
    <circle cx="12" cy="5" r="2" />
    <circle cx="19" cy="5" r="2" />
    <circle cx="5" cy="12" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="19" cy="12" r="2" />
    <circle cx="5" cy="19" r="2" />
    <circle cx="12" cy="19" r="2" />
    <circle cx="19" cy="19" r="2" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path
      d="M7 3v3M17 3v3M4 8h16M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      stroke="green"
      strokeWidth="2"
    />
  </svg>
);

const ChatBubbleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path
      d="M21 15a4 4 0 01-4 4H8l-5 3V7a4 4 0 014-4h10a4 4 0 014 4v8z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

/* Sidebar Icons */
const HomeIcon = () => <svg viewBox="0 0 24 24" width="18"><path d="M3 10l9-7 9 7v11H3z" fill="currentColor"/></svg>;
const FolderIcon = () => <svg viewBox="0 0 24 24" width="18"><path d="M3 6h6l2 2h10v10H3z" fill="currentColor"/></svg>;
const DocIcon = () => <svg viewBox="0 0 24 24" width="18"><path d="M6 2h12v20H6z" fill="currentColor"/></svg>;
const BookIcon = () => <svg viewBox="0 0 24 24" width="18"><path d="M4 4h16v16H4z" fill="currentColor"/></svg>;
const IdeaIcon = () => <svg viewBox="0 0 24 24" width="18"><path d="M12 2a7 7 0 00-4 13v3h8v-3a7 7 0 00-4-13z" fill="currentColor"/></svg>;
const VideoIcon = () => <svg viewBox="0 0 24 24" width="18"><path d="M3 5h18v14H3z" fill="currentColor"/></svg>;
const BoxIcon = () => <svg viewBox="0 0 24 24" width="18"><path d="M3 7l9-4 9 4-9 4z" fill="currentColor"/></svg>;
const PlayIcon = () => <svg viewBox="0 0 24 24" width="18"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>;
const ChatIcon = () => <svg viewBox="0 0 24 24" width="18"><path d="M21 15a4 4 0 01-4 4H8l-5 3V7a4 4 0 014-4h10a4 4 0 014 4z" fill="currentColor"/></svg>;

function SidebarItem({
  label,
  icon,
  active,
}: {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer ${
        active ? "bg-red-50 text-red-600" : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}
      <span>{label}</span>
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