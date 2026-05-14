import React, { useState } from "react";
import LearningLayout from "../components/LearningLayout";

const conceptData = [
  {
    id: "derivatives",
    category: "Calculus",
    title: "Derivatives & Rates of Change",
    definition: "A derivative represents the instantaneous rate of change of a function with respect to one of its variables.",
    formula: "The formal definition of a derivative is: $ f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} $",
    application: "Used in physics to find velocity from position, or in machine learning to optimize loss functions via Gradient Descent: $ w_{t+1} = w_t - \\eta \\nabla_w J(w_t) $."
  },
  {
    id: "matrices",
    category: "Linear Algebra",
    title: "Matrix Multiplication",
    definition: "An operation that produces a single matrix by multiplying rows of the first matrix by columns of the second.",
    formula: "For matrices $A$ (size $m \\times n$) and $B$ (size $n \\times p$), the element in the $i$-th row and $j$-th column of $C = AB$ is: $ c_{ij} = \\sum_{k=1}^n a_{ik}b_{kj} $",
    application: "Fundamental for transforming coordinates in 3D graphics and processing forward passes in Deep Neural Networks."
  }
];

export default function Concept() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeConcept, setActiveConcept] = useState(conceptData[0]);

  return (
    <LearningLayout collapsed={collapsed} setCollapsed={setCollapsed}>
      <div className="w-full h-full p-6 md:p-8 bg-slate-50 flex flex-col gap-6 overflow-hidden">
        
        <div className="flex justify-between items-center bg-white p-4 rounded-xl border-2 border-slate-200 shrink-0">
          <div>
            <h1 className="text-2xl font-black text-slate-900 uppercase tracking-wide">Concept Library</h1>
            <p className="text-sm text-slate-500 font-medium">Your interactive glossary for core theorems and formulas.</p>
          </div>
          <div className="relative w-64">
            <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              placeholder="Search concepts..." 
              className="w-full pl-9 pr-4 py-2 border-2 border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-1 gap-6 overflow-hidden">
          {/* Left Index Sidebar */}
          <div className="w-1/3 bg-white border-2 border-slate-200 rounded-xl overflow-y-auto flex flex-col">
            {conceptData.map((concept) => (
              <button
                key={concept.id}
                onClick={() => setActiveConcept(concept)}
                className={`text-left p-4 border-b-2 border-slate-100 transition-colors hover:bg-slate-50 ${
                  activeConcept.id === concept.id ? "bg-blue-50 border-l-4 border-l-blue-600" : "border-l-4 border-l-transparent"
                }`}
              >
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{concept.category}</span>
                <h3 className={`font-bold mt-1 ${activeConcept.id === concept.id ? "text-blue-700" : "text-slate-800"}`}>
                  {concept.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Right Reading Pane */}
          <div className="flex-1 bg-white border-2 border-slate-200 rounded-xl p-8 overflow-y-auto">
            <div className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest mb-4">
              {activeConcept.category}
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-6">{activeConcept.title}</h2>
            
            <div className="space-y-8">
              <section>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                  Definition
                </h4>
                <p className="text-slate-700 font-medium leading-relaxed">{activeConcept.definition}</p>
              </section>

              <section className="bg-slate-50 p-6 border-2 border-slate-200 rounded-xl">
                <h4 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="4 7 4 4 20 4 20 7"></polyline>
                    <line x1="9" y1="20" x2="15" y2="20"></line>
                    <line x1="12" y1="4" x2="12" y2="20"></line>
                  </svg>
                  Mathematical Formula
                </h4>
                <p className="text-lg text-slate-900 font-medium">{activeConcept.formula}</p>
              </section>

              <section>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Real World Application</h4>
                <p className="text-slate-700 font-medium leading-relaxed">{activeConcept.application}</p>
              </section>
            </div>
          </div>
        </div>

      </div>
    </LearningLayout>
  );
}