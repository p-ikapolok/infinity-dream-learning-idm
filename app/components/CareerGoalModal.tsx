const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
    <path d="M6 6l12 12M6 18L18 6" />
  </svg>
);

export default function CareerGoalModal({ onClose }) {
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
  className="absolute right-[16px] top-[16px] text-gray-400"
>
  <CloseIcon />
</button>

        <h2 className="text-[16px] font-semibold mb-[16px]">
          Top career goal
        </h2>

        <input className="w-full h-[44px] border border-[#E5E7EB] rounded-[10px] px-[12px]" />

        <div className="flex justify-end gap-[12px] mt-[24px]">
          <button className="border px-[18px] py-[8px] rounded-full">Cancel</button>
          <button className="bg-[#3B82F6] text-white px-[18px] py-[8px] rounded-full">Save</button>
        </div>
      </div>
    </div>
  );
}