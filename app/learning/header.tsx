import { useState } from "react";
import { Link } from "react-router";
import { getPercent } from "../lib/progress";
import { getNotifications } from "../lib/notifications";

export default function LearningHeader({ toggleSidebar }: any) {
  const [apps, setApps] = useState(false);
  const [profile, setProfile] = useState(false);

  const percent = getPercent("course-1", 10);
  const notes = getNotifications();

  return (
    <div className="border-b bg-white relative">

      {/* progress bar */}
      <div className="w-full bg-gray-200 h-1">
        <div
          className="bg-purple-600 h-1 transition-all"
          style={{ width: percent + "%" }}
        />
      </div>

      <header className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          {/* sidebar toggle */}
          <button
            onClick={toggleSidebar}
            className="text-xl"
          >
            ☰
          </button>

          {/* subscription badge */}
          <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-lg text-sm">
            Pro Plan
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">

          {/* notifications */}
          <button className="relative">
            🔔
            {notes.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-1 rounded">
                {notes.length}
              </span>
            )}
          </button>

          {/* apps */}
          <button onClick={() => setApps(!apps)}>
            ⠿
          </button>

          {/* profile */}
          <button onClick={() => setProfile(!profile)}>
            👤
          </button>

        </div>

      </header>

      {/* APPS DROPDOWN */}
      {apps && (
        <div className="absolute right-20 top-16 bg-white shadow-lg border rounded-xl p-4 w-52">

          <div className="flex flex-col gap-3">

            <Link to="/ehub">Ehub</Link>
            <Link to="/learning">Learning</Link>
            <Link to="/community">Community</Link>
            <Link to="/rewards">Rewards</Link>
            <Link to="/support">Support</Link>

          </div>

        </div>
      )}

      {/* PROFILE DROPDOWN */}
      {profile && (
        <div className="absolute right-6 top-16 bg-white shadow-lg border rounded-xl p-4 w-52">

          <div className="flex flex-col gap-3">

            <Link to="/profile">View profile</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/support">Support</Link>

            <button className="text-left">
              Logout
            </button>

          </div>

        </div>
      )}

    </div>
  );
}