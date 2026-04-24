import { NavLink } from "react-router-dom";
import Layout from "../components/layout";
import { useState } from "react";

import AboutModal from "../components/AboutModal";
import EditLanguageModal from "../components/EditLanguageModal";
import PhoneModal from "../components/PhoneModal";
import SocialProfileModal from "../components/SocialProfileModal";
import InterestsModal from "../components/InterestsModal";
import CurrentLocationModal from "../components/CurrentLocationModal";


type Profile = {
  name: string;
  location: string;
  status: string;
};
export default function PersonalInformation() {
  const [openAbout, setOpenAbout] = useState(false);
  const [openLanguages, setOpenLanguages] = useState(false);
  const [openPhone, setOpenPhone] = useState(false);
  const [openSocial, setOpenSocial] = useState(false);
  const [openInterests, setOpenInterests] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);

  return (
    <Layout>

      {/* Banner */}
      <div className="h-[170px] bg-[#0f172a] relative flex items-center justify-center">
        <span className="text-white text-[20px] font-semibold">
          FOOTBALL
        </span>

        {/* Camera Icon */}
        <button className="absolute right-4 top-4 bg-white p-2 rounded-full shadow">
          <svg width="18" height="18" viewBox="0 0 24 24" stroke="#0a66c2" fill="none" strokeWidth="2">
            <path d="M23 19V7a2 2 0 0 0-2-2h-3l-2-2H8L6 5H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2z"/>
            <circle cx="12" cy="13" r="4"/>
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 relative">

        {/* Avatar */}
        <div className="absolute -top-14 left-6 w-[104px] h-[104px] rounded-full border-4 border-white bg-gray-300" />

        {/* Actions */}
        <div className="flex justify-end pt-4 gap-2">
          
          {/* Copy */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 bg-[#0a66c2] text-white px-4 py-[6px] rounded-full text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" stroke="white" fill="none" strokeWidth="2">
              <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/>
              <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/>
            </svg>
            Copy link
          </button>

          {/* Edit */}
          <button
            onClick={onEdit}
            className="p-2 border border-gray-300 rounded-full"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" stroke="#111" fill="none" strokeWidth="2">
              <path d="M12 20h9"/>
              <path d="M16.5 3.5a2 2 0 1 1 3 3L7 19l-4 1 1-4z"/>
            </svg>
          </button>

        </div>

        {/* Info */}
        <div className="ml-[130px] mt-4">
          <h2 className="text-[18px] font-semibold">{profile.name}</h2>
          <p className="text-gray-600 text-[14px]">{profile.location}</p>

          <span className="inline-block mt-2 border border-[#0a66c2] text-[#0a66c2] px-3 py-[4px] rounded-full text-[13px]">
            {profile.status}
          </span>
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
        <NavLink
  to="/settings-demographic-info"
  className={({ isActive }) =>
    isActive ? "text-blue-700" : "hover:text-blue-700"
  }
>
  Demographic Info
</NavLink>
      </div>

      {/* CONTENT AREA (EXACT LIKE SCREENSHOT) */}
<div className="mt-6 grid grid-cols-[2fr_1fr] gap-6 pb-12">
  {/* LEFT SIDE */}
  <div className="space-y-6">
    {/* ABOUT ME */}
    <div className="bg-white rounded-xl shadow border p-6 relative min-h-[220px]">
      <h3 className="font-bold text-lg text-gray-900 mb-4">About me</h3>

      <button
  onClick={() => setOpenAbout(true)}
  className="absolute top-6 right-6 text-gray-500 hover:text-blue-700"
>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
        </svg>
      </button>

      <p className="text-gray-700 text-sm leading-relaxed">
        I am a dedicated Virtual Assistant specializing in administrative support for entrepreneurs and small business owners.
        With a strong focus on efficiency and organization, I help busy professionals streamline their daily tasks so they can
        focus on growing their business.
        <br />
        <br />
        What sets me apart I understand the importance of time and productivity in business. By handling routine administrative
        tasks, I provide my clients with more time to focus on strategic decision-making and scaling their business.
      </p>
    </div>

    {/* ROW 2 (3 CARDS) */}
    <div className="grid grid-cols-3 gap-6">
      {/* Languages */}
      <div className="bg-white rounded-xl shadow border p-6 relative min-h-[140px]">
        <h3 className="font-bold text-lg mb-3">Languages</h3>

        <button
  onClick={() => setOpenLanguages(true)}
  className="absolute top-6 right-6 text-gray-500 hover:text-blue-700"
>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
          </svg>
        </button>

        <p className="text-sm text-gray-700">
          <span className="font-semibold">English</span> · Advanced
        </p>
        <p className="text-sm text-gray-700 mt-2">
          <span className="font-semibold">Swahili</span> · Native
        </p>
      </div>

      {/* Phone */}
      <div className="bg-white rounded-xl shadow border p-6 relative min-h-[140px]">
        <h3 className="font-bold text-lg mb-3">Phone Number</h3>

        <button
  onClick={() => setOpenPhone(true)}
  className="absolute top-6 right-6 text-gray-500 hover:text-blue-700"
>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
          </svg>
        </button>

        <p className="text-sm text-gray-700">
          <span className="font-semibold">Primary</span> · +254739762594
        </p>
        <p className="text-sm text-gray-700 mt-2">
          <span className="font-semibold">WhatsApp</span> · +254740748621
        </p>
      </div>

      {/* Social */}
      <div className="bg-white rounded-xl shadow border p-6 relative min-h-[140px]">
        <h3 className="font-bold text-lg mb-3">Social Profiles</h3>

        <button
  onClick={() => setOpenSocial(true)}
  className="absolute top-6 right-6 text-gray-500 hover:text-blue-700"
>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
          </svg>
        </button>

        <div className="w-10 h-10 bg-blue-600 rounded-md flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.0V9h3.112v1.561h.045c.434-.82 1.494-1.683 3.073-1.683 3.287 0 3.894 2.164 3.894 4.977v6.597zM5.337 7.433a1.804 1.804 0 1 1 0-3.608 1.804 1.804 0 0 1 0 3.608zM6.956 20.452H3.718V9h3.238v11.452z" />
          </svg>
        </div>
      </div>
    </div>

    {/* ROW 3 (2 CARDS) */}
    <div className="grid grid-cols-2 gap-6">
      {/* Interests */}
      <div className="bg-white rounded-xl shadow border p-6 relative min-h-[140px]">
        <h3 className="font-bold text-lg mb-3">Interests</h3>

        <button
  onClick={() => setOpenInterests(true)}
  className="absolute top-6 right-6 text-gray-500 hover:text-blue-700"
>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
          </svg>
        </button>

        <span className="inline-flex items-center px-4 py-1 rounded-full bg-gray-200 text-gray-800 text-sm">
          Software developer
        </span>
      </div>

      {/* Location */}
      <div className="bg-white rounded-xl shadow border p-6 relative min-h-[140px]">
        <h3 className="font-bold text-lg mb-3">Current Location</h3>

        <button
  onClick={() => setOpenLocation(true)}
  className="absolute top-6 right-6 text-gray-500 hover:text-blue-700"
>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
          </svg>
        </button>

        <p className="text-sm text-gray-700">
          <span className="font-semibold">Country of Origin</span> · Kenya
        </p>
        <p className="text-sm text-gray-700 mt-2">
          <span className="font-semibold">Residence</span> · Malaba, Kenya
        </p>
      </div>
    </div>
  </div>

  {/* RIGHT SIDE (PROGRESS CARD) */}
  <div className="bg-white rounded-xl shadow border p-6 min-h-[520px]">
    <h3 className="font-bold text-lg mb-6">Personal Info</h3>

    <div className="flex items-center justify-center">
      <div className="relative w-36 h-36">
        <div className="absolute inset-0 rounded-full border-[14px] border-purple-600"></div>
        <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-gray-900">
          100%
        </div>
      </div>
    </div>

    <div className="mt-10 space-y-4 text-sm">
      {["About Me", "Languages", "Social Profiles", "Interests"].map((t) => (
        <div
          key={t}
          className="flex items-center gap-3 text-green-600 font-semibold"
        >
          <span className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-white text-xs">
            ✓
          </span>
          {t}
        </div>
      ))}
    </div>
  </div>
</div>

{openAbout && <AboutModal onClose={() => setOpenAbout(false)} />}

{openLanguages && (
  <EditLanguageModal onClose={() => setOpenLanguages(false)} />
)}

{openPhone && <PhoneModal onClose={() => setOpenPhone(false)} />}

{openSocial && <SocialProfileModal onClose={() => setOpenSocial(false)} />}

{openInterests && (
  <InterestsModal onClose={() => setOpenInterests(false)} />
)}

{openLocation && (
  <CurrentLocationModal onClose={() => setOpenLocation(false)} />
)}
    </Layout>
  );
}