import LearningLayout from "../learning/layout";

export default function Achievements() {
  return (
    <LearningLayout>

      <h1 className="text-2xl font-bold">
        Achievements
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">

        <Badge title="First Lesson" icon="🎯" />
        <Badge title="Course Completed" icon="🏆" />
        <Badge title="7 Day Streak" icon="🔥" />
        <Badge title="AI Explorer" icon="🤖" />

      </div>

    </LearningLayout>
  );
}

function Badge({ title, icon }: any) {
  return (
    <div className="bg-white border rounded-2xl p-6 text-center">

      <div className="text-3xl">
        {icon}
      </div>

      <p className="mt-2 text-sm">
        {title}
      </p>

    </div>
  );
}