import { Link, useLocation } from "react-router";
import { useState } from "react";

export default function LearningSidebar() {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const Item = ({ to, icon, label }: any) => {
    const active = location.pathname.startsWith(to);

    return (
      <Link
        to={to}
        className={`flex items-center gap-3 p-3 rounded-xl transition
        ${active ? "bg-purple-100 text-purple-700" : "hover:bg-gray-100"}
        `}
      >
        <span className="text-lg">{icon}</span>

        {open && (
          <span className="text-sm font-medium">
            {label}
          </span>
        )}
      </Link>
    );
  };

  return (
    <aside className="bg-white dark:bg-gray-900 border-r dark:border-gray-700"
      ${open ? "w-64" : "w-20"}
      `}
    >
      {/* header */}
      <div className="flex items-center justify-between p-4 border-b">

        {open && (
          <h2 className="font-bold">
            Learning
          </h2>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="text-lg"
        >
          ☰
        </button>

      </div>

      {/* nav */}
      <nav className="p-3 space-y-2 overflow-y-auto">

        <Item to="/learning" icon="🏠" label="Home" />

        <Item to="/my-planning" icon="🗓" label="My planning" />

        <Item to="/projects" icon="📁" label="Projects" />

        <Item to="/quizzes" icon="📝" label="Evaluation quizzes" />

        <Item to="/my-courses" icon="🎓" label="My courses" />

        <Item to="/certificate" icon="📜" label="Certificates" />

        <Item to="/achievements" icon="🏆" label="Achievements" />

        <Item to="/concepts" icon="🧠" label="Concepts" />

        <Item to="/sandbox" icon="💻" label="Sandboxes" />

        <Item to="/videos" icon="🎥" label="Video on demand" />

        <Item to="/profile" icon="👤" label="My profile" />
        <Item to="/settings" icon="⚙️" label="Settings" />

      </nav>
    </aside>
  );
}