import { useState, useEffect } from "react";
import { Link } from "react-router";
import Skeleton from "../components/Skeleton"; // adjust path if needed

const courses = [
  {
    id: "course-1",
    title: "AI Engineering",
    category: "AI",
    price: "$49",
    rating: 4.8
  },
  {
    id: "course-2",
    title: "Frontend Mastery",
    category: "Development",
    price: "$39",
    rating: 4.6
  }
];

export default function Marketplace() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // simulate loading (replace with API later)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const filtered = courses.filter(
    (c) =>
      c.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || c.category === category)
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Course Marketplace
      </h1>

      {/* search */}
      <input
        placeholder="Search courses..."
        className="border p-2 mt-4 rounded w-full"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* filters */}
      <div className="flex gap-3 mt-4 flex-wrap">
        <button
          onClick={() => setCategory("All")}
          className="border px-4 py-1 rounded-xl"
        >
          All
        </button>

        <button
          onClick={() => setCategory("AI")}
          className="border px-4 py-1 rounded-xl"
        >
          AI
        </button>

        <button
          onClick={() => setCategory("Design")}
          className="border px-4 py-1 rounded-xl"
        >
          Design
        </button>

        <button
          onClick={() => setCategory("Business")}
          className="border px-4 py-1 rounded-xl"
        >
          Business
        </button>
      </div>

      {/* grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <Skeleton key={i} />
            ))
          : filtered.map((course) => (
              <div
                key={course.id}
                className="border p-4 rounded-xl"
              >
                <div className="bg-gray-200 h-40 rounded" />

                <h3 className="font-semibold mt-3">
                  {course.title}
                </h3>

                <div className="text-sm text-gray-500">
                  ⭐ {course.rating}
                </div>

                <div className="mt-2 font-semibold">
                  {course.price}
                </div>

                <Link
                  to="/course"
                  className="mt-3 block bg-purple-600 text-white text-center py-2 rounded"
                >
                  View Course
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
}