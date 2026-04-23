import { useState } from "react";
import Layout from "../components/layout";
import EditLanguagesModal from "./EditLanguagesModal";

export default function DemographicInfo() {
  const [openLang, setOpenLang] = useState(false);
  const [openPhone, setOpenPhone] = useState(false);

  return (
    <Layout>
      <div className="bg-[#f5f7fb] min-h-screen py-10 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Banner */}
          <div className="relative rounded-xl overflow-hidden">
            <img src="/banner.jpg" className="w-full h-40 object-cover" />
            <div className="absolute -bottom-12 left-6">
              <img
                src="/avatar.jpg"
                className="w-24 h-24 rounded-full border-4 border-white"
              />
            </div>
          </div>

          {/* Profile */}
          <div className="mt-16 flex justify-between items-center">
            <div>
              <h1 className="text-xl font-semibold">Peter Ikapolok</h1>
              <p className="text-gray-500 text-sm">Mr • Kenya Busia</p>

              <span className="text-green-600 text-xs border border-green-500 px-2 py-1 rounded-full">
                Open to Opportunities
              </span>
            </div>

            <div className="flex gap-2">

              <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm">
                Copy link
              </button>

              {/* Edit Icon */}
              <button className="border p-2 rounded-md">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6-4 1 1-4z" />
                </svg>
              </button>

            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 mt-6 border-b text-sm">
            <span>Personal Information</span>
            <span>Education Info</span>
            <span>Work Info</span>
            <span className="text-blue-600 border-b-2 border-blue-600 pb-2">
              Demographic Info
            </span>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-6">

            {/* Left */}
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <div className="flex justify-between">
                <h3 className="font-semibold">Diversity and inclusion</h3>

                <button>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6-4 1 1-4z" />
                  </svg>
                </button>
              </div>

              <div className="text-sm mt-4 space-y-3">
                <p>Your current guardianship <span className="text-red-500">Please enter</span></p>
                <p>Description of the location you live in <span className="text-red-500">Please enter</span></p>
                <p>Your current living circumstances <span className="text-red-500">Please enter</span></p>
                <p>Your household monthly income <span className="text-red-500">Please enter</span></p>
                <p>Do you have a disability? <span className="text-red-500">Please enter</span></p>
              </div>
            </div>

            {/* Middle */}
            <div className="bg-white p-4 rounded-xl border shadow-sm">
              <div className="flex justify-between">
                <h3 className="font-semibold">Humanitarian status</h3>

                <button>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path d="M15.232 5.232l3.536 3.536M9 11l6-6 3 3-6 6-4 1 1-4z" />
                  </svg>
                </button>
              </div>

              <div className="text-sm mt-4">
                <p>Do you have a humanitarian status?</p>
                <p className="text-red-500">Please select</p>
              </div>
            </div>

            {/* Right */}
            <div className="bg-white p-6 rounded-xl border shadow-sm text-center">
              <div className="w-32 h-32 mx-auto rounded-full border-8 border-gray-300 flex items-center justify-center text-xl font-bold">
                0%
              </div>

              <div className="text-left mt-4 text-sm space-y-2">
                {[
                  "Current Guardianship",
                  "Location description",
                  "Living Circumstances",
                  "Household monthly income",
                  "Disability",
                  "Humanitarian status"
                ].map((item, i) => (
                  <label key={i} className="flex items-center gap-2">
                    <input type="radio" className="accent-blue-600" />
                    {item}
                  </label>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Modals */}
        {openLang && <EditLanguagesModal onClose={() => setOpenLang(false)} />}
        {openPhone && <PhoneModal onClose={() => setOpenPhone(false)} />}
      </div>
    </Layout>
  );
}