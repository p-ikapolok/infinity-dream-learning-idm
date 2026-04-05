export default function AIChat() {
  return (
    <div className="border rounded-xl p-4 h-[500px] flex flex-col">

      <div className="flex-1 overflow-y-auto">
        <p className="text-sm text-gray-500">
          AI ready...
        </p>
      </div>

      <div className="flex gap-2 mt-4">
        <input
          placeholder="Ask AI..."
          className="border p-2 flex-1 rounded"
        />

        <button className="bg-purple-600 text-white px-4 rounded">
          Send
        </button>
      </div>

    </div>
  );
}