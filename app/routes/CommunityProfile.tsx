import { useState } from "react";
import CommunityLayout from "../components/CommunityLayout";

// --- Mock Data ---
const INITIAL_PROFILE = {
  name: "Marcus Johnson",
  initial: "M",
  role: "Student",
  location: "San Francisco, CA",
  joined: "March 2023",
  bio: "Transitioning from graphic design to web development. Currently wrestling with Tailwind CSS and loving every minute of it. Always open to collaborate on weekend projects!",
  skills: ["React", "Tailwind CSS", "Node.js", "Figma"]
};

const MOCK_ACTIVITY = [
  {
    id: 1,
    type: "post",
    content: "Just finished the Server Components module! The way Next.js handles data fetching now makes so much sense compared to the old getServerSideProps way.",
    time: "2 days ago",
    likes: 12,
    comments: 4,
  },
  {
    id: 2,
    type: "comment",
    content: "I ran into this same issue. Try updating your Vite config to explicitly define the proxy settings for the API route.",
    time: "1 week ago",
    likes: 3,
    comments: 0,
  }
];

export default function CommunityProfile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(INITIAL_PROFILE);
  const [editForm, setEditForm] = useState(INITIAL_PROFILE);

  const handleSave = () => {
    setProfile(editForm);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditForm(profile);
    setIsEditing(false);
  };

  return (
    <CommunityLayout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
      <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
        
        {/* --- Header / Cover Section --- */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden mb-6">
          {/* Cover Photo */}
          <div className="h-32 md:h-48 bg-gradient-to-r from-blue-600 to-indigo-700"></div>
          
          <div className="px-6 pb-6 relative">
            {/* Avatar & Actions Row */}
            <div className="flex justify-between items-end -mt-12 md:-mt-16 mb-4">
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-50 border-4 border-white flex items-center justify-center text-blue-700 font-bold text-4xl shadow-sm">
                  {profile.initial}
                </div>
                {/* Online Indicator */}
                <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></div>
              </div>

              {!isEditing ? (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                  </svg>
                  Edit Profile
                </button>
              ) : (
                <div className="flex gap-2">
                  <button 
                    onClick={handleCancel}
                    className="px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm"
                  >
                    Save Changes
                  </button>
                </div>
              )}
            </div>

            {/* Profile Info */}
            <div className="max-w-3xl">
              {isEditing ? (
                <div className="space-y-4 max-w-sm">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">Display Name</label>
                    <input 
                      type="text" 
                      value={editForm.name}
                      onChange={(e) => setEditForm({...editForm, name: e.target.value})}
                      className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">Location</label>
                    <input 
                      type="text" 
                      value={editForm.location}
                      onChange={(e) => setEditForm({...editForm, location: e.target.value})}
                      className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>
              ) : (
                <>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-3">
                    {profile.name}
                    <span className="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-md text-xs font-semibold uppercase tracking-wider align-middle">
                      {profile.role}
                    </span>
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {profile.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                      Joined {profile.joined}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* --- Two Column Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column: About & Skills */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">About Me</h2>
              {isEditing ? (
                <textarea 
                  rows={4}
                  value={editForm.bio}
                  onChange={(e) => setEditForm({...editForm, bio: e.target.value})}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all resize-none"
                />
              ) : (
                <p className="text-gray-600 text-sm leading-relaxed">
                  {profile.bio}
                </p>
              )}
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Skills & Interests</h2>
              {isEditing ? (
                <input 
                  type="text" 
                  value={editForm.skills.join(", ")}
                  onChange={(e) => setEditForm({...editForm, skills: e.target.value.split(",").map(s => s.trim())})}
                  placeholder="React, Design, Node..."
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
                />
              ) : (
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map(skill => (
                    <span key={skill} className="bg-blue-50 border border-blue-100 text-blue-700 px-3 py-1.5 rounded-lg text-xs font-semibold">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Activity Feed */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Recent Activity</h2>
            
            {MOCK_ACTIVITY.map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                    {item.type}
                  </span>
                  <span className="text-xs text-gray-400 font-medium">{item.time}</span>
                </div>
                
                <p className="text-sm text-gray-900 mb-4 leading-relaxed">
                  {item.content}
                </p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <button className="flex items-center gap-1.5 text-gray-500 hover:text-blue-600 transition-colors text-xs font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25" />
                    </svg>
                    {item.likes} Likes
                  </button>
                  <button className="flex items-center gap-1.5 text-gray-500 hover:text-blue-600 transition-colors text-xs font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                    </svg>
                    {item.comments} Comments
                  </button>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </CommunityLayout>
  );
}