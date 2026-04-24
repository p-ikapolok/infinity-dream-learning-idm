export default function BasicInfoModal({ onClose }: any) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[750px] rounded-xl shadow-lg p-6">

        {/* Header */}
        <div className="flex justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold">Basic Info</h2>
            <p className="text-sm text-gray-500">
              Complete your information
            </p>
          </div>

          <button onClick={onClose}>
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Top Section */}
        <div className="flex gap-6 mb-6">

          {/* Avatar */}
          <img
            src="/avatar.jpg"
            className="w-24 h-24 rounded-full object-cover"
          />

          {/* Upload */}
          <div className="flex-1 border-2 border-dashed rounded-lg flex flex-col items-center justify-center p-6 text-center">
            <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1" />
              <path d="M12 12V3m0 0l-3 3m3-3l3 3" />
            </svg>

            <p className="text-sm text-gray-600">
              <span className="text-blue-600 cursor-pointer">
                Click to upload
              </span>{" "}
              or drag and drop
            </p>
            <p className="text-xs text-gray-400">
              PNG, JPG or JPEG
            </p>
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-3 gap-4 mb-4">

          <div>
            <label className="text-sm">First Name*</label>
            <input className="w-full border rounded-md p-2 mt-1" defaultValue="Peter" />
          </div>

          <div>
            <label className="text-sm">Last Name*</label>
            <input className="w-full border rounded-md p-2 mt-1" defaultValue="Ikapolok" />
          </div>

          <div>
            <label className="text-sm">Gender*</label>
            <select className="w-full border rounded-md p-2 mt-1">
              <option>Male</option>
            </select>
          </div>

        </div>

        <div className="mb-6">
          <label className="text-sm">Title</label>
          <input className="w-full border rounded-md p-2 mt-1" defaultValue="Mr" />
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