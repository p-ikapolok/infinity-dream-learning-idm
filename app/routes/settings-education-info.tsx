import { NavLink } from "react-router-dom";
import Layout from "../components/layout";
import { useState, useEffect } from "react";
import BasicInfoModal from "../components/BasicInfoModal";

export default function EducationInfo() {
    const profile = {
  name: "Peter Ikapolok",
  location: "Kenya",
  status: "Open to Opportunities"
};

const [openBasicInfo, setOpenBasicInfo] = useState(false);

// STATE (declare first)
const [coverImage, setCoverImage] = useState<string | null>(null);
const [copied, setCopied] = useState(false);

// CLEANUP (after state)
useEffect(() => {
  return () => {
    if (coverImage) {
      URL.revokeObjectURL(coverImage);
    }
  };
}, [coverImage]);

// HANDLE COVER IMAGE CHANGE
const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    const imageUrl = URL.createObjectURL(file);
    setCoverImage(imageUrl);

    // reset input so same file can be selected again
    e.target.value = "";
  }
};

// HANDLE COPY LINK
const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
  } catch {
    // fallback
    const textArea = document.createElement("textarea");
    textArea.value = window.location.href;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  }

  setCopied(true);
  setTimeout(() => setCopied(false), 2000);
};

// EDIT BUTTON
const onEdit = () => {
  console.log("Edit clicked");
};

