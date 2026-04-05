import LearningLayout from "../learning/layout";

export default function Certificates() {
  return (
    <LearningLayout>

      <h1 className="text-2xl font-bold">
        Certificates
      </h1>

      <div className="grid md:grid-cols-2 gap-6 mt-6">

        <Certificate title="Frontend Development" />
        <Certificate title="AI Engineering" />

      </div>

    </LearningLayout>
  );
}

function Certificate({ title }: any) {
  return (
    <div className="border p-6 rounded-xl">

      <h3 className="font-semibold text-lg">
        {title}
      </h3>

      <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">
        Download
      </button>

    </div>
  );
}