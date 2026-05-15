import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import LearningLayout from "../components/LearningLayout";

export default function CourseTopicsView() {
  const [expandedTopic, setExpandedTopic] =
    useState<string | null>("numbers");

  const [collapsed, setCollapsed] = useState(false);

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubtopicClick = (
    topicId: string,
    subtopic: string
  ) => {
    navigate(
      `/content/${topicId}/${encodeURIComponent(
        subtopic
      )}`
    );
  };

  const courseData = {
    grade: "Grade 6",
    subject: "Mathematics",
    totalTopics: 24,
    progress: 68,

    topics: [
      {
        id: "numbers",
        title: "Numbers",
        lessons: 12,
        color: "from-blue-500 to-cyan-500",
        icon: (
          <svg
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
          </svg>
        ),

        subtopics: [
          "Whole Numbers",
          "Integers",
          "Prime Numbers",
          "Factors & Multiples",
          "Place Values",
          "Roman Numerals",
        ],
      },

      {
        id: "algebra",
        title: "Algebra",
        lessons: 9,
        color: "from-violet-500 to-fuchsia-500",
        icon: (
          <svg
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 18L18 6" />
            <path d="M6 6l12 12" />
          </svg>
        ),

        subtopics: [
          "Variables",
          "Expressions",
          "Linear Equations",
          "Algebraic Fractions",
        ],
      },

      {
        id: "fractions",
        title: "Fractions & Decimals",
        lessons: 11,
        color: "from-orange-500 to-amber-500",
        icon: (
          <svg
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M7 12h10" />
          </svg>
        ),

        subtopics: [
          "Equivalent Fractions",
          "Adding Fractions",
          "Mixed Numbers",
          "Decimals",
        ],
      },

      {
        id: "geometry",
        title: "Geometry",
        lessons: 10,
        color: "from-emerald-500 to-green-500",
        icon: (
          <svg
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 4L4 19h16L12 4z" />
          </svg>
        ),

        subtopics: [
          "Angles",
          "Triangles",
          "Circles",
          "Polygons",
        ],
      },

      {
        id: "measurement",
        title: "Measurement",
        lessons: 8,
        color: "from-pink-500 to-rose-500",
        icon: (
          <svg
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 7h16v10H4z" />
            <path d="M8 7v10" />
            <path d="M12 7v10" />
            <path d="M16 7v10" />
          </svg>
        ),

        subtopics: [
          "Length",
          "Area",
          "Volume",
          "Mass & Weight",
        ],
      },

      {
        id: "statistics",
        title: "Statistics",
        lessons: 7,
        color: "from-indigo-500 to-blue-500",
        icon: (
          <svg
            className="w-7 h-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 19V9" />
            <path d="M12 19V5" />
            <path d="M19 19v-7" />
          </svg>
        ),

        subtopics: [
          "Graphs",
          "Tables",
          "Probability",
          "Data Analysis",
        ],
      },
    ],

   // ===================== ENGLISH =====================
  {
    grade: "Grade 6",
    subject: "English",
    totalTopics: 5,
    progress: 60,
    topics: [
      {
        id: "grammar",
        title: "Grammar",
        lessons: 10,
        color: "from-blue-500 to-indigo-500",
        icon: <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19h16" /><path d="M4 12h16" /></svg>,
        subtopics: ["Tenses", "Parts of Speech", "Sentence Structure", "Punctuation", "Verbs"],
      },
      {
        id: "composition",
        title: "Composition",
        lessons: 8,
        color: "from-green-500 to-emerald-500",
        icon: <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21l18-18" /></svg>,
        subtopics: ["Essay Writing", "Paragraphs", "Stories", "Letters", "Creative Writing"],
      },
      {
        id: "reading",
        title: "Reading",
        lessons: 6,
        color: "from-yellow-500 to-orange-500",
        icon: <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z" /></svg>,
        subtopics: ["Comprehension", "Skimming", "Scanning", "Vocabulary", "Main Ideas"],
      },
      {
        id: "spelling",
        title: "Spelling",
        lessons: 5,
        color: "from-purple-500 to-pink-500",
        icon: <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16" /></svg>,
        subtopics: ["Word Formation", "Prefixes", "Suffixes", "Difficult Words", "Dictation"],
      },
      {
        id: "listening",
        title: "Listening & Speaking",
        lessons: 6,
        color: "from-indigo-500 to-blue-500",
        icon: <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /></svg>,
        subtopics: ["Listening Skills", "Pronunciation", "Conversation", "Presentation", "Speech"],
      },
    ],
  },

  // ===================== KISWAHILI =====================
  {
    grade: "Grade 6",
    subject: "Kiswahili",
    totalTopics: 5,
    progress: 55,
    topics: [
      {
        id: "sarufi",
        title: "Sarufi",
        lessons: 10,
        color: "from-red-500 to-pink-500",
        icon: <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 7h16" /></svg>,
        subtopics: ["Nomino", "Vitenzi", "Vivumishi", "Sentensi", "Viunganishi"],
      },
      {
        id: "fasihi",
        title: "Fasihi",
        lessons: 8,
        color: "from-orange-500 to-yellow-500",
        icon: <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 4h16v16H4z" /></svg>,
        subtopics: ["Hadithi", "Mashairi", "Methali", "Nahau", "Vitendawili"],
      },
      {
        id: "insha",
        title: "Insha",
        lessons: 7,
        color: "from-green-500 to-emerald-500",
        icon: <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 21l18-18" /></svg>,
        subtopics: ["Insha za Maelezo", "Barua", "Hadithi", "Insha Fupi", "Ubunifu"],
      },
      {
        id: "usomaji",
        title: "Usomaji",
        lessons: 6,
        color: "from-blue-500 to-indigo-500",
        icon: <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 4h16v16H4z" /></svg>,
        subtopics: ["Ufahamu", "Msamiati", "Kusoma Haraka", "Kuelewa", "Uchambuzi"],
      },
      {
        id: "mawasiliano",
        title: "Mawasiliano",
        lessons: 6,
        color: "from-purple-500 to-pink-500",
        icon: <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9" /></svg>,
        subtopics: ["Kuzungumza", "Kusikiliza", "Majadiliano", "Matamshi", "Hotuba"],
      },
    ],
  },
  };

  const filteredTopics = useMemo(() => {
    return courseData.topics.filter((topic) => {
      const matchesTitle = topic.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesSubtopic = topic.subtopics.some(
        (sub) =>
          sub
            .toLowerCase()
            .includes(search.toLowerCase())
      );

      return matchesTitle || matchesSubtopic;
    });
  }, [search]);

  return (
    <LearningLayout
      collapsed={collapsed}
      setCollapsed={setCollapsed}
    >
      {/* FULL SCREEN — NO EXTRA SPACE */}
      <div className="w-full min-h-screen bg-slate-100">

        {/* MAIN CONTAINER */}
        <div className="w-full min-h-screen bg-white flex flex-col overflow-hidden">

          {/* TOP HEADER */}
          <div className="relative px-4 md:px-8 py-6 overflow-hidden">
        
         {/* BACKGROUND IMAGE */}
<div
  className="absolute inset-0 bg-cover bg-center opacity-30"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=1600&q=80')"
  }}
