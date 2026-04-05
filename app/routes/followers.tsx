import EhubNavbar from "../layout/ehub-navbar";

export default function Followers() {
  return (
    <div>
      <EhubNavbar />

      <div className="max-w-2xl mx-auto p-6">

        <h1 className="text-2xl font-bold">
          Followers
        </h1>

        <div className="mt-6 flex flex-col gap-4">

          <User name="John" />
          <User name="Sarah" />
          <User name="Mike" />

        </div>

      </div>
    </div>
  );
}

function User({ name }: any) {
  return (
    <div className="border p-4 rounded-lg flex justify-between">
      {name}
      <button className="text-purple-600">
        Follow back
      </button>
    </div>
  );
}