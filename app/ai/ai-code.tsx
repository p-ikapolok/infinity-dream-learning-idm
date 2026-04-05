export default function AICode() {
  return (
    <div className="border rounded-xl p-4">

      <h3 className="font-semibold">
        AI Code Assistant
      </h3>

      <textarea
        placeholder="Write code request..."
        className="border w-full mt-4 p-2 rounded h-40"
      />

      <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">
        Generate Code
      </button>

    </div>
  );
}