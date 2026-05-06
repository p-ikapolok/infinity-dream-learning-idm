import { useState } from "react";

// Mock interface for AI evaluation results
interface GradingResult {
  overallScore: number;
  status: "Passed with Distinction" | "Passed" | "Needs Revision";
  rubric: { category: string; score: number; max: number }[];
  feedback: { title: string; content: string; type: "strength" | "improvement" }[];
}

export default function AIGradingDashboard() {
  const [isGrading, setIsGrading] = useState(false);
  const [results, setResults] = useState<GradingResult | null>(null);

  const startEvaluation = () => {
    setIsGrading(true);
    setResults(null);

    // Simulate the AI pulling the repo, running tests, and generating feedback
    setTimeout(() => {
      setResults({
        overallScore: 92,
        status: "Passed with Distinction",
        rubric: [
          { category: "Data Preprocessing & Cleaning", score: 95, max: 100 },
          { category: "Model Architecture & Optimization", score: 88, max: 100 },
          { category: "Evaluation Metrics", score: 100, max: 100 },
        ],
        feedback: [
          {
            title: "Flawless Metric Implementation",
            content: "Your implementation of the Root Mean Square Error is mathematically perfect. You correctly translated $RMSE = \\sqrt{\\frac{1}{n}\\sum_{i=1}^{n}(\\hat{y}_i - y_i)^2}$ into vectorized NumPy operations, which made your evaluation script run 4x faster than a standard loop.",
            type: "strength"
          },
          {
            title: "Gradient Descent Efficiency",
            content: "Your update rule $\\theta_{t+1} = \\theta_t - \\alpha \\nabla_\\theta J(\\theta_t)$ is correct, but your chosen learning rate $\\alpha = 0.01$ was slightly too conservative for this dataset. The model converged, but it took 200 epochs longer than necessary. Try implementing a dynamic learning rate decay next time.",
            type: "improvement"
          }
        ]
      });
      setIsGrading(false);
    }, 4000); // 4-second simulated grading process
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-8 text-gray-900 dark:text-gray-100 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Capstone Evaluation</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Project Submission: <strong className="text-blue-600 dark:text-blue-400">Predictive Market Engine</strong>
          </p>
        </div>

        {/* Initial State / Trigger */}
        {!isGrading && !results && (
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-12 text-center shadow-sm">
            <div className="w-20 h-20 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Repository Submitted Successfully</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              Your code, mathematical models, and deployment pipelines are ready for review. Finley will now evaluate your work against the program rubric.
            </p>
            <button 
              onClick={startEvaluation}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-sm inline-flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Run AI Evaluation
            </button>
          </div>
        )}

        {/* Grading Animation State */}
        {isGrading && (
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-12 shadow-sm relative overflow-hidden">
            {/* Animated scanning line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] animate-[scan_2s_ease-in-out_infinite]" />
            
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="relative w-24 h-24">
                <svg className="animate-spin w-full h-full text-blue-100 dark:text-blue-900/30" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <svg className="animate-spin absolute top-0 left-0 w-full h-full text-blue-600 dark:text-blue-500" viewBox="0 0 24 24" fill="none">
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" className="opacity-75" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-sm">
                  AI
                </div>
              </div>
              <h3 className="text-2xl font-bold">Evaluating Repository...</h3>
              <div className="flex gap-8 text-sm font-mono text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Parsing logic</span>
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse delay-75" /> Running tests</span>
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse delay-150" /> Scoring rubric</span>
              </div>
            </div>
            
            <style>{`
              @keyframes scan {
                0% { top: 0; opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { top: 100%; opacity: 0; }
              }
            `}</style>
          </div>
        )}

        {/* Results Dashboard */}
        {results && (
          <div className="space-y-8 animate-[fadeIn_0.5s_ease-out]">
            
            {/* Top Score Banner */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full border-4 border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                  <span className="text-4xl font-extrabold">{results.overallScore}</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-1">{results.status}</h2>
                  <p className="text-blue-100 opacity-90 text-lg">Top 5% of cohort submissions</p>
                </div>
              </div>
              <button className="bg-white text-blue-600 hover:bg-gray-50 px-6 py-3 rounded-xl font-bold transition-colors flex items-center gap-2 shadow-sm">
                Claim Certificate
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column: Rubric Breakdown */}
              <div className="lg:col-span-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Rubric Breakdown
                </h3>
                <div className="space-y-6">
                  {results.rubric.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm font-bold mb-2">
                        <span className="text-gray-700 dark:text-gray-300">{item.category}</span>
                        <span className="text-blue-600 dark:text-blue-400">{item.score}/{item.max}</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 rounded-full transition-all duration-1000"
                          style={{ width: `${(item.score / item.max) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: AI Deep Feedback */}
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-xl font-bold mb-4 px-2">Detailed AI Analysis</h3>
                {results.feedback.map((item, idx) => (
                  <div key={idx} className={`p-6 rounded-2xl border ${
                    item.type === 'strength' 
                      ? 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-900/30' 
                      : 'bg-yellow-50 dark:bg-yellow-900/10 border-yellow-200 dark:border-yellow-900/30'
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className={`mt-1 p-2 rounded-full ${
                        item.type === 'strength' 
                          ? 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-400' 
                          : 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400'
                      }`}>
                        {item.type === 'strength' 
                          ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                          : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                        }
                      </div>
                      <div>
                        <h4 className={`font-bold text-lg mb-2 ${
                          item.type === 'strength' ? 'text-green-900 dark:text-green-100' : 'text-yellow-900 dark:text-yellow-100'
                        }`}>
                          {item.title}
                        </h4>
                        <p className={`leading-relaxed text-sm ${
                          item.type === 'strength' ? 'text-green-800 dark:text-green-300' : 'text-yellow-800 dark:text-yellow-300'
                        }`}>
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}