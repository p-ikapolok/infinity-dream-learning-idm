import { useNavigate } from "react-router-dom";

export default function MessageItem({ msg }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
        navigate(`/message/${msg.id}`)
      }
      className="cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg transition"
    >
      {/* Text */}
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
  );
}