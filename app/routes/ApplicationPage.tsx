import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import PublicNavbar from "../components/PublicNavbar";

// Mock Data: You will fetch these from your backend later.
const ASSESSMENT_QUESTIONS = [
  {
    id: 1,
    question: "If $x + y = 10$ and $x - y = 4$, what is the value of $x$?",
    options: ["$x = 3$", "$x = 5$", "$x = 7$", "$x = 10$"],
    correctAnswer: "$x = 7$",
  },
  {
    id: 2,
    question: "In software architecture, which of the following best describes 'decoupling'?",
    options: [
      "Combining all functions into a single file.",
      "Separating components so they can operate independently.",
      "Increasing the processing speed of a CPU.",
      "Deleting redundant database tables.",
    ],
    correctAnswer: "Separating components so they can operate independently.",
  },
  {
    id: 3,
    question: "What comes next in the logic sequence: 2, 6, 12, 20, ...?",
    options: ["24", "28", "30", "36"],
    correctAnswer: "30",
  },
];

export default function ApplicationPage() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  
  // App States: 'intro' | 'active' | 'submitting' | 'result'
  const [appState, setAppState] = useState("intro");
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [score, setScore] = useState(0);

  // Dark mode persistence
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedMode = localStorage.getItem("darkMode");
      if (savedMode === "true") setDarkMode(true);
    }
  }, []);

  // Timer logic for active test
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (appState === "active" && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && appState === "active") {
      handleSubmit(); // Auto-submit when time is up
    }
    return () => clearTimeout(timer);
  }, [timeLeft, appState]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  const handleSelectAnswer = (answer: string) => {
    setAnswers({ ...answers, [currentQIndex]: answer });
  };

  const handleNext = () => {
    if (currentQIndex < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setAppState("submitting");

    // MOCK GRADING LOGIC:
    // In production, send `answers` to your backend here instead.
    setTimeout(() => {
      let calculatedScore = 0;
      ASSESSMENT_QUESTIONS.forEach((q, index) => {
        if (answers[index] === q.correctAnswer) {
          calculatedScore += 1;
        }
      });
      setScore(calculatedScore);
      setAppState("result");
    }, 2000); // Fake network delay for smooth UX
  };

  return (
    <div className={darkMode ? "dark min-h-screen" : "min-h-screen"}>
      <div className="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-500 font-sans min-h-screen flex flex-col">
        <PublicNavbar />

        <main className="flex-1 flex flex-col items-center justify-center p-6 mt-10">
          
          {/* STEP 1: INTRO */}
          {appState === "intro" && (
            <div className="max-w-2xl w-full bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-800 text-center">
              <div className="w-16 h-16 mx-auto bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold mb-4">Track Admissions Test</h1>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                To ensure you are placed in the correct cohort, please complete this brief foundational assessment. You have 10 minutes to complete the multiple-choice questions.
              </p>
              
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 mb-8 flex justify-around text-sm font-medium">
                <div className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400">Questions</span>
                  <span>{ASSESSMENT_QUESTIONS.length}</span>
                </div>
                <div className="w-px bg-gray-300 dark:bg-gray-700"></div>
                <div className="flex flex-col">
                  <span className="text-gray-500 dark:text-gray-400">Time Limit</span>
                  <span>10:00</span>
                </div>
              </div>

              <button 
                onClick={() => setAppState("active")}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30"
              >
                Start Assessment
              </button>
            </div>
          )}

          {/* STEP 2: ACTIVE TEST */}
          {appState === "active" && (
            <div className="max-w-3xl w-full">
              {/* Header: Progress & Timer */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-bold text-gray-500 tracking-widest uppercase">
                  Question {currentQIndex + 1} of {ASSESSMENT_QUESTIONS.length}
                </span>
                <div className={`flex items-center gap-2 font-mono text-lg font-bold px-4 py-2 rounded-lg ${timeLeft < 60 ? 'bg-red-100 text-red-600 dark:bg-red-900/30' : 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {formatTime(timeLeft)}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2.5 mb-8">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
                  style={{ width: `${((currentQIndex) / ASSESSMENT_QUESTIONS.length) * 100}%` }}
                ></div>
              </div>

              {/* Question Card */}
              <div className="bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-800 mb-6">
                <h2 className="text-2xl font-semibold mb-8">
                  {ASSESSMENT_QUESTIONS[currentQIndex].question}
                </h2>

                <div className="space-y-4">
                  {ASSESSMENT_QUESTIONS[currentQIndex].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelectAnswer(opt)}
                      className={`w-full text-left px-6 py-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
                        answers[currentQIndex] === opt 
                          ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20" 
                          : "border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700"
                      }`}
                    >
                      {/* Custom Radio Circle */}
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${answers[currentQIndex] === opt ? "border-blue-600" : "border-gray-400"}`}>
                        {answers[currentQIndex] === opt && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>}
                      </div>
                      <span className="text-lg">{opt}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-end">
                <button
                  onClick={handleNext}
                  disabled={!answers[currentQIndex]}
                  className="bg-blue-600 hover:bg-blue-500 disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-xl transition-all"
                >
                  {currentQIndex === ASSESSMENT_QUESTIONS.length - 1 ? "Submit Assessment" : "Next Question"}
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: SUBMITTING (Loading State) */}
          {appState === "submitting" && (
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
              <h2 className="text-xl font-semibold animate-pulse">Grading your responses...</h2>
            </div>
          )}

          {/* STEP 4: RESULTS */}
          {appState === "result" && (
            <div className="max-w-2xl w-full bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-800 text-center">
              {score >= 2 ? (
                // PASSING UI
                <>
                  <div className="w-20 h-20 mx-auto bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h1 className="text-4xl font-bold mb-2">Congratulations!</h1>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                    You scored {score} out of {ASSESSMENT_QUESTIONS.length}.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                    You have demonstrated the foundational skills necessary to succeed at Infinity Dream Learning. You are approved to proceed to enrollment.
                  </p>
                  <button 
                    onClick={() => navigate("/pricing")}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30"
                  >
                    Claim Your Spot & View Pricing
                  </button>
                </>
              ) : (
                // FAILING/RETRY UI
                <>
                  <div className="w-20 h-20 mx-auto bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h1 className="text-3xl font-bold mb-2">Keep Practicing!</h1>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
                    You scored {score} out of {ASSESSMENT_QUESTIONS.length}.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
                    Our tracks are rigorous. We recommend brushing up on your foundational logic and math skills before applying again.
                  </p>
                  <button 
                    onClick={() => window.location.reload()}
                    className="w-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-bold py-4 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
                  >
                    Retake Assessment
                  </button>
                </>
              )}
            </div>
          )}

        </main>
      </div>
    </div>
  );
}