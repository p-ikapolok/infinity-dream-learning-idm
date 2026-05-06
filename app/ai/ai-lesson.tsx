import { useState } from "react";

export default function AILesson() {
  const [copilotActive, setCopilotActive] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  // Simulates asking the AI to explain a specific highlighted concept
  const handleAskAI = (concept: string) => {
    setCopilotActive(true);
    setIsTyping(true);
    setAiResponse(null);
    
    setTimeout(() => {
      if (concept === 'gradient-descent') {
        setAiResponse("Gradient Descent is like walking down a mountain blindfolded. You take steps in the steepest downward direction until you reach the bottom (the minimum error). The size of your step is the learning rate, denoted by $\\alpha$.");
      }
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans">
      
      {/* Main Lesson Content */}
      <div className={`flex-1 transition-all duration-300 ${copilotActive ? 'pr-[400px]' : ''}`}>
        <div className="max-w-3xl mx-auto py-12 px-8">
          
          {/* Breadcrumbs & Meta */}
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8 font-medium">
            <span>Statistical Learning</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            <span>Module 1</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            <span className="text-blue-600 dark:text-blue-400">Optimization</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight mb-6">
            Understanding Gradient Descent
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-6">
            <p>
              To minimize our cost function $J(\theta)$, we need an optimization algorithm. Gradient descent is a first-order iterative optimization algorithm for finding a local minimum of a differentiable function.
            </p>
            
            {/* Interactive Concept Block */}
            <div className="relative group bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 my-8">
              <button 
                onClick={() => handleAskAI('gradient-descent')}
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 p-2 rounded-lg flex items-center gap-2 text-sm font-bold shadow-sm hover:bg-blue-200 dark:hover:bg-blue-900"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Explain simply
              </button>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">The Update Rule</h3>
              <p className="mb-4">
                The algorithm updates the parameters iteratively. For a parameter $\theta_j$, the update rule is defined as:
              </p>
              <div className="bg-white dark:bg-black p-4 rounded-lg font-mono text-center overflow-x-auto border border-gray-100 dark:border-gray-800">
                {"$ \\theta_j := \\theta_j - \\alpha \\frac{\\partial}{\\partial \\theta_j} J(\\theta) $"}
              </div>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Here, $\alpha$ represents the learning rate, which dictates the size of the steps we take towards the minimum.
              </p>
            </div>

            <p>
              If the learning rate $\alpha$ is too small, gradient descent can be slow. If $\alpha$ is too large, gradient descent can overshoot the minimum, and may fail to converge or even diverge.
            </p>
          </div>
          
          {/* Next Lesson CTA */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-end">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors">
              Continue to Backpropagation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </button>
          </div>

        </div>
      </div>

      {/* AI Copilot Sidebar (Slide-in) */}
      <div 
        className={`fixed top-0 right-0 h-full w-[400px] bg-gray-50 dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${copilotActive ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-white dark:bg-gray-950">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <span className="font-bold text-gray-900 dark:text-gray-100">Finley (Lesson Copilot)</span>
          </div>
          <button 
            onClick={() => setCopilotActive(false)}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          {isTyping ? (
            <div className="flex gap-2 items-center text-gray-500 dark:text-gray-400">
              <svg className="animate-spin w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" className="opacity-75" />
              </svg>
              <span className="text-sm font-medium">Finley is analyzing the context...</span>
            </div>
          ) : aiResponse ? (
            <div className="bg-white dark:bg-gray-950 p-4 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {aiResponse}
            </div>
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-400 mt-10">
              <svg className="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              <p>Highlight any text or click "Explain simply" on a concept card to get contextual help.</p>
            </div>
          )}
        </div>

        {/* Quick Input */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Ask a question about this lesson..."
              className="w-full bg-gray-100 dark:bg-gray-900 border-none rounded-xl pl-4 pr-10 py-3 text-sm focus:ring-2 focus:ring-blue-500 dark:text-gray-100"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/50 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}