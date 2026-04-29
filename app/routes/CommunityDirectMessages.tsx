import React, { useState } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import NotificationMenu from "../components/NotificationMenu";
import NineDotsMenu from "../components/NineDotsMenu";
import ProfileMenu from "../components/ProfileMenu"; // adjust path if needed
import SearchModal from "../components/SearchModal";

export default function CommunityDirectMessages() {
  const messages = [
    {
      name: "Abel Kayakih",
      date: "Apr 9",
      message:
        "Hey Peter! We have just opened applications for the ALX...",
      avatar: "/avatars/user1.jpg",
      unread: false,
    },
    {
      name: "Talent Readiness - ALX",
      date: "Aug 22, 2025",
      message:
        "Peter Ikapolok Welcome to the ALX Data Programs. Take a...",
      avatar: "/avatars/user2.jpg",
      unread: false,
    },
    {
      name: "Samir Ayub Khan",
      date: "Aug 13, 2025",
      message: "Hi Peter! You've made it! Welcome to the ALX alumni...",
      avatar: "/avatars/user3.jpg",
      unread: true,
    },
    {
      name: "Isdor, Pauline, Grace + 4",
      date: "Mar 24, 2025",
      message: "You: Thank you George",
      avatar: "/avatars/user4.jpg",
      unread: false,
    },
    {
      name: "PEER GROUP ALX",
      date: "Mar 9, 2025",
      message: "You: https://sandtech.jotform.com/250612101775044",
      avatar: "/avatars/user5.jpg",
      unread: false,
    },
  ];
const [searchOpen, setSearchOpen] = useState(false);
const [sidebarOpen, setSidebarOpen] = useState(true);
const navigate = useNavigate();
const [menuOpen, setMenuOpen] = useState(false);
const [showNotifications, setShowNotifications] = useState(false);
const [profileOpen, setProfileOpen] = useState(false);
const NavItem = ({ icon, text, children, onClick }) => (

  <div onClick={onClick}   
className="flex items-center justify-between group cursor-pointer">  
    <div className="flex items-center gap-3 group-hover:text-black">  
      <span className="w-5 h-5">{icon}</span>  
      <span>{text}</span>  
    </div>  
    {children}  
  </div>  
);  

const InstagramIcon = () => (
<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
<rect x="3" y="3" width="18" height="18" rx="5" />
<circle cx="12" cy="12" r="4" fill="white"/>
<circle cx="17" cy="7" r="1.2" fill="white"/>
</svg>
);

const LinkedInIcon = () => (
<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
<rect width="24" height="24" rx="4"/>
<rect x="5" y="9" width="3" height="10" fill="white"/>
<circle cx="6.5" cy="6.5" r="1.5" fill="white"/>
<path d="M11 9h3v2c.5-1 2-2 4-2 3 0 5 2 5 6v4h-3v-4c0-2-1-3-2.5-3S15 13 15 15v4h-3z" fill="white"/>
</svg>
);

const XIcon = () => (
<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
<path d="M4 4l16 16M20 4L4 20" stroke="white" strokeWidth="2"/>
</svg>
);

const Section = ({ title, children }) => (

  <div>  
    <div className="flex items-center justify-between text-gray-500 text-xs mb-2">  
      <span>{title} ⌄</span>  
      <span>•••</span>  
    </div>  
    <div className="space-y-1">{children}</div>  
  </div>  
);  

const SectionItem = ({ icon, text, children, active, onClick }) => (
  <div onClick={onClick}
    className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition active:scale-95 ${
      active
        ? "bg-blue-500 text-white"
        : "hover:bg-gray-100 text-gray-700"
    }`}
  >
    <div className="flex items-center gap-3">
      <span className="w-4 h-4">{icon}</span>
      <span className="text-sm">{text}</span>
    </div>
   <div onClick={(e) => e.stopPropagation()}>
    {children}
  </div>
  </div>
);

const Badge = ({ children, red }) => (
  <span
    className={`text-xs px-2 py-0.5 rounded-full ${
      red ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"
    }`}
  >
    {children}
  </span>
);  

/* ================= SVG ICONS ================= */

const SearchIcon = () => (
<svg className="w-5 h-5 stroke-[1.6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<circle cx="11" cy="11" r="7" />
<line x1="20" y1="20" x2="16.5" y2="16.5" />
</svg>
);

const BellIcon = () => (
<svg className="w-5 h-5 stroke-[1.6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M18 16H6l-1 1h14l-1-1z" />
<path d="M6 16V11a6 6 0 0112 0v5" />
<path d="M10 18a2 2 0 004 0" />
</svg>
);

const MessageIcon = () => (
<svg className="w-5 h-5 stroke-[1.6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M21 15a4 4 0 01-4 4H8l-5 3V7a4 4 0 014-4h10a4 4 0 014 4z" />
</svg>
);

const BookmarkIcon = () => (
<svg className="w-5 h-5 stroke-[1.6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M6 3h12v18l-6-4-6 4z" />
</svg>
);

const HomeIcon = () => (
<svg className="w-5 h-5 stroke-[1.6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M3 10l9-7 9 7" />
<path d="M5 10v10h14V10" />
</svg>
);

const CalendarIcon = () => (
<svg className="w-5 h-5 stroke-[1.6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<rect x="3" y="5" width="18" height="16" rx="2" />
<line x1="3" y1="10" x2="21" y2="10" />
<line x1="8" y1="3" x2="8" y2="7" />
<line x1="16" y1="3" x2="16" y2="7" />
</svg>
);

const ChartIcon = () => (
<svg className="w-5 h-5 stroke-[1.6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<rect x="4" y="10" width="3" height="10" />
<rect x="10" y="6" width="3" height="14" />
<rect x="16" y="3" width="3" height="17" />
</svg>
);

const TrophyIcon = () => (
<svg className="w-4 h-4 fill-current text-yellow-500" viewBox="0 0 24 24">
<path d="M7 4h10v3a5 5 0 01-10 0V4z" />
<rect x="10" y="14" width="4" height="3" />
</svg>
);

const FlagIcon = () => (
<svg className="w-4 h-4 fill-current text-indigo-500" viewBox="0 0 24 24">
<path d="M4 3v18" stroke="currentColor" strokeWidth="1.5" fill="none"/>
<path d="M4 4h10l-2 4 2 4H4z" />
</svg>
);

const CheckIcon = () => (
<svg className="w-4 h-4 fill-current text-indigo-500" viewBox="0 0 24 24">
<circle cx="12" cy="12" r="10" />
<path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
</svg>
);

const UserIcon = () => (
<svg className="w-4 h-4 fill-current text-indigo-500" viewBox="0 0 24 24">
<circle cx="12" cy="8" r="4" />
<path d="M4 20a8 8 0 0116 0" />
</svg>
);

const MegaphoneIcon = () => (
<svg className="w-4 h-4 fill-current text-indigo-500" viewBox="0 0 24 24">
<path d="M3 11v2a2 2 0 002 2h2l5 4V5l-5 4H5a2 2 0 00-2 2z" />
</svg>
);

const StarIcon = () => (
<svg className="w-4 h-4 fill-current text-indigo-500" viewBox="0 0 24 24">
<path d="M12 2l3 6 6 .9-4.5 4.4 1 6.7L12 18l-5.5 3 1-6.7L3 8.9 9 8z" />
</svg>
);

const UsersIcon = () => (
<svg className="w-4 h-4 fill-current text-indigo-500" viewBox="0 0 24 24">
<circle cx="9" cy="8" r="3" />
<circle cx="17" cy="10" r="2.5" />
<path d="M2 20a7 7 0 0114 0" />
</svg>
);

const HeartIconFilled = () => (
<svg className="w-4 h-4 fill-current text-indigo-500" viewBox="0 0 24 24">
<path d="M12 21s-7-5-9-9a5 5 0 019-6 5 5 0 019 6c-2 4-9 9-9 9z" />
</svg>
);

const HeartIconOutlined = () => (
<svg
className="w-4 h-4"
fill="none"
stroke="currentColor"
strokeWidth="1.8"
viewBox="0 0 24 24"

> 

<path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" />

  </svg>  
);  const ExternalIcon = () => (
<svg className="w-4 h-4 stroke-[1.6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M14 3h7v7" />
<path d="M10 14L21 3" />
<path d="M21 14v7h-7" />
<path d="M3 10v11h11" />
</svg>
);

const DotIcon = () => (
<svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
<circle cx="12" cy="12" r="5" />
</svg>
);

const CommentIcon = () => (
<svg
className="w-4 h-4"
fill="none"
stroke="currentColor"
strokeWidth="1.8"
viewBox="0 0 24 24"

> 

<path d="M21 15a4 4 0 01-4 4H8l-5 3V7a4 4 0 014-4h10a4 4 0 014 4z" />

  </svg>  
);  
  return (  
    <div className="bg-gray-50 min-h-screen flex flex-col">  {/* Header */}  
  <header className="relative flex justify-between items-center px-6 py-4 bg-white shadow">  
    <h1 className="text-xl font-bold text-gray-800">Infinity Hub</h1>  
    <div className="flex items-center space-x-6">  
      {/* Points */}  
      <span

onClick={() => navigate("/RewardsPage")}
className="text-gray-700 font-semibold cursor-pointer hover:text-blue-600"

> 

4210 points
</span>

{/* Notification bell */}

<div className="relative">  
  <button  
    onClick={() => setShowNotifications(!showNotifications)}  
    className="text-gray-600 hover:text-gray-800 relative"  
  >  
    <svg  
      xmlns="http://www.w3.org/2000/svg"  
      className="w-6 h-6"  
      fill="currentColor"  
      viewBox="0 0 24 24"  
    >  
      <path d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1" />  
    </svg>  <span className="absolute top-0 right-0 block w-2 h-2 bg-red-500 rounded-full"></span>

  </button>  {showNotifications && (

  <div className="absolute right-0 mt-3 z-50">  
    <NotificationMenu />  
  </div>  
)}  
</div>  {/* 9-dots menu */}

<div className="relative">  
  <button  
    onClick={() => setMenuOpen(!menuOpen)}  
    className="text-gray-600 hover:text-gray-800"  
  >  
    <svg  
      xmlns="http://www.w3.org/2000/svg"  
      className="w-6 h-6"  
      fill="currentColor"  
      viewBox="0 0 24 24"  
    >  
      <circle cx="5" cy="5" r="1.5" />  
      <circle cx="12" cy="5" r="1.5" />  
      <circle cx="19" cy="5" r="1.5" />  
      <circle cx="5" cy="12" r="1.5" />  
      <circle cx="12" cy="12" r="1.5" />  
      <circle cx="19" cy="12" r="1.5" />  
      <circle cx="5" cy="19" r="1.5" />  
      <circle cx="12" cy="19" r="1.5" />  
      <circle cx="19" cy="19" r="1.5" />  
    </svg>  
  </button>  {/* Dropdown menu */}
{menuOpen && (

  <div className="absolute right-0 mt-3 z-50">  
    <NineDotsMenu />  
  </div>  
)}  
</div>  {/* Profile icon */}

<div className="relative">  
  <button  
    onClick={() => {  
  setProfileOpen(!profileOpen);  
  setMenuOpen(false);  
  setShowNotifications(false);  
}}  
    className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 focus:outline-none"  
  >  
    {/* Round SVG profile icon */}  
    <svg  
      xmlns="http://www.w3.org/2000/svg"  
      className="w-6 h-6 text-gray-700"  
      fill="currentColor"  
      viewBox="0 0 24 24"  
    >  
      <circle cx="12" cy="8" r="4" />  
      <path d="M4 20a8 8 0 0116 0" />  
    </svg>  
  </button>  {/* Profile dropdown menu connected */}
{profileOpen && (

  <div className="absolute right-0 mt-3 z-50">  
    <ProfileMenu menuOpen={profileOpen} />  
  </div>  
)}  
      </div>  
        </div>  
      </header>  {/* Banner */}  
  <section className="relative">  
    <img  
      src="/images/banner.png"  
      alt="Banner"  
      className="w-full h-64 object-cover"  
    />  
    <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-4">  
      <h2 className="text-2xl font-bold">Welcome to the Hub</h2>  
      <p className="mt-2 text-lg">  
        Your Infinity Dream Learning Journey Starts Here  
      </p>  
      <p className="mt-1">Track your progress, achieve your goals.</p>  
    </div>  
  </section>  

  {/* Community Section */}  
  <div className="flex flex-1 items-stretch">  
    {/* Sidebar */}  
     {sidebarOpen && (  
    <aside className="w-72 bg-white border-r flex flex-col">  

      {/* TOP */}  
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">  

        {/* MAIN NAV */}  
        <nav className="space-y-4 text-gray-700 text-sm">  
          <SectionItem

icon={<SearchIcon />}
text="Search"
onClick={() => setSearchOpen(true)}
/>

<NavLink

to="/CommunityNotifications"
className={({ isActive }) =>
isActive ? "text-blue-700" : ""
}

> 

<SectionItem icon={<BellIcon />} text="Notifications">
<Badge red>2</Badge>
</SectionItem>
</NavLink>

              <NavLink
  to="/CommunityDirectMessages"
  className={({ isActive }) =>
    isActive ? "text-blue-700" : ""
  }
>
  <SectionItem icon={<MessageIcon />} text="Direct messages" />
</NavLink>

              <NavLink
  to="/bookmarks"
  className={({ isActive }) =>
    isActive ? "text-blue-700" : ""
  }
>
  <SectionItem icon={<BookmarkIcon />} text="Bookmarks" />
</NavLink>

<NavLink
  to="/feed"
  className={({ isActive }) =>
    isActive ? "text-blue-700" : ""
  }
>
  <SectionItem icon={<HomeIcon />} text="Feed" />
</NavLink>

<NavLink
  to="/events"
  className={({ isActive }) =>
    isActive ? "text-blue-700" : ""
  }
>
  <SectionItem icon={<CalendarIcon />} text="Events" />
</NavLink>

<NavLink
  to="/leaderboard"
  className={({ isActive }) =>
    isActive ? "text-blue-700" : ""
  }
>
  <SectionItem icon={<ChartIcon />} text="Leaderboard" />
</NavLink>    
        </nav>  

        {/* INFINITY */}  
        <Section title="Infinity">  
          <SectionItem active icon={<DotIcon />} text="Our Community" />  
          <SectionItem icon={<TrophyIcon />} text="Infinity Community" />  
          <SectionItem icon={<CalendarIcon />} text="Infinity Events" />  
          <SectionItem icon={<BellIcon />} text="Infinity Announcements" />  
          <SectionItem icon={<UsersIcon />} text="Infinity Alumni Community" />  
        </Section>  

        {/* WELCOME */}  
        <Section title="Welcome">  
          <SectionItem icon={<FlagIcon />} text="Start Here!">  
            <Badge>1</Badge>  
          </SectionItem>  

          <SectionItem icon={<CheckIcon />} text="Welcome Checklist" />  

          <SectionItem icon={<UserIcon />} text="Introduce Yourself">  
            <Badge>99+</Badge>  
          </SectionItem>  
        </Section>  

        {/* COMMUNITY */}  
        <Section title="Community">  
          <SectionItem icon={<MegaphoneIcon />} text="Announcements">  
            <Badge>12</Badge>  
          </SectionItem>  

          <SectionItem icon={<UserIcon />} text="Member Spotlight" />  

          <SectionItem icon={<StarIcon />} text="Share Your Wins">  
            <Badge>99+</Badge>  
          </SectionItem>  

          <SectionItem icon={<UsersIcon />} text="Interest Groups" />  

          <SectionItem icon={<CalendarIcon />} text="Community Events">  
            <Badge>32</Badge>  
          </SectionItem>  

          <SectionItem icon={<HeartIconFilled />} text="Community Corner">  
            <Badge>25</Badge>  
          </SectionItem>  
        </Section>  

        {/* RESOURCES */}  
        <Section title="Resources">  
          <SectionItem icon={<ExternalIcon />} text="Download Android App" />  
          <SectionItem icon={<ExternalIcon />} text="Download iOS App" />  
        </Section>  

      </div>  

      {/* PROFILE */}

<div className="border-t p-4 mt-auto flex items-center gap-3">  {/* FULLY ROUND SVG AVATAR */}
<svg
xmlns="http://www.w3.org/2000/svg"
className="w-10 h-10"
viewBox="0 0 24 24"

> 

{/* Outer full circle */}  
<circle cx="12" cy="12" r="12" fill="#E5E7EB" />  

{/* Head */}  
<circle cx="12" cy="9" r="3.5" fill="#6B7280" />  

{/* Shoulders */}  
<path  
  d="M6 18a6 6 0 0112 0"  
  fill="#6B7280"  
/>

  </svg>  {/* TEXT */}

  <div className="text-sm">  
    <p className="font-semibold text-gray-800">Peter Ikapolok</p>  
    <p className="text-gray-500 text-xs leading-tight">  
      Virtual Assistant | Specializing in Administrative Support |  
      Helping Entrepreneurs Increase Productivity  
    </p>  
  </div>  </div>  </aside>    
    )}  

    {/* Main Content */}  
    <div className="flex-1 flex flex-col">  
      {/* Community Header */}  
      <div className="flex items-center justify-between p-6 bg-white shadow mb-6">  
        <div className="flex items-center gap-4">  
          <button  
            onClick={() => setSidebarOpen(!sidebarOpen)}  
            className="text-gray-600 hover:text-gray-800"  
          >  
            <svg  
              xmlns="http://www.w3.org/2000/svg"  
              className="w-7 h-7"  
              viewBox="0 0 24 24"  
              fill="none"  
              stroke="currentColor"  
              strokeWidth="2"  
              strokeLinecap="round"  
            >  
              <line x1="3" y1="6" x2="15" y2="6" />  
              <line x1="3" y1="12" x2="21" y2="12" />  
              <line x1="3" y1="18" x2="15" y2="18" />  
            </svg>  
          </button>  

          <img src="/images/alx-logo.png" alt="ALX Logo" className="h-8" />  
        </div>  

        {/* PROFILE ICON */}

<div  
  onClick={() => setProfileOpen(!profileOpen)}  
  className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition shadow-sm cursor-pointer"  
>  
  <svg  
    viewBox="0 0 24 24"  
    className="w-6 h-6 text-gray-700"  
    fill="none"  
    stroke="currentColor"  
    strokeWidth="1.8"  
  >  
    <circle cx="12" cy="8" r="4" />  
    <path d="M4 20a8 8 0 0116 0" />  
  </svg>  
</div>  
          </div> 
     <div className="min-h-screen bg-white">
      {/* HEADER */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <h1 className="text-lg font-semibold text-gray-800">
          Direct Messaging
        </h1>

        <div className="flex items-center gap-4 text-gray-500">
          {/* Check icon */}
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path d="M4 12l4 4 6-8" />
            <path d="M10 12l4 4 6-8" />
          </svg>

          {/* Plus icon */}
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            viewBox="0 0 24 24"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
      </div>

      {/* TABS */}
      <div className="flex items-center gap-6 px-6 pt-3 border-b text-sm">
        <button className="pb-2 border-b-2 border-black font-medium text-gray-900">
          Inbox
        </button>

        <button className="pb-2 text-gray-500 flex items-center gap-2">
          Unread
          <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">
            1
          </span>
        </button>
      </div>

      {/* MESSAGE LIST */}
      <div>
        {messages.map((msg, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-6 py-4 border-b hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <img
                src={msg.avatar}
                alt={msg.name}
                className="w-10 h-10 rounded-full object-cover"
              />

              {/* Text */}
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-gray-800">
                    {msg.name}
                  </p>
                  <span className="text-xs text-gray-400">
                    {msg.date}
                  </span>
                </div>

                <p className="text-sm text-gray-500 truncate max-w-md">
                  {msg.message}
                </p>
              </div>
            </div>

            {/* Unread dot */}
            {msg.unread && (
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>  
      
</div>
</div>

      {/* Footer */}  
      <footer className="bg-blue-900 text-white px-6 py-10 mt-10">  
        <div className="text-center mb-6">  
          <h2 className="text-xl font-bold">infinity Hub</h2>  
          <p className="mt-2">The community of those who value time.</p>  
        </div>  <div className="flex flex-wrap justify-center space-x-4 text-sm mb-6">  
      <a href="#" className="hover:underline">  
        Home  
      </a>  
      <a href="#" className="hover:underline">  
        Learning  
      </a>  
      <a href="#" className="hover:underline">  
        Community  
      </a>  
      <a href="#" className="hover:underline">  
        Rewards  
      </a>  
      <a href="#" className="hover:underline">  
        Support  
      </a>  
      <a href="#" className="hover:underline">  
        Privacy policy  
      </a>  
      <a href="#" className="hover:underline">  
        Terms & Conditions  
      </a>  
    </div>  

    <div className="flex justify-center space-x-6 mb-6">  
      <img src="/icons/x.png" alt="X" className="w-6 h-6" />  
      <img src="/icons/linkedin.png" alt="LinkedIn" className="w-6 h-6" />  
      <img src="/icons/facebook.png" alt="Facebook" className="w-6 h-6" />  
      <img src="/icons/instagram.png" alt="Instagram" className="w-6 h-6" />  
    </div>  

    <p className="text-center text-sm">© 2026 Infinity. All rights reserved.</p>  
  </footer>

<SearchModal
isOpen={searchOpen}
onClose={() => setSearchOpen(false)}
/>

{searchOpen && (
<SearchModal onClose={() => setSearchOpen(false)} />
)}

</div>
);
}