import React, { useState } from 'react';
import CommunityLayout from '@/layouts/CommunityLayout';

// --- Embedded SVGs ---
const MegaphoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
  </svg>
);

const PinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <line x1="12" y1="17" x2="12" y2="22"></line>
    <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"></path>
  </svg>
);

const BadgeCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-500">
    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
  </svg>
);

// --- Mock Data ---
interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  category: 'Platform' | 'Content' | 'Community';
  isPinned: boolean;
}

const MOCK_ANNOUNCEMENTS: Announcement[] = [
  {
    id: '1',
    title: 'Welcome to the New Learning Portal! 🚀',
    content: 'We are incredibly excited to roll out the completely redesigned Infinity Dream Learning portal. You will notice faster load times, the brand new AI-assisted study guides, and this completely revamped community space. Check out the release notes to see everything that is new.',
    date: 'Oct 20, 2026',
    author: 'IDL Platform Team',
    category: 'Platform',
    isPinned: true,
  },
  {
    id: '2',
    title: 'New Course Drop: Advanced React Patterns',
    content: 'The highly anticipated Advanced React Patterns course is now live in the catalog! This 8-hour module covers custom hooks, compound components, and render props. Subscribed members have immediate access.',
    date: 'Oct 18, 2026',
    author: 'IDL Content Team',
    category: 'Content',
    isPinned: false,
  },
  {
    id: '3',
    title: 'Scheduled Maintenance Notice',
    content: 'We will be performing routine database maintenance this Sunday between 2:00 AM and 4:00 AM EST. During this window, the community features may experience intermittent downtime. Your course progress will not be affected.',
    date: 'Oct 15, 2026',
    author: 'IDL DevOps',
    category: 'Platform',
    isPinned: false,
  }
];

export default function CommunityAnnouncements() {
  const [filter, setFilter] = useState<'All' | 'Platform' | 'Content'>('All');

  const filteredAnnouncements = MOCK_ANNOUNCEMENTS.filter(ann => {
    if (filter === 'All') return true;
    return ann.category === filter;
  });

  return (
    <CommunityLayout>
      <div className="flex flex-col h-full bg-white animate-in fade-in slide-in-from-bottom-4 duration-500 rounded-lg">
        
        {/* Header Section */}
        <div className="px-6 py-8 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <MegaphoneIcon />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Announcements</h1>
              <p className="text-gray-500 mt-1 text-sm">Official updates, releases, and news from the IDL Team.</p>
            </div>
          </div>
          
          {/* Pill Filter Navigation */}
          <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-full border border-gray-100 w-max self-start md:self-auto">
            {(['All', 'Platform', 'Content'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  filter === f
                    ? 'bg-white text-blue-600 shadow-sm border border-gray-200/50'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Announcements Feed */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50/30">
          <div className="max-w-4xl mx-auto space-y-6">
            {filteredAnnouncements.map(announcement => (
              <div 
                key={announcement.id} 
                className={`group bg-white rounded-2xl border transition-all duration-200 ${
                  announcement.isPinned 
                    ? 'border-blue-200 shadow-md shadow-blue-50/50' 
                    : 'border-gray-100 hover:border-gray-200 hover:shadow-sm'
                }`}
              >
                {/* Pinned Header Bar */}
                {announcement.isPinned && (
                  <div className="bg-blue-50/50 border-b border-blue-100 px-6 py-2.5 rounded-t-2xl flex items-center gap-2">
                    <span className="text-blue-600"><PinIcon /></span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">Pinned Update</span>
                  </div>
                )}

                <div className="p-6">
                  {/* Meta / Author Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold shadow-sm">
                        IDL
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-gray-900 text-sm">{announcement.author}</span>
                          <BadgeCheckIcon />
                        </div>
                        <span className="text-xs text-gray-500">{announcement.date}</span>
                      </div>
                    </div>
                    
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      {announcement.category}
                    </span>
                  </div>

                  {/* Content Block */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{announcement.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {announcement.content}
                  </p>
                </div>
              </div>
            ))}

            {/* Empty State */}
            {filteredAnnouncements.length === 0 && (
              <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 border border-gray-100 text-gray-400 mb-4">
                  <MegaphoneIcon />
                </div>
                <h3 className="text-base font-semibold text-gray-900">No recent announcements</h3>
                <p className="text-sm text-gray-500 mt-1">We'll post here when there's news to share.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </CommunityLayout>
  );
}