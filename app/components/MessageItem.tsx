import { useNavigate } from "react-router-dom";

export default function MessageItem({ msg, index }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/CommunityDirectMessageChat/${index}`)}
      className="flex items-center justify-between px-6 py-4 border-b hover:bg-gray-50 cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <img
          src={msg.avatar}
          alt={msg.name}
          className="w-10 h-10 rounded-full object-cover"
        />

        <div>
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-gray-800">
              {msg.name}
            </p>
            <span className="text-xs text-gray-400">
              {msg.date}
            </span>
          </div>

          <p className="text-sm text-gray-500 truncate max-w-md">
            {msg.message}
          </p>
        </div>
      </div>

      {msg.unread && (
        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
      )}
    </div>
  );
}