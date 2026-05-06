import { useState } from "react";

export default function AICodeWorkspace() {
  const [code, setCode] = useState(
    "def update_weights(theta, alpha, grad):\n    # TODO: Implement the gradient descent update rule\n    # theta = ...\n    return theta"
  );
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'hint' | 'error', message: string } | null>(null);

  // Simulate AI analyzing the student's code
  const handleAnalyzeCode = () => {
    setIsAnalyzing(true);
    setFeedback(null);
    
    setTimeout(() => {
      if (code.includes("theta - alpha * grad")) {
        setFeedback({
          type: 'success',
          message: "Excellent! You correctly implemented the update rule: $\\theta_{t+1} = \\theta_t - \\alpha \\nabla_\\theta J(\\theta_t)$."
        });
      } else if (code.includes("theta - grad")) {
        setFeedback({
          type: 'hint',
          message: "You are subtracting the gradient, but aren't you forgetting to scale it by the learning rate $\\alpha$?"
        });
      } else {
        setFeedback({
          type: 'error',
          message: "Take another look at the formula. You need to subtract the product of the learning rate $\\alpha$ and the gradient from the current weights."
        });
      }
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans overflow-hidden">
      
      {/* Left Panel: Instructions & AI Feedback */}
      <div className="w-1/3 flex flex-col border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-800 flex items-center gap-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-tight">Code Challenge</h2>
        </div>

        {/* Instructions */}
        <div className="p-6 flex-1 overflow-y-auto">
          <h3 className="font-semibold text-lg mb-2">Implement Gradient Descent</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
            Write the Python function to update the model weights `theta`. Use the learning rate `alpha` and the calculated gradient `grad`.
          </p>
          
          <div className="bg-gray-50 dark:bg-black p-4 rounded-xl border border-gray-200 dark:border-gray-800 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-2">
              Mathematical Objective
            </span>
            <div className="font-mono text-sm text-center">
              $\theta := \theta - \alpha \nabla_\theta J(\theta)$
            </div>
          </div>

          {/* AI Feedback Section */}
          {isAnalyzing ? (
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/50 rounded-xl p-4 flex flex-col items-center justify-center text-center">
              <svg className="animate-spin w-6 h-6 text-blue-600 dark:text-blue-400 mb-3" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" className="opacity-75" />
              </svg>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Finley is analyzing your logic...</span>
            </div>
          ) : feedback ? (
            <div className={`p-4 rounded-xl border ${
              feedback.type === 'success' ? 'bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-900/50 dark:text-green-300' :
              feedback.type === 'hint' ? 'bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-900/50 dark:text-yellow-300' :
              'bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-900/50 dark:text-red-300'
            }`}>
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  {feedback.type === 'success' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>}
                  {feedback.type === 'hint' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                  {feedback.type === 'error' && <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                </div>
                <p className="text-sm font-medium leading-relaxed">{feedback.message}</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Right Panel: Editor Mockup */}
      <div className="w-2/3 flex flex-col bg-gray-50 dark:bg-black">
        
        {/* Editor Tabs */}
        <div className="flex bg-gray-200 dark:bg-gray-900 border-b border-gray-300 dark:border-gray-800">
          <div className="px-4 py-2 bg-gray-50 dark:bg-black text-sm font-medium text-gray-800 dark:text-gray-200 border-r border-gray-300 dark:border-gray-800 flex items-center gap-2">
            <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            main.py
          </div>
          <div className="px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 cursor-pointer flex items-center gap-2">
            utils.py
          </div>
        </div>

        {/* Text Area (Simulated Editor) */}
        <div className="flex-1 relative">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck="false"
            className="w-full h-full p-6 bg-transparent resize-none font-mono text-sm text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-0 leading-relaxed"
          />
          {/* Decorative Line Numbers */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gray-100 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col items-center py-6 text-xs text-gray-400 dark:text-gray-600 font-mono select-none pointer-events-none">
            <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
          </div>
        </div>

        {/* Terminal & Actions */}
        <div className="h-48 border-t border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900 flex flex-col">
          <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-gray-950">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Terminal Output</span>
            <div className="flex gap-2">
              <button 
                onClick={handleAnalyzeCode}
                disabled={isAnalyzing}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-4 py-1.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Run & Analyze
              </button>
            </div>
          </div>
          <div className="p-4 flex-1 font-mono text-sm text-gray-600 dark:text-gray-400 overflow-y-auto">
            {isAnalyzing ? (
              <span className="text-blue-500">Executing main.py...</span>
            ) : feedback?.type === 'success' ? (
              <span className="text-green-600 dark:text-green-400">Process finished with exit code 0. Tests passed.</span>
            ) : feedback ? (
              <span className="text-red-600 dark:text-red-400">AssertionError: Expected output does not match actual output.</span>
            ) : (
              <span>Ready. Waiting for execution...</span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}