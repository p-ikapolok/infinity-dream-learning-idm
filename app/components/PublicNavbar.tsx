import { useState } from "react";
import { Link } from "react-router";

export default function PublicNavbar() {
  const [menu, setMenu] = useState(false);
  const [programs, setPrograms] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">

        {/* logo */}
        <Link to="/" className="font-bold text-lg">
          Infinity Dream Learning
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

          <Link to="/programs/ai">
            AI Data & Tech
          </Link>

          <Link to="/programs/creative">
            Creative
          </Link>

          <Link to="/programs/business">
            Entrepreneurship
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/pricing">
            All Access
          </Link>

          <Link to="/support">
            Support
          </Link>

          <Link
            to="/login"
            className="border border-white px-4 py-2 rounded-xl font-semibold"
          >
            Log In
          </Link>

        </nav>

        {/* mobile menu button */}
        <button
          type="button"
          className="md:hidden text-2xl"
          onClick={() => setMenu(!menu)}
        >
          ☰
        </button>

      </div>

      {/* programs dropdown */}
      {programs && (
        <div className="absolute left-0 right-0 bg-white text-black shadow-sm">

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
        <div className="md:hidden bg-black/90 text-white px-6 py-4 flex flex-col gap-4">

          <Link to="/">Programs</Link>
          <Link to="/programs/ai">AI Data & Tech</Link>
          <Link to="/programs/creative">Creative</Link>
          <Link to="/programs/business">Entrepreneurship</Link>
          <Link to="/about">About</Link>
          <Link to="/pricing">All Access</Link>
          <Link to="/support">Support</Link>
          <Link to="/login" className="font-semibold">Log In</Link>

        </div>
      )}

    </header>
  );
}