import { NavLink } from "react-router-dom";
import Layout from "../components/layout";
import { useState, useEffect } from "react";

export default function DemographicInfo() {
    const profile = {
  name: "Peter Ikapolok",
  location: "Kenya",
  status: "Open to Opportunities"
};

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
        onClick={onEdit}
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
          <NavLink to="/settings-personal-information" className={({ isActive }) => (isActive ? "text-blue-700" : "hover:text-blue-700")}>
            Personal Information
          </NavLink>

          <NavLink to="/settings-education-info" className={({ isActive }) => (isActive ? "text-blue-700" : "hover:text-blue-700")}>
            Education Info
          </NavLink>

          <NavLink to="/settings-work-info" className={({ isActive }) => (isActive ? "text-blue-700" : "hover:text-blue-700")}>
            Work Info
          </NavLink>

          <NavLink to="/settings-demographic-info" className={({ isActive }) => (isActive ? "text-blue-700" : "hover:text-blue-700")}>
            Demographic Info
          </NavLink>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6 mt-6 pb-12">

          {/* LEFT */}
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h3 className="font-bold text-lg text-gray-900">
              Diversity and inclusion
            </h3>

            <div className="text-sm mt-5 space-y-4 text-gray-700">
              <p>Your current guardianship <span className="text-red-500 font-semibold">Please enter</span></p>
              <p>Location description <span className="text-red-500 font-semibold">Please enter</span></p>
              <p>Living circumstances <span className="text-red-500 font-semibold">Please enter</span></p>
              <p>Monthly income <span className="text-red-500 font-semibold">Please enter</span></p>
              <p>Disability <span className="text-red-500 font-semibold">Please enter</span></p>
            </div>
          </div>

          {/* MIDDLE */}
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <h3 className="font-bold text-lg text-gray-900">
              Humanitarian status
            </h3>

            <p className="mt-5 text-sm text-gray-700">
              Do you have a humanitarian status?
            </p>

            <p className="text-red-500 font-semibold text-sm mt-2">
              Please select
            </p>
          </div>

          {/* RIGHT */}
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border-[14px] border-gray-300 flex items-center justify-center text-xl font-bold">
                0%
              </div>
            </div>
          </div>
      </div>
    </Layout>
  );
}