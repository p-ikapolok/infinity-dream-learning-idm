export default function AILesson() {
  return (
    <div className="border p-6 rounded-xl">

      <h3 className="font-semibold">
        AI Course Generator
      </h3>

      <input
        placeholder="Course topic..."
        className="border p-2 w-full mt-4 rounded"
      />

      <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">
        Generate Course
      </button>

    </div>
  );
}