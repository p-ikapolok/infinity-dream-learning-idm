import { Link } from "react-router";
import { getPercent } from "../lib/progress";

export default function CourseCard({ course }: any) {
  const percent = getPercent(course.id, 10);

  return (
    <div className="bg-white border rounded-2xl overflow-hidden hover:shadow-sm">

      {/* thumbnail */}
      <div className="bg-gray-200 h-40" />

      <div className="p-4">

        <h3 className="font-semibold">
          {course.title}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {course.category}
        </p>

        {/* progress */}
        {percent > 0 && (
          <div className="mt-3">

            <div className="w-full bg-gray-200 h-2 rounded">
              <div
                className="bg-purple-600 h-2 rounded"
                style={{ width: percent + "%" }}
              />
            </div>

            <div className="text-xs mt-1 text-gray-500">
              {percent}% complete
            </div>

          </div>
        )}

        <div className="flex justify-between items-center mt-4">

          {/* price badge */}
          {course.price === "Free" ? (
            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
              Free
            </span>
          ) : (
            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
              Pro
            </span>
          )}

          <Link
            to="/course"
            className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm"
          >
            View
          </Link>

        </div>

      </div>

    </div>
  );
}