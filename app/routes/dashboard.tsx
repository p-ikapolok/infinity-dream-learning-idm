import { getMyCourses } from "../lib/enrollment";
import { getPercent } from "../lib/progress";
import { Link } from "react-router";

export default function Dashboard() {
  const courses = getMyCourses();

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold">
        Dashboard
      </h1>

      {/* continue learning */}
      <div className="mt-6">
        <h2 className="font-semibold">
          Continue Learning
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-4">

          {courses.map((c) => {
            const percent = getPercent(c, 10);

            return (
              <div
                key={c}
                className="border p-4 rounded-xl"
              >
                <h3 className="font-semibold">
                  {c}
                </h3>

                <div className="text-sm mt-2">
                  {percent}% complete
                </div>

                {/* progress bar */}
                <div className="w-full bg-gray-200 h-2 rounded mt-2">
                  <div
                    className="bg-purple-600 h-2 rounded"
                    style={{ width: percent + "%" }}
                  />
                </div>

                <Link
                  to="/learning"
                  className="text-purple-600 mt-3 block"
                >
                  Continue
                </Link>

              </div>
            );
          })}

        </div>
      </div>

      {/* recommended */}
      <div className="mt-10">
        <h2 className="font-semibold">
          Recommended
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-4">

          <div className="border p-4 rounded-xl">
            AI Engineering
          </div>

          <div className="border p-4 rounded-xl">
            UI UX Design
          </div>

          <div className="border p-4 rounded-xl">
            Fullstack Development
          </div>

        </div>

      </div>

    </div>
  );
}