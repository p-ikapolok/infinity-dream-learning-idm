import { useState } from "react";
import NotificationMenu from "./NotificationMenu";
import NineDotsMenu from "./NineDotsMenu";
import ProfileMenu from "./ProfileMenu";
import { useNavigate, Link } from "react-router-dom";

export default function Header({ collapsed, setCollapsed }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
              {/* HEADER */}
        <header className="h-16 shrink-0 bg-white border-b px-6 flex items-center justify-between">

          {/* LEFT */}
          <div className="flex items-center gap-4">

            <div className="font-black text-lg text-red-600">infinity</div>

            {/* HAMBURGER TOGGLE */}
            <button
              onClick={() => setCollapsed(prev=> !prev)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="#111827"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            <div className="bg-yellow-200 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
              4210 pts
            </div>

            {/* BELL */}
            <button className="p-2 rounded-md hover:bg-gray-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 8a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7z"
                  stroke="#111827"
                  strokeWidth="2"
                />
                <path
                  d="M13.73 21a2 2 0 01-3.46 0"
                  stroke="#111827"
                  strokeWidth="2"
                />
              </svg>
            </button>

            {/* 9 DOTS */}
            <button className="p-2 rounded-md hover:bg-gray-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="5" cy="5" r="2" fill="#111827" />
                <circle cx="12" cy="5" r="2" fill="#111827" />
                <circle cx="19" cy="5" r="2" fill="#111827" />

                <circle cx="5" cy="12" r="2" fill="#111827" />
                <circle cx="12" cy="12" r="2" fill="#111827" />
                <circle cx="19" cy="12" r="2" fill="#111827" />

                <circle cx="5" cy="19" r="2" fill="#111827" />
                <circle cx="12" cy="19" r="2" fill="#111827" />
                <circle cx="19" cy="19" r="2" fill="#111827" />
              </svg>
            </button>

            <img src="https://i.pravatar.cc/40" className="w-9 h-9 rounded-full border" />
          </div>
        </header>           
    </>
  );
}