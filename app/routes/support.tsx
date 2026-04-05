import PublicNavbar from "../layout/public-navbar";

export default function Support() {
  return (
    <div>
      <PublicNavbar />

      <div className="px-8 py-16 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">
          Support
        </h1>

        <p className="mt-4 text-gray-600">
          Need help? Contact us and we'll assist you.
        </p>

        <form className="mt-8 flex flex-col gap-4">

          <input
            placeholder="Your email"
            className="border p-3 rounded-lg"
          />

          <input
            placeholder="Subject"
            className="border p-3 rounded-lg"
          />

          <textarea
            placeholder="Message"
            className="border p-3 rounded-lg h-32"
          />

          <button className="bg-purple-600 text-white py-3 rounded-lg">
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
}