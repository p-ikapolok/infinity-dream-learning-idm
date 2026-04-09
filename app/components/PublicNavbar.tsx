import { useState } from "react";
import { Link } from "react-router";

export default function PublicNavbar() {
  const [menu, setMenu] = useState(false);
  const [programs, setPrograms] = useState(false);
  const [active, setActive] = useState(""); // track active nav item

  const navItems = [
    { name: "Programs", link: "/", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ) },
    { name: "AI Data & Tech", link: "/programs/ai", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
      </svg>
    ) },
    { name: "Creative", link: "/programs/creative", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2l9 21H3L12 2z" />
      </svg>
    ) },
    { name: "Entrepreneurship", link: "/programs/business", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" />
      </svg>
    ) },
    { name: "About", link: "/about", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 12v4m0-8h.01M12 12h.01" />
      </svg>
    ) },
    { name: "All Access", link: "/pricing", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 12h18M12 3v18" />
      </svg>
    ) },
    { name: "Support", link: "/support", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
      </svg>
    ) },
    { name: "Log In", link: "/login", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M15 12H3m0 0l4-4m-4 4l4 4m6 4h6V8h-6" />
      </svg>
    ) }
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-black/50 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="font-bold text-lg">Infinity Dream Learning</h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 relative">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              onClick={() => setActive(item.name)}
              className={`flex items-center gap-1 relative hover:text-blue-400 ${
                active === item.name ? "text-blue-400" : ""
              }`}
            >
              {item.icon}
              {item.name}
              {active === item.name && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded" />
              )}
            </Link>
          ))}

          {/* Programs dropdown */}
          <button
            onClick={() => setPrograms(!programs)}
            className="relative"
          >
            <span>Programs ▼</span>
          </button>

          {programs && (
            <div className="absolute left-0 mt-10 w-64 bg-white text-black shadow-lg rounded-xl p-4 space-y-3 z-50">
              <Link to="/programs/ai" className="block hover:bg-gray-100 rounded px-2 py-1">AI Data & Tech</Link>
              <Link to="/programs/creative" className="block hover:bg-gray-100 rounded px-2 py-1">Creative</Link>
              <Link to="/programs/business" className="block hover:bg-gray-100 rounded px-2 py-1">Entrepreneurship</Link>
            </div>
          )}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1"
          onClick={() => setMenu(!menu)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform origin-center ${
              menu ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity ${
              menu ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform origin-center ${
              menu ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

      </div>

      {/* Mobile menu */}
      {menu && (
        <div className="md:hidden bg-black/90 text-white px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              onClick={() => setActive(item.name)}
              className={`flex items-center gap-2 ${active === item.name ? "text-blue-400" : ""}`}
            >
              {item.icon} {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}