import { useState } from "react";
import { Link } from "react-router";

export default function PublicNavbar() {
  const [menu, setMenu] = useState(false);
  const [programs, setPrograms] = useState(false);

  return (
    <header className="sticky top-0 bg-white border-b z-50 relative">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* logo */}
        <Link to="/" className="font-bold text-lg">
          Infinity Dream
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-8">

          <button
            type="button"
            onClick={() => setPrograms(!programs)}
            className="relative"
          >
            Programs
          </button>

          <Link to="/marketplace">
            Courses
          </Link>

          <Link to="/ehub">
            Ehub
          </Link>

          <Link to="/community">
            Community
          </Link>

          <Link
            to="/login"
            className="border px-4 py-2 rounded-xl"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-purple-600 text-white px-4 py-2 rounded-xl"
          >
            Get Started
          </Link>

        </nav>

        {/* mobile menu button */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setMenu(!menu)}
        >
          ☰
        </button>

      </div>

      {/* programs dropdown */}
      {programs && (
        <div className="absolute left-0 right-0 bg-white border-b shadow-sm">

          <div className="max-w-7xl mx-auto px-6 py-6 grid md:grid-cols-3 gap-6">

            <Link to="/programs/ai" className="block">
              <div className="border p-4 rounded-xl">
                AI Data & Tech
              </div>
            </Link>

            <Link to="/programs/creative">
              <div className="border p-4 rounded-xl">
                Creative
              </div>
            </Link>

            <Link to="/programs/business">
              <div className="border p-4 rounded-xl">
                Entrepreneurship
              </div>
            </Link>

          </div>

        </div>
      )}

      {/* mobile menu */}
      {menu && (
        <div className="md:hidden border-t px-6 py-4 flex flex-col gap-4 bg-white">

          <Link to="/marketplace">Courses</Link>
          <Link to="/ehub">Ehub</Link>
          <Link to="/community">Community</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Get Started</Link>

        </div>
      )}

    </header>
  );
}