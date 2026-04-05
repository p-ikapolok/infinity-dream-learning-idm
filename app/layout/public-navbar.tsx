import { useState } from "react";
import { Link } from "react-router";

export default function PublicNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 text-white">
        <div className="flex items-center justify-between px-6 py-4">

          <h1 className="text-xl font-bold">
            Infinity Dream Learning
          </h1>

          <button
            onClick={() => setOpen(!open)}
            className="text-2xl"
          >
            ☰
          </button>

        </div>
      </header>

      {open && (
        <div className="fixed inset-0 bg-black text-white z-50 p-8">

          <div className="flex justify-end">
            <button
              onClick={() => setOpen(false)}
              className="text-2xl"
            >
              ✕
            </button>
          </div>

          <nav className="flex flex-col gap-6 mt-10 text-xl">

            <Link to="/">Programs</Link>

            <Link to="/">AI data and tech</Link>

            <Link to="/">Creative</Link>

            <Link to="/">Entrepreneurship</Link>

            <Link to="/">About</Link>

            <Link to="/pricing">All access</Link>

            <Link to="/support">Support</Link>

            <Link to="/login" className="font-semibold">
              Log in
            </Link>

          </nav>

        </div>
      )}
    </>
  );
}