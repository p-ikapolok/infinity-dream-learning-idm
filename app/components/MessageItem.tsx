import { useNavigate } from "react-router-dom";

export default function MessageItem({ msg }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/CommunityDirectMessageChat/${msg.id}`)}
      className="flex items-start gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition active:scale-[0.98]"
    >
      {/* Avatar */}
      <div className="w-10 h-10 rounded-full bg-gray-300"></div>

      {/* Text */}
      <div className="flex-1">
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
  );
}