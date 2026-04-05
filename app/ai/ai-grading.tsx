export default function AIGrading() {
  return (
    <div className="border p-6 rounded-xl">

      <h3 className="font-semibold">
        AI Auto Grading
      </h3>

      <textarea
        placeholder="Paste student answer..."
        className="border w-full mt-4 p-2 rounded h-40"
      />

      <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">
        Grade
      </button>

    </div>
  );
}