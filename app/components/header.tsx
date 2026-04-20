export default function Header() {
  return (
    <header className="bg-white border-b px-6 py-3 flex justify-between items-center">
      <div className="flex gap-2">
        <span className="font-bold">alx</span>
        <span className="text-gray-500">eHub</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="bg-yellow-100 px-3 py-1 rounded-full text-sm">
          4210 points
        </div>

        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor">
          <path d="M15 17h5l-1.5-2V11a6.5 6.5 0 10-13 0v4L4 17h5" />
        </svg>

        <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="5" cy="5" r="1.5" />
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="19" cy="5" r="1.5" />
          <circle cx="5" cy="12" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="19" cy="12" r="1.5" />
          <circle cx="5" cy="19" r="1.5" />
          <circle cx="12" cy="19" r="1.5" />
          <circle cx="19" cy="19" r="1.5" />
        </svg>

        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
      </div>
    </header>
  );
}