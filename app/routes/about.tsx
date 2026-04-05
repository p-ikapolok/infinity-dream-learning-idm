import PublicNavbar from "../layout/public-navbar";

export default function About() {
  return (
    <div>
      <PublicNavbar />

      <div className="px-8 py-16">
        <h1 className="text-4xl font-bold">
          About
        </h1>

        <p className="mt-4 text-gray-600">
          Infinity Dream Learning is an AI-powered
          learning platform for skills of the future.
        </p>
      </div>
    </div>
  );
}