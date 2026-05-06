export default function AIPlagiarismDetection() {
  return (
    <div className="max-w-5xl mx-auto p-8 text-gray-900 dark:text-gray-100">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold flex items-center gap-3">
          <svg className="w-8 h-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          Guardian Analysis Report
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Real-time stylometric and structural entropy scan of submission ID: #9938A
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Metric 1: Structural Entropy */}
        <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
          <h3 className="font-bold text-lg mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">Structural Entropy</h3>
          <div className="text-3xl font-extrabold text-blue-600 mb-2">4.12 <span className="text-sm text-gray-500 font-medium">bits/symbol</span></div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Measures the unpredictability of AST (Abstract Syntax Tree) node sequences. Human code typically ranges between 3.8 and 4.5.
          </p>
          <div className="bg-gray-50 dark:bg-gray-950 p-4 rounded-lg font-mono text-sm border border-gray-200 dark:border-gray-800 overflow-x-auto text-center">
            $ H(X) = -\sum_{i=1}^{n} P(x_i) \log_2 P(x_i) $
          </div>
        </div>

        {/* Metric 2: Stylometric Variance */}
        <div className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
          <h3 className="font-bold text-lg mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">Stylometric Variance</h3>
          <div className="text-3xl font-extrabold text-green-500 mb-2">0.89 <span className="text-sm text-gray-500 font-medium">baseline match</span></div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Compares variable naming, indentation, and logic flow against the student's historical profile.
          </p>
          <div className="bg-gray-50 dark:bg-gray-950 p-4 rounded-lg font-mono text-sm border border-gray-200 dark:border-gray-800 overflow-x-auto text-center">
            $ \sigma^2 = \frac{1}{N} \sum_{i=1}^{N} (x_i - \mu)^2 $
          </div>
        </div>
      </div>

      {/* Final Verdict Bar */}
      <div className="mt-8 p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-800/30 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-indigo-900 dark:text-indigo-100 text-lg">System Verdict: Original Student Work</h3>
          <p className="text-sm text-indigo-700 dark:text-indigo-300 mt-1">No AI generative footprint detected. Cleared for grading.</p>
        </div>
        <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold shadow-md transition-colors">
          View Detailed Logs
        </button>
      </div>
    </div>
  );
}