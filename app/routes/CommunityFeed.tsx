import { useState } from "react";
import CommunityLayout from "../components/CommunityLayout";

// --- Mock Data ---
const MOCK_POSTS = [
  {
    id: 1,
    author: { name: "Sarah Jenkins", initial: "S", role: "Instructor" },
    time: "2 hours ago",
    content: "Just published a new module in the React Advanced course! We're diving deep into Server Actions and optimistic UI updates. Let me know what you think in the comments below. 👇",
    likes: 24,
    comments: 8,
    isLiked: true,
  },
  {
    id: 2,
    author: { name: "Marcus Johnson", initial: "M", role: "Student" },
    time: "5 hours ago",
    content: "Does anyone have good resources for learning about database indexing? I'm struggling to understand when to use Hash indexes vs B-Tree.",
    likes: 12,
    comments: 15,
    isLiked: false,
  },
  {
    id: 3,
    author: { name: "Alex Chen", initial: "A", role: "Alumni" },
    time: "1 day ago",
    content: "Finally landed my first role as a Frontend Developer! 🎉 Huge thanks to this community for the resume reviews and mock interviews. Keep grinding, everyone—it's totally worth it.",
    likes: 156,
    comments: 42,
    isLiked: false,
  }
];

export default function CommunityFeed() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [postContent, setPostContent] = useState("");

  return (
    <CommunityLayout
  sidebarOpen={sidebarOpen}
  setSidebarOpen={setSidebarOpen}
>
      <div className="max-w-3xl mx-auto p-4 md:p-6 space-y-6">
        
        {/* --- Create Post Section --- */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-5">
          <div className="flex gap-3 sm:gap-4">
            {/* User Avatar */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg shrink-0">
              U
            </div>
            
            <div className="flex-1">
              <textarea 
                rows={2}
                placeholder="Share your thoughts with the community..." 
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                className="w-full bg-gray-50 border border-transparent rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
              />
              
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-100">
                <div className="flex gap-1">
                  {/* Image Attachment Button */}
                  <button className="flex items-center justify-center w-8 h-8 rounded-full text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors" title="Attach Media">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </button>
                  {/* Link Attachment Button */}
                  <button className="flex items-center justify-center w-8 h-8 rounded-full text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors" title="Attach Link">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                  </button>
                </div>
                
                <button 
                  disabled={!postContent.trim()}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- Post Feed --- */}
        <div className="space-y-6">
          {MOCK_POSTS.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-5">
              {/* Post Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-bold shrink-0">
                    {post.author.initial}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                      {post.author.name}
                      <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs font-medium">
                        {post.author.role}
                      </span>
                    </h3>
                    <p className="text-xs text-gray-500">{post.time}</p>
                  </div>
                </div>
                
                {/* Options Menu Button */}
                <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </button>
              </div>

              {/* Post Content */}
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-4">
                {post.content}
              </p>

              {/* Post Actions */}
              <div className="flex items-center gap-6 pt-3 border-t border-gray-50">
                {/* Like Button */}
                <button className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${post.isLiked ? "text-blue-600" : "text-gray-500 hover:text-gray-800"}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={post.isLiked ? "currentColor" : "none"} stroke="currentColor" strokeWidth={post.isLiked ? 0 : 1.5} className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                  {post.likes}
                </button>

                {/* Comment Button */}
                <button className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                  </svg>
                  {post.comments}
                </button>

                {/* Share Button */}
                <button className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors ml-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </CommunityLayout>
  );
}