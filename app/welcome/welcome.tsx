import { Link } from "react-router";
import PublicNavbar from "../components/PublicNavbar";

// ✅ Keep default export
export default function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-white">
      
      <PublicNavbar />

      {/* HERO */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div>
          <h1 className="text-4xl font-bold leading-tight text-white">
            Learn Tech Skills <br />
            Build Real Projects <br />
            Grow Your Career
          </h1>

          <p className="mt-4 text-gray-300">
            AI-powered learning platform with real world programs,
            community and career support.
          </p>

          <div className="flex gap-4 mt-6">
            <Link
              to="/marketplace"
              className="bg-purple-600 text-white px-6 py-3 rounded-xl"
            >
              Start Learning
            </Link>

            <Link
              to="/ehub"
              className="border border-white text-white px-6 py-3 rounded-xl"
            >
              Explore Hub
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-80 rounded-2xl" />

      </section>

    </div>
  );
}