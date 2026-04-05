import PublicNavbar from "../layout/public-navbar";

export default function Checkout() {
  return (
    <div>
      <PublicNavbar />

      <div className="max-w-md mx-auto p-8">

        <h1 className="text-2xl font-bold">
          Checkout
        </h1>

        <div className="border p-6 rounded-xl mt-6">

          <p>Plan: All Access</p>
          <p className="mt-2 text-2xl font-bold">
            $49
          </p>

          <button className="mt-6 w-full bg-purple-600 text-white py-3 rounded">
            Pay Now
          </button>

        </div>

      </div>
    </div>
  );
}