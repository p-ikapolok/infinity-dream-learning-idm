const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
    <path d="M6 6l12 12M6 18L18 6" />
  </svg>
);

export default function LinkedInModal({ onClose }) {
  return (
    <div
  className="fixed inset-0 bg-black/30 flex items-center justify-center"
  onClick={onClose}
>
      <div
  className="w-[600px] bg-white rounded-[16px] px-[24px] py-[20px] shadow-xl relative"
  onClick={(e) => e.stopPropagation()}
>

        <button
  onClick={onClose}
  className="px-[18px] py-[8px] rounded-full border border-[#D1D5DB]"
>
  Cancel
</button>

        <h2 className="text-[16px] font-semibold mb-[16px]">
          LinkedIn profile
        </h2>

        <input
          placeholder="https://linkedin.com/in/..."
          className="w-full h-[44px] border border-[#E5E7EB] rounded-[10px] px-[14px] text-[14px]"
        />

        <div className="flex justify-end gap-[12px] mt-[24px]">
          <button className="px-[18px] py-[8px] rounded-full border border-[#D1D5DB]">
            Cancel
          </button>
          <button className="px-[18px] py-[8px] rounded-full bg-[#3B82F6] text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}