import LearningLayout from "../learning/layout";

export default function Progress() {
  return (
    <LearningLayout>

      <h1 className="text-2xl font-bold">
        Progress
      </h1>

      <div className="mt-6">

        <div className="border p-6 rounded-xl">
          <h3 className="font-semibold">
            Overall Progress
          </h3>

          <div className="mt-4 bg-gray-200 h-3 rounded">
            <div className="bg-purple-600 h-3 w-1/2 rounded"/>
          </div>

        </div>

      </div>

    </LearningLayout>
  );
}