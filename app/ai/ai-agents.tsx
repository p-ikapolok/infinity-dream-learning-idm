import { useState } from "react";

export default function AIAgents() {
  const [selectedAgent, setSelectedAgent] = useState("socratic");

  const agents = [
    {
      id: "socratic",
      name: "The Socratic Mentor",
      description: "Guides you to the answer using targeted questions. Best for deep, lasting comprehension.",
      icon: "M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
    },
    {
      id: "direct",
      name: "The Direct Engineer",
      description: "Provides immediate, optimal solutions with exact algorithmic complexity breakdowns.",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    },
    {
      id: "visual",
      name: "The Visual Architect",
      description: "Relies on analogies, structural diagrams, and high-level architectural concepts.",
      icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-8 text-gray-900 dark:text-gray-100">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold mb-4">Choose Your Copilot</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Select the AI mentor persona that best fits your learning style. This will dictate how feedback, hints, and mathematical proofs are presented to you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {agents.map((agent) => (
          <div 
            key={agent.id}
            onClick={() => setSelectedAgent(agent.id)}
            className={`cursor-pointer rounded-2xl p-6 border-2 transition-all duration-300 ${
              selectedAgent === agent.id 
                ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20 shadow-lg shadow-blue-600/10" 
                : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-blue-300 dark:hover:border-blue-700"
            }`}
          >
            <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${
              selectedAgent === agent.id ? "bg-blue-600 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
            }`}>
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={agent.icon} />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">{agent.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {agent.description}
            </p>
            
            {selectedAgent === agent.id && (
              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Active Persona
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}