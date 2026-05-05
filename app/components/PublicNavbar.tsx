import { useState } from "react";
import { Link } from "react-router";

export default function PublicNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Programs");

  const desktopLinks = [
    { name: "Programs", href: "/PublicPage" },
    { name: "AI Data & Tech", href: "/aipage" },
    { name: "Creative", href: "/creative" },
    { name: "Entrepreneurship", href: "/business" },
    { name: "About", href: "/about" },
    { name: "All Access", href: "/pricing" },
    { name: "Support", href: "/PublicSupport" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="font-bold text-lg">
          Infinity Dream
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 relative">
          {desktopLinks.map((link) => (
            <div key={link.name} className="relative">
              <Link
                to={link.href}
                onClick={() => setActiveLink(link.name)}
                className="hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
              {/* Round underline indicator */}
              {activeLink === link.name && (
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full transition-all" />
              )}
            </div>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1"
        >
          {/* Hamburger SVG lines */}
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 text-white px-6 py-6 flex flex-col gap-6">
          {desktopLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}