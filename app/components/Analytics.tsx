export default function CBCAnalyticsDashboard() {
  const subjects = [
    { name: "Mathematics", score: 78, grade: "ME" },
    { name: "English", score: 84, grade: "EE" },
    { name: "Kiswahili", score: 81, grade: "EE" },
    { name: "Integrated Science", score: 73, grade: "ME" },
    { name: "Social Studies", score: 88, grade: "EE" },
    { name: "Creative Arts", score: 91, grade: "EX" },
    { name: "Pre-Technical", score: 76, grade: "ME" },
  ];

  const competencies = [
    { title: "Communication", value: 86 },
    { title: "Critical Thinking", value: 79 },
    { title: "Creativity", value: 92 },
    { title: "Citizenship", value: 81 },
    { title: "Digital Literacy", value: 88 },
  ];

  const attendance = [92, 95, 94, 96, 97, 93];

  const performanceTrend = [62, 68, 70, 74, 79, 82, 86];

  const average = Math.round(
    subjects.reduce((acc, item) => acc + item.score, 0) /
      subjects.length
  );

  const gradeColor = (grade: string) => {
    switch (grade) {
      case "EX":
        return "bg-emerald-100 text-emerald-700";

      case "EE":
        return "bg-blue-100 text-blue-700";

      case "ME":
        return "bg-amber-100 text-amber-700";

      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-100 p-4 lg:p-6">

      <div className="w-full space-y-6">

        {/* HEADER */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 lg:p-8 flex flex-col lg:flex-row justify-between gap-6">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className="w-8 h-8 text-white"
              >
                <path d="M12 14L3 9l9-5 9 5-9 5z" />
                <path d="M3 9v6l9 5 9-5V9" />
              </svg>

            </div>

            <div>

              <h1 className="text-3xl font-bold text-slate-900">
                CBC Student Analytics
              </h1>

              <p className="text-slate-500 mt-1">
                Infinity Dream Learning • Term 2 Performance Report
              </p>

            </div>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <StatCard
              title="Mean Score"
              value={`${average}%`}
              color="bg-blue-50"
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-6 h-6"
                >
                  <path d="M4 20V10" />
                  <path d="M10 20V4" />
                  <path d="M16 20v-7" />
                  <path d="M22 20v-3" />
                </svg>
              }
            />

            <StatCard
              title="CBC Level"
              value="EE"
              color="bg-emerald-50"
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-6 h-6"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              }
            />

            <StatCard
              title="Attendance"
              value="95%"
              color="bg-amber-50"
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-6 h-6"
                >
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect x="3" y="6" width="18" height="15" rx="2" />
                  <path d="M3 10h18" />
                </svg>
              }
            />

            <StatCard
              title="Class Rank"
              value="7 / 48"
              color="bg-purple-50"
              icon={
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="w-6 h-6"
                >
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                  <path d="M7 4h10" />
                  <path d="M17 4v3a5 5 0 0 1-10 0V4" />
                </svg>
              }
            />

          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">

          {/* LEFT SIDE */}
          <div className="xl:col-span-2 space-y-6">

            {/* SUBJECT PERFORMANCE */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

              <div className="flex items-center justify-between mb-8">

                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Subject Performance
                  </h2>

                  <p className="text-slate-500 mt-1">
                    CBC competency-based evaluation overview
                  </p>
                </div>

                <div className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-xl font-semibold">
                  Term 2
                </div>

              </div>

              <div className="space-y-5">

                {subjects.map((subject) => (
                  <div key={subject.name}>

                    <div className="flex items-center justify-between mb-2">

                      <h3 className="font-semibold text-slate-800">
                        {subject.name}
                      </h3>

                      <div className="flex items-center gap-3">

                        <span className="font-bold text-slate-700">
                          {subject.score}%
                        </span>

                        <span
                          className={`px-3 py-1 rounded-full text-sm font-bold ${gradeColor(subject.grade)}`}
                        >
                          {subject.grade}
                        </span>

                      </div>

                    </div>

                    <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">

                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                        style={{ width: `${subject.score}%` }}
                      />

                    </div>

                  </div>
                ))}

              </div>
            </div>

            {/* PERFORMANCE TREND */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

              <div className="flex items-center justify-between mb-6">

                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Academic Trend
                  </h2>

                  <p className="text-slate-500 mt-1">
                    Continuous assessment growth
                  </p>
                </div>

                <div className="bg-emerald-100 text-emerald-700 px-3 py-2 rounded-xl font-bold">
                  +24%
                </div>

              </div>

              <div className="relative h-64 flex items-end gap-4">

                {performanceTrend.map((value, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center flex-1"
                  >

                    <div
                      className="w-full rounded-t-2xl bg-gradient-to-t from-indigo-600 to-sky-400"
                      style={{ height: `${value * 2}px` }}
                    />

                    <span className="mt-2 text-xs text-slate-500">
                      W{index + 1}
                    </span>

                  </div>
                ))}

              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* PROFILE */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

              <div className="flex flex-col items-center text-center">

                <div className="w-24 h-24 rounded-3xl bg-indigo-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  DK
                </div>

                <h2 className="mt-5 text-2xl font-bold text-slate-900">
                  Daniel Kimani
                </h2>

                <p className="text-slate-500">
                  Grade 8 • Junior Secondary School
                </p>

              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">

                <MiniInfo title="Admission" value="CBC-2026-018" />
                <MiniInfo title="Class" value="8 North" />
                <MiniInfo title="Gender" value="Male" />
                <MiniInfo title="Guardian" value="Mrs. Kimani" />

              </div>

            </div>

            {/* ATTENDANCE */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

              <h3 className="font-bold text-slate-800 mb-5">
                Attendance Trend
              </h3>

              <div className="flex items-end justify-between gap-2 h-40">

                {attendance.map((value, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-2xl bg-indigo-500"
                    style={{ height: `${value}%` }}
                  />
                ))}

              </div>

              <div className="flex justify-between text-xs text-slate-400 mt-3">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>

            </div>

            {/* CBC COMPETENCIES */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

              <div className="mb-6">

                <h2 className="text-xl font-bold text-slate-900">
                  CBC Competencies
                </h2>

                <p className="text-slate-500 mt-1">
                  Learner competency evaluation
                </p>

              </div>

              <div className="space-y-5">

                {competencies.map((item) => (
                  <div key={item.title}>

                    <div className="flex justify-between mb-2">

                      <span className="font-semibold text-slate-700">
                        {item.title}
                      </span>

                      <span className="font-bold text-slate-900">
                        {item.value}%
                      </span>

                    </div>

                    <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">

                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500"
                        style={{ width: `${item.value}%` }}
                      />

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

type StatCardProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
};

function StatCard({
  title,
  value,
  icon,
  color,
}: StatCardProps) {
  return (
    <div className={`rounded-2xl p-4 ${color}`}>

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-500 font-medium">
            {title}
          </p>

          <h3 className="text-2xl font-bold text-slate-900 mt-1">
            {value}
          </h3>

        </div>

        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-slate-700 shadow-sm">
          {icon}
        </div>

      </div>

    </div>
  );
}

type MiniInfoProps = {
  title: string;
  value: string;
};

function MiniInfo({
  title,
  value,
}: MiniInfoProps) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4">

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h3 className="font-bold text-slate-800 mt-1">
        {value}
      </h3>

    </div>
  );
}