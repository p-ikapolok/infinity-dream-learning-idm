import { useNavigate } from "react-router";

export default function NineDotsMenu() {
  const navigate = useNavigate();

  const items = [
    {
      label: "Learning",
      path: "/learning",
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M2 7l8-4 8 4-8 4-8-4z" />
          <path d="M6 10v4c0 1 2 2 4 2s4-1 4-2v-4" />
        </svg>
      ),
    },
    {
      label: "Community",
      path: "/community",
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="7" cy="7" r="3" />
          <circle cx="15" cy="7" r="3" />
          <path d="M2 17c0-2 2-4 5-4s5 2 5 4" />
          <path d="M10 17c0-2 2-4 5-4s5 2 5 4" />
        </svg>
      ),
    },
    {
      label: "Rewards",
      path: "/rewards",
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 3h8v3a4 4 0 01-8 0V3z" />
          <path d="M4 6h2M14 6h2" />
          <path d="M8 14h4M7 17h6" />
        </svg>
      ),
    },
    {
      label: "Support",
      path: "/support",
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="10" cy="10" r="8" />
          <path d="M9 9a2 2 0 114 0c0 2-3 2-3 4" />
          <circle cx="10" cy="15" r="1" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-[520px] bg-white rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] px-[40px] py-[32px]">
      <div className="grid grid-cols-3 gap-y-[32px] gap-x-[40px]">
        {items.map((item, i) => (
          <div
            key={i}
            onClick={() => navigate(item.path)}
            className="flex flex-col items-center cursor-pointer hover:opacity-80 transition"
          >
            <div className="w-[56px] h-[56px] rounded-full border border-[#E5E7EB] flex items-center justify-center text-gray-700 mb-[10px]">
              {item.icon}
            </div>
            <span className="text-[14px] text-[#374151]">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}