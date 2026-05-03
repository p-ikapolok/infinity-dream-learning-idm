import React, { useState } from 'react';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (postData: any) => void;
  defaultChannel?: string;
}

export default function CreatePostModal({ isOpen, onClose, onSubmit, defaultChannel = 'General' }: CreatePostModalProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [channel, setChannel] = useState(defaultChannel);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content, channel });
    setTitle('');
    setContent('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">Create a Post</h2>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex flex-col h-[60vh] max-h-[500px]">
          
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {/* Channel Selector */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                U {/* Mock user avatar */}
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Posting to</p>
                <select 
                  value={channel}
                  onChange={(e) => setChannel(e.target.value)}
                  className="text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Our Community">👋 Our Community</option>
                  <option value="Share Your Wins">🏆 Share Your Wins</option>
                  <option value="Introduce Yourself">✨ Introduce Yourself</option>
                  <option value="General">💬 General Chat</option>
                </select>
              </div>
            </div>

            {/* Post Title */}
            <input
              type="text"
              placeholder="Give your post a catchy title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full text-xl font-semibold px-0 py-2 border-0 focus:ring-0 placeholder-gray-300 text-gray-900"
            />

            {/* Post Content */}
            <textarea
              required
              placeholder="What do you want to share with the community?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-48 px-0 py-2 border-0 focus:ring-0 resize-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Formatting Toolbar & Footer */}
          <div className="border-t border-gray-100 p-4 bg-gray-50 flex items-center justify-between">
            
            {/* Action Icons */}
            <div className="flex items-center gap-1">
              <button type="button" className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Add Image">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </button>
              <button type="button" className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Add Video">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
                  <line x1="7" y1="2" x2="7" y2="22"></line>
                  <line x1="17" y1="2" x2="17" y2="22"></line>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <line x1="2" y1="7" x2="7" y2="7"></line>
                  <line x1="2" y1="17" x2="7" y2="17"></line>
                  <line x1="17" y1="17" x2="22" y2="17"></line>
                  <line x1="17" y1="7" x2="22" y2="7"></line>
                </svg>
              </button>
              <button type="button" className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Add Link">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </button>
              {/* Divider */}
              <div className="w-px h-6 bg-gray-300 mx-2"></div>
              <button type="button" className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition-colors font-bold font-serif">B</button>
              <button type="button" className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition-colors italic font-serif">I</button>
            </div>

            <button 
              type="submit"
              disabled={!content}
              className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}