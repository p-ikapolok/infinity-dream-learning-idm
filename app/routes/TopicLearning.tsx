import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LearningLayout from "../components/LearningLayout";

// Mock data array to demonstrate navigation between subtopics
const lessonData = [
  {
    id: 1,
    title: "Whole Numbers",
    youtubeId: "t8XJMJ-jG_A", // Example YouTube ID
    tasks: ["Watch introductory video", "Read closure properties", "Complete exercise"],
    intro: "Whole numbers are the basic counting numbers starting from zero. They do not include fractions, decimals, or negative numbers. The set of whole numbers is often denoted by $ W = \\{0, 1, 2, 3, ...\\} $.",
    learning: "Let's explore the properties of whole numbers. If we take two whole numbers, say $a$ and $b$, their sum $a + b$ is always a whole number. This is called the closure property. For example, $5 + 3 = 8$. \n\nMultiplication also holds true for closure: $5 \\times 3 = 15$. However, division does not always result in a whole number: $\\frac{5}{3}$ leaves a remainder and is therefore a fraction.",
    exercise: {
      question: "Apply the closure property of addition. If $x = 12$ and $y = 24$, calculate $x + y$. Is the result a whole number?",
      options: ["$36$, Yes", "$36.5$, No", "$24$, Yes"],
      correctIndex: 0
    }
  },
  {
    id: 2,
    title: "Integers & Number Lines",
    youtubeId: "5mXOUA5R-qg",
    tasks: ["Understand negative numbers", "Draw a number line", "Solve integer addition"],
    intro: "Integers expand on whole numbers by introducing negative values, allowing us to represent concepts like debt or temperatures below zero.",
    learning: "An integer is a number that can be written without a fractional component. For example, $21$, $4$, $0$, and $-2048$ are integers. The set of integers is denoted by $ \\mathbb{Z} $. \n\nWhen adding integers with different signs, you subtract the smaller absolute value from the larger absolute value: $ -15 + 8 = -7 $.",
    exercise: {
      question: "Evaluate the expression: $ -25 + 10 - (-5) $",
      options: ["$-10$", "$-20$", "$-40$"],
      correctIndex: 0
    }
  }
];

export default function TopicLearning() {
  const { topicId, subtopic } = useParams();
  const [collapsed, setCollapsed] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const currentTopic = lessonData[currentStep];

  const handleNext = () => {
    if (currentStep < lessonData.length - 1) {
      setCurrentStep(prev => prev + 1);
      setSelectedAnswer(null); // Reset exercise
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      setSelectedAnswer(null); // Reset exercise
    }
  };

  return (
    <LearningLayout collapsed={collapsed} setCollapsed={setCollapsed}>
      <div className="w-full h-full p-6 md:p-8 bg-slate-50 flex flex-col gap-6 overflow-y-auto">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-xl border-2 border-slate-200">
          <h1 className="text-xl font-black text-slate-900 uppercase tracking-wide">
            Topic 1: Numbers
          </h1>
          
          <div className="flex items-center gap-2">
            <div className="relative">
              <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input 
                type="text" 
                placeholder="Search topic..." 
                className="pl-9 pr-4 py-2 border-2 border-slate-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            <button className="p-2 border-2 border-slate-200 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="21" x2="4" y2="14"></line>
                <line x1="4" y1="10" x2="4" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="3"></line>
                <line x1="20" y1="21" x2="20" y2="16"></line>
                <line x1="20" y1="12" x2="20" y2="3"></line>
                <line x1="1" y1="14" x2="7" y2="14"></line>
                <line x1="9" y1="8" x2="15" y2="8"></line>
                <line x1="17" y1="16" x2="23" y2="16"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Hero Section: Video & Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* YouTube Video Player */}
          <div className="lg:col-span-2 bg-black rounded-xl overflow-hidden border-2 border-slate-200 aspect-video shadow-sm">
            <iframe 
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${currentTopic.youtubeId}`} 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>

          {/* Subtopic Details & Checklist */}
          <div className="bg-white border-2 border-slate-200 rounded-xl p-6 flex flex-col shadow-sm">
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Subtopic</h2>
            <h3 className="text-xl font-bold text-slate-900 mb-6">{currentTopic.title}</h3>
            
            <button className="flex items-center justify-center gap-2 w-full bg-blue-50 text-blue-600 hover:bg-blue-100 py-3 rounded-lg font-bold border-2 border-blue-200 transition-colors mb-6">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Start Discussion
            </button>

            <div className="flex flex-col gap-3">
              {currentTopic.tasks.map((task, idx) => (
                <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-5 h-5 border-2 border-slate-300 rounded flex items-center justify-center group-hover:border-blue-500 transition-colors">
                     {/* Checkbox logic can be added here */}
                  </div>
                  <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors border-b-2 border-slate-100 flex-1 pb-1">
                    {task}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Content */}
        <div className="bg-white border-2 border-slate-200 rounded-xl p-6 md:p-8 flex flex-col gap-8 shadow-sm">
          
          <section>
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-2 h-6 bg-blue-500 rounded-sm"></span>
              Introduction
            </h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              {currentTopic.intro}
            </p>
          </section>

          <section>
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-2 h-6 bg-purple-500 rounded-sm"></span>
              Start Learning
            </h3>
            <p className="text-slate-600 leading-relaxed font-medium whitespace-pre-line">
              {currentTopic.learning}
            </p>
          </section>

          {/* Injected Exercise Block */}
          <section className="bg-slate-50 border-2 border-slate-200 rounded-xl p-6 mt-4">
            <h3 className="text-md font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              Knowledge Check
            </h3>
            <p className="text-slate-800 font-medium mb-4">{currentTopic.exercise.question}</p>
            
            <div className="flex flex-col gap-3">
              {currentTopic.exercise.options.map((opt, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedAnswer(idx)}
                  className={`text-left px-4 py-3 rounded-lg border-2 font-medium transition-colors ${
                    selectedAnswer === idx 
                      ? idx === currentTopic.exercise.correctIndex 
                        ? "bg-green-50 border-green-500 text-green-800" 
                        : "bg-red-50 border-red-500 text-red-800"
                      : "bg-white border-slate-200 text-slate-600 hover:border-blue-400"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </section>

        </div>

        {/* Navigation Footer */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t-2 border-slate-200">
          
          {/* LEFT: Conditionally Rendered Previous Button */}
          <div className="w-32">
            {currentStep > 0 && (
              <button 
                onClick={handlePrevious}
                className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-900 transition-colors uppercase text-sm tracking-widest"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                Previous
              </button>
            )}
          </div>

          {/* CENTER: Mark Complete */}
          <button className="flex items-center gap-2 px-6 py-2 border-2 border-slate-200 text-slate-600 font-bold rounded-lg hover:bg-slate-100 transition-colors uppercase text-sm tracking-widest">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Mark Complete
          </button>

          {/* RIGHT: Next Button */}
          <div className="w-32 flex justify-end">
            {currentStep < lessonData.length - 1 ? (
              <button 
                onClick={handleNext}
                className="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition-colors uppercase text-sm tracking-widest"
              >
                Next
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            ) : (
              <span className="text-green-500 font-bold uppercase text-sm tracking-widest flex items-center gap-1">
                Finished
              </span>
            )}
          </div>

        </div>

      </div>
    </LearningLayout>
  );
}