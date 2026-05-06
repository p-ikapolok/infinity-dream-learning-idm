import { useState, useEffect } from "react";

// Mock interface for the Guardian's analysis
interface DetectionResult {
  originalityScore: number;
  aiProbability: number;
  entropyMetrics: {
    formula: string;
    value: number;
    threshold: number;
    status: "Natural" | "Suspicious" | "AI-Generated";
  };
  vectors: { name: string; score: number; description: string }[];
}

export default function AIDetectionRadar() {
  const [isScanning, setIsScanning] = useState(false);
  const [report, setReport] = useState<DetectionResult | null>(null);

  // Simulate the deep forensic scan on component mount for demonstration
  useEffect(() => {
    setIsScanning(true);
    const timer = setTimeout(() => {
      setReport({
        originalityScore: 94,
        aiProbability: 6,
        entropyMetrics: {
          formula: "$ H(X) = -\\sum_{i=1}^{n} P(x_i) \\log_2 P(x_i) $",
          value: 4.82,
          threshold: 3.5, // Lower entropy usually means highly predictable (AI)
          status: "Natural"
        },
        vectors: [
          { name: "Stylometric Consistency", score: 98, description: "Variable naming matches the student's historical profile." },
          { name: "Structural Entropy", score: 92, description: "Code predictability falls within human variance limits." },
          { name: "Logic Progression", score: 85, description: "Commit history shows natural trial-and-error rather than instantaneous perfection." }
        ]
      });
      setIsScanning(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-8 text-gray-900 dark:text-gray-100 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-10 border-b border-gray-200 dark:border-gray-800 pb-6">
          <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          </div>
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Integrity Guardian</h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">Forensic analysis of submitted models and algorithms.</p>
          </div>
        </div>

        {/* Scanning State */}
        {isScanning && (
          <div className="bg-white dark:bg-gray-900 border border-indigo-100 dark:border-indigo-900/30 rounded-3xl p-12 text-center shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-indigo-50/50 dark:bg-indigo-900/10" />
            
            <div className="relative z-10 flex flex-col items-center">
              {/* Radar Animation */}
              <div className="w-32 h-32 rounded-full border-2 border-indigo-200 dark:border-indigo-800 relative flex items-center justify-center mb-8">
                <div className="absolute w-full h-full rounded-full border border-indigo-300 dark:border-indigo-700 animate-ping opacity-20" />
                <div className="absolute w-full h-full rounded-full border-t-2 border-indigo-500 animate-spin" />
                <svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              
              <h2 className="text-2xl font-bold mb-2">Analyzing Code Fingerprint</h2>
              <p className="text-gray-500 dark:text-gray-400 font-mono text-sm max-w-md">
                Calculating Shannon entropy and cross-referencing stylometric metadata...
              </p>
            </div>
          </div>
        )}

        {/* Report Dashboard */}
        {report && !isScanning && (
          <div className="space-y-6 animate-[fadeIn_0.5s_ease-out]">
            
            {/* Top Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Originality Score */}
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-sm flex items-center justify-between">
                <div>
                  <h3 className="text-gray-500 dark:text-gray-400 font-bold text-sm uppercase tracking-wider mb-2">Human Authorship</h3>
                  <div className="text-5xl font-extrabold text-green-600 dark:text-green-400">
                    {report.originalityScore}%
                  </div>
                </div>
                <div className="w-20 h-20 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
              </div>

              {/* Entropy Metric */}
              <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-sm">
                <h3 className="text-gray-500 dark:text-gray-400 font-bold text-sm uppercase tracking-wider mb-2">Structural Entropy</h3>
                <div className="flex items-end gap-3 mb-2">
                  <span className="text-4xl font-extrabold">{report.entropyMetrics.value}</span>
                  <span className="text-sm font-bold px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full mb-1">
                    {report.entropyMetrics.status}
                  </span>
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-500 font-mono mt-3">
                  Evaluated using: {report.entropyMetrics.formula}
                </p>
              </div>
            </div>

            {/* Vector Breakdown */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-6">Forensic Vectors</h3>
              <div className="space-y-6">
                {report.vectors.map((vector, idx) => (
                  <div key={idx} className="group">
                    <div className="flex justify-between items-end mb-2">
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-gray-100">{vector.name}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{vector.description}</p>
                      </div>
                      <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">
                        {vector.score}/100
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-indigo-500 rounded-full transition-all duration-1000 group-hover:bg-indigo-400"
                        style={{ width: `${vector.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Guardian Conclusion */}
            <div className="bg-gray-900 text-white dark:bg-black border border-gray-800 rounded-2xl p-6 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div>
                  <h4 className="font-bold text-lg">Clearance Granted</h4>
                  <p className="text-sm text-gray-400">Submission verified as original student work.</p>
                </div>
              </div>
              <button className="text-sm font-bold text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors border border-gray-700">
                View Full Audit Log
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}