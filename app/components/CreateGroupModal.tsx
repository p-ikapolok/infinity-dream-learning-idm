import React, { useState } from 'react';

interface CreateGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (groupData: any) => void;
}

export default function CreateGroupModal({ isOpen, onClose, onSubmit }: CreateGroupModalProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [privacy, setPrivacy] = useState<'public' | 'private'>('public');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In the future, this will send data to your Node.js/Express backend
    onSubmit({ name, description, privacy });
    setName('');
    setDescription('');
    setPrivacy('public');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">Create a New Group</h2>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            {/* Raw SVG Close Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          
          {/* Group Name */}
          <div className="space-y-2">
            <label htmlFor="groupName" className="block text-sm font-medium text-gray-700">
              Group Name <span className="text-red-500">*</span>
            </label>
            <input
              id="groupName"
              type="text"
              required
              placeholder="e.g., React Native Enthusiasts"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Group Description */}
          <div className="space-y-2">
            <label htmlFor="groupDesc" className="block text-sm font-medium text-gray-700">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="groupDesc"
              required
              rows={3}
              placeholder="What will this group focus on?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Privacy Settings */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">Privacy Setting</label>
            <div className="grid grid-cols-2 gap-4">
              
              {/* Public Option */}
              <label 
                className={`flex flex-col p-4 border rounded-xl cursor-pointer transition-all ${
                  privacy === 'public' ? 'border-blue-500 bg-blue-50/50' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setPrivacy('public')}
              >
                <div className="flex items-center mb-1">
                  {/* Globe SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 mr-2 ${privacy === 'public' ? 'text-blue-600' : 'text-gray-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span className={`font-semibold ${privacy === 'public' ? 'text-blue-900' : 'text-gray-700'}`}>Public</span>
                </div>
                <span className="text-xs text-gray-500">Anyone can see posts and join immediately.</span>
              </label>

              {/* Private Option */}
              <label 
                className={`flex flex-col p-4 border rounded-xl cursor-pointer transition-all ${
                  privacy === 'private' ? 'border-blue-500 bg-blue-50/50' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setPrivacy('private')}
              >
                <div className="flex items-center mb-1">
                  {/* Lock SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 mr-2 ${privacy === 'private' ? 'text-blue-600' : 'text-gray-400'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                  <span className={`font-semibold ${privacy === 'private' ? 'text-blue-900' : 'text-gray-700'}`}>Private</span>
                </div>
                <span className="text-xs text-gray-500">Only approved members can see posts.</span>
              </label>

            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <button 
              type="button" 
              onClick={onClose}
              className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              disabled={!name || !description}
              className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Create Group
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}