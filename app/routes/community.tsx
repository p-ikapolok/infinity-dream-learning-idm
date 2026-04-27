import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import NotificationMenu from "../components/NotificationMenu";
import NineDotsMenu from "../components/NineDotsMenu";
import ProfileMenu from "../components/ProfileMenu";

export default function CommunityFullPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">

      {/* Header */}
      <header className="relative flex justify-between items-center px-6 py-4 bg-white shadow">
        <h1 className="text-xl font-bold text-gray-800">Infinity Hub</h1>
        <div className="flex items-center space-x-6">

          <span
            onClick={() => navigate("/RewardsPage")}
            className="text-gray-700 font-semibold cursor-pointer hover:text-blue-600"
          >
            4210 points
          </span>

          {/* Notification */}
          <div className="relative">
            <button onClick={() => setShowNotifications(!showNotifications)}>
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1" />
              </svg>
            </button>
            {showNotifications && (
              <div className="absolute right-0 mt-3 z-50">
                <NotificationMenu />
              </div>
            )}
          </div>

          {/* 9 dots */}
          <div className="relative">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                {[5,12,19].map(x =>
                  [5,12,19].map(y => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" />)
                )}
              </svg>
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-3 z-50">
                <NineDotsMenu />
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="relative">
            <button
              onClick={() => {
                setProfileOpen(!profileOpen);
                setMenuOpen(false);
                setShowNotifications(false);
              }}
              className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
            >
              <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20a8 8 0 0116 0" />
              </svg>
            </button>
            {profileOpen && (
              <div className="absolute right-0 mt-3 z-50">
                <ProfileMenu menuOpen={profileOpen} />
              </div>
            )}
          </div>

        </div>
      </header>

      {/* Banner */}
      <section className="relative">
        <img src="/images/banner.png" alt="Banner" className="w-full h-64 object-cover" />
      </section>

      {/* Greeting */}
      <section className="px-6 py-6">
        <h2 className="text-xl font-semibold text-gray-800">Welcome back, Peter!</h2>
      </section>

      {/* MAIN */}
      <div className="flex flex-1">

        {/* ================= SIDEBAR (UPDATED ONLY) ================= */}
        {sidebarOpen && (
          <aside className="w-64 bg-white shadow-lg flex flex-col justify-between">

            <div className="p-6 space-y-6 overflow-y-auto">

              {/* MAIN NAV */}
              <div className="space-y-4 text-sm">

                <SidebarItem icon={<SearchIcon />} label="Search" />
                <SidebarItem icon={<BellIcon />} label="Notifications" />
                <SidebarItem icon={<MessageIcon />} label="Direct messages" />
                <SidebarItem icon={<BookmarkIcon />} label="Bookmarks" />
                <SidebarItem icon={<FeedIcon />} label="Feed" />
                <SidebarItem icon={<EventIcon />} label="Events" />
                <SidebarItem icon={<TrophyIcon />} label="Leaderboard" />

              </div>

              {/* Sections (UNCHANGED TEXT) */}
              <Section title="Infinity">
                <LinkItem text="Our Community" />
                <LinkItem text="Infinity Community" />
                <LinkItem text="Infinity Events" />
                <LinkItem text="Infinity Announcements" />
                <LinkItem text="Infinity Alumni Community" />
              </Section>

              <Section title="Welcome">
                <LinkItem text="Start Here!" />
                <LinkItem text="Welcome Checklist" />
                <LinkItem text="Introduce Yourself" />
              </Section>

              <Section title="Community">
                <LinkItem text="Announcements" />
                <LinkItem text="Member Spotlight" />
                <LinkItem text="Share Your Wins" />
                <LinkItem text="Interest Groups" />
                <LinkItem text="Community Events" />
                <LinkItem text="Community Corner" />
              </Section>

              <Section title="Resources">
                <LinkItem text="Download Android App" />
                <LinkItem text="Download iOS App" />
              </Section>

            </div>

            {/* Profile bottom */}
            <div className="p-6 border-t flex items-center gap-3">
              <img src="/images/profile.png" className="w-10 h-10 rounded-full" />
              <div>
                <p className="font-semibold">Peter Ikapolok</p>
                <p className="text-xs text-gray-600">Virtual Assistant</p>
              </div>
            </div>

          </aside>
        )}

        {/* CONTENT stays EXACTLY same */}
        <div className="flex-1"></div>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

const SidebarItem = ({ icon, label }: any) => (
  <div className="flex items-center gap-3 text-gray-700 hover:text-blue-600 cursor-pointer">
    <div className="w-5 h-5">{icon}</div>
    {label}
  </div>
);

const Section = ({ title, children }: any) => (
  <div>
    <h4 className="text-sm font-semibold text-gray-800 mb-2">{title}</h4>
    <div className="space-y-2">{children}</div>
  </div>
);

const LinkItem = ({ text }: any) => (
  <div className="text-gray-700 hover:text-blue-600 cursor-pointer text-sm">
    {text}
  </div>
);

/* ================= ICONS ================= */

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
    <circle cx="11" cy="11" r="7" />
    <line x1="16.5" y1="16.5" x2="21" y2="21" />
  </svg>
);

const BellIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1" />
  </svg>
);

const MessageIcon = () => (
  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
    <path d="M21 15a4 4 0 01-4 4H8l-5 3V7a4 4 0 014-4h10a4 4 0 014 4z" />
  </svg>
);

const BookmarkIcon = () => (
  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
    <path d="M6 3h12v18l-6-4-6 4z" />
  </svg>
);

const FeedIcon = () => (
  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
    <circle cx="6" cy="18" r="2" />
    <path d="M4 4a16 16 0 0116 16" />
    <path d="M4 10a10 10 0 0110 10" />
  </svg>
);

const EventIcon = () => (
  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" />
  </svg>
);

const TrophyIcon = () => (
  <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2">
    <path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 01-10 0z" />
  </svg>
);