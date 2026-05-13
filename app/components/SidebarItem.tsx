import { Link, useLocation } from "react-router-dom";

export default function SidebarItem({ icon, label, collapsed, to }) {
   const location = useLocation();

   const active = location.pathname === to;
  return (
  <Link
      to={to}>
    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer ${
      active ? "bg-red-50 text-red-500" : "text-gray-600 hover:bg-gray-100"
    }`}>
      {icon}
      {!collapsed && <span className="text-sm">{label}</span>}
    </div>
  </Link>
  );
}