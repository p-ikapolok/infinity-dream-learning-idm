import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function PublicNavbar() {
  const [menu, setMenu] = useState(false);
  const [programs, setPrograms] = useState(false);
  const location = useLocation();

  // Nav items
  const navItems = [
    { name: "Programs", path: "/", isDropdown: true },
    { name: "AI Data & Tech", path: "/programs/ai" },
    { name: "Creative", path: "/programs/creative" },
    { name: "Entrepreneurship", path: "/programs/business" },
    { name: "About", path: "/about" },
    { name: "All Access", path: "/pricing" },
    { name: "Support", path: "/support" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">

        {/* Logo */}
        <Link to="/" className="font-bold text-lg">
          Infinity Dream
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 relative">

          {navItems.map((item) => (
            <div key={item.name} className="relative">
              <button
                onClick={() => item.isDropdown && setPrograms(!programs)}
                className={`flex items-center gap-1 transition-all relative ${
                  location.pathname === item.path ? "font-bold" : ""
                }`}
              >
                {/* Circle indicator */}
                {location.pathname === item.path && (
                  <span className="absolute -top-2 -left-2 w-8 h-8 border-2 border-white rounded-full animate-pulse"></span>
                )}
                {item.name}
                {/* Down arrow for dropdown */}
                {item.isDropdown && (
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      programs ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
            </div>
          ))}

        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden w-8 h-8 relative flex flex-col justify-between items-center"
          onClick={() => setMenu(!menu)}
        >
          <span
            className={`block w-8 h-0.5 bg-white transform transition duration-300 ease-in-out ${
              menu ? "rotate-45 translate-y-3" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-white transition duration-300 ease-in-out ${
              menu ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-8 h-0.5 bg-white transform transition duration-300 ease-in-out ${
              menu ? "-rotate-45 -translate-y-3" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Programs Dropdown */}
      {programs && (
        <div className="absolute left-0 right-0 bg-white text-black shadow-sm z-40">
          <div className="max-w-7xl mx-auto px-6 py-6 grid md:grid-cols-3 gap-6">
            <Link to="/programs/ai" className="block">
              <div className="border p-4 rounded-xl flex items-center justify-center gap-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-16H3l9 16z" />
                </svg>
                AI Data & Tech
              </div>
            </Link>

            <Link to="/programs/creative">
              <div className="border p-4 rounded-xl flex items-center justify-center gap-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
                </svg>
                Creative
              </div>
            </Link>

            <Link to="/programs/business">
              <div className="border p-4 rounded-xl flex items-center justify-center gap-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h13M9 11V4H3v7h6z" />
                </svg>
                Entrepreneurship
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {menu && (
        <div className="md:hidden bg-black/90 text-white px-6 py-4 flex flex-col gap-4 z-30">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path}>
              {item.name}
            </Link>
          ))}
          <Link to="/login" className="font-semibold">
            Log In
          </Link>
        </div>
      )}
    </header>
  );
}