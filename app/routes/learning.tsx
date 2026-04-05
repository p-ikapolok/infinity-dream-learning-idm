import { isAuthenticated } from "../lib/auth";
import LearningLayout from "../learning/layout";
import CourseCard from "../components/CourseCard";
import { getXP } from "../lib/xp";

const courses = [
  {
    id: "course-1",
    title: "AI Engineering",
    category: "AI",
    price: "$49"
  },
  {
    id: "course-2",
    title: "Frontend Mastery",
    category: "Development",
    price: "$39"
  }
];
const xp = getXP();
const level = Math.floor(xp / 100);
const progress = xp % 100;

export default function LearningHome() {
  return (
    <LearningLayout>

      {/* header */}
      <div>
        <h1 className="text-2xl font-bold">
          Welcome back
        </h1>

        <p className="text-gray-500">
          Continue your learning journey
        </p>
      </div>
     <div className="bg-white border rounded-2xl p-4 mt-6">

  <div className="flex justify-between">
    <span>Level {level}</span>
    <span>{progress}/100 XP</span>
  </div>

  <div className="w-full bg-gray-200 h-2 mt-2 rounded">
    <div
      className="bg-purple-600 h-2 rounded"
      style={{ width: progress + "%" }}
    />
  </div>

</div>

      {/* stats */}
      <div className="grid md:grid-cols-3 gap-6 mt-6">

        <div className="bg-white border rounded-2xl p-4">
          <h3 className="text-sm text-gray-500">
            Courses
          </h3>
          <p className="text-2xl font-bold">
            3
          </p>
        </div>

        <div className="bg-white border rounded-2xl p-4">
          <h3 className="text-sm text-gray-500">
            Completed
          </h3>
          <p className="text-2xl font-bold">
            1
          </p>
        </div>

        <div className="bg-white border rounded-2xl p-4">
          <h3 className="text-sm text-gray-500">
            Certificates
          </h3>
          <p className="text-2xl font-bold">
            1
          </p>
        </div>

      </div>

      {/* continue learning */}
      <div className="mt-10">
        <h2 className="font-semibold">
          Continue Learning
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* recommended */}
      <div className="mt-10">
        <h2 className="font-semibold">
          Recommended
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* activity */}
      <div className="mt-10">

        <h2 className="font-semibold">
          Recent Activity
        </h2>

        <div className="bg-white border rounded-2xl p-4 mt-4">

          <div className="flex justify-between py-2 border-b">
            <span>Completed Lesson 1</span>
            <span className="text-gray-500 text-sm">
              Today
            </span>
          </div>

          <div className="flex justify-between py-2 border-b">
            <span>Enrolled in AI course</span>
            <span className="text-gray-500 text-sm">
              Yesterday
            </span>
          </div>

          <div className="flex justify-between py-2">
            <span>Certificate unlocked</span>
            <span className="text-gray-500 text-sm">
              2 days ago
            </span>
          </div>

        </div>

      </div>

    </LearningLayout>
  );
}