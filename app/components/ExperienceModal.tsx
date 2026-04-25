import { useState } from "react";

type Props = {
  onClose: () => void;
};

type FormState = {
  title: string;
  company: string;
  type: string;
  start: string;
  end: string;
  description: string;
};

export const ExperienceModal = ({ onClose }: Props) => {
  const [form, setForm] = useState<FormState>({
    title: "",
    company: "",
    type: "",
    start: "",
    end: "",
    description: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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

        <h2 className="text-[18px] font-semibold">Add experience</h2>
        <p className="text-gray-500 text-[14px] mb-4">Share where you've worked</p>

        <input name="title" onChange={handleChange} className="w-full border p-3 rounded-md mb-4" placeholder="Title" />
        <input name="company" onChange={handleChange} className="w-full border p-3 rounded-md mb-4" placeholder="Company" />
        <input name="type" onChange={handleChange} className="w-full border p-3 rounded-md mb-4" placeholder="Employment type" />

        <div className="grid grid-cols-2 gap-3 mb-4">
          <input type="date" name="start" onChange={handleChange} className="border p-3 rounded-md" />
          <input type="date" name="end" onChange={handleChange} className="border p-3 rounded-md" />
        </div>

        <textarea
          name="description"
          onChange={handleChange}
          className="w-full border p-3 rounded-md mb-4 h-24"
          placeholder="Description"
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="text-gray-600 px-4 py-2">Cancel</button>
          <button className="bg-[#0a66c2] text-white px-5 py-2 rounded-full">Save</button>
        </div>
      </div>
    </div>
  );
};