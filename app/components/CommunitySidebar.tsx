import React, { useState } from "react";
import { useNavigate, Link, NavLink, useParams } from "react-router-dom";

export default function CommunitySidebar() {
const [searchOpen, setSearchOpen] = useState(false);
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
  to="/CommunityBookmarks"
  className={({ isActive }) =>
    isActive ? "text-blue-700" : ""
  }
>
  <SectionItem icon={<BookmarkIcon />} text="Bookmarks" />
</NavLink>

<NavLink
  to="/CommunityFeed"
  className={({ isActive }) =>
    isActive ? "text-blue-700" : ""
  }
>
  <SectionItem icon={<HomeIcon />} text="Feed" />
</NavLink>

<NavLink
  to="/CommunityEvents"
  className={({ isActive }) =>
    isActive ? "text-blue-700" : ""
  }
>
  <SectionItem icon={<CalendarIcon />} text="Events" />
</NavLink>

<NavLink
  to="/CommunityLeaderboard"
  className={({ isActive }) =>
    isActive ? "text-blue-700" : ""
  }
>
  <SectionItem icon={<ChartIcon />} text="Leaderboard" />
</NavLink>  
        </nav>  

        {/* INFINITY */} 
        <Section title="Infinity"> 

        <NavLink
  to="/OurCommunity"
  className={({ isActive }) =>
    isActive ? "text-blue-700" : ""
  }
> 
          <SectionItem active icon={<DotIcon />} text="Our Community" />  
 </NavLink>

        <NavLink
  to="/InfinityCommunity"
  className={({ isActive }) =>
    isActive ? "text-blue-700" : ""
  }
>
          <SectionItem icon={<TrophyIcon />} text="Infinity Community" />  
       </NavLink>

      <NavLink
  to="/InfinityEvents"
  className={({ isActive }) =>
    isActive ? "text-blue-700" : ""
  }
>
          <SectionItem icon={<
CalendarIcon />} text="Infinity Events" /> 
   </NavLink>

      <NavLink
  to="/InfinityAnnouncements"
  className={({ isActive }) =>
    isActive ? "text-blue-700" : ""
  }
> 
          <SectionItem icon={<BellIcon />} text="Infinity Announcements" />  
  </NavLink>

      <NavLink
  to="/InfinityAlimniCommunity"
  className={({ isActive }) =>
    isActive ? "text-blue-700" : ""
  }
>
          <SectionItem icon={<UsersIcon />} text="Infinity Alumni Community" />  
     </NavLink>
        </Section>  

        {/* WELCOME */}  
        <Section title="Welcome"> 
    <NavLink
  to="/StartHere"
  className={({ isActive }) =>
    isActive ? "text-blue-700" : ""
  }
> 
          <SectionItem icon={<FlagIcon />} text="Start Here!">  
            <Badge>1</Badge>  
          </SectionItem>  
      </NavLink>

<NavLink
  to="/WelcomeChecklist"
  className={({ isActive }) =>
    isActive ? "text-blue-700" : ""
  }
>
          <SectionItem icon={<CheckIcon />} text="Welcome Checklist" /> 
      </NavLink>

<NavLink
  to="/IntroduceYourself"
  className={({ isActive }) =>
    isActive ? "text-blue-700" : ""
  }
>
          <SectionItem icon={<UserIcon />} text="Introduce Yourself">  
            <Badge>99+</Badge>  
          </SectionItem>  
       </NavLink>
        </Section>  

        {/* COMMUNITY */}  
        <Section title="Community">  

<NavLink
  to="/CommunityAnnouncement"
  className={({ isActive }) =>
    isActive ? "text-blue-700" : ""
  }
>
          <SectionItem icon={<MegaphoneIcon />} text="Announcements">  
            <Badge>12</Badge>  
          </SectionItem>  
      </NavLink>

<NavLink
  to="/CommunitySpotlight"
  className={({ isActive }) =>
    isActive ? "text-blue-700" : ""
  }
>
          <SectionItem icon={<UserIcon />} text="Member Spotlight" />  
    </NavLink>

<NavLink
  to="/ShareYourWins"
  className={({ isActive }) =>
    isActive ? "text-blue-700" : ""
  }
>
          <SectionItem icon={<StarIcon />} text="Share Your Wins">  
            <Badge>99+</Badge>  
          </SectionItem>  
      </NavLink>

<NavLink
  to="/InterestGroup"
  className={({ isActive }) =>
    isActive ? "text-blue-700" : ""
  }
>
          <SectionItem icon={<UsersIcon />} text="Interest Groups" />  
     </NavLink>

<NavLink
  to="/CommunityEvents"
  className={({ isActive }) =>
    isActive ? "text-blue-700" : ""
  }
>
          <SectionItem icon={<CalendarIcon />} text="Community Events">  
            <Badge>32</Badge>  
          </SectionItem>  
     </NavLink>

<NavLink
  to="/CommunityCorner"
  className={({ isActive }) =>
    isActive ? "text-blue-700" : ""
  }
>
          <SectionItem icon={<HeartIconFilled />} text="Community Corner">  
            <Badge>25</Badge>  
          </SectionItem>  
     </NavLink>
        </Section>  

        {/* RESOURCES */}  
        <Section title="Resources">  

          <SectionItem icon={<ExternalIcon />} text="Download Android App" />  
          <SectionItem icon={<ExternalIcon />} text="Download iOS App" />  
        </Section>  

      </div>  

      {/* PROFILE */}

<div className="border-t p-4 mt-auto flex items-center gap-3">  

{/* FULLY ROUND SVG AVATAR */}
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

  </svg>  

     {/* TEXT */}

  <div className="text-sm">  
    <p className="font-semibold text-gray-800">Peter Ikapolok</p>  
    <p className="text-gray-500 text-xs leading-tight">  
      Virtual Assistant | Specializing in Administrative Support |  
      Helping Entrepreneurs Increase Productivity  
    </p>  
      </div>  
    </div>  
   </aside> 
  );
}