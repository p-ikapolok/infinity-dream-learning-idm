export default function CurrentLocationModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-gray-200 relative p-8">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L12 13.41l-6.89 6.3-1.42-1.41L10.59 12 3.69 5.71 5.11 4.29 12 10.59l6.89-6.3z" />
          </svg>
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-900">Current Location</h2>

        {/* Grid Inputs */}
        <div className="mt-8 grid grid-cols-3 gap-8">
          {/* Row 1 */}
          <div>
            <label className="block text-gray-800 text-sm font-semibold mb-2">
              Country of Origin
            </label>

            <select className="w-full bg-gray-100 border border-blue-600 rounded-full px-4 py-3 text-blue-700 font-semibold outline-none focus:ring-2 focus:ring-blue-200">
              <option>Kenya</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-800 text-sm font-semibold mb-2">
              State of Origin
            </label>

            <select className="w-full bg-gray-100 border border-blue-600 rounded-full px-4 py-3 text-blue-700 font-semibold outline-none focus:ring-2 focus:ring-blue-200">
              <option>Search</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-800 text-sm font-semibold mb-2">
              City of Origin
            </label>

            <select className="w-full bg-gray-100 border border-blue-600 rounded-full px-4 py-3 text-blue-700 font-semibold outline-none focus:ring-2 focus:ring-blue-200">
              <option>Search</option>
            </select>
          </div>

          {/* Row 2 */}
          <div>
            <label className="block text-gray-800 text-sm font-semibold mb-2">
              Country of Residence
            </label>

            <select className="w-full bg-gray-100 border border-blue-600 rounded-full px-4 py-3 text-blue-700 font-semibold outline-none focus:ring-2 focus:ring-blue-200">
              <option>Kenya</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-800 text-sm font-semibold mb-2">
              State of Residence
            </label>

            <select className="w-full bg-gray-100 border border-blue-600 rounded-full px-4 py-3 text-blue-700 font-semibold outline-none focus:ring-2 focus:ring-blue-200">
              <option>Busia</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-800 text-sm font-semibold mb-2">
              City of Residence
            </label>

            <select className="w-full bg-gray-100 border border-blue-600 rounded-full px-4 py-3 text-blue-700 font-semibold outline-none focus:ring-2 focus:ring-blue-200">
              <option>Malaba</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-8 py-2 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50"
          >
            Cancel
          </button>

          <button className="px-10 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}