return (
<Layout>

{/* BANNER */}
<div className="mt-8 bg-white rounded-xl shadow border relative">

  {/* COPY TOAST */}
  {copied && (
    <div className="fixed top-5 right-5 bg-black text-white px-4 py-2 rounded-lg shadow-lg text-sm z-50">
      Profile link copied ✔
    </div>
  )}

  {/* COVER */}
<div
  className="h-44 rounded-t-xl relative overflow-hidden bg-gray-200"
  style={{
    backgroundImage: coverImage ? `url(${coverImage})` : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  {/* HIDDEN FILE INPUT */}
  <input
    type="file"
    accept="image/*"
    id="coverUpload"
    className="hidden"
    onChange={handleCoverChange}
  />

  {/* EDIT (PENCIL) BUTTON */}
  <label
    htmlFor="coverUpload"
    className="absolute top-4 right-4 bg-white p-2 rounded-full shadow cursor-pointer hover:bg-gray-100"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-blue-700"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"/>
      <path d="M20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z"/>
    </svg>
  </label>

</div>

  {/* PROFILE IMAGE (ONLY ONE) */}
  <div className="absolute left-8 top-32 w-28 h-28 rounded-full border-4 border-white bg-gray-300 shadow" />

  {/* PROFILE INFO ROW */}
  <div className="pt-20 pb-6 px-8 flex justify-between items-start">

    {/* LEFT SIDE */}
    <div>
      <div className="flex items-center gap-2">
        <h3 className="text-xl font-bold text-gray-900">{profile.name}</h3>

        <div className="w-6 h-6 bg-blue-600 text-white flex items-center justify-center rounded-sm text-xs font-bold">
          in
        </div>
      </div>

      <p className="text-gray-600 text-sm mt-1">{profile.location}</p>

      <div className="mt-2 inline-flex items-center px-4 py-1 rounded-full border border-green-400 bg-green-50 text-green-700 text-sm font-semibold">
        {profile.status}
      </div>
    </div>

    {/* RIGHT SIDE BUTTONS */}
    <div className="flex gap-2 items-start">

      <button
        onClick={handleCopy}
        className="px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-semibold text-sm border border-blue-200 hover:bg-blue-100"
      >
        Copy link
      </button>

            <button
  onClick={() => setOpenBasicInfo(true)}
  className="w-10 h-10 rounded-lg bg-white text-blue-700 flex items-center justify-center shadow border border-gray-200 hover:bg-gray-50"
>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"/>
          <path d="M20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z"/>
        </svg>
      </button>

    </div>
  </div>

</div>

      {/* TABS */}
      <div className="mt-6 flex gap-8 text-sm font-semibold text-gray-600">
        <NavLink
          to="/settings-personal-information"
          className={({ isActive }) =>
            isActive ? "text-blue-700" : "hover:text-blue-700"
          }
        >
          Personal Information
        </NavLink>

        <NavLink
          to="/settings-education-info"
          className={({ isActive }) =>
            isActive ? "text-blue-700" : "hover:text-blue-700"
          }
        >
          Education Info
        </NavLink>

        <NavLink
          to="/settings-work-info"
          className={({ isActive }) =>
            isActive ? "text-blue-700" : "hover:text-blue-700"
          }
        >
          Work Info
        </NavLink>

        <NavLink
  to="/settings-demographic-info"
  className={({ isActive }) =>
    isActive ? "text-blue-700" : "hover:text-blue-700"
  }
>
  Demographic Info
</NavLink>
      </div>

      {/* CONTENT AREA (EXACT STRUCTURE) */}
<div className="mt-6 grid grid-cols-[2fr_1fr] gap-6 pb-12">
  {/* LEFT SIDE */}
  <div className="space-y-6">
    {/* Education Card */}
    <div className="bg-white rounded-xl shadow border p-6 relative min-h-[320px] flex flex-col items-center justify-center text-center">
      <h3 className="absolute top-6 left-6 font-bold text-lg text-gray-900">
        Education
      </h3>

      <button 
onClick={() => setOpenEducation(true)}className="absolute top-6 right-6 text-gray-500 hover:text-blue-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6v-2z" />
        </svg>
      </button>

      <div className="w-16 h-12 bg-gray-200 rounded-lg flex items-center justify-center border mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 text-gray-500"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3zm0 10.18L4.24 9 12 4.82 19.76 9 12 13.18z" />
          <path d="M11 12h2v7h-2z" />
        </svg>
      </div>

      <p className="text-blue-700 font-semibold text-sm mb-2">
        You didn't add your Education level yet...
      </p>

      <p className="text-gray-600 text-sm mb-5 max-w-md">
        Share your education to stand out and catch the attention of relevant
        employers
      </p>

      <button className="px-6 py-2 rounded-full border border-blue-300 text-blue-700 bg-blue-50 font-semibold text-sm">
        Add Education
      </button>
    </div>

    {/* Bottom row */}
    <div className="grid grid-cols-2 gap-6">
      {/* Previous Enrollments */}
      <div className="bg-white rounded-xl shadow border p-6 min-h-[180px]">
        <h3 className="font-bold text-lg mb-4">Previous Enrollments</h3>

        <p className="text-gray-700 text-sm mb-4">
          Have you enrolled in an ALX course before?
        </p>

        <div className="flex items-center gap-4">
          <div className="w-12 h-6 bg-gray-300 rounded-full relative border">
            <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-1 shadow border"></div>
          </div>
          <span className="text-gray-700 text-sm font-semibold">No</span>
        </div>
      </div>

      {/* Achievement */}
      <div className="bg-white rounded-xl shadow border p-6 relative min-h-[180px]">
        <h3 className="font-bold text-lg mb-4">Achievement</h3>

        <button className="absolute top-6 right-6 text-gray-500 hover:text-blue-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
          </svg>
        </button>

        <p className="text-gray-700 text-sm mb-2">
          <span className="font-semibold">Highest Level</span> ·
        </p>

        <p className="text-gray-700 text-sm">
          <span className="font-semibold">Field of study</span> ·
        </p>
      </div>
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="bg-white rounded-xl shadow border p-6 min-h-[520px]">
    <h3 className="font-bold text-lg mb-6">Education</h3>

    <div className="flex items-center justify-center">
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 rounded-full border-[14px] border-gray-300"></div>
        <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-gray-900">
          0%
        </div>
      </div>
    </div>

    <div className="mt-10 space-y-4 text-sm text-gray-700">
      <div className="flex items-center gap-3">
        <span className="w-4 h-4 rounded-full border border-gray-600"></span>
        Education
      </div>

      <div className="flex items-center gap-3">
        <span className="w-4 h-4 rounded-full border border-gray-600"></span>
        Achievement
      </div>
    </div>
  </div>
</div>
{openBasicInfo && (
  <BasicInfoModal onClose={() => setOpenBasicInfo(false)} />
)}
    </Layout>
  );
}