import { Link } from "react-router";

export default function EhubNineDotsDropdown({ menuOpen }: { menuOpen: boolean }) {
  if (!menuOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-6 grid grid-cols-2 gap-6 z-50">
      
      {/* Learning */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M12 4L3 9l9 5 9-5-9-5z"/>
            <path d="M3 14l9 5 9-5"/>
          </svg>
        </div>
        <span className="mt-2 text-gray-700 font-medium">Learning</span>
      </div>

      {/* Community */}
<Link
  to="/community"
  className="flex flex-col items-center"
  onClick={() => setMenuOpen(false)} // optional: closes dropdown after click
>
  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
    <svg
      className="w-6 h-6 text-blue-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <circle cx="9" cy="7" r="4" />
      <path d="M17 11a4 4 0 1 0-2-7" />
      <path d="M2 21a7 7 0 0 1 14 0" />
      <path d="M22 21a7 7 0 0 0-6-6.7" />
    </svg>
  </div>
  <span className="mt-2 text-gray-700 font-medium">Community</span>
</Link>

      {/* Rewards */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M8 21h8"/>
            <path d="M12 17v4"/>
            <path d="M7 4h10v4a5 5 0 0 1-10 0V4z"/>
          </svg>
        </div>
        <span className="mt-2 text-gray-700 font-medium">Rewards</span>
      </div>

      {/* Support */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9.09 9a3 3 0 1 1 5.82 1c0 2-3 2-3 4"/>
            <path d="M12 17h.01"/>
          </svg>
        </div>
        <span className="mt-2 text-gray-700 font-medium">Support</span>
      </div>

    </div>
  );
}