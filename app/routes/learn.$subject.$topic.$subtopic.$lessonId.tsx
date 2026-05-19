import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import LearningLayout from "../components/LearningLayout";
import MarkdownRenderer from "../components/MarkdownRenderer";
import QuizCard from "../components/QuizCard";
import { findLesson } from "../data/lessons";

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
      return { subject: null, topic: null, subtopic: null, lesson: null };
    }
  }, [subject, topic, subtopic, lessonId]);

  const { subject: subjectData, topic: topicData, subtopic: subtopicData, lesson } = result;

  if (!lesson) {
    return (
      <LearningLayout>
        <div className="p-10">
          <h1 className="text-2xl font-bold">Lesson not found</h1>
        </div>
      </LearningLayout>
    );
  }

  // ==========================
  // REAL NAVIGATION LOGIC
  // ==========================
  const goNext = () => {
    const nextId = Number(lessonId) + 1;
    window.location.href = `/learn/${subject}/${topic}/${subtopic}/${nextId}`;
  };

  const goPrev = () => {
    const prevId = Number(lessonId) - 1;
    window.location.href = `/learn/${subject}/${topic}/${subtopic}/${prevId}`;
  };

  const isFirst = Number(lessonId) <= 1;
  const isLast = lesson.isLast === true; // optional flag (recommended later)

  return (
    <LearningLayout>
      <div className="w-full min-h-screen bg-[#f8fafc] flex flex-col">

        {/* ================= HEADER (FULL WIDTH LIKE BEFORE) ================= */}
        <header className="w-full px-6 md:px-12 py-5 bg-white border-b border-slate-200 flex items-center justify-between">
          
          <div className="flex items-center text-sm text-slate-500">
            <span>{subjectData?.title}</span>
            <Icons.ChevronRight className="w-4 h-4 mx-2" />
            <span>{topicData?.title}</span>
            <Icons.ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-slate-900">{subtopicData?.title}</span>
          </div>

        </header>

        {/* ================= FULL WIDTH CONTENT (NO CENTER LIMITS) ================= */}
        <main className="w-full px-6 md:px-12 py-10 flex flex-col gap-10">

          {/* TITLE */}
          <div>
            <h1 className="text-4xl font-black text-slate-900">
              {lesson.title}
            </h1>
            <p className="text-slate-500 mt-2">
              Duration: {lesson.duration}
            </p>
          </div>

          {/* VIDEO FULL WIDTH FEEL */}
          <div className="w-full aspect-video rounded-xl overflow-hidden border border-slate-200">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${lesson.youtubeId}`}
              title="Lesson video"
              allowFullScreen
            />
          </div>

          {/* INTRO */}
          <section>
            <h2 className="text-xl font-bold mb-3">Introduction</h2>
            <p className="text-slate-700 leading-relaxed text-lg">
              {lesson.intro}
            </p>
          </section>

          {/* LEARNING (FULL WIDTH TEXT EXPERIENCE RESTORED) */}
          <section>
            <h2 className="text-xl font-bold mb-3">Learn</h2>
            <div className="text-slate-800 text-lg leading-[1.8]">
              <MarkdownRenderer content={lesson.learning} />
            </div>
          </section>

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

        {/* ================= TASKS (RIGHT SIDE LIKE ORIGINAL, NOT CENTER KILLING LAYOUT) ================= */}
        <aside className="hidden lg:block fixed right-6 top-32 w-80 bg-white border border-slate-200 rounded-xl p-5">
          <h3 className="font-bold mb-3">Lesson Tasks</h3>

          <ul className="space-y-2">
            {lesson.tasks?.map((task: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                <Icons.Check className="w-4 h-4 mt-0.5 text-slate-400" />
                {task}
              </li>
            ))}
          </ul>
        </aside>

        {/* ================= BOTTOM NAVIGATION ================= */}
<div className="w-full px-6 md:px-12 py-10 flex items-center justify-between border-t border-slate-200 mt-16">

  {/* PREVIOUS */}
  <div className="w-[120px]">
    {!isFirst && (
      <button
        onClick={goPrev}
        className="flex items-center gap-2 text-[14px] text-slate-600 font-medium hover:text-slate-900 transition-colors"
      >
        <Icons.ChevronLeft className="w-4 h-4" />
        Previous
      </button>
    )}
  </div>

  {/* MARK COMPLETE */}
  <button
    className="flex items-center gap-2 px-6 py-2.5 bg-white border border-slate-200 text-slate-900 text-[14px] font-medium rounded-md hover:bg-slate-50 transition-colors shadow-sm"
  >
    <Icons.Check className="w-4 h-4 text-blue-600" />
    Mark Complete
  </button>

  {/* NEXT */}
  <div className="w-[120px] flex justify-end">
    {!isLast ? (
      <button
        onClick={goNext}
        className="flex items-center gap-2 text-[14px] text-blue-600 font-medium hover:text-blue-800 transition-colors"
      >
        Next
        <Icons.ChevronRight className="w-4 h-4" />
      </button>
    ) : (
      <span className="text-[14px] text-green-600 font-medium">
        Finished
      </span>
    )}
  </div>

</div>

      </div>
    </LearningLayout>
  );
}