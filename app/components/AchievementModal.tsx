export default function AchievementModal({ onClose }: any) {
  return (
    <div
  className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
  onClick={onClose}
>
  <div
    className="bg-white w-[650px] rounded-xl shadow-lg p-6"
    onClick={(e) => e.stopPropagation()}
  >

        {/* Header */}
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">Achievement</h2>

          <button onClick={onClose}>
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <div className="mb-4">
          <label className="text-sm block mb-1">Highest Level</label>
          <select className="w-full border rounded-md p-2">
            <option>Select a level of education</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="text-sm block mb-1">Field of study</label>
          <input className="w-full border rounded-md p-2" />
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button className="border px-5 py-2 rounded-full">
            Cancel
          </button>
          <button className="bg-blue-500 text-white px-5 py-2 rounded-full">
            Save
          </button>
        </div>

      </div>
    </div>
  );
}