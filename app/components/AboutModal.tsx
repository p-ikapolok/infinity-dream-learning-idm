type Props = {
  onClose: () => void;
};

export default function AboutModal({ onClose }: Props) {
  return (
    <div
      className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white w-[650px] rounded-xl shadow-lg p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-lg font-semibold">About</h2>
            <p className="text-sm text-gray-500">
              Tell us something about you
            </p>
          </div>

          <button onClick={onClose}>
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Textarea */}
        <textarea
          className="w-full h-32 border rounded-lg p-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue="I am a dedicated Virtual Assistant specializing in administrative support for entrepreneurs and small business owners..."
        />

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="border px-5 py-2 rounded-full text-gray-700"
          >
            Cancel
          </button>

          <button
            onClick={() => console.log("Saved")}
            className="bg-blue-500 text-white px-5 py-2 rounded-full"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}