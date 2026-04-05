import PublicNavbar from "../layout/public-navbar";

export default function Entrepreneurship() {
  return (
    <div>
      <PublicNavbar />

      <div className="px-8 py-16">
        <h1 className="text-4xl font-bold">
          Entrepreneurship
        </h1>

        <p className="mt-4 text-gray-600">
          Build startups, learn business,
          and scale ideas using AI.
        </p>
      </div>
    </div>
  );
}