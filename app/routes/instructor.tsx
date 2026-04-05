import { Link } from "react-router";

export default function Instructor() {
  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold">
        Instructor Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6 mt-6">

        <div className="border p-4 rounded-xl">
          Students
          <div className="text-2xl font-bold">
            120
          </div>
        </div>

        <div className="border p-4 rounded-xl">
          Courses
          <div className="text-2xl font-bold">
            3
          </div>
        </div>

        <div className="border p-4 rounded-xl">
          Revenue
          <div className="text-2xl font-bold">
            $1,240
          </div>
        </div>

      </div>

      <Link
        to="/course-builder"
        className="mt-6 inline-block bg-purple-600 text-white px-6 py-2 rounded"
      >
        Create Course
      </Link>

    </div>
  );
}