import LearningLayout from "../learning/layout";
import { isEnrolled } from "../lib/enrollment";
import { markComplete, getPercent } from "../lib/progress";

export default function Lesson() {
  const enrolled = isEnrolled("course-1");
  const percent = getPercent("course-1", 10);

  if (percent === 100) {
    window.location.href = "/certificate";
  }

  if (!enrolled) {
    return (
      <LearningLayout>
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold">
            Enroll to access lesson
          </h2>

          <a
            href="/course"
            className="mt-4 inline-block bg-purple-600 text-white px-6 py-3 rounded-xl"
          >
            Enroll Now
          </a>
        </div>
      </LearningLayout>
    );
  }

  const locked = false;

  if (locked) {
    return (
      <LearningLayout>
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold">
            Premium Lesson
          </h2>

          <p className="mt-2 text-gray-600">
            Upgrade to access this lesson
          </p>

          <a
            href="/pricing"
            className="mt-4 inline-block bg-purple-600 text-white px-6 py-3 rounded-xl"
          >
            Upgrade
          </a>
        </div>
      </LearningLayout>
    );
  }

  return (
    <LearningLayout>

      <h1 className="text-2xl font-bold">
        Lesson Title
      </h1>

      <div className="grid lg:grid-cols-3 gap-6 mt-6">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">

          {/* video */}
          <div className="bg-black h-72 rounded-xl" />

          {/* content */}
          <div className="bg-white border rounded-xl p-6 mt-4">
            <p>
              Lesson content goes here...
            </p>

            <div className="mt-6 flex justify-between">
              <button className="border px-4 py-2 rounded-xl">
                Previous
              </button>

              <button
                onClick={() => markComplete("course-1", 1)}
                className="bg-purple-600 text-white px-4 py-2 rounded-xl"
              >
                Mark Complete
              </button>
            </div>
          </div>

          {/* discussion */}
          <div className="bg-white border rounded-xl p-6 mt-6">

            <h3 className="font-semibold">
              Lesson Discussion
            </h3>

            <textarea
              className="border p-3 w-full mt-3 rounded-xl"
              placeholder="Ask or comment..."
            />

            <button className="mt-3 bg-purple-600 text-white px-4 py-2 rounded-xl">
              Post
            </button>

          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">

          {/* AI tutor */}
          <div className="bg-white border rounded-xl p-4 sticky top-6">

            <h3 className="font-semibold">
              AI Tutor
            </h3>

            <textarea
              placeholder="Ask AI..."
              className="w-full border p-2 mt-2 rounded-xl h-40"
            />

            <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-xl w-full">
              Ask
            </button>

          </div>

          {/* lesson list */}
          <div className="bg-white border rounded-xl p-4">

            <h3 className="font-semibold">
              Course Lessons
            </h3>

            <div className="mt-3 space-y-2 text-sm">

              <div className="p-2 bg-gray-100 rounded">
                Lesson 1
              </div>

              <div className="p-2 hover:bg-gray-50 rounded">
                Lesson 2
              </div>

              <div className="p-2 hover:bg-gray-50 rounded">
                Lesson 3
              </div>

            </div>

          </div>

        </div>

      </div>

    </LearningLayout>
  );
}