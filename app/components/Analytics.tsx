import React from "react";

export default function LMSAI_CBC_Dashboard() {
  const subjects = [
    { name: "Mathematics", score: 78, classAvg: 72 },
    { name: "English", score: 84, classAvg: 80 },
    { name: "Kiswahili", score: 81, classAvg: 78 },
    { name: "Science", score: 73, classAvg: 76 },
    { name: "Social Studies", score: 88, classAvg: 83 },
    { name: "Creative Arts", score: 91, classAvg: 85 },
    { name: "Pre-Technical", score: 76, classAvg: 74 },
  ];

  const competencies = [
    { name: "Communication", value: 86 },
    { name: "Critical Thinking", value: 79 },
    { name: "Creativity", value: 92 },
    { name: "Citizenship", value: 81 },
    { name: "Digital Literacy", value: 88 },
  ];

  const attendance = [92, 95, 94, 96, 97, 93];

  const avg =
    subjects.reduce((a, b) => a + b.score, 0) / subjects.length;

  const classAvg =
    subjects.reduce((a, b) => a + b.classAvg, 0) / subjects.length;

  const weakSubjects = subjects.filter((s) => s.score < 80);

  const highRiskSubjects = subjects.filter(
    (s) => s.score + 5 < s.classAvg
  );

  const predictedNextTerm = Math.min(
    100,
    Math.round(avg + ((avg - 70) / 10) * 6)
  );

  const predictedGrade =
    predictedNextTerm >= 85
      ? "EE+"
      : predictedNextTerm >= 75
      ? "EE"
      : "ME";

  const riskLevel =
    avg < 70 ? "HIGH RISK" : avg < 80 ? "MODERATE" : "LOW RISK";

  /* ---------------- ICONS ---------------- */

  const IconChart = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19V5" />
      <path d="M8 19v-8" />
      <path d="M12 19v-5" />
      <path d="M16 19v-11" />
      <path d="M20 19V9" />
    </svg>
  );

  const IconWarning = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    </svg>
  );

  const IconTarget = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );

  const IconSchool = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 10l9-5 9 5-9 5-9-5z" />
      <path d="M21 10v6" />
      <path d="M3 10v6" />
      <path d="M12 15v7" />
    </svg>
  );

  const IconUser = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );

  /* ---------------- UI ---------------- */

  return (
    <div className="w-full min-h-screen bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* HEADER */}
        <div className="bg-white border rounded-2xl p-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <IconSchool />
            <div>
              <h1 className="text-xl font-bold">
                CBC AI Learning Management System
              </h1>
              <p className="text-sm text-slate-500">
                Predictive analytics for student performance
              </p>
            </div>
          </div>
        </div>

        {/* METRICS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Metric title="Student Average" value={`${avg.toFixed(1)}%`} icon={<IconChart />} />
          <Metric title="Class Average" value={`${classAvg.toFixed(1)}%`} icon={<IconChart />} />
          <Metric title="Risk Level" value={riskLevel} icon={<IconWarning />} />
          <Metric title="Predicted Grade" value={predictedGrade} icon={<IconTarget />} />
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">

            {/* SUBJECT ANALYSIS */}
            <div className="bg-white border rounded-2xl p-6">
              <h2 className="font-bold mb-4 flex items-center gap-2">
                <IconChart /> Subject Intelligence
              </h2>

              {subjects.map((s) => {
                const diff = s.score - s.classAvg;

                return (
                  <div key={s.name} className="mb-4">
                    <div className="flex justify-between text-sm">
                      <span>{s.name}</span>
                      <span>
                        {s.score}% vs {s.classAvg}%
                      </span>
                    </div>

                    <div className="h-2 bg-slate-200 rounded-full mt-1">
                      <div
                        className={`h-2 rounded-full ${
                          diff >= 0 ? "bg-emerald-500" : "bg-red-500"
                        }`}
                        style={{ width: `${s.score}%` }}
                      />
                    </div>

                    {diff < 0 && (
                      <div className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <IconWarning />
                        Below class average by {Math.abs(diff)}%
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* WEAK AREAS */}
            <div className="bg-white border rounded-2xl p-6">
              <h2 className="font-bold mb-3 flex items-center gap-2">
                <IconWarning /> Learning Gaps
              </h2>

              {weakSubjects.length === 0 ? (
                <p className="text-green-600">No critical gaps detected</p>
              ) : (
                weakSubjects.map((s) => (
                  <div key={s.name} className="text-red-500 text-sm">
                    • {s.name}
                  </div>
                ))
              )}
            </div>

            {/* RISK ENGINE */}
            <div className="bg-white border rounded-2xl p-6">
              <h2 className="font-bold mb-3 flex items-center gap-2">
                <IconWarning /> Risk Analysis
              </h2>

              {highRiskSubjects.length === 0 ? (
                <p className="text-green-600">Student above expected level</p>
              ) : (
                highRiskSubjects.map((s) => (
                  <div key={s.name} className="text-orange-500 text-sm">
                    • {s.name}
                  </div>
                ))
              )}
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* PREDICTION */}
            <div className="bg-white border rounded-2xl p-6">
              <h2 className="font-bold flex items-center gap-2">
                <IconTarget /> Next Term Prediction
              </h2>

              <p className="text-3xl font-bold text-indigo-600 mt-3">
                {predictedNextTerm}%
              </p>

              <p className="text-sm text-slate-500">
                Expected Grade: {predictedGrade}
              </p>
            </div>

            {/* ATTENDANCE */}
            <div className="bg-white border rounded-2xl p-6">
              <h2 className="font-bold mb-3 flex items-center gap-2">
                <IconSchool /> Attendance
              </h2>

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

            {/* PROFILE */}
            <div className="bg-white border rounded-2xl p-6 text-center">
              <IconUser />
              <h2 className="font-bold mt-3">Student Profile</h2>
              <p className="text-sm text-slate-500">
                AI-Tracked Learner
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- METRIC CARD ---------------- */

function Metric({ title, value, icon }: any) {
  return (
    <div className="bg-white border rounded-xl p-4 flex items-center justify-between">
      <div>
        <p className="text-xs text-slate-500">{title}</p>
        <p className="font-bold">{value}</p>
      </div>
      <div className="text-slate-600">{icon}</div>
    </div>
  );
}