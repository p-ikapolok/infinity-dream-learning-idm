import React, { useEffect } from "react";

export default function SearchModal({ isOpen, onClose }) {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Don't render if closed
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* MODAL BOX */}
      <div
        className="mt-24 w-[90%] max-w-2xl bg-white rounded-xl shadow-xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* SEARCH INPUT */}
        <div className="flex items-center gap-3 border rounded-lg px-4 py-3 text-gray-500">
          {/* ICON */}
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="20" y1="20" x2="16.5" y2="16.5" />
          </svg>

          <input
            type="text"
            placeholder="Search or ask a question"
            className="w-full outline-none text-gray-700 placeholder-gray-400"
            autoFocus
          />
        </div>

        {/* EMPTY STATE */}
        <div className="flex flex-col items-center justify-center text-center py-16">
          {/* BIG ICON */}
          <svg
            className="w-10 h-10 text-gray-400 mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="20" y1="20" x2="16.5" y2="16.5" />
          </svg>

          <h2 className="text-lg font-semibold text-gray-800">
            Search the community
          </h2>

          <p className="text-gray-500 text-sm mt-2 max-w-md">
            Try searching for keywords in posts, comments, events,
            lessons, spaces and more...
          </p>
        </div>
      </div>
    </div>
  );
}