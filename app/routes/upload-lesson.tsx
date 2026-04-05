import { useState } from "react";

export default function UploadLesson() {
  const [video, setVideo] = useState<any>(null);

  return (
    <div className="p-6 max-w-3xl">

      <h1 className="text-2xl font-bold">
        Upload Lesson
      </h1>

      <input
        placeholder="Lesson title"
        className="border p-2 w-full mt-6 rounded"
      />

      <textarea
        placeholder="Lesson content"
        className="border p-2 w-full mt-4 rounded h-40"
      />

      {/* video upload */}
      <div className="mt-4">
        <label className="block font-medium">
          Upload Video
        </label>

        <input
          type="file"
          accept="video/*"
          onChange={(e) => setVideo(e.target.files?.[0])}
          className="mt-2"
        />
      </div>

      {/* preview */}
      {video && (
        <video
          controls
          className="mt-4 rounded-lg"
          src={URL.createObjectURL(video)}
        />
      )}

      <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded">
        Save Lesson
      </button>

    </div>
  );
}