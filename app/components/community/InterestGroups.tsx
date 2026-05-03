import React, { useState } from 'react';
import CommunityLayout from '../CommunityLayout';

// --- Embedded SVGs ---
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

const CompassIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <circle cx="12" cy="12" r="10"></circle>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
  </svg>
);

// --- Mock Data ---
interface Group {
  id: string;
  name: string;
  description: string;
  members: number;
  category: string;
  color: string;
  isJoined: boolean;
}

const INITIAL_GROUPS: Group[] = [
  { id: 'g1', name: 'React Enthusiasts', description: 'Share components, hooks, and discuss the latest in the React ecosystem.', members: 1240, category: 'Frontend', color: 'bg-blue-500', isJoined: true },
  { id: 'g2', name: 'UI/UX Design', description: 'Feedback, Figma files, and design system discussions for developers and designers.', members: 890, category: 'Design', color: 'bg-pink-500', isJoined: false },
  { id: 'g3', name: 'Backend Builders', description: 'Node.js, databases, APIs, and server architecture discussions.', members: 1050, category: 'Backend', color: 'bg-emerald-500', isJoined: false },
  { id: 'g4', name: 'Job Hunters', description: 'Resume reviews, interview prep, and job postings for junior to mid developers.', members: 2100, category: 'Career', color: 'bg-purple-500', isJoined: true },
  { id: 'g5', name: 'TypeScript Wizards', description: 'Strict typing, generics, and everything TS. No any allowed!', members: 675, category: 'Frontend', color: 'bg-blue-700', isJoined: false },
  { id: 'g6', name: 'Freelance Hustle', description: 'Client management, pricing strategies, and contract templates.', members: 430, category: 'Business', color: 'bg-amber-500', isJoined: false },
];

export default function InterestGroups() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [groups, setGroups] = useState<Group[]>(INITIAL_GROUPS);
  const [filter, setFilter] = useState<'All Groups' | 'My Groups'>('All Groups');
  const [searchQuery, setSearchQuery] = useState('');

  // Toggle join state
  const handleToggleJoin = (id: string) => {
    setGroups(groups.map(g => {
      if (g.id === id) {
        return { ...g, isJoined: !g.isJoined, members: g.isJoined ? g.members - 1 : g.members + 1 };
      }
      return g;
    }));
  };

  // Filter groups based on search and pill tabs
  const filteredGroups = groups.filter(g => {
    const matchesSearch = g.name.toLowerCase().includes(searchQuery.toLowerCase()) || g.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = filter === 'All Groups' ? true : g.isJoined;
    return matchesSearch && matchesTab;
  });

  return (
    <CommunityLayout
  sidebarOpen={sidebarOpen}
  setSidebarOpen={setSidebarOpen}
>
      <div className="flex flex-col h-full bg-white animate-in fade-in slide-in-from-bottom-4 duration-500 rounded-lg">
        
        {/* Header Section */}
        <div className="px-6 py-8 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
              <CompassIcon />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Interest Groups</h1>
              <p className="text-gray-500 mt-1 text-sm">Find your tribe, join discussions, and learn together.</p>
            </div>
          </div>
        </div>

        {/* Filters & Search Bar */}
        <div className="px-6 py-4 border-b border-gray-100 flex flex-col sm:flex-row gap-4 items-center justify-between bg-gray-50/50">
          
          {/* Pill Navigation */}
          <div className="flex items-center gap-1 bg-gray-100/80 p-1 rounded-full border border-gray-200/50 w-full sm:w-max">
            {(['All Groups', 'My Groups'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`flex-1 sm:flex-none px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  filter === f
                    ? 'bg-white text-gray-900 shadow-sm border border-gray-200/50'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200/50'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <SearchIcon />
            </div>
            <input
              type="text"
              placeholder="Search groups..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder-gray-400"
            />
          </div>
        </div>

        {/* Groups Grid */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50/30">
          {filteredGroups.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500">No groups found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {filteredGroups.map(group => (
                <div 
                  key={group.id}
                  className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-gray-200 transition-all duration-300 flex flex-col"
                >
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-sm ${group.color}`}>
                      {group.name.charAt(0)}
                    </div>
                    <span className="px-2.5 py-1 bg-gray-50 text-gray-500 text-xs font-medium rounded-md border border-gray-100">
                      {group.category}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="mb-6 flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1.5 line-clamp-1">{group.name}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                      {group.description}
                    </p>
                  </div>

                  {/* Card Footer (Members & Action) */}
                  <div className="pt-4 border-t border-gray-50 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-1.5 text-gray-500 text-sm font-medium">
                      <UsersIcon />
                      <span>{group.members.toLocaleString()}</span>
                    </div>
                    
                    <button
                      onClick={() => handleToggleJoin(group.id)}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                        group.isJoined
                          ? 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                          : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                      }`}
                    >
                      {group.isJoined ? 'Joined' : 'Join Group'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
      </div>
    </CommunityLayout>
  );
}