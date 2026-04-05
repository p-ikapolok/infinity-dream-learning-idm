import EhubNavbar from "../layout/ehub-navbar";

export default function UserProfile() {
  return (
    <div>
      <EhubNavbar />

      <div className="max-w-3xl mx-auto p-6">

        <h1 className="text-2xl font-bold">
          User Profile
        </h1>

        <div className="border p-6 rounded-xl mt-6">

          <div className="text-xl font-semibold">
            Peter
          </div>

          <p className="text-gray-600">
            AI learner
          </p>

        </div>

      </div>
    </div>
  );
}