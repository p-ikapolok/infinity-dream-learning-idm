import PublicNavbar from "../layout/public-navbar";

export default function Creative() {
  return (
    <div>
      <PublicNavbar />

      <div className="px-8 py-16">
        <h1 className="text-4xl font-bold">
          Creative
        </h1>

        <p className="mt-4 text-gray-600">
          Design, video editing, branding,
          and creative AI tools.
        </p>
      </div>
    </div>
  );
}