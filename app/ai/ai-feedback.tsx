export default function AIFeedback() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-gray-900 dark:text-gray-100">
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 pb-6 mb-8">
        <div>
          <h2 className="text-2xl font-extrabold">Evaluation Report</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Assignment: Neural Network Cost Functions</p>
        </div>
        <div className="text-right">
          <div className="text-4xl font-extrabold text-blue-600">94<span className="text-xl text-gray-400">/100</span></div>
          <div className="text-sm font-bold text-green-500 mt-1">Passed with Distinction</div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Rubric Item 1 */}
        <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Mathematical Accuracy
            </h3>
            <span className="text-sm font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-3 py-1 rounded-full">+40 pts</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Excellent work! Your implementation of the Mean Squared Error correctly computes the derivative. 
            Your code perfectly matches the analytical gradient: <br />
            <span className="inline-block mt-3 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-md font-mono text-sm border border-gray-200 dark:border-gray-700">
              {`$ \\frac{\\partial C}{\\partial w} = \\frac{1}{n} \\sum_{x} x(\\sigma(z) - y) $`}
            </span>
          </p>
        </div>

        {/* Rubric Item 2 */}
        <div className="p-6 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              Algorithmic Efficiency
            </h3>
            <span className="text-sm font-bold bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 px-3 py-1 rounded-full">-6 pts</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Your logic is sound, but your nested loops result in a time complexity of `$ O(n^2) $`. 
            By utilizing matrix multiplication via NumPy, you could reduce this overhead significantly closer to `$ O(n) $`.
          </p>
        </div>
      </div>
    </div>
  );
}