const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none">
    <path d="M6 6l12 12M6 18L18 6" />
  </svg>
);

const UploadIcon = () => (
  <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 16V8M8 12l4-4 4 4" />
    <path d="M20 16a4 4 0 00-3-7 5 5 0 00-10 1 4 4 0 000 8h13z" />
  </svg>
);

export default function ResumeModal() {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="w-[600px] bg-white rounded-[16px] px-[24px] py-[20px] shadow-xl relative">

        <button className="absolute right-[16px] top-[16px] text-gray-400">
          <CloseIcon />
        </button>

        <h2 className="text-[16px] font-semibold mb-[16px]">Resume</h2>

        <div className="border-2 border-dashed border-[#D1D5DB] rounded-[12px] h-[170px] flex flex-col items-center justify-center gap-[6px] text-gray-500">
          <UploadIcon />
          <span className="text-[14px]">Click to upload or drag and drop</span>
          <span className="text-[12px]">PDF (max. 10MB)</span>
        </div>

        <div className="flex justify-end gap-[12px] mt-[24px]">
          <button className="border px-[18px] py-[8px] rounded-full">Cancel</button>
          <button className="bg-[#3B82F6] text-white px-[18px] py-[8px] rounded-full">Save</button>
        </div>
      </div>
    </div>
  );
}