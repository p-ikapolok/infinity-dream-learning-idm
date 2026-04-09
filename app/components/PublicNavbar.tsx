import { useState } from "react";
import { Link } from "react-router";

export default function PublicNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Start Learning"); // active nav item

  const navItems = [
    "Start Learning",
    "Explore Ehub",
    "About",
    "All Access",
    "Support",
    "Login",
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-black/50 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-lg font-bold">Infinity Dream Learning</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 relative">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className="relative px-2 py-1 text-white hover:text-blue-400 transition-colors"
            >
              {item}
              {active === item && (
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full transition-all"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform origin-center ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform origin-center ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 text-white px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item === "Login" ? "/login" : "/"} // adapt links
              onClick={() => {
                setActive(item);
                setMenuOpen(false);
              }}
              className="text-lg"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}