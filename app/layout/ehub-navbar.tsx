import { useState } from "react";
import { Link } from "react-router";

export default function EhubNavbar() {
  const [apps, setApps] = useState(false);
  const [profile, setProfile] = useState(false);

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b bg-white">

      <div className="font-bold">
        Ehub
      </div>

      <div className="flex items-center gap-4">

        <button>🔔</button>

        <button onClick={() => setApps(!apps)}>
          ⠿
        </button>

        <button onClick={() => setProfile(!profile)}>
          👤
        </button>

      </div>

      {apps && (
        <div className="absolute right-20 top-16 bg-white shadow-lg rounded-xl p-4 w-48">
          <div className="flex flex-col gap-3">
            <Link to="/learning">Learning</Link>
            <Link to="/community">Community</Link>
            <Link to="/rewards">Rewards</Link>
            <Link to="/support">Support</Link>
          </div>
        </div>
      )}

      {profile && (
        <div className="absolute right-6 top-16 bg-white shadow-lg rounded-xl p-4 w-52">
          <div className="flex flex-col gap-3">

            <button>Toggle Light/Dark</button>
            <Link to="/profile">View profile</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/support">Support</Link>
            <button>Logout</button>

          </div>
        </div>
      )}

    </header>
  );
}