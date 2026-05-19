import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import LearningLayout from "../components/LearningLayout";
import MarkdownRenderer from "../components/MarkdownRenderer";
import QuizCard from "../components/QuizCard";
import { findLesson } from "../data/lessons";

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

                    {/* Lesson Hero: Title & Integrated Video */}
<section className="w-full flex flex-col gap-6">

  <div>
    <div className="text-[13px] font-semibold text-[#2563eb] tracking-wide uppercase mb-2">
      Lesson {lessonId}
    </div>

    <h1 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#0f172a] leading-tight">
      {lesson.title}
    </h1>
  </div>

  {/* Natural Video Embedding */}
  <div className="w-full aspect-video rounded-xl overflow-hidden bg-black shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#e2e8f0]">
    <iframe
      className="w-full h-full"
      src={`https://www.youtube.com/embed/${lesson.youtubeId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>

  {/* Lesson Metadata Row */}
  <div className="flex flex-wrap items-center gap-6 text-[14px] text-[#64748b] border-b border-[#e2e8f0] pb-6">

    <span className="flex items-center gap-2">
      <Icons.Clock className="w-4 h-4" />
      {lesson.duration || "12 min read"}
    </span>

    <span className="flex items-center gap-2">
      <Icons.PlayCircle className="w-4 h-4" />
      Video Lesson
    </span>

    <span className="flex items-center gap-2">
      <Icons.BookOpen className="w-4 h-4" />
      Lesson {lessonId}
    </span>

  </div>

</section>

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

        {/* NAVIGATION */}
<div className="w-full border-t border-[#e2e8f0] px-6 lg:px-12 py-10 flex items-center justify-between mt-16">

  {/* PREVIOUS */}
  <div className="w-[120px]">
    {!isFirst && (
      <button
        onClick={goPrev}
        className="flex items-center gap-2 text-[14px] text-[#64748b] font-medium hover:text-[#0f172a] transition-colors duration-150"
      >
        <Icons.ChevronLeft className="w-4 h-4" />
        Previous
      </button>
    )}
  </div>

  {/* MARK COMPLETE */}
  <button className="flex items-center gap-2 px-6 py-2.5 bg-white border border-[#e2e8f0] text-[#0f172a] text-[14px] font-medium rounded-md hover:bg-[#f9fafb] transition-colors duration-150 shadow-sm active:scale-[0.98]">
    <Icons.Check className="w-4 h-4 text-[#2563eb]" />
    Mark Complete
  </button>

  {/* NEXT */}
  <div className="w-[120px] flex justify-end">
    {!isLast ? (
      <button
        onClick={goNext}
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

</div>
      </div>
    </LearningLayout>
  );
}