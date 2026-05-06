import { useState } from "react";

// Mock data for AI-generated dynamic questions
const quizQuestions = [
  {
    id: "q1",
    question: "In the context of the cost function $J(\\theta)$, what happens if the learning rate $\\alpha$ is set too high during gradient descent?",
    options: [
      "The algorithm will converge too slowly, requiring excessive computational time.",
      "The algorithm may overshoot the local minimum and potentially diverge.",
      "The gradient $\\nabla_\\theta J(\\theta)$ will become exactly zero immediately.",
      "The model will automatically switch to stochastic gradient descent."
    ],
    correctIndex: 1,
    aiExplanation: "Spot on! If $\\alpha$ is too large, the update step $\\theta := \\theta - \\alpha \\nabla_\\theta J(\\theta)$ takes you too far. You overshoot the valley's bottom and can actually climb up the other side, leading to divergence."
  },
  {
    id: "q2",
    question: "Which of the following represents the expected risk we are ultimately trying to minimize in statistical learning?",
    options: [
      "$R(f) = \\mathbb{E}[L(Y, f(X))]$",
      "$\\theta_{t+1} = \\theta_t - \\eta \\nabla_\\theta J(\\theta_t)$",
      "$P(A|B) = \\frac{P(B|A)P(A)}{P(B)}$",
      "$f(x) = \\frac{1}{1 + e^{-x}}$"
    ],
    correctIndex: 0,
    aiExplanation: "Correct. $R(f) = \\mathbb{E}[L(Y, f(X))]$ is the theoretical expected risk. In practice, we minimize the empirical risk because we only have a finite training dataset rather than the true underlying distribution."
  }
];

export default function AIQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; message: string } | null>(null);

  const currentQuestion = quizQuestions[currentIndex];

  const handleEvaluate = () => {
    if (selectedOption === null) return;
    
    setIsEvaluating(true);
    setFeedback(null);

    // Simulate AI analyzing the student's selected answer
    setTimeout(() => {
      const isCorrect = selectedOption === currentQuestion.correctIndex;
      setFeedback({
        isCorrect,
        message: isCorrect 
          ? currentQuestion.aiExplanation 
          : "Not quite. Think about the mathematical relationship. If you take a massive step on a steep slope, you won't land at the bottom—you'll likely fly right over it."
      });
      setIsEvaluating(false);
    }, 1500);
  };

  const handleNext = () => {
    setFeedback(null);
    setSelectedOption(null);
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(curr => curr + 1);
    } else {
      // Handle quiz completion (e.g., redirect to ai-grading or dashboard)
      alert("Quiz Complete! Passing data to the AI Evaluator...");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col items-center justify-center p-6 text-gray-900 dark:text-gray-100 font-sans">
      
      <div className="w-full max-w-2xl">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Knowledge Check
            </span>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
              Question {currentIndex + 1} of {quizQuestions.length}
            </span>
          </div>
          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-500 ease-out"
              style={{ width: `${((currentIndex) / quizQuestions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Quiz Card */}
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden transition-all">
          <div className="p-8">
            <h2 className="text-2xl font-bold leading-relaxed mb-8">
              {currentQuestion.question}
            </h2>

            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !feedback && setSelectedOption(index)}
                  disabled={!!feedback}
                  className={`w-full text-left p-5 rounded-xl border-2 transition-all flex items-center gap-4
                    ${selectedOption === index 
                      ? 'border-blue-600 bg-blue-50/50 dark:bg-blue-900/20 dark:border-blue-500' 
                      : 'border-gray-100 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }
                    ${!!feedback && selectedOption !== index ? 'opacity-50 cursor-not-allowed' : ''}
                  `}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors
                    ${selectedOption === index 
                      ? 'border-blue-600 dark:border-blue-500' 
                      : 'border-gray-300 dark:border-gray-700'
                    }`}
                  >
                    {selectedOption === index && (
                      <div className="w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-500" />
                    )}
                  </div>
                  <span className="text-lg text-gray-700 dark:text-gray-300">
                    {option}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* AI Evaluation Section */}
          <div className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-800 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="flex-1 w-full">
              {isEvaluating ? (
                <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400">
                  <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                    <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" className="opacity-75" />
                  </svg>
                  <span className="text-sm font-bold">Finley is evaluating your answer...</span>
                </div>
              ) : feedback ? (
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 p-1 rounded-full ${feedback.isCorrect ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'}`}>
                    {feedback.isCorrect ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" /></svg>
                    )}
                  </div>
                  <div>
                    <span className={`text-sm font-bold block mb-1 ${feedback.isCorrect ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
                      {feedback.isCorrect ? 'Excellent logic.' : 'Not quite right.'}
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feedback.message}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              {!feedback ? (
                <button
                  onClick={handleEvaluate}
                  disabled={selectedOption === null || isEvaluating}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-bold transition-colors shadow-sm flex justify-center items-center gap-2"
                >
                  Submit Answer
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="w-full sm:w-auto bg-gray-900 hover:bg-black dark:bg-white dark:hover:bg-gray-100 dark:text-gray-900 text-white px-8 py-3 rounded-xl font-bold transition-colors shadow-sm flex justify-center items-center gap-2"
                >
                  {currentIndex < quizQuestions.length - 1 ? 'Next Question' : 'Complete Module'}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}