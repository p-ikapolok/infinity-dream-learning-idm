import React, { useState } from "react";
import LearningLayout from "../components/LearningLayout";

export default function EvaluationQuizzes() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <LearningLayout collapsed={collapsed} setCollapsed={setCollapsed}>
      <div className="w-full h-full p-8 bg-slate-50 flex flex-col gap-6 overflow-y-auto">
        
        <div className="bg-white p-6 rounded-xl border-2 border-slate-200 flex items-center justify-between">
          <h1 className="text-2xl font-black text-slate-900 uppercase tracking-wide">Evaluation Quizzes</h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-bold transition-colors">
            Start New Test
          </button>
        </div>

        <div className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b-2 border-slate-200 text-xs uppercase tracking-widest text-slate-500">
                <th className="p-4 font-bold">Quiz Title</th>
                <th className="p-4 font-bold">Topic Focus</th>
                <th className="p-4 font-bold">Status</th>
                <th className="p-4 font-bold text-right">Score</th>
              </tr>
            </thead>
            <tbody>
              {[
                { title: "Derivatives & Integrals", focus: "Solve $ \\int_0^1 x^2 dx $", status: "Completed", score: "92%" },
                { title: "Gradient Descent", focus: "Compute $ \\nabla_w J(w) $", status: "Pending Review", score: "N/A" },
                { title: "Time Complexity", focus: "Analyze $ O(N \\log N) $", status: "Available", score: "-" },
              ].map((quiz, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-colors group">
                  <td className="p-4 font-bold text-slate-900">{quiz.title}</td>
                  {/* Notice the LaTeX syntax integration for mathematical topics */}
                  <td className="p-4 text-slate-600 font-medium">{quiz.focus}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      quiz.status === "Completed" ? "bg-green-100 text-green-700" :
                      quiz.status === "Available" ? "bg-blue-100 text-blue-700" :
                      "bg-yellow-100 text-yellow-700"
                    }`}>
                      {quiz.status}
                    </span>
                  </td>
                  <td className="p-4 text-right font-black text-slate-900">{quiz.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </LearningLayout>
  );
}