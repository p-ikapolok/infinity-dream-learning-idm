export default function EditLanguagesModal({ onClose }: any) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[600px] rounded-xl p-6">

        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">Languages</h2>

          <button onClick={onClose}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Row */}
        {[1,2].map((_, i) => (
          <div key={i} className="flex gap-3 mb-3 items-center">
            <select className="flex-1 border p-2 rounded">
              <option>{i === 0 ? "English" : "Swahili"}</option>
            </select>

            <select className="flex-1 border p-2 rounded">
              <option>{i === 0 ? "Advanced" : "Native"}</option>
            </select>

            <button>
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
              </svg>
            </button>
          </div>
        ))}

        {/* Add */}
        <button className="flex items-center gap-1 text-blue-600 text-sm mt-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" />
          </svg>
          Add Language
        </button>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button className="border px-4 py-2 rounded-full">
            Cancel
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
            Save
          </button>
        </div>

      </div>
    </div>
  );
}