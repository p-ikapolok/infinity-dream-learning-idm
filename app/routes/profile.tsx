import LearningLayout from "../learning/layout";
import { getXP } from "../lib/xp";

export default function Profile() {
  const xp = getXP();
  const level = Math.floor(xp / 100);
  const progress = xp % 100;

  return (
    <LearningLayout>

      <h1 className="text-2xl font-bold">
        My Profile
      </h1>

      <div className="grid lg:grid-cols-3 gap-6 mt-6">

        {/* LEFT */}
        <div className="bg-white border rounded-2xl p-6 text-center">

          <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto" />

          <h2 className="mt-4 font-semibold">
            Your Name
          </h2>

          <p className="text-sm text-gray-500">
            Frontend Developer
          </p>

          <button className="mt-4 border px-4 py-2 rounded-xl">
            Edit Profile
          </button>

        </div>

        {/* RIGHT */}
        <div className="lg:col-span-2 space-y-6">

          {/* stats */}
          <div className="grid grid-cols-3 gap-4">

            <div className="bg-white border rounded-xl p-4 text-center">
              <p className="text-sm text-gray-500">
                Courses
              </p>
              <p className="text-xl font-bold">
                3
              </p>
            </div>

            <div className="bg-white border rounded-xl p-4 text-center">
              <p className="text-sm text-gray-500">
                Completed
              </p>
              <p className="text-xl font-bold">
                1
              </p>
            </div>

            <div className="bg-white border rounded-xl p-4 text-center">
              <p className="text-sm text-gray-500">
                Certificates
              </p>
              <p className="text-xl font-bold">
                1
              </p>
            </div>

          </div>

          {/* xp */}
          <div className="bg-white border rounded-2xl p-6">

            <div className="flex justify-between">
              <span className="font-semibold">
                Level {level}
              </span>

              <span className="text-sm text-gray-500">
                {progress}/100 XP
              </span>
            </div>

            <div className="w-full bg-gray-200 h-2 mt-3 rounded">
              <div
                className="bg-purple-600 h-2 rounded"
                style={{ width: progress + "%" }}
              />
            </div>

          </div>

          {/* achievements */}
          <div className="bg-white border rounded-2xl p-6">

            <h3 className="font-semibold">
              Achievements
            </h3>

            <div className="grid grid-cols-4 gap-4 mt-4">

              <Badge icon="🏆" />
              <Badge icon="🔥" />
              <Badge icon="🎯" />
              <Badge icon="🤖" />

            </div>

          </div>

        </div>

      </div>

    </LearningLayout>
  );
}

function Badge({ icon }: any) {
  return (
    <div className="bg-gray-50 rounded-xl p-4 text-center text-xl">
      {icon}
    </div>
  );
}