import LearningLayout from "../learning/layout";
import { Link } from "react-router";

export default function Course({ title, progress, link }: any) {

const locked = progress === "0%";

  return (
    <div className="border p-6 rounded-xl">

      <h3 className="font-semibold text-lg">
        {title}
      </h3>

      {locked ? (
        <button className="mt-4 border px-4 py-2 rounded">
          Locked
        </button>
      ) : (
        <a
          href={link}
          className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded"
        >
          Continue
        </a>
      )}

    </div>
  );
}

function Lesson({ title, link }: any) {
  return (
    <Link
      to={link}
      className="border p-4 rounded-lg block"
    >
      {title}
    </Link>
  );
}