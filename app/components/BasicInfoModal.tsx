import { useRef, useState } from "react";

type Props = {
  onClose: () => void;
};

export default function BasicInfoModal({ onClose }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<string>("/avatar.jpg");

  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white w-[750px] rounded-xl shadow-lg p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="flex justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold">Basic Info</h2>
            <p className="text-sm text-gray-500">
              Complete your information
            </p>
          </div>

          {/* CLOSE SVG ICON */}
          <button onClick={onClose}>
            <svg
              className="w-5 h-5 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* TOP SECTION */}
        <div className="flex gap-6 mb-6 items-center">

          {/* PROFILE IMAGE */}
          <img
            src={image}
            className="w-20 h-20 rounded-full object-cover border"
            alt="Profile"
          />

          {/* UPLOAD BOX */}
          <div className="flex-1 border-2 border-dashed rounded-lg flex flex-col items-center justify-center p-6 text-center">

            {/* hidden input */}
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />

            {/* UPLOAD SVG ICON */}
            <svg
              className="w-10 h-10 text-gray-400 mb-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <path d="M7 10l5-5 5 5" />
              <path d="M12 5v12" />
            </svg>

            <p className="text-sm text-gray-600">
              <span
                onClick={handleClickUpload}
                className="text-blue-600 cursor-pointer"
              >
                Click to upload
              </span>{" "}
              or drag and drop
            </p>

            <p className="text-xs text-gray-400">
              PNG, JPG or JPEG
            </p>
          </div>
        </div>

        {/* FORM */}
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

        {/* BUTTONS */}
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="border px-5 py-2 rounded-full">
            Cancel
          </button>

          <button
            onClick={() => console.log("Saved basic info")}
            className="bg-blue-500 text-white px-5 py-2 rounded-full"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}