export default function NotificationMenu() {
  const notifications = [
    {
      title: "You've been accepted",
      message:
        "Congratulations! You've been accepted into Professional Foundations. Access eHub to get started.",
      action: "Go to Learning",
    },
    {
      title: "You've been accepted",
      message:
        "Congratulations! You've been accepted into Virtual Assistant. Access eHub to get started.",
      action: "Go to Learning",
    },
    {
      title: "You have been enrolled into VA",
      message:
        "We are pleased to enrol you onto Virtual Assistant - navigate to the learning centre and prepare to start your learning.",
      action: "Go to VA",
    },
    {
      title: "You've been accepted",
      message:
        "Congratulations! You've been accepted into AI Career Essentials.",
      action: "Go to Learning",
    },
  ];

  return (
    <div className="absolute right-0 mt-2 w-96 bg-white shadow-lg rounded-lg p-4 space-y-4 z-50">
      {notifications.map((note, idx) => (
        <div key={idx} className="flex items-start bg-gray-50 rounded-lg p-4">
          
          {/* Icon */}
          <div className="flex-shrink-0">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path d="M12 4L3 9l9 5 9-5-9-5z" />
              <path d="M3 14l9 5 9-5" />
            </svg>
          </div>

          {/* Content */}
          <div className="ml-3 flex-1">
            <h4 className="text-sm font-semibold text-gray-800">
              {note.title}
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              {note.message}
            </p>
            <button className="mt-2 text-blue-600 hover:underline text-sm">
              {note.action}
            </button>
          </div>

          {/* Three dots */}
          <button className="ml-2 text-gray-400 hover:text-gray-600">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="5" r="1.5" />
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="12" cy="19" r="1.5" />
            </svg>
          </button>

        </div>
      ))}
    </div>
  );
}