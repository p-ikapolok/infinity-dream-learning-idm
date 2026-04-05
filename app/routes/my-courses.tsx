import { getMyCourses } from "../lib/enrollment";
import { Link } from "react-router";
import { getPercent } from "../lib/progress";

export default function MyCourses() {
  const courses = getMyCourses();

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold">
        My Courses
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-6">

        {courses.map((c) => (
          <div
            key={c}
            className="border p-4 rounded-xl"
          >
            <h3 className="font-semibold">
              {c}
            </h3>

            <div className="mt-2 text-sm">
              Progress: {getPercent(c, 10)}%
            </div>

            <Link
              to="/learning"
              className="text-purple-600 mt-2 block"
            >
              Continue
            </Link>

            {getPercent(c, 10) === 100 && (
              <a
                href="/certificate"
                className="text-green-600 text-sm mt-2 block"
              >
                View Certificate
              </a>
            )}

          </div>
        ))}

      </div>

    </div>
  );
}