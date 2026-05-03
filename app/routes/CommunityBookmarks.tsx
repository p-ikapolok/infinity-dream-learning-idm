import { useState } from "react";
import CommunityLayout from "../components/CommunityLayout";

// --- Mock Data ---
const MOCK_BOOKMARKS = [
  {
    id: 1,
    title: "Understanding React Server Components",
    type: "Article",
    date: "May 1, 2026",
    readTime: "5 min read",
    description: "A deep dive into how SSR and Server Components are changing the way we build modern web apps.",
  },
  {
    id: 2,
    title: "Advanced Tailwind CSS Patterns",
    type: "Course",
    date: "Apr 28, 2026",
    readTime: "1h 30m",
    description: "Learn how to structure enterprise-level design systems using standard Tailwind utility classes.",
  },
  {
    id: 3,
    title: "How to negotiate your first dev salary?",
    type: "Discussion",
    date: "Apr 25, 2026",
    readTime: "24 replies",
    description: "Great community thread with tips from senior engineers on handling job offers and equity.",
  },
  {
    id: 4,
    title: "PostgreSQL Indexing Strategies",
    type: "Resource",
    date: "Apr 20, 2026",
    readTime: "10 min read",
    description: "Cheatsheet for knowing when to use B-Tree, Hash, or GIN indexes in your database.",
  }
];

const CATEGORIES = ["All", "Article", "Course", "Discussion", "Resource"];

export default function CommunityBookmarks() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter logic
  const filteredBookmarks = MOCK_BOOKMARKS.filter((bookmark) => {
    const matchesSearch = bookmark.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || bookmark.type === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <CommunityLayout
  sidebarOpen={sidebarOpen}
  setSidebarOpen={setSidebarOpen}
>
      <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8 space-y-8">
        
        {/* --- Header & Search Section --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Saved Bookmarks</h1>
            <p className="text-gray-600 mt-1">Access your saved discussions, articles, and resources.</p>
          </div>
          
          <div className="relative w-full md:w-72">
            {/* Search SVG Icon */}
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <input 
              type="text" 
              placeholder="Search bookmarks..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* --- Categories Filter --- */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category 
                  ? "bg-gray-900 text-white" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* --- Bookmarks Grid --- */}
        {filteredBookmarks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBookmarks.map((bookmark) => (
              <div 
                key={bookmark.id} 
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col hover:shadow-md transition-shadow group"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-50 text-blue-700">
                    {bookmark.type}
                  </span>
                  
                  {/* Filled Bookmark SVG Icon */}
                  <button className="text-blue-600 hover:text-blue-800 transition-colors p-1" title="Remove bookmark">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M6.32 2.577a4.902 4.902 0 013.186 1.164L12 6.071l2.494-2.33a4.902 4.902 0 013.187-1.164 4.903 4.903 0 014.32 4.887v11.393c0 2.21-2.457 3.42-4.148 2.05l-3.853-3.116-3.854 3.116c-1.69.1.37-4.148-2.05V7.464a4.903 4.903 0 014.32-4.887z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                  {bookmark.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">
                  {bookmark.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                  <div className="flex items-center text-xs text-gray-500 gap-3">
                    <span className="flex items-center gap-1">
                      {/* Calendar/Clock SVG Icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {bookmark.readTime}
                    </span>
                  </div>
                  
                  <button className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">
                    View
                    {/* External Link SVG Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* --- Empty State --- */
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center flex flex-col items-center justify-center">
             {/* Outline Bookmark SVG Icon for Empty State */}
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-16 h-16 text-gray-300 mb-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 3.5h-11a2 2 0 00-2 2v15l6.5-4.5 6.5 4.5v-15a2 2 0 00-2-2z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-1">No bookmarks found</h3>
            <p className="text-gray-500 max-w-sm">
              {searchQuery ? "Try adjusting your search or category filters to find what you're looking for." : "You haven't saved anything yet. Start exploring the community to save topics!"}
            </p>
            {searchQuery && (
              <button 
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>
        )}
      </div>
    </CommunityLayout>
  );
}