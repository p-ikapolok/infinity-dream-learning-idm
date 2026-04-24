type Props = {
  onClose: () => void;
};

export default function InterestsModal({ onClose }: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-gray-200 relative p-8"
        onClick={(e) => e.stopPropagation()}
      >
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
        <h2 className="text-2xl font-bold text-gray-900">Interests</h2>
        <p className="text-gray-500 text-sm mt-1">Add your interests</p>

        {/* Input */}
        <div className="mt-8">
          <input
            type="text"
            placeholder="Enter your interests"
            className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Tag */}
        <div className="mt-6">
          <span className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-gray-300 text-gray-900 font-semibold bg-gray-100">
            Software developer
            <button className="text-gray-500 hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L12 13.41l-6.89 6.3-1.42-1.41L10.59 12 3.69 5.71 5.11 4.29 12 10.59l6.89-6.3z" />
              </svg>
            </button>
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-16 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-8 py-2 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50"
          >
            Cancel
          </button>

          <button
            onClick={() => console.log("Saved interests")}
            className="px-10 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}