import { useState } from "react";

export const EducationModal = ({ onClose }: { onClose: () => void }) => {
  const [form, setForm] = useState({
    school: "",
    country: "",
    state: "",
    city: "",
    degree: "",
    field: "",
    start: "",
    end: ""
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div
  className="fixed inset-0 bg-black/50 flex items-center justify-center"
  onClick={onClose}
>
  <div
    className="bg-white w-[640px] rounded-lg p-6 relative"
    onClick={(e) => e.stopPropagation()}
  >

        {/* Close */}
        <button onClick={onClose} className="absolute right-5 top-5">
          <svg width="20" height="20" viewBox="0 0 24 24" stroke="#666" fill="none" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <h2 className="text-[18px] font-semibold">Add education</h2>
        <p className="text-gray-500 text-[14px] mb-4">Share where you've studied</p>

        <input name="school" onChange={handleChange} value={form.school} className="w-full border p-3 rounded-md mb-4" placeholder="School" />

        <div className="grid grid-cols-3 gap-3 mb-4">
          <input name="country" onChange={handleChange} className="border p-3 rounded-md" placeholder="Country" />
          <input name="state" onChange={handleChange} className="border p-3 rounded-md" placeholder="State" />
          <input name="city" onChange={handleChange} className="border p-3 rounded-md" placeholder="City" />
        </div>

        <input name="degree" onChange={handleChange} className="w-full border p-3 rounded-md mb-4" placeholder="Degree" />
        <input name="field" onChange={handleChange} className="w-full border p-3 rounded-md mb-4" placeholder="Field of study" />

        <div className="grid grid-cols-2 gap-3 mb-4">
          <input type="date" name="start" onChange={handleChange} className="border p-3 rounded-md" />
          <input type="date" name="end" onChange={handleChange} className="border p-3 rounded-md" />
        </div>

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="text-gray-600 px-4 py-2">Cancel</button>
          <button className="bg-[#0a66c2] text-white px-5 py-2 rounded-full">Save</button>
        </div>
      </div>
    </div>
  );
};