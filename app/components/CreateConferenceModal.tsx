import React, { useState } from "react";

type Platform = "Zoom" | "Google Meet";

interface Props {
  open: boolean;
  onClose: () => void;
  onCreate: (data: {
    title: string;
    platform: Platform;
    link: string;
  }) => void;
}

export default function CreateConferenceModal({
  open,
  onClose,
  onCreate,
}: Props) {
  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState<Platform>("Zoom");
  const [link, setLink] = useState("");

  if (!open) return null;

  const handleCreate = () => {
    if (!title.trim() || !link.trim()) return;

    onCreate({ title, platform, link });

    setTitle("");
    setPlatform("Zoom");
    setLink("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">

      <div className="w-full max-w-lg bg-white rounded-2xl p-6">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-bold">Create Conference</h2>

          <button
            onClick={onClose}
            className="text-slate-500 hover:text-black"
          >
            ✕
          </button>
        </div>

        {/* TITLE */}
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Conference title"
          className="w-full border p-3 rounded-lg mb-3"
        />

        {/* PLATFORM */}
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value as Platform)}
          className="w-full border p-3 rounded-lg mb-3"
        >
          <option value="Zoom">Zoom</option>
          <option value="Google Meet">Google Meet</option>
        </select>

        {/* LINK INPUT (YOUR REQUIRED FEATURE) */}
        <input
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Paste Zoom or Google Meet link"
          className="w-full border p-3 rounded-lg mb-5"
        />

        {/* ACTIONS */}
        <div className="flex justify-end gap-3">

          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleCreate}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Create
          </button>

        </div>

      </div>
    </div>
  );
}