import { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  FiHome,
  FiBook,
  FiUser,
  FiAward,
  FiSettings,
  FiMenu,
} from "react-icons/fi";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const menu = [
    { name: "Dashboard", icon: FiHome, path: "/learning" },
    { name: "Courses", icon: FiBook, path: "/learning/course" },
    { name: "Profile", icon: FiUser, path: "/profile" },
    { name: "Certificates", icon: FiAward, path: "/certificates" },
    { name: "Settings", icon: FiSettings, path: "/settings" },
  ];

  return (
    <aside
      className={`bg-white dark:bg-gray-900 border-r dark:border-gray-700
      ${open ? "w-64" : "w-20"}
      min-h-screen transition-all duration-300`}
    >
      {/* toggle */}
      <div className="p-4 border-b dark:border-gray-700">
        <button onClick={() => setOpen(!open)}>
          <FiMenu className="w-6 h-6" />
        </button>
      </div>

      {/* nav */}
      <nav className="p-2">
        {menu.map((item) => {
          const Icon = item.icon;
          const active = location.pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-lg mb-2 transition
              ${
                active
                  ? "bg-purple-600 text-white"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <Icon className="w-5 h-5" />
              {open && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}