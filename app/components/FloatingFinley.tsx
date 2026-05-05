import { useState } from "react";
import { Link } from "react-router"; // or "react-router-dom" depending on your setup

export default function FloatingFinley() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* 
        Chat Window Popover 
        (Only renders when isOpen is true)
      */}
      {isOpen && (
        <div className="mb-4 w-[340px] sm:w-[380px] bg-white dark:bg-gray-900 shadow-2xl rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col h-[500px] transition-all transform origin-bottom-right duration-300">
          
          {/* Chat Header */}
          <div className="bg-blue-600 text-white px-5 py-4 font-semibold flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Ask Finley</span>
            </div>
            {/* Expand to Full Page Icon */}
            <Link 
              to="/support" 
              className="text-blue-200 hover:text-white transition-colors"
              title="Open full support page"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 p-5 space-y-4 overflow-y-auto bg-gray-50 dark:bg-gray-950/50">
            {/* Finley Initial Message */}
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-blue-100 dark:bg-blue-900/50 rounded-full border border-blue-200 dark:border-blue-800">
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl rounded-tl-none p-3 shadow-sm text-sm">
                <p className="text-gray-700 dark:text-gray-200">
                  Hi! I am Finley, your Infinity Hub AI. How can I help you today?
                </p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-blue-500 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-gray-950 rounded-full px-4 py-2 outline-none text-gray-900 dark:text-white text-sm transition-all"
              />
              <button className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-blue-600 hover:bg-blue-500 transition-colors rounded-full shadow-md">
                <svg className="w-4 h-4 text-white transform -rotate-45 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 
        Floating Action Button 
        (Always visible, toggles chat open/closed)
      */}
      <div className="relative group">
        {/* Tooltip prompt when closed */}
        {!isOpen && (
          <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-sm font-medium rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Ask Finley
            {/* Tooltip Triangle */}
            <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-white dark:bg-gray-800 border-r border-t border-gray-100 dark:border-gray-700 rotate-45"></div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-2xl flex items-center justify-center transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          {isOpen ? (
            // Close Icon (X)
            <svg className="w-6 h-6 transition-transform duration-300 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // AI Chat Icon
            <div className="relative flex items-center justify-center">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
              {/* Online Indicator */}
              <span className="absolute top-0 right-0 block w-2.5 h-2.5 bg-green-400 border-2 border-blue-600 rounded-full"></span>
            </div>
          )}
        </button>
      </div>
      
    </div>
  );
}