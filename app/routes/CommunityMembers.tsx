import { useState } from "react";
import { Link } from "react-router"; // Assuming React Router v7
import CommunityLayout from "../components/CommunityLayout";

// --- Mock Data ---
const MOCK_MEMBERS = [
  {
    id: "user_123",
    name: "Sarah Jenkins",
    initial: "S",
    role: "Instructor",
    bio: "Senior Frontend Engineer. Passionate about React, accessibility, and design systems.",
    isOnline: true,
  },
  {
    id: "user_456",
    name: "Marcus Johnson",
    initial: "M",
    role: "Student",
    bio: "Transitioning from graphic design to web development. Learning full-stack.",
    isOnline: false,
  },
  {
    id: "user_789",
    name: "Alex Chen",
    initial: "A",
    role: "Alumni",
    bio: "Software Dev at TechCorp. Happy to mentor current students and review code!",
    isOnline: true,
  },
  {
    id: "user_101",
    name: "Elena Rodriguez",
    initial: "E",
    role: "Instructor",
    bio: "Backend specialist focusing on Node.js, PostgreSQL, and scalable architectures.",
    isOnline: true,
  },
  {
    id: "user_202",
    name: "David Kim",
    initial: "D",
    role: "Student",
    bio: "First-year computer science student. Building side projects in my free time.",
    isOnline: false,
  },
  {
    id: "user_303",
    name: "Priya Patel",
    initial: "P",
    role: "Student",
    bio: "UI/UX enthusiast learning frontend to bring my designs to life.",
    isOnline: true,
  }
];

const FILTERS = ["All", "Instructor", "Student", "Alumni"];

export default function CommunityMembers() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter logic: match search query AND selected role
  const filteredMembers = MOCK_MEMBERS.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          member.bio.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === "All" || member.role === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <CommunityLayout
  sidebarOpen={sidebarOpen}
  setSidebarOpen={setSidebarOpen}
>
      <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
        
        {/* --- Header Section --- */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Member Directory</h1>
          <p className="text-gray-600 mt-2">Connect with instructors, alumni, and fellow students.</p>
        </div>

        {/* --- Search & Filters Bar --- */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Search members by name or bio..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 shadow-sm transition-all"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            {FILTERS.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeFilter === filter
                    ? "bg-gray-900 text-white shadow-sm"
                    : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* --- Members Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredMembers.length > 0 ? (
            filteredMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group flex flex-col"
              >
                {/* Card Header: Avatar & Info */}
                <div className="flex items-start gap-4 mb-4">
                  
                  {/* Avatar */}
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 font-bold text-xl border border-blue-100">
                      {member.initial}
                    </div>
                    {member.isOnline && (
                      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>

                  {/* Name & Role */}
                  <div className="flex-1 min-w-0 pt-1">
                    <h3 className="text-base font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </h3>
                    <span className="inline-block mt-1 bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wider">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-gray-600 line-clamp-3 mb-6 flex-1">
                  {member.bio}
                </p>

                {/* Card Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                  <Link 
                    to={`/CommunityDirectMessageChat/${member.id}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.522 1.522 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                    Message
                  </Link>
                  <button className="p-2 text-gray-400 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors border border-transparent">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          ) : (
            /* --- Empty State --- */
            <div className="col-span-full py-16 flex flex-col items-center justify-center text-center bg-gray-50/50 rounded-2xl border border-dashed border-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 text-gray-300 mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900">No members found</h3>
              <p className="text-gray-500 mt-1">Try adjusting your search or role filters.</p>
            </div>
          )}
        </div>

      </div>
    </CommunityLayout>
  );
}