/>

      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 opacity-90" />

            {/* TOP BAR */}
            <div className="relative z-10 flex items-start justify-between gap-4 flex-wrap">

              {/* LEFT */}
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-blue-100 font-bold">
                  {courseData.grade}
                </p>

                <h1 className="text-3xl md:text-5xl font-black text-white mt-1">
                  {courseData.subject}
                </h1>

                <p className="text-blue-100 mt-2 max-w-xl text-sm md:text-base">
                  Interactive lessons, practice
                  questions, quizzes and visual
                  learning for students from primary
                  school to university level.
                </p>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-3 w-full md:w-auto">

                {/* SEARCH */}
                <div className="relative flex-1 md:w-[340px]">

                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle
                        cx="11"
                        cy="11"
                        r="8"
                      />
                      <path d="M21 21l-4.3-4.3" />
                    </svg>
                  </div>

                  <input
                    type="text"
                    placeholder="Search topics or lessons..."
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    className="w-full h-14 rounded-2xl border-0 bg-white text-slate-700 font-medium pl-12 pr-4 outline-none focus:ring-4 focus:ring-blue-300"
                  />
                </div>

                {/* FILTER */}
                <button className="h-14 w-14 rounded-2xl bg-white/15 border border-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/25 transition">

                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 6h16" />
                    <path d="M7 12h10" />
                    <path d="M10 18h4" />
                  </svg>
                </button>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

              {/* CARD */}
              <div className="bg-white/10 border border-white/10 rounded-3xl p-4 backdrop-blur">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-blue-100 text-sm">
                      Topics
                    </p>

                    <h3 className="text-3xl font-black text-white mt-1">
                      {courseData.totalTopics}
                    </h3>
                  </div>

                  <svg
                    className="w-8 h-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h10" />
                  </svg>
                </div>
              </div>

              {/* CARD */}
              <div className="bg-white/10 border border-white/10 rounded-3xl p-4 backdrop-blur">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-blue-100 text-sm">
                      Progress
                    </p>

                    <h3 className="text-3xl font-black text-white mt-1">
                      {courseData.progress}%
                    </h3>
                  </div>

                  <svg
                    className="w-8 h-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                    />
                    <path d="M12 7v5l3 3" />
                  </svg>
                </div>
              </div>

              {/* CARD */}
              <div className="bg-white/10 border border-white/10 rounded-3xl p-4 backdrop-blur">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-blue-100 text-sm">
                      Lessons
                    </p>

                    <h3 className="text-3xl font-black text-white mt-1">
                      84
                    </h3>
                  </div>

                  <svg
                    className="w-8 h-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                    <path d="M6.5 17A2.5 2.5 0 014 14.5V5a2 2 0 012-2h14v14" />
                  </svg>
                </div>
              </div>

              {/* CARD */}
              <div className="bg-white/10 border border-white/10 rounded-3xl p-4 backdrop-blur">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-blue-100 text-sm">
                      Quizzes
                    </p>

                    <h3 className="text-3xl font-black text-white mt-1">
                      32
                    </h3>
                  </div>

                  <svg
                    className="w-8 h-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT SECTION */}
          <div className="flex-1 bg-slate-100 px-4 md:px-8 py-6">

            {/* SECTION HEADER */}
            <div className="flex items-center justify-between mb-5">

              <div>
                <h2 className="text-2xl font-black text-slate-800">
                  Course Topics
                </h2>

                <p className="text-slate-500 text-sm mt-1">
                  Choose a topic to continue learning
                </p>
              </div>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">

              {filteredTopics.map((topic) => {
                const isExpanded =
                  expandedTopic === topic.id;

                return (
                  <div
                    key={topic.id}
                    className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300"
                  >

                    {/* TOPIC HEADER */}
                    <button
                      onClick={() =>
                        setExpandedTopic(
                          isExpanded
                            ? null
                            : topic.id
                        )
                      }
                      className="w-full p-5 flex items-center justify-between"
                    >

                      {/* LEFT */}
                      <div className="flex items-center gap-4">

                        {/* ICON */}
                        <div
                          className={`h-16 w-16 rounded-3xl bg-gradient-to-br ${topic.color} text-white flex items-center justify-center shadow-lg`}
                        >
                          {topic.icon}
                        </div>

                        {/* TEXT */}
                        <div className="text-left">
                          <h3 className="text-xl font-black text-slate-800">
                            {topic.title}
                          </h3>

                          <p className="text-slate-500 text-sm mt-1">
                            {topic.lessons} lessons
                            available
                          </p>
                        </div>
                      </div>

                      {/* RIGHT */}
                      <div
                        className={`transition-transform duration-300 ${
                          isExpanded
                            ? "rotate-180"
                            : ""
                        }`}
                      >
                        <svg
                          className="w-6 h-6 text-slate-400"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </button>

                    {/* SUBTOPICS */}
                    {isExpanded && (
                      <div className="px-5 pb-5">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

                          {topic.subtopics.map(
                            (subtopic, index) => (
                              <button
                                key={index}
                                onClick={() =>
                                  handleSubtopicClick(
                                    topic.id,
                                    subtopic
                                  )
                                }
                                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 p-4 transition-all"
                              >

                                <div className="flex items-center gap-3">

                                  <div className="h-11 w-11 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-100">

                                    <svg
                                      className="w-5 h-5"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path d="M9 18l6-6-6-6" />
                                    </svg>
                                  </div>

                                  <div className="text-left">
                                    <p className="font-bold text-slate-700">
                                      {subtopic}
                                    </p>

                                    <p className="text-xs text-slate-500">
                                      Interactive lesson
                                    </p>
                                  </div>
                                </div>

                                <svg
                                  className="w-5 h-5 text-slate-400 group-hover:text-blue-600"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path d="M5 12h14" />
                                  <path d="M12 5l7 7-7 7" />
                                </svg>
                              </button>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </LearningLayout>
  );
}