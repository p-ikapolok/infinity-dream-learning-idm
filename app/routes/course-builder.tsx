import { useState } from "react";
import { Link } from "react-router";

export default function CourseBuilder() {
  const [thumbnail, setThumbnail] = useState<any>(null);

  const [modules, setModules] = useState([
    {
      title: "Module 1",
      lessons: [{ title: "Lesson 1", free: true }]
    }
  ]);

  function addModule() {
    setModules([
      ...modules,
      { title: "New Module", lessons: [] }
    ]);
  }

  function addLesson(index: number) {
    const copy = [...modules];
    copy[index].lessons.push({
      title: "New Lesson",
      free: false
    });
    setModules(copy);
  }

  function toggleFree(m: number, l: number) {
    const copy = [...modules];
    copy[m].lessons[l].free = !copy[m].lessons[l].free;
    setModules(copy);
  }

  return (
    <div className="p-6 max-w-4xl">

      <h1 className="text-2xl font-bold">
        Course Builder
      </h1>

      {/* thumbnail */}
      <div className="mt-6">
        <label className="font-semibold">
          Course Thumbnail
        </label>

        <input
          type="file"
          className="mt-2"
          onChange={(e) =>
            setThumbnail(e.target.files?.[0])
          }
        />

        {thumbnail && (
          <img
            src={URL.createObjectURL(thumbnail)}
            className="mt-4 rounded-xl h-40"
          />
        )}
      </div>

      {/* course info */}
      <input
        placeholder="Course title"
        className="border p-2 w-full mt-6 rounded"
      />

      <textarea
        placeholder="Course description"
        className="border p-2 w-full mt-4 rounded h-32"
      />

      {/* pricing */}
      <div className="mt-6">
        <label className="font-semibold">
          Course Price ($)
        </label>

        <input
          placeholder="49"
          className="border p-2 w-full mt-2 rounded"
        />
      </div>

      {/* instructor */}
      <div className="mt-6 border p-4 rounded-xl">
        <h3 className="font-semibold">
          Instructor Profile
        </h3>

        <input
          placeholder="Instructor name"
          className="border p-2 w-full mt-3 rounded"
        />

        <textarea
          placeholder="Instructor bio"
          className="border p-2 w-full mt-3 rounded h-24"
        />
      </div>

      {/* modules */}
      <div className="mt-8 space-y-6">

        {modules.map((module, i) => (
          <div
            key={i}
            className="border rounded-xl p-4"
          >

            <input
              value={module.title}
              className="font-semibold border p-2 w-full rounded"
              onChange={(e) => {
                const copy = [...modules];
                copy[i].title = e.target.value;
                setModules(copy);
              }}
            />

            <div className="mt-4 space-y-2">

              {module.lessons.map((lesson, j) => (
                <div
                  key={j}
                  className="border p-2 rounded flex justify-between items-center"
                >
                  <div>
                    <span>
                      {j + 1}. {lesson.title}
                    </span>

                    {lesson.free && (
                      <span className="ml-2 text-xs bg-green-100 px-2 py-1 rounded">
                        Free
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3 items-center">

                    <button
                      onClick={() => toggleFree(i, j)}
                      className="text-xs border px-2 py-1 rounded"
                    >
                      {lesson.free
                        ? "Make Paid"
                        : "Make Free"}
                    </button>

                    <Link
                      to="/upload-lesson"
                      className="text-purple-600"
                    >
                      Edit
                    </Link>

                  </div>

                </div>
              ))}

            </div>

            <button
              onClick={() => addLesson(i)}
              className="mt-3 text-sm text-purple-600"
            >
              + Add Lesson
            </button>

          </div>
        ))}

      </div>

      <button
        onClick={addModule}
        className="mt-6 border px-4 py-2 rounded"
      >
        + Add Module
      </button>

      <div className="mt-6 flex gap-4">

        <button className="bg-purple-600 text-white px-6 py-2 rounded">
          Save Course
        </button>

        <button className="bg-green-600 text-white px-6 py-2 rounded">
          Publish Course
        </button>

      </div>

    </div>
  );
}