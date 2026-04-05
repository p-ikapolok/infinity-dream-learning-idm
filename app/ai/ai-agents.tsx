import AIChat from "./ai-chat";
import AILesson from "./ai-lesson";
import AIQuiz from "./ai-quiz";
import AICode from "./ai-code";
import AIFeedback from "./ai-feedback";
import AIGrading from "./ai-grading";
import AIPath from "./ai-path";
import AIProject from "./ai-project";
import AIVoice from "./ai-voice";

export default function AIAgents() {
  return (
    <div className="grid md:grid-cols-2 gap-6">

      <AIChat />
      <AILesson />
      <AIQuiz />
      <AICode />
      <AIFeedback />
      <AIGrading />
      <AIPath />
      <AIProject />
      <AIVoice />

    </div>
  );
}