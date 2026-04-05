import LearningLayout from "../learning/layout";
import { useState } from "react";
import { toggleDark, isDark } from "../lib/theme";

export default function Settings() {
  const [dark, setDark] = useState(isDark());
  const [notifications, setNotifications] = useState(true);

  return (
    <LearningLayout>

      <h1 className="text-2xl font-bold">
        Settings
      </h1>

      <div className="space-y-6 mt-6">

        {/* profile settings */}
        <div className="bg-white border rounded-2xl p-6">

          <h3 className="font-semibold">
            Profile
          </h3>

          <input
            placeholder="Your name"
            className="border p-2 rounded w-full mt-3"
          />

          <textarea
            placeholder="Bio"
            className="border p-2 rounded w-full mt-3"
          />

          <button className="mt-3 bg-purple-600 text-white px-4 py-2 rounded-xl">
            Save
          </button>

        </div>

        {/* appearance */}
        <div className="bg-white border rounded-2xl p-6">

          <h3 className="font-semibold">
            Appearance
          </h3>

          <div className="flex justify-between mt-4">
            <span>Dark mode</span>

            <input type="checkbox"
             checked={dark}
             onChange={() => {
             toggleDark();
             setDark(!dark);
              }}
             />
          </div>

        </div>

        {/* notifications */}
        <div className="bg-white border rounded-2xl p-6">

          <h3 className="font-semibold">
            Notifications
          </h3>

          <div className="flex justify-between mt-4">
            <span>Email notifications</span>

            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
          </div>

        </div>

        {/* account */}
        <div className="bg-white border rounded-2xl p-6">

          <h3 className="font-semibold">
            Account
          </h3>

          <button className="mt-4 border px-4 py-2 rounded-xl w-full">
            Change Password
          </button>

          <button className="mt-2 text-red-600 border border-red-200 px-4 py-2 rounded-xl w-full">
            Logout
          </button>

        </div>

      </div>

    </LearningLayout>
  );
}