/* ================= ATTENDANCE ================= */

function Attendance() {
  return (
    <div>
      <h2 className="font-semibold mb-2">Hub Attendance</h2>
      <p className="text-sm text-gray-500 mb-4">
        Below is a list of your attendances
      </p>

      <div className="flex gap-3 mb-4">
        <select className="border p-2 rounded-md text-sm">
          <option>Hub Name</option>
        </select>

        <select className="border p-2 rounded-md text-sm">
          <option>Date Range</option>
        </select>

        <button className="border px-3 py-2 rounded-md text-sm text-blue-600">
          Clear Filters
        </button>
      </div>

      <div className="border rounded-md p-6 text-center text-gray-400">
        No data to display
      </div>
    </div>
  );
}
