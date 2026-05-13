export default function SidebarItem({
  icon,
  label,
  active,
  collapsed,
}) {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer ${
        active
          ? "bg-red-50 text-red-500"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {icon}

      {!collapsed && (
        <span className="text-sm">
          {label}
        </span>
      )}
    </div>
  );
}