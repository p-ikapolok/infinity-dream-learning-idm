import React from "react";

export interface QuizOption { text: string; }

export interface QuizCardProps { question: string; options: string[]; correctIndex: number; selectedAnswer: number | null; onSelect: (index: number) => void; }

export default function QuizCard({ question, options, correctIndex, selectedAnswer, onSelect, }: QuizCardProps) { return ( <div className="bg-white border border-[#e2e8f0] rounded-xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"> <h3 className="text-[16px] font-semibold text-[#0f172a] mb-4"> Knowledge Check </h3>

<p className="text-[16px] font-medium text-[#0f172a] mb-6 leading-relaxed">
    {question}
  </p>

  <div className="flex flex-col gap-3">
    {options.map((opt, idx) => {
      const isSelected = selectedAnswer === idx;
      const isCorrect = idx === correctIndex;

      let stateClasses =
        "bg-white border-[#e2e8f0] text-[#334155] hover:bg-[#f8fafc] hover:border-[#cbd5e1]";

      if (isSelected) {
        if (isCorrect) {
          stateClasses =
            "bg-[#f0fdf4] border-[#86efac] text-[#166534] shadow-[0_0_0_1px_#86efac]";
        } else {
          stateClasses =
            "bg-[#fef2f2] border-[#fca5a5] text-[#991b1b] shadow-[0_0_0_1px_#fca5a5]";
        }
      }

      return (
        <button
          key={idx}
          onClick={() => onSelect(idx)}
          className={`text-left px-5 py-3.5 rounded-lg border text-[15px] transition-all duration-200 flex items-center justify-between ${stateClasses}`}
        >
          <span>{opt}</span>

          {isSelected && isCorrect && (
            <span className="text-[#16a34a] text-sm font-semibold">
              ✓
            </span>
          )}
        </button>
      );
    })}
  </div>
</div>

); }