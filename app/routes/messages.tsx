import EhubNavbar from "../layout/ehub-navbar";

export default function Messages() {
  return (
    <div>
      <EhubNavbar />

      <div className="grid grid-cols-4 h-screen">

        {/* users */}
        <div className="border-r p-4">
          <User name="John" />
          <User name="Sarah" />
        </div>

        {/* chat */}
        <div className="col-span-3 flex flex-col">

          <div className="flex-1 p-6">
            <p>Hello 👋</p>
          </div>

          <div className="border-t p-4 flex gap-2">
            <input className="border p-2 flex-1 rounded" />
            <button className="bg-purple-600 text-white px-4 rounded">
              Send
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

function User({ name }: any) {
  return (
    <div className="p-2 hover:bg-gray-100 rounded">
      {name}
    </div>
  );
}