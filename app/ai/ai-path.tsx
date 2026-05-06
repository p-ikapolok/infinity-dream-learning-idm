import { useState, useEffect } from "react";

// Mock interface for the AI-generated path
interface LearningNode {
  id: string;
  title: string;
  description: string;
  estimatedHours: number;
  type: "theory" | "practical" | "milestone";
}

export default function AIPathGenerator() {
  const [isGenerating, setIsGenerating] = useState(true);
  const [pathway, setPathway] = useState<LearningNode[]>([]);

  // Simulate the AI generating a custom learning path based on user profile
  useEffect(() => {
    const generateAIPath = setTimeout(() => {
      setPathway([
        {
          id: "node-1",
          title: "Foundations of Statistical Learning",
          description: "Master the mathematical fundamentals. We will focus heavily on expected risk and loss functions, such as $R(f) = \\mathbb{E}[L(Y, f(X))]$.",
          estimatedHours: 15,
          type: "theory"
        },
        {
          id: "node-2",
          title: "Neural Network Architecture Construction",
          description: "Build your first multi-layer perceptron from scratch. Focus on understanding backpropagation and gradient descent: $\\theta_{t+1} = \\theta_t - \\eta \\nabla_\\theta J(\\theta_t)$.",
          estimatedHours: 25,
          type: "practical"
        },
        {
          id: "node-3",
          title: "Capstone: Predictive Market Engine",
          description: "Deploy a live application that predicts market trends using the models you've trained. This will be automatically graded by the AI Evaluator.",
          estimatedHours: 40,
          type: "milestone"
        }
      ]);
      setIsGenerating(false);
    }, 3500); // 3.5s simulated AI generation time

    return () => clearTimeout(generateAIPath);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-8 text-gray-900 dark:text-gray-100 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight">Your Custom AI Pathway</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Our AI has analyzed your onboarding assessment and generated a tailored curriculum optimized for your goal: <strong className="text-blue-600 dark:text-blue-400">Machine Learning Engineer</strong>.
          </p>
        </div>

        {/* AI Generation State */}
        {isGenerating ? (
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-10 flex flex-col items-center justify-center shadow-sm">
            <div className="relative w-16 h-16 mb-6">
              <svg className="animate-spin w-full h-full text-blue-600" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" className="opacity-75" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Synthesizing Your Curriculum</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center max-w-md">
              Cross-referencing your current skill level with 500+ industry-standard modules to build the perfect progression...
            </p>
          </div>
        ) : (
          /* Rendered Pathway Timeline */
          <div className="relative border-l-2 border-blue-200 dark:border-blue-900/50 ml-6 space-y-12 pb-10">
            {pathway.map((node, index) => (
              <div key={node.id} className="relative pl-10">
                
                {/* Timeline Dot */}
                <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full border-4 border-gray-50 dark:border-gray-950 flex items-center justify-center ${node.type === 'milestone' ? 'bg-indigo-600' : 'bg-blue-600'}`}>
                  {node.type === 'theory' && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                  )}
                  {node.type === 'practical' && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  )}
                  {node.type === 'milestone' && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                  )}
                </div>

                {/* Node Card */}
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1 block">
                        Step 0{index + 1} • {node.type}
                      </span>
                      <h3 className="text-xl font-bold">{node.title}</h3>
                    </div>
                    <span className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {node.estimatedHours} hrs
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {node.description}
                  </p>
                  
                  <button className="bg-transparent border border-gray-300 dark:border-gray-700 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
                    Enter Module
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}