import React, { useState } from 'react';
import CommunityLayout from '../CommunityLayout'; // Corrected path to components folder

// --- Embedded SVGs ---
const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-yellow-500">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
  </svg>
);

const TrendingUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
    <polyline points="16 7 22 7 22 13"></polyline>
  </svg>
);

// --- Mock Data ---
interface SpotlightMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  achievement: string;
  description: string;
  points: number;
  tags: string[];
}

const SPOTLIGHT_MEMBERS: SpotlightMember[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Frontend Developer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    achievement: 'Community Mentor of the Month',
    description: 'Sarah has spent over 40 hours this month helping new students debug their React applications in the Discord channels.',
    points: 12500,
    tags: ['React', 'CSS', 'Mentorship']
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'Backend Enthusiast',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    achievement: 'Most Helpful Answers',
    description: 'David consistently provides thorough, well-documented answers to complex database and API architecture questions.',
    points: 9800,
    tags: ['Node.js', 'PostgreSQL', 'Architecture']
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'UI/UX Designer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
    achievement: 'Top Project Submission',
    description: 'Elena submitted an incredible e-commerce redesign for the monthly community challenge, scoring perfect marks in accessibility.',
    points: 8450,
    tags: ['Figma', 'Accessibility', 'Design']
  }
];

export default function CommunitySpotlight() {
  const [filter, setFilter] = useState<'This Month' | 'All Time'>('This Month');

  return (
    <CommunityLayout>
      <div className="flex flex-col h-full bg-white animate-in fade-in slide-in-from-bottom-4 duration-500 rounded-lg">
        
        {/* Header Section */}
        <div className="px-6 py-8 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-yellow-50 text-yellow-600 rounded-xl">
              <TrophyIcon />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Member Spotlight</h1>
              <p className="text-gray-500 mt-1 text-sm">Celebrating our top contributors and exceptional learners.</p>
            </div>
          </div>
          
          {/* Pill Filter Navigation */}
          <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-full border border-gray-100 w-max self-start md:self-auto">
            {(['This Month', 'All Time'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  filter === f
                    ? 'bg-white text-gray-900 shadow-sm border border-gray-200/50'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Spotlight Grid */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50/30">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {SPOTLIGHT_MEMBERS.map((member, index) => (
              <div 
                key={member.id} 
                className="group relative bg-white rounded-2xl border border-gray-100 p-6 hover:border-yellow-200 hover:shadow-lg hover:shadow-yellow-50/50 transition-all duration-300 flex flex-col"
              >
                {/* Ranking Badge (for top 3) */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-500 border-2 border-white shadow-sm flex items-center justify-center text-white font-bold text-xs">
                  #{index + 1}
                </div>

                {/* Profile Header */}
                <div className="flex items-center gap-4 mb-5">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-16 h-16 rounded-full object-cover border-2 border-gray-50"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </div>

                {/* Achievement Highlight */}
                <div className="bg-yellow-50/50 border border-yellow-100/50 rounded-xl p-4 mb-5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <StarIcon />
                    <span className="font-semibold text-yellow-800 text-sm">{member.achievement}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Tags & Points Footer */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {member.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-blue-600">
                    <TrendingUpIcon />
                    <span className="font-semibold text-sm">{member.points.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-3">Want to be featured next month?</p>
            <button className="px-6 py-2 bg-white border border-gray-200 text-gray-700 font-medium text-sm rounded-full shadow-sm hover:bg-gray-50 hover:text-gray-900 transition-colors">
              View Contribution Guidelines
            </button>
          </div>
        </div>
      </div>
    </CommunityLayout>
  );
}