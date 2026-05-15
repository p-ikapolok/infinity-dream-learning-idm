import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LearningLayout from "../components/LearningLayout"; // Adjust path as needed

// ==========================================
// MOCK DATA
// ==========================================
const lessonData = [
  {
    id: 1,
    title: "Whole Numbers",
    youtubeId: "t8XJMJ-jG_A", // Placeholder
    tasks: ["Watch introductory video", "Read closure properties", "Complete knowledge check"],
    intro: "Whole numbers are the basic counting numbers starting from zero. They do not include fractions, decimals, or negative numbers. The set of whole numbers is often denoted by $ W = \\{0, 1, 2, 3, ...\\} $.",
    learning: "Let's explore the properties of whole numbers. If we take two whole numbers, say $a$ and $b$, their sum $a + b$ is always a whole number. This is called the closure property. For example, $5 + 3 = 8$.\n\nMultiplication also holds true for closure: $5 \\times 3 = 15$. However, division does not always result in a whole number: $\\frac{5}{3}$ leaves a remainder and is therefore a fraction.",
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
    learning: "An integer is a number that can be written without a fractional component. For example, $21$, $4$, $0$, and $-2048$ are integers. The set of integers is denoted by $ \\mathbb{Z} $.\n\nWhen adding integers with different signs, you subtract the smaller absolute value from the larger absolute value: $ -15 + 8 = -7 $.",
    exercise: {
      question: "Evaluate the expression: $ -25 + 10 - (-5) $",
      options: ["$-10$", "$-20$", "$-40$"],
      correctIndex: 0
    }
  }
];

