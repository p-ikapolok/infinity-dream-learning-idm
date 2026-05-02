export default function CommunityHeader() {
  return (
<>
           {/* Community Header */}  
      <div className="flex items-center justify-between p-6 bg-white shadow mb-6">  
        <div className="flex items-center gap-4">  
          <button  
            onClick={() => setSidebarOpen(!sidebarOpen)}  
            className="text-gray-600 hover:text-gray-800"  
          >  
            <svg  
              xmlns="http://www.w3.org/2000/svg"  
              className="w-7 h-7"  
              viewBox="0 0 24 24"  
              fill="none"  
              stroke="currentColor"  
              strokeWidth="2"  
              strokeLinecap="round"  
            >  
              <line x1="3" y1="6" x2="15" y2="6" />  
              <line x1="3" y1="12" x2="21" y2="12" />  
              <line x1="3" y1="18" x2="15" y2="18" />  
            </svg>  
          </button>  

          <img src="/images/alx-logo.png" alt="ALX Logo" className="h-8" />  
        </div>  

        {/* PROFILE ICON */}

<div  
  onClick={() => setProfileOpen(!profileOpen)}  
  className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition shadow-sm cursor-pointer"  
>  
  <svg  
    viewBox="0 0 24 24"  
    className="w-6 h-6 text-gray-700"  
    fill="none"  
    stroke="currentColor"  
    strokeWidth="1.8"  
  >  
    <circle cx="12" cy="8" r="4" />  
    <path d="M4 20a8 8 0 0116 0" />  
       </svg>  
      </div>  
     </div> 
</>
  );
}