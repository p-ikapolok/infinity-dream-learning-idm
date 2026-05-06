import { useState } from "react";

interface ChatMessage {
  id: string;
  role: "system" | "user" | "ai";
  content: string;
}

export default function AIProjectWorkspace() {
  const [activeMilestone, setActiveMilestone] = useState(2); // Currently on "Model Training"
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      id: "1",
      role: "ai",
      content: "Welcome to your Capstone! Before you start coding the Predictive Market Engine, let's discuss your evaluation strategy. What mathematical metric will you use to measure your model's error margin?"
    }
  ]);

  const milestones = [
    { id: 1, title: "Data Ingestion & Cleaning", status: "completed" },
    { id: 2, title: "Model Architecture & Training", status: "in-progress" },
    { id: 3, title: "Metric Evaluation & Tuning", status: "locked" },
    { id: 4, title: "Deployment Pipeline", status: "locked" },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const newUserMsg: ChatMessage = { id: Date.now().toString(), role: "user", content: chatInput };
    setChatHistory(prev => [...prev, newUserMsg]);
    setChatInput("");
    setIsTyping(true);

    // Simulate AI Senior Engineer response
    setTimeout(() => {
      let aiResponse = "That's a solid start, but let's refine it. Think about how we handle outliers in market data.";
      
      if (newUserMsg.content.toLowerCase().includes("rmse") || newUserMsg.content.toLowerCase().includes("root mean square error")) {
        aiResponse = "Excellent choice. The Root Mean Square Error is perfect here because it heavily penalizes large errors. As a reminder, the formula you'll be coding is $RMSE = \\sqrt{\\frac{1}{n}\\sum_{i=1}^{n}(\\hat{y}_i - y_i)^2}$. Are you planning to use gradient descent to minimize this?";
      }

      setChatHistory(prev => [...prev, { id: (Date.now() + 1).toString(), role: "ai", content: aiResponse }]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Project Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-8 border-b border-gray-200 dark:border-gray-800">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                Capstone Project
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">Estimated time: 40 hrs</span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight">Predictive Market Engine</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-lg">
              Design, train, and deploy an end-to-end model to forecast continuous market variables.
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors shadow-sm whitespace-nowrap">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            Open GitHub Repo
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column: Milestone Tracking & Brief */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                Project Milestones
              </h3>
              <div className="space-y-4">
                {milestones.map((milestone) => (
                  <div key={milestone.id} className={`flex items-start gap-4 p-3 rounded-xl border transition-colors ${
                    milestone.status === 'in-progress' ? 'bg-white dark:bg-black border-blue-500 shadow-sm' : 
                    milestone.status === 'completed' ? 'border-transparent' : 'border-transparent opacity-50'
                  }`}>
                    <div className="mt-0.5">
                      {milestone.status === 'completed' && (
                        <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                        </div>
                      )}
                      {milestone.status === 'in-progress' && (
                        <div className="w-6 h-6 rounded-full border-2 border-blue-600 dark:border-blue-500 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500" />
                        </div>
                      )}
                      {milestone.status === 'locked' && (
                        <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-500 flex items-center justify-center">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                        </div>
                      )}
                    </div>
                    <div>
                      <span className={`text-xs font-bold uppercase tracking-wider block mb-1 ${
                        milestone.status === 'in-progress' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500'
                      }`}>Phase 0{milestone.id}</span>
                      <p className={`text-sm font-semibold ${milestone.status === 'completed' ? 'line-through text-gray-400 dark:text-gray-600' : 'text-gray-900 dark:text-gray-100'}`}>
                        {milestone.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: AI Architecture Partner */}
          <div className="lg:col-span-2 flex flex-col bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden h-[600px]">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              </div>
              <div>
                <h3 className="font-bold">Finley (Senior Architecture AI)</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Brainstorming & Model Validation Partner</p>
              </div>
            </div>

            {/* Chat History */}
            <div className="flex-1 p-6 overflow-y-auto space-y-6">
              {chatHistory.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-sm' 
                      : 'bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-200 shadow-sm rounded-tl-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 p-4 rounded-2xl rounded-tl-sm shadow-sm flex gap-2 items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="e.g. I was thinking of using RMSE..."
                  className="w-full bg-gray-100 dark:bg-gray-900 border-none rounded-xl pl-5 pr-14 py-4 text-sm focus:ring-2 focus:ring-blue-500 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                />
                <button 
                  type="submit"
                  disabled={!chatInput.trim() || isTyping}
                  className="absolute right-2 p-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}