// ==========================================
// CLEAN SVG ICONS
// ==========================================
const Icons: Record<string, React.FC<{ className?: string }>> = {
  Search: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
  ChevronRight: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>,
  ChevronLeft: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>,
  Clock: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
  PlayCircle: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4Z"/></svg>,
  BookOpen: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  Check: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  CheckCircle: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  Sparkles: ({ className }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
};

// ==========================================
// MAIN COMPONENT
// ==========================================
export default function TopicLearning() {
  const { topicId = "Mathematics", subtopic = "Numbers" } = useParams();
  const [collapsed, setCollapsed] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const currentTopic = lessonData[currentStep];

  const handleNext = () => {
    if (currentStep < lessonData.length - 1) {
      setCurrentStep(prev => prev + 1);
      setSelectedAnswer(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      setSelectedAnswer(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <LearningLayout collapsed={collapsed} setCollapsed={setCollapsed}>
      <div className="w-full h-full bg-[#f8fafc] flex flex-col font-sans relative overflow-y-auto selection:bg-blue-100 selection:text-blue-900">

        {/* ==========================================
            STICKY TOP HEADER
            ========================================== */}
        <header className="sticky top-0 z-20 w-full bg-[#f8fafc]/80 backdrop-blur-md border-b border-[#e2e8f0] px-6 lg:px-12 py-4 flex items-center justify-between">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center text-[14px] font-medium text-[#64748b]">
            <span className="hover:text-[#0f172a] cursor-pointer transition-colors duration-150">
              {topicId}
            </span>
            <Icons.ChevronRight className="w-4 h-4 mx-2 text-[#cbd5e1]" />
            <span className="text-[#0f172a] truncate max-w-[150px] sm:max-w-none">
              {subtopic}
            </span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex relative items-center">
              <Icons.Search className="w-4 h-4 absolute left-3 text-[#94a3b8]" />
              <input 
                type="text" 
                placeholder="Search lesson..." 
                className="pl-9 pr-4 py-1.5 bg-white border border-[#e2e8f0] rounded-md text-[13px] text-[#0f172a] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#2563eb] transition-colors w-48"
              />
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold shrink-0">
              AM
            </div>
          </div>
        </header>

        {/* ==========================================
            MAIN CONTENT AREA
            ========================================== */}
        <main className="flex-1 w-full max-w-[1280px] mx-auto px-6 lg:px-12 py-10 flex flex-col gap-12">

          {/* Lesson Hero: Title & Integrated Video */}
          <section className="w-full flex flex-col gap-6">
            <div>
              <div className="text-[13px] font-semibold text-[#2563eb] tracking-wide uppercase mb-2">
                Lesson {currentStep + 1}
              </div>
              <h1 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#0f172a] leading-tight">
                {currentTopic.title}
              </h1>
            </div>

            {/* Natural Video Embedding (No heavy borders/cards) */}
            <div className="w-full aspect-video rounded-xl overflow-hidden bg-black shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#e2e8f0]">
              <iframe 
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${currentTopic.youtubeId}`} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>

            {/* Lesson Metadata Row */}
            <div className="flex flex-wrap items-center gap-6 text-[14px] text-[#64748b] border-b border-[#e2e8f0] pb-6">
              <span className="flex items-center gap-2">
                <Icons.Clock className="w-4 h-4" /> 12 min read
              </span>
              <span className="flex items-center gap-2">
                <Icons.PlayCircle className="w-4 h-4" /> Video: 5:30
              </span>
              <span className="flex items-center gap-2">
                <Icons.BookOpen className="w-4 h-4" /> Part {currentStep + 1} of {lessonData.length}
              </span>
            </div>
          </section>

          {/* Split Layout: Reading Content (Left) & Sticky Tasks (Right) */}
          <div className="flex flex-col lg:flex-row gap-12 lg:items-start relative">

            {/* Left: Document/Reading Experience */}
            <article className="flex-1 w-full max-w-[75ch] text-[#0f172a]">
              
              {/* Introduction Section */}
              <div className="mb-10">
                <h2 className="text-[20px] font-medium text-[#0f172a] mb-4">Introduction</h2>
                <p className="text-[16px] leading-[1.8] text-[#334155]">
                  {currentTopic.intro}
                </p>
              </div>

              {/* Main Learning Section */}
              <div className="mb-12">
                <h2 className="text-[20px] font-medium text-[#0f172a] mb-4">Start Learning</h2>
                <p className="text-[16px] leading-[1.8] text-[#334155] whitespace-pre-line">
                  {currentTopic.learning}
                </p>
              </div>

              {/* Interactive Knowledge Check */}
              <div className="mt-8 bg-white border border-[#e2e8f0] rounded-xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <div className="flex items-center gap-2 text-[#2563eb] mb-4">
                  <Icons.Sparkles className="w-5 h-5" />
                  <h3 className="text-[16px] font-semibold">Knowledge Check</h3>
                </div>
                
                <p className="text-[16px] text-[#0f172a] font-medium mb-6 leading-relaxed">
                  {currentTopic.exercise.question}
                </p>

                <div className="flex flex-col gap-3">
                  {currentTopic.exercise.options.map((opt, idx) => {
                    const isSelected = selectedAnswer === idx;
                    const isCorrect = idx === currentTopic.exercise.correctIndex;
                    
                    let stateClasses = "bg-white border-[#e2e8f0] text-[#334155] hover:bg-[#f8fafc] hover:border-[#cbd5e1]";
                    
                    if (isSelected) {
                      if (isCorrect) {
                        stateClasses = "bg-[#f0fdf4] border-[#86efac] text-[#166534] shadow-[0_0_0_1px_#86efac]";
                      } else {
                        stateClasses = "bg-[#fef2f2] border-[#fca5a5] text-[#991b1b] shadow-[0_0_0_1px_#fca5a5]";
                      }
                    }

                    return (
                      <button 
                        key={idx}
                        onClick={() => setSelectedAnswer(idx)}
                        className={`text-left px-5 py-3.5 rounded-lg border text-[15px] transition-all duration-200 flex items-center justify-between group ${stateClasses}`}
                      >
                        <span>{opt}</span>
                        {isSelected && isCorrect && <Icons.CheckCircle className="w-5 h-5 text-[#16a34a]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </article>

            {/* Right: Notion-style Sticky Task Checklist */}
            <aside className="w-full lg:w-80 shrink-0 lg:sticky lg:top-24 bg-[#f9fafb] lg:bg-transparent rounded-xl p-6 lg:p-0 border border-[#e2e8f0] lg:border-none">
              <h3 className="text-[12px] font-semibold text-[#64748b] uppercase tracking-wider mb-4">
                Lesson Checklist
              </h3>
              <div className="flex flex-col gap-1">
                {currentTopic.tasks.map((task, i) => (
                  <label key={i} className="flex items-start gap-3 p-2 hover:bg-[#f1f5f9] rounded-md cursor-pointer transition-colors group">
                    <div className="w-4 h-4 rounded border border-[#cbd5e1] group-hover:border-[#2563eb] bg-white mt-0.5 flex-shrink-0 flex items-center justify-center text-transparent hover:text-[#2563eb] transition-colors">
                       <Icons.Check className="w-3 h-3" />
                    </div>
                    <span className="text-[14px] text-[#334155] group-hover:text-[#0f172a] leading-snug">
                      {task}
                    </span>
                  </label>
                ))}
              </div>
            </aside>

          </div>
        </main>

        {/* ==========================================
            STICKY BOTTOM FOOTER (Navigation)
            ========================================== */}
        <footer className="sticky bottom-0 w-full bg-[#f8fafc]/90 backdrop-blur-md border-t border-[#e2e8f0] px-6 lg:px-12 py-4 flex items-center justify-between z-10 shadow-[0_-4px_24px_rgba(0,0,0,0.02)] mt-auto">
          
          {/* Previous Button Placeholder for Alignment */}
          <div className="w-[120px]">
            {currentStep > 0 && (
              <button 
                onClick={handlePrevious}
                className="flex items-center gap-2 text-[14px] text-[#64748b] font-medium hover:text-[#0f172a] transition-colors duration-150"
              >
                <Icons.ChevronLeft className="w-4 h-4" />
                Previous
              </button>
            )}
          </div>

          {/* Mark Complete (Center) */}
          <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-[#e2e8f0] text-[#0f172a] text-[14px] font-medium rounded-md hover:bg-[#f9fafb] transition-colors duration-150 shadow-sm active:scale-[0.98]">
            <Icons.Check className="w-4 h-4 text-[#2563eb]" />
            Mark Complete
          </button>

          {/* Next Button */}
          <div className="w-[120px] flex justify-end">
            {currentStep < lessonData.length - 1 ? (
              <button 
                onClick={handleNext}
                className="flex items-center gap-2 text-[14px] text-[#2563eb] font-medium hover:text-[#1d4ed8] transition-colors duration-150"
              >
                Next
                <Icons.ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <span className="text-[14px] text-[#16a34a] font-medium flex items-center gap-1">
                Finished
              </span>
            )}
          </div>

        </footer>

      </div>
    </LearningLayout>
  );
}