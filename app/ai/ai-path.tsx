export default function AIPath() {
  return (
    <div className="border p-6 rounded-xl">

      <h3 className="font-semibold">
        AI Learning Path
      </h3>

      <input
        placeholder="What do you want to learn?"
        className="border w-full mt-4 p-2 rounded"
      />

      <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">
        Generate Path
      </button>

    </div>
  );
}