import { addReview, getReviews } from "../lib/reviews";
import { useState } from "react";
import { enroll, isEnrolled } from "../lib/enrollment";
import { Link } from "react-router";

export default function Course() {
  const courseId = "course-1";

  const [joined, setJoined] = useState(
    isEnrolled(courseId)
  );

  const [text, setText] = useState("");
  const [reviews, setReviews] = useState(getReviews());

  function handleEnroll() {
    enroll(courseId);
    setJoined(true);
  }

  function handleReview() {
    addReview(text);
    setReviews(getReviews());
    setText("");
  }

  return (
    <div className="p-6 max-w-3xl">

      <h1 className="text-2xl font-bold">
        AI Engineering Course
      </h1>

      <p className="mt-2">
        Learn AI from beginner to advanced
      </p>

      {!joined ? (
        <button
          onClick={handleEnroll}
          className="mt-4 bg-purple-600 text-white px-6 py-2 rounded"
        >
          Enroll Now
        </button>
      ) : (
        <Link
          to="/learning"
          className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded"
        >
          Go to Course
        </Link>
      )}

      {/* Reviews */}
      <div className="mt-10">

        <h3 className="font-semibold">
          Reviews
        </h3>

        <textarea
          value={text}
          className="border p-2 w-full mt-2 rounded"
          placeholder="Write review"
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={handleReview}
          className="mt-2 bg-purple-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>

        <div className="mt-4 space-y-2">
          {reviews.map((r, i) => (
            <div key={i} className="border p-2 rounded">
              {r}
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}