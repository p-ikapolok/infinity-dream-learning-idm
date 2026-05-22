import React from "react";

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
    subjects.reduce((acc, item) => acc + item.score, 0) / subjects.length
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
      <div className="max-w-7xl mx-auto space-y-6">

        {/* HEADER */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col xl:flex-row justify-between gap-6">

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 14L3 9l9-5 9 5-9 5z" />
                <path d="M3 9v6l9 5 9-5V9" />
              </svg>
            </div>

            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                CBC Student Analytics
              </h1>
              <p className="text-slate-500 text-sm">
                Term 2 Performance Dashboard
              </p>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <StatCard title="Mean" value={`${average}%`} />
            <StatCard title="Level" value="EE" />
            <StatCard title="Attendance" value="95%" />
            <StatCard title="Rank" value="7/48" />
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="xl:col-span-2 space-y-6">

            {/* SUBJECTS */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h2 className="text-xl font-bold mb-4">Subject Performance</h2>

              <div className="space-y-4">
                {subjects.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{s.name}</span>
                      <span className="flex gap-2">
                        {s.score}%
                        <span className={`px-2 rounded ${gradeColor(s.grade)}`}>
                          {s.grade}
                        </span>
                      </span>
                    </div>

                    <div className="w-full h-2 bg-slate-200 rounded-full">
                      <div
                        className="h-2 bg-indigo-500 rounded-full"
                        style={{ width: `${s.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TREND */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h2 className="text-xl font-bold mb-4">Academic Trend</h2>

              <div className="flex items-end gap-2 h-40">
                {performanceTrend.map((v, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-indigo-500 rounded-t"
                    style={{ height: `${v * 2}px` }}
                  />
                ))}
              </div>
            </div>

            {/* COMPETENCIES */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h2 className="text-xl font-bold mb-4">CBC Competencies</h2>

              <div className="space-y-3">
                {competencies.map((c) => (
                  <div key={c.title}>
                    <div className="flex justify-between text-sm">
                      <span>{c.title}</span>
                      <span>{c.value}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full">
                      <div
                        className="h-2 bg-emerald-500 rounded-full"
                        style={{ width: `${c.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* STRANDS */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h2 className="text-xl font-bold mb-4">CBC Strand Breakdown</h2>

              {[
                {
                  subject: "Mathematics",
                  strands: [
                    { name: "Numbers", value: 82 },
                    { name: "Algebra", value: 74 },
                    { name: "Geometry", value: 80 },
                  ],
                },
                {
                  subject: "English",
                  strands: [
                    { name: "Reading", value: 88 },
                    { name: "Writing", value: 81 },
                    { name: "Listening", value: 85 },
                  ],
                },
              ].map((item) => (
                <div key={item.subject} className="mb-5">
                  <h3 className="font-semibold mb-2">{item.subject}</h3>

                  {item.strands.map((s) => (
                    <div key={s.name} className="mb-2">
                      <div className="flex justify-between text-xs">
                        <span>{s.name}</span>
                        <span>{s.value}%</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full">
                        <div
                          className="h-2 bg-sky-500 rounded-full"
                          style={{ width: `${s.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* PROFILE */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 text-center">
              <div className="w-20 h-20 mx-auto bg-indigo-600 text-white flex items-center justify-center rounded-2xl text-2xl font-bold">
                DK
              </div>

              <h2 className="mt-4 font-bold text-lg">Daniel Kimani</h2>
              <p className="text-sm text-slate-500">Grade 8 Student</p>
            </div>

            {/* ATTENDANCE */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold mb-3">Attendance</h3>

              <div className="flex items-end gap-2 h-32">
                {attendance.map((a, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-indigo-500 rounded-t"
                    style={{ height: `${a}%` }}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

/* STAT CARD */
function StatCard({ title, value }: any) {
  return (
    <div className="bg-slate-50 border rounded-xl p-3 text-center">
      <p className="text-xs text-slate-500">{title}</p>
      <p className="font-bold text-lg">{value}</p>
    </div>
  );
}