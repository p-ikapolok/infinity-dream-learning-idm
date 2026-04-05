import { getPercent } from "../lib/progress";
import LearningLayout from "../learning/layout";

export default function Certificate() {
  return (
    <LearningLayout>

      <h1 className="text-2xl font-bold">
        Your Certificates
      </h1>

      <div className="grid md:grid-cols-2 gap-6 mt-6">

        {/* certificate card */}
        <div className="bg-white border rounded-2xl p-6">

          <div className="border-4 border-purple-600 rounded-xl p-6 text-center">

            <h2 className="text-xl font-bold">
              Certificate of Completion
            </h2>

            <p className="mt-4">
              This certifies that
            </p>

            <h3 className="text-lg font-semibold mt-2">
              Your Name
            </h3>

            <p className="mt-2">
              completed
            </p>

            <h3 className="font-semibold">
              AI Engineering
            </h3>

          </div>

          <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-xl">
            Download
          </button>

        </div>

      </div>

    </LearningLayout>
  );
}