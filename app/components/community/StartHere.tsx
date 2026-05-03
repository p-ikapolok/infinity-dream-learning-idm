import React from 'react';
import CommunityLayout from '../CommunityLayout';

// --- Embedded SVGs ---
const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-white opacity-90 hover:opacity-100 hover:scale-105 transition-all cursor-pointer">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" />
  </svg>
);

const RocketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
  </svg>
);

const UserPlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <line x1="19" y1="8" x2="19" y2="14"></line>
    <line x1="22" y1="11" x2="16" y2="11"></line>
  </svg>
);

export default function StartHere() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <CommunityLayout>
      <div className="flex flex-col h-full bg-white animate-in fade-in slide-in-from-bottom-4 duration-500 rounded-lg overflow-y-auto">
        
        {/* Welcome Hero Block */}
        <div className="px-8 py-10 border-b border-gray-100 bg-gradient-to-br from-blue-50/50 to-white">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-3">Welcome to Infinity Dream Learning! 👋</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are absolutely thrilled to have you here. This community is your new home for learning, networking, and leveling up your skills. Watch the quick intro video below to learn how to get the most out of the platform.
            </p>
          </div>
        </div>

        <div className="p-8 max-w-5xl mx-auto w-full space-y-10">
          
          {/* Video Placeholder */}
          <div className="w-full aspect-video bg-gray-900 rounded-2xl shadow-lg relative overflow-hidden flex items-center justify-center group">
            {/* Background image mockup for video thumbnail */}
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
              alt="Platform Intro" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
            
            {/* Play Button */}
            <div className="relative z-10 flex flex-col items-center gap-4">
              <PlayIcon />
              <span className="text-white font-medium tracking-wide bg-black/30 px-4 py-1.5 rounded-full backdrop-blur-sm text-sm">
                Watch Platform Tour (3:45)
              </span>
            </div>
          </div>

          {/* Next Steps Grid */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Where to go next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <RocketIcon />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Complete Your Checklist</h3>
                <p className="text-gray-500 mb-4 text-sm leading-relaxed">Head over to the Welcome Checklist to finish setting up your profile and make your first post.</p>
                <button className="text-blue-600 font-medium text-sm hover:text-blue-700 flex items-center gap-1">
                  Go to Checklist &rarr;
                </button>
              </div>

              <div className="p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <UserPlusIcon />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Introduce Yourself</h3>
                <p className="text-gray-500 mb-4 text-sm leading-relaxed">Say hello to the community! Let us know where you're from and what you are hoping to learn.</p>
                <button className="text-emerald-600 font-medium text-sm hover:text-emerald-700 flex items-center gap-1">
                  Post an Introduction &rarr;
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </CommunityLayout>
  );
}