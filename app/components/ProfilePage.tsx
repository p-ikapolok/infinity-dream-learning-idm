"use client";

import { useState } from "react";
import { Pencil } from "lucide-react";
import EditLanguagesModal from "./EditLanguagesModal";

export default function ProfilePage() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="bg-[#0f172a] min-h-screen text-white p-6">
      <div className="max-w-5xl mx-auto">

        {/* Banner */}
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="/banner.jpg"
            className="w-full h-40 object-cover"
          />

          {/* Avatar */}
          <div className="absolute -bottom-12 left-6">
            <img
              src="/avatar.jpg"
              className="w-24 h-24 rounded-full border-4 border-[#0f172a]"
            />
          </div>
        </div>

        {/* Name */}
        <div className="mt-16 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold">Peter Ikapolok</h1>
            <p className="text-gray-400 text-sm">Mr • Kenya Busia</p>
            <span className="text-green-400 text-sm border border-green-500 px-2 py-1 rounded-full">
              Open to Opportunities
            </span>
          </div>

          <button className="bg-blue-600 px-4 py-2 rounded-md text-sm">
            Copy link
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mt-6 border-b border-gray-700 pb-2">
          {["Personal Information", "Education Info", "Work Info", "Demographic Info"].map((tab) => (
            <button key={tab} className="text-sm text-blue-400 border-b-2 border-blue-400 pb-1">
              {tab}
            </button>
          ))}
        </div>

        {/* About */}
        <div className="bg-[#1e293b] p-4 rounded-lg mt-6 relative">
          <h2 className="font-semibold mb-2">About me</h2>
          <p className="text-gray-300 text-sm">
            I am a dedicated Virtual Assistant specializing in administrative support...
          </p>

          <Pencil className="absolute top-4 right-4 cursor-pointer" size={18} />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-4 mt-4">

          {/* Languages */}
          <div className="bg-[#1e293b] p-4 rounded-lg relative">
            <h3 className="font-semibold mb-2">Languages</h3>
            <p className="text-sm text-gray-300">English • Advanced</p>
            <p className="text-sm text-gray-300">Swahili • Native</p>

            <Pencil
              onClick={() => setOpenModal(true)}
              className="absolute top-4 right-4 cursor-pointer"
              size={18}
            />
          </div>

          {/* Phone */}
          <div className="bg-[#1e293b] p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Phone Number</h3>
            <p className="text-sm text-gray-300">+254739762594</p>
          </div>

          {/* Social */}
          <div className="bg-[#1e293b] p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Social Profiles</h3>
            <p className="text-blue-400">LinkedIn</p>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-[#1e293b] p-6 rounded-lg mt-6 w-64">
          <h3 className="mb-4">Personal Info</h3>

          <div className="w-32 h-32 rounded-full border-8 border-purple-500 flex items-center justify-center text-xl font-bold">
            100%
          </div>

          <ul className="mt-4 text-sm space-y-1 text-green-400">
            <li>✔ About Me</li>
            <li>✔ Languages</li>
            <li>✔ Social Profiles</li>
            <li>✔ Interests</li>
          </ul>
        </div>

        {/* Modal */}
        {openModal && <EditLanguagesModal onClose={() => setOpenModal(false)} />}
      </div>
    </div>
  );
}