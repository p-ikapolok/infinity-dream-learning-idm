import React, { useState } from 'react';
import CommunityLayout from '../components/CommunityLayout';

// --- Embedded SVGs ---
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </svg>
);

// --- Mock Data ---
interface EventData {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  description: string;
  category: string;
  isRsvpd: boolean;
  image: string;
}

const MOCK_EVENTS: EventData[] = [
  {
    id: '1',
    title: 'Modern React Architecture Workshop',
    date: 'Oct 24, 2026',
    time: '10:00 AM - 12:00 PM EST',
    location: 'Online (Zoom)',
    attendees: 124,
    description: 'Join us for a deep dive into building scalable React applications using the latest features in React Router v7 and Tailwind CSS.',
    category: 'Workshop',
    isRsvpd: true,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'UI/UX Design Systems Q&A',
    date: 'Oct 26, 2026',
    time: '2:00 PM - 3:00 PM EST',
    location: 'Community Hub Voice Channel',
    attendees: 58,
    description: 'Bring your design system questions! Our lead designers will be answering community questions live.',
    category: 'Q&A Session',
    isRsvpd: false,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Weekly Study Group: Backend APIs',
    date: 'Oct 28, 2026',
    time: '6:00 PM - 8:00 PM EST',
    location: 'Discord Room A',
    attendees: 32,
    description: 'Informal study group focusing on Node.js and Express API development. Bring your current projects and questions!',
    category: 'Study Group',
    isRsvpd: false,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
  }
];

export default function CommunityEvents() {
  const [filter, setFilter] = useState<'All' | 'Upcoming' | 'My RSVPs'>('All');
  const [events, setEvents] = useState<EventData[]>(MOCK_EVENTS);

  const toggleRsvp = (id: string) => {
    setEvents(events.map(ev => 
      ev.id === id 
        ? { ...ev, isRsvpd: !ev.isRsvpd, attendees: ev.isRsvpd ? ev.attendees - 1 : ev.attendees + 1 } 
        : ev
    ));
  };

  const filteredEvents = events.filter(ev => {
    if (filter === 'My RSVPs') return ev.isRsvpd;
    return true; 
  });

  return (
    <CommunityLayout>
      <div className="flex flex-col h-full bg-white animate-in fade-in slide-in-from-bottom-4 duration-500 rounded-lg">
        
        {/* Header Section */}
        <div className="px-6 py-8 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Community Events</h1>
            <p className="text-gray-500 mt-1 text-sm">Discover workshops, Q&A sessions, and peer study groups.</p>
          </div>
          
          {/* Pill Filter Navigation */}
          <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-full border border-gray-100 w-max self-start md:self-auto">
            {(['All', 'Upcoming', 'My RSVPs'] as const).map((f) => (
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

        {/* Events Grid */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredEvents.map(event => (
              <div 
                key={event.id} 
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-md transition-all duration-200 flex flex-col"
              >
                {/* Event Image Banner */}
                <div className="h-40 w-full overflow-hidden relative bg-gray-100">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-gray-700 rounded-full shadow-sm">
                      {event.category}
                    </span>
                  </div>
                </div>
                
                {/* Event Details */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{event.title}</h3>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm">
                      <span className="text-blue-500 mr-3"><CalendarIcon /></span>
                      <span className="font-medium text-gray-700">{event.date}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="text-gray-400 mr-3"><ClockIcon /></span>
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="text-gray-400 mr-3"><LocationIcon /></span>
                      {event.location}
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-gray-500 line-clamp-2 flex-1 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Footer / RSVP Actions */}
                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="text-gray-400 mr-2"><UsersIcon /></span>
                      <span className="font-medium text-gray-700">{event.attendees}</span>
                      <span className="ml-1">attending</span>
                    </div>
                    
                    <button
                      onClick={() => toggleRsvp(event.id)}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                        event.isRsvpd
                          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                      }`}
                    >
                      {event.isRsvpd ? 'Cancel RSVP' : 'RSVP Now'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 border border-gray-100 text-gray-400 mb-4">
                <CalendarIcon />
              </div>
              <h3 className="text-base font-semibold text-gray-900">No events found</h3>
              <p className="text-sm text-gray-500 mt-1">Check back later for new community schedules.</p>
            </div>
          )}
        </div>
      </div>
    </CommunityLayout>
  );
}