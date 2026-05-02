export default function Banner() {
  return (
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