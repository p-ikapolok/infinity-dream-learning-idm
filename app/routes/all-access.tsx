import PublicNavbar from "../layout/public-navbar";

export default function AllAccess() {
  return (
    <div>
      <PublicNavbar />

      <div className="px-8 py-16">
        <h1 className="text-4xl font-bold">
          All Access
        </h1>

        <p className="mt-4 text-gray-600">
          Unlock all courses, AI tools,
          and premium learning features.
        </p>

        <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg">
          Upgrade
        </button>
      </div>
    </div>
  );
}