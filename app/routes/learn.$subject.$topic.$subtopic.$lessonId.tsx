import React, { useState } from "react"; import { useParams } from "react-router-dom"; import LearningLayout from "../components/LearningLayout"; import MarkdownRenderer from "../components/MarkdownRenderer"; import QuizCard from "../components/QuizCard"; import { findLesson } from "../data/lessons";

export default function LessonRoute() { const { subject, topic, subtopic, lessonId } = useParams();

const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

const { subject: subjectData, topic: topicData, subtopic: subtopicData, lesson } = findLesson(subject!, topic!, subtopic!, lessonId!);

if (!lesson) { return ( <LearningLayout> <div className="p-10 text-slate-700"> <h1 className="text-2xl font-bold">Lesson not found</h1> <p className="mt-2">Check your URL parameters.</p> </div> </LearningLayout> ); }

return ( <LearningLayout> <div className="w-full min-h-screen bg-slate-50 flex flex-col">

{/* HEADER */}
    <div className="px-6 md:px-12 py-6 bg-white border-b border-slate-200">
      <p className="text-sm text-slate-500">
        {subjectData?.title} / {topicData?.title} / {subtopicData?.title}
      </p>

      <h1 className="text-3xl md:text-4xl font-black text-slate-900 mt-2">
        {lesson.title}
      </h1>

      <p className="text-slate-500 mt-1">
        Duration: {lesson.duration}
      </p>
    </div>

    {/* CONTENT */}
    <div className="flex-1 px-6 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* LEFT CONTENT */}
      <div className="lg:col-span-2 space-y-10">

        {/* VIDEO */}
        <div className="aspect-video w-full rounded-xl overflow-hidden border border-slate-200">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${lesson.youtubeId}`}
            title="Lesson video"
            allowFullScreen
          />
        </div>

        {/* INTRO */}
        <div>
          <h2 className="text-xl font-bold mb-3">Introduction</h2>
          <p className="text-slate-700 leading-relaxed">
            {lesson.intro}
          </p>
        </div>

        {/* LEARNING (MARKDOWN + MATH) */}
        <div>
          <h2 className="text-xl font-bold mb-3">Learn</h2>
          <MarkdownRenderer content={lesson.learning} />
        </div>

        {/* QUIZ */}
        <QuizCard
          question={lesson.exercise.question}
          options={lesson.exercise.options}
          correctIndex={lesson.exercise.correctIndex}
          selectedAnswer={selectedAnswer}
          onSelect={setSelectedAnswer}
        />

      </div>

      {/* RIGHT SIDEBAR */}
      <aside className="bg-white border border-slate-200 rounded-xl p-5 h-fit">
        <h3 className="font-bold text-slate-800 mb-3">
          Lesson Tasks
        </h3>

        <ul className="space-y-2">
          {lesson.tasks.map((task, i) => (
            <li key={i} className="text-slate-600 text-sm flex gap-2">
              <span className="text-blue-500">•</span>
              {task}
            </li>
          ))}
        </ul>
      </aside>

    </div>
  </div>
</LearningLayout>

); }