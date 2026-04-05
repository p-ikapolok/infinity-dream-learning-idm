export default function AIQuiz() {
  return (
    <div className="border p-6 rounded-xl">

      <h3 className="font-semibold">
        AI Quiz Generator
      </h3>

      <input
        placeholder="Topic..."
        className="border p-2 w-full mt-4 rounded"
      />

      <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">
        Generate Quiz
      </button>

    </div>
  );
}