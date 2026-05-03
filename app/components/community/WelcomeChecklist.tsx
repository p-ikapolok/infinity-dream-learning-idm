import React, { useState } from 'react';
import CommunityLayout from '../CommunityLayout';

// --- Embedded SVGs ---
const CheckCircleIcon = ({ completed }: { completed: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={completed ? "currentColor" : "none"} stroke="currentColor" strokeWidth={completed ? "0" : "2"} className={`w-8 h-8 ${completed ? 'text-emerald-500' : 'text-gray-300'}`}>
    {completed ? (
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
    ) : (
      <circle cx="12" cy="12" r="10" />
    )}
  </svg>
);

const ConfettiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M4 11a9 9 0 0 1 9 9"></path>
    <path d="M4 4a16 16 0 0 1 16 16"></path>
    <circle cx="4" cy="20" r="1"></circle>
  </svg>
);

// --- Checklist Data ---
const TASKS = [
  { id: 't1', title: 'Upload a Profile Picture', desc: 'Help others put a face to the name by adding a photo to your profile settings.', action: 'Go to Profile' },
  { id: 't2', title: 'Say Hello in "Introduce Yourself"', desc: 'Drop a quick message in the Introduce Yourself channel. Tell us your goals!', action: 'Post Introduction' },
  { id: 't3', title: 'RSVP to an Upcoming Event', desc: 'Check out the Community Events calendar and RSVP to our next live session.', action: 'View Events' },
  { id: 't4', title: 'Join an Interest Group', desc: 'Find like-minded peers by joining a group focused on your specific learning track.', action: 'Browse Groups' },
];

export default function WelcomeChecklist() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleTask = (id: string) => {
    setCompletedTasks(prev => 
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const progressPercentage = Math.round((completedTasks.length / TASKS.length) * 100);

  return (
    <CommunityLayout
  sidebarOpen={sidebarOpen}
  setSidebarOpen={setSidebarOpen}
>
      <div className="flex flex-col h-full bg-white animate-in fade-in slide-in-from-bottom-4 duration-500 rounded-lg overflow-y-auto">
        
        {/* Header & Progress Bar */}
        <div className="px-8 py-10 border-b border-gray-100 bg-gray-50/50 sticky top-0 z-10 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">Welcome Checklist</h1>
            <p className="text-gray-500 text-sm mb-6">Complete these quick steps to get the most out of your Infinity Dream Learning experience.</p>
            
            {/* Progress UI */}
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <span className="text-sm font-semibold text-gray-700 min-w-[40px] text-right">
                {progressPercentage}%
              </span>
            </div>
            
            {progressPercentage === 100 && (
              <div className="mt-4 p-3 bg-emerald-50 text-emerald-700 rounded-lg flex items-center gap-2 text-sm font-medium animate-in zoom-in duration-300">
                <ConfettiIcon />
                Amazing! You've completed your onboarding checklist. You're ready to rock!
              </div>
            )}
          </div>
        </div>

        {/* Task List */}
        <div className="p-8 max-w-3xl mx-auto w-full">
          <div className="space-y-4">
            {TASKS.map((task) => {
              const isCompleted = completedTasks.includes(task.id);
              return (
                <div 
                  key={task.id}
                  className={`flex gap-5 p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isCompleted 
                      ? 'bg-gray-50/50 border-gray-100 opacity-75' 
                      : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-sm'
                  }`}
                  onClick={() => toggleTask(task.id)}
                >
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircleIcon completed={isCompleted} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-1 ${isCompleted ? 'text-gray-500 line-through decoration-gray-300' : 'text-gray-900'}`}>
                      {task.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-3 leading-relaxed">
                      {task.desc}
                    </p>
                    
                    {!isCompleted && (
                      <button 
                        className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-lg transition-colors"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevents checking the box when clicking the button
                          // Logic to actually navigate to the page would go here
                        }}
                      >
                        {task.action}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </CommunityLayout>
  );
}