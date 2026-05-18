import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import LearningLayout from "../components/LearningLayout";
import MarkdownRenderer from "../components/MarkdownRenderer";
import QuizCard from "../components/QuizCard";
import { findLesson } from "../data/lessons";

// ==============================
// ICONS (from your old UI)
// ==============================
const Icons = {
  ChevronRight: ({ className }: any) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),
  ChevronLeft: ({ className }: any) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="m15 18-6-6 6-6" />
    </svg>
  ),
  Check: ({ className }: any) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
};

// ==============================
// MAIN COMPONENT
// ==============================
export default function LessonRoute() {
  const { subject, topic, subtopic, lessonId } = useParams();

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  if (!subject || !topic || !subtopic || !lessonId) {
    return (
      <LearningLayout>
        <div className="p-10 text-red-500 font-semibold">
          Missing URL parameters
        </div>
      </LearningLayout>
    );
  }

  const result = useMemo(() => {
    try {
      return findLesson(subject, topic, subtopic, lessonId);
    } catch (err) {
      console.error(err);
      return { subject: null, topic: null, subtopic: null, lesson: null };
    }
  }, [subject, topic, subtopic, lessonId]);

  const { subject: subjectData, topic: topicData, subtopic: subtopicData, lesson } = result;

  if (!lesson) {
    return (
      <LearningLayout>
        <div className="p-10 text-slate-700">
          <h1 className="text-2xl font-bold">Lesson not found</h1>
          <p className="mt-2">Check your URL parameters.</p>
        </div>
      </LearningLayout>
    );
  }

  // ==============================
  // TASK STATE (checkbox style)
  // ==============================
  const [completedTasks, setCompletedTasks] = useState<boolean[]>(
    lesson.tasks?.map(() => false) || []
  );

  const toggleTask = (index: number) => {
    setCompletedTasks((prev) =>
      prev.map((t, i) => (i === index ? !t : t))
    );
  };

  return (
    <LearningLayout>
      <div className="w-full min-h-screen bg-[#f8fafc] flex flex-col">

        {/* ================= HEADER (RESTORED STYLE) ================= */}
        <header className="px-6 md:px-12 py-5 bg-white border-b border-slate-200 flex items-center justify-between">
          
          <div className="flex items-center text-sm text-slate-500">
            <span>{subjectData?.title}</span>
            <Icons.ChevronRight className="w-4 h-4 mx-2" />
            <span>{topicData?.title}</span>
            <Icons.ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-slate-900">{subtopicData?.title}</span>
          </div>

          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">
            AM
          </div>
        </header>

        {/* ================= MAIN ================= */}
        <main className="flex-1 px-6 md:px-12 py-10 max-w-[1280px] mx-auto flex flex-col gap-10">

          {/* TITLE */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              {lesson.title}
            </h1>
            <p className="text-slate-500 mt-2">
              Duration: {lesson.duration}
            </p>
          </div>

          {/* VIDEO */}
          <div className="aspect-video w-full rounded-xl overflow-hidden border border-slate-200 bg-black">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${lesson.youtubeId}`}
              title="Lesson video"
              allowFullScreen
            />
          </div>

          {/* INTRO */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Introduction</h2>
            <p className="text-slate-700 leading-relaxed">
              {lesson.intro}
            </p>
          </div>

          {/* LEARN */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Learn</h2>
            <MarkdownRenderer content={lesson.learning} />
          </div>

          {/* QUIZ */}
          {lesson.exercise && (
            <QuizCard
              question={lesson.exercise.question}
              options={lesson.exercise.options}
              correctIndex={lesson.exercise.correctIndex}
              selectedAnswer={selectedAnswer}
              onSelect={setSelectedAnswer}
            />
          )}
        </main>

        {/* ================= SIDEBAR TASKS (RESTORED) ================= */}
        <aside className="fixed right-6 top-32 w-72 bg-white border border-slate-200 rounded-xl p-5 hidden lg:block">
          <h3 className="font-bold mb-3 text-slate-800">Lesson Tasks</h3>

          <div className="space-y-2">
            {lesson.tasks?.map((task, i) => (
              <label
                key={i}
                className="flex items-start gap-2 text-sm text-slate-600 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={completedTasks[i]}
                  onChange={() => toggleTask(i)}
                />
                <span>{task}</span>
              </label>
            ))}
          </div>
        </aside>

        {/* ================= FOOTER NAVIGATION (IMPORTANT RESTORE) ================= */}
        <footer className="sticky bottom-0 bg-white border-t border-slate-200 px-6 md:px-12 py-4 flex items-center justify-between">

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-slate-600"
          >
            <Icons.ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          <button className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium">
            Mark Complete
          </button>

          <button
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 text-blue-600"
          >
            Next
            <Icons.ChevronRight className="w-4 h-4" />
          </button>

        </footer>

      </div>
    </LearningLayout>
  );
}