import React, { useState } from 'react';
import CommunityLayout from '../CommunityLayout';

// --- Embedded SVGs ---
const MedalIcon = ({ color }: { color: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={color} className="w-6 h-6">
    <path fillRule="evenodd" d="M10.5 2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v1.5h-3v-1.5ZM7.5 5.25v-1.5A2.25 2.25 0 0 1 9.75 1.5h4.5A2.25 2.25 0 0 1 16.5 3.75v1.5h1.5a2.25 2.25 0 0 1 2.25 2.25v4.5A8.964 8.964 0 0 1 12 21a8.964 8.964 0 0 1-8.25-9V7.5A2.25 2.25 0 0 1 6 5.25h1.5Zm4.5 10.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" clipRule="evenodd" />
  </svg>
);

const ChartUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </svg>
);

// --- Mock Data ---
const LEADERBOARD_DATA = [
  { id: 1, name: 'Sarah Jenkins', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150', points: 12500, level: 42, trend: '+450' },
  { id: 2, name: 'David Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150', points: 11200, level: 38, trend: '+320' },
  { id: 3, name: 'Elena Rodriguez', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150', points: 9800, level: 35, trend: '+150' },
  { id: 4, name: 'Marcus Johnson', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150', points: 8400, level: 31, trend: '+90' },
  { id: 5, name: 'Priya Patel', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150', points: 7950, level: 29, trend: '+210' },
  { id: 6, name: 'Alex Thompson', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=150', points: 7100, level: 26, trend: '+50' },
];

export default function CommunityLeaderboard() {
  const [timeframe, setTimeframe] = useState<'This Week' | 'This Month' | 'All Time'>('This Month');

  // Helper function to render the correct rank indicator
  const renderRank = (index: number) => {
    if (index === 0) return <MedalIcon color="#FBBF24" />; // Gold
    if (index === 1) return <MedalIcon color="#9CA3AF" />; // Silver
    if (index === 2) return <MedalIcon color="#B45309" />; // Bronze
    return <span className="text-gray-400 font-semibold w-6 text-center">{index + 1}</span>;
  };

  return (
    <CommunityLayout>
      <div className="flex flex-col h-full bg-white animate-in fade-in slide-in-from-bottom-4 duration-500 rounded-lg">
        
        {/* Header Section */}
        <div className="px-6 py-8 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <ChartUpIcon />
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Leaderboard</h1>
              <p className="text-gray-500 mt-1 text-sm">See who is leading the pack in learning and helping others.</p>
            </div>
          </div>
          
          {/* Timeframe Filter */}
          <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-full border border-gray-100 w-max">
            {(['This Week', 'This Month', 'All Time'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTimeframe(t)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  timeframe === t
                    ? 'bg-white text-gray-900 shadow-sm border border-gray-200/50'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Leaderboard List */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50/30">
          <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
            
            {/* Table Header */}
            <div className="grid grid-cols-[60px_1fr_100px_120px] gap-4 px-6 py-4 bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              <div className="text-center">Rank</div>
              <div>Student</div>
              <div className="text-right">Level</div>
              <div className="text-right">Total XP</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-50">
              {LEADERBOARD_DATA.map((user, index) => (
                <div 
                  key={user.id}
                  className={`grid grid-cols-[60px_1fr_100px_120px] gap-4 px-6 py-4 items-center hover:bg-gray-50/50 transition-colors ${
                    index < 3 ? 'bg-blue-50/10' : ''
                  }`}
                >
                  {/* Rank */}
                  <div className="flex justify-center items-center">
                    {renderRank(index)}
                  </div>

                  {/* Student Profile */}
                  <div className="flex items-center gap-3">
                    <img 
                      src={user.avatar} 
                      alt={user.name} 
                      className="w-10 h-10 rounded-full object-cover border border-gray-100"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">{user.name}</h3>
                      {index < 3 && (
                        <span className="text-xs text-blue-600 font-medium">Top 3 {timeframe}</span>
                      )}
                    </div>
                  </div>

                  {/* Level */}
                  <div className="text-right">
                    <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium border border-gray-200">
                      Lvl {user.level}
                    </span>
                  </div>

                  {/* XP & Trend */}
                  <div className="text-right flex flex-col items-end justify-center">
                    <span className="font-semibold text-gray-900">{user.points.toLocaleString()}</span>
                    <span className="text-xs text-emerald-600 font-medium">{user.trend} XP</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </CommunityLayout>
  );
}