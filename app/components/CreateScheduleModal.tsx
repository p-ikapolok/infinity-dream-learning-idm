import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  onSave?: (data: {
    title: string;
    date: string;
    time: string;
    description: string;
  }) => void;
};

export default function CreateScheduleModal({ open, onClose, onSave }: Props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  if (!open) return null;

  const handleSave = () => {
    if (onSave) {
      onSave({ title, date, time, description });
    }

    // reset form
    setTitle("");
    setDate("");
    setTime("");
    setDescription("");

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white w-[420px] rounded-2xl p-6 shadow-lg">

        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-semibold text-slate-900">
            Create Schedule
          </h2>

          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-800"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-3">

          <input
            type="text"
            placeholder="Event title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-slate-400"
          />

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-500 focus:outline-none focus:border-slate-400"
          />

          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-500 focus:outline-none focus:border-slate-400"
          />

          <textarea
            rows={4}
            placeholder="Schedule description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 placeholder-slate-400 resize-none focus:outline-none focus:border-slate-400"
          />

        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 mt-5">

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-full text-sm text-slate-600 hover:bg-slate-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-5 py-2 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition"
          >
            Save
          </button>

        </div>
      </div>
    </div>
  );
}