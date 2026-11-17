import { useState } from "react";
import { Link } from "react-router";

export default function FloatingFinley() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">

      {/* Chat Window Popover */}
      {isOpen && (
        <div className="mb-4 w-[360px] sm:w-[400px] bg-white dark:bg-gray-900 shadow-2xl rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col h-[550px]">

          {/* Chat Header */}
          <div className="bg-blue-600 text-white px-5 py-4 font-semibold flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-lg">Ask Finley</span>
            </div>
            <Link
              to="/PublicSupport"
              className="text-blue-200 hover:text-white transition-colors"
              title="Open full support page"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>

          {/* THIS IS THE REAL AGENT - it will now show when you click Finley */}
          <iframe
            src="https://sby6peojhojj.run.agentplace.io/"
            title="Finley AI Agent"
            className="flex-1 w-full border-0 bg-white"
            allow="clipboard-write; microphone"
          />

        </div>
      )}

      {/* Floating Action Button */}
      <div className="relative group">
        {!isOpen && (
          <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-base font-medium rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Ask Finley
            <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-white dark:bg-gray-800 border-r border-t border-gray-100 dark:border-gray-700 rotate-45"></div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-2xl flex items-center justify-center transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          {isOpen ? (
            <svg className="w-8 h-8 transition-transform duration-300 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <div className="relative flex items-center justify-center">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
              <span className="absolute top-0 right-0 block w-3 h-3 bg-green-400 border-2 border-blue-600 rounded-full"></span>
            </div>
          )}
        </button>
      </div>

    </div>
  );
}