export default function AIProject() {
  return (
    <div className="border p-6 rounded-xl">

      <h3 className="font-semibold">
        AI Project Builder
      </h3>

      <input
        placeholder="Project idea..."
        className="border w-full mt-4 p-2 rounded"
      />

      <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">
        Generate Project
      </button>

    </div>
  );
}