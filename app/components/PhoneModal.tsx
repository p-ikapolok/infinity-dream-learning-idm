type Props = {
  onClose: () => void;
};

export default function PhoneModal({ onClose }: Props) {
  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white w-[600px] rounded-xl p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">Phone Number</h2>

          <button onClick={onClose}>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mb-4">
          <label className="text-sm">Phone Number*</label>
          <input
            className="w-full border p-2 rounded mt-1"
            defaultValue="+254739762594"
          />
        </div>

        <div className="mb-4">
          <label className="text-sm">WhatsApp Number*</label>
          <input
            className="w-full border p-2 rounded mt-1"
            defaultValue="+254740748621"
          />
        </div>

        <div className="flex items-start gap-2 text-sm mb-6">
          <input type="checkbox" />
          <p>
            The same as primary phone number <br />
            <span className="text-gray-500 text-xs">
              ALX will use this number for ease of communication with you.
            </span>
          </p>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="border px-4 py-2 rounded-full"
          >
            Cancel
          </button>

          <button
            onClick={() => console.log("Saved phone numbers")}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}