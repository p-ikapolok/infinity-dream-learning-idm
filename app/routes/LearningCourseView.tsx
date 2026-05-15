import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import LearningLayout from "../components/LearningLayout";

export default function CourseTopicsView() {
  const [expandedTopic, setExpandedTopic] = useState<string | null>("numbers");
  const [collapsed, setCollapsed] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubtopicClick = (
    topicId: string,
    subtopic: string
  ) => {
    navigate(
      `/content/${topicId}/${encodeURIComponent(subtopic)}`
    );
  };

  const courseData = {
    grade: "Grade 6",
    title: "Maths 101",
    topics: [
      {
        id: "numbers",
        title: "Numbers",
        icon: (
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        ),
        subtopics: [
          "Whole Numbers",
          "Integers",
          "Factors and Multiples",
          "Prime Numbers",
        ],
      },
      {
        id: "algebra",
        title: "Algebra",
        icon: (
          <svg
            className="w-5 h-5"
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
        ],
      },
      {
        id: "fractions",
        title: "Fractions & Decimals",
        icon: (
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12h8" />
          </svg>
        ),
        subtopics: [
          "Adding Fractions",
          "Multiplying Decimals",
        ],
      },
      {
        id: "percentages",
        title: "Percentages",
        icon: (
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 5L5 19" />
            <circle cx="7" cy="7" r="2" />
            <circle cx="17" cy="17" r="2" />
          </svg>
        ),
        subtopics: [
          "Calculating Percentages",
          "Discounts",
        ],
      },
      {
        id: "geometry",
        title: "Geometry",
        icon: (
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 4L4 18h16L12 4z" />
          </svg>
        ),
        subtopics: ["Angles", "Polygons"],
      },
      {
        id: "measurements",
        title: "Measurements",
        icon: (
          <svg
            className="w-5 h-5"
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
        subtopics: ["Length and Area", "Volume"],
      },
    ],
  };

  const filteredTopics = useMemo(() => {
    return courseData.topics.filter((topic) => {
      const matchesTopic = topic.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesSubtopic = topic.subtopics.some((sub) =>
        sub.toLowerCase().includes(search.toLowerCase())
      );

      return matchesTopic || matchesSubtopic;
    });
  }, [search]);

  const toggleTopic = (id: string) => {
    setExpandedTopic((prev) =>
      prev === id ? null : id
    );
  };

  return (
    <LearningLayout
      collapsed={collapsed}
      setCollapsed={setCollapsed}
    >
      <div className="w-full h-full bg-slate-100 p-4 md:p-6">
        <div className="h-full w-full bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">

          {/* HERO HEADER */}
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-indigo-700 px-5 py-5 md:px-8 md:py-6">

            <div className="absolute right-0 top-0 opacity-10">
              <svg
                width="220"
                height="220"
                viewBox="0 0 200 200"
                fill="none"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  stroke="white"
                  strokeWidth="10"
                />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

              {/* LEFT */}
              <div>
                <p className="text-blue-100 uppercase tracking-[0.2em] text-xs font-semibold">
                  {courseData.grade}
                </p>

                <h1 className="text-3xl md:text-4xl font-black text-white mt-1">
                  {courseData.title}
                </h1>

                <p className="text-blue-100 mt-2 text-sm md:text-base">
                  Explore topics, lessons and practice
                  activities.
                </p>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-3 w-full lg:w-auto">

                {/* SEARCH */}
                <div className="relative flex-1 lg:w-[320px]">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-400">
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
                    placeholder="Search topic..."
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    className="w-full h-12 rounded-2xl border border-white/20 bg-white pl-12 pr-4 text-sm font-medium text-slate-700 outline-none focus:ring-4 focus:ring-blue-300"
                  />
                </div>

                {/* FILTER */}
                <button className="h-12 w-12 rounded-2xl bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition">
                  <svg
                    className="w-5 h-5"
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
          </div>

          {/* CONTENT */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6">

            {/* TOPICS HEADER */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
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

                <div>
                  <h2 className="text-xl font-black text-slate-800">
                    Topics
                  </h2>

                  <p className="text-sm text-slate-500">
                    {filteredTopics.length} sections
                  </p>
                </div>
              </div>
            </div>

            {/* TOPIC GRID */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">

              {filteredTopics.map((topic) => {
                const isExpanded =
                  expandedTopic === topic.id;

                return (
                  <div
                    key={topic.id}
                    className="rounded-3xl border border-slate-200 bg-white overflow-hidden hover:shadow-md transition-all"
                  >

                    {/* TOPIC HEADER */}
                    <button
                      onClick={() =>
                        toggleTopic(topic.id)
                      }
                      className="w-full flex items-center justify-between px-5 py-4 text-left"
                    >
                      <div className="flex items-center gap-4">

                        <div className="h-12 w-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
                          {topic.icon}
                        </div>

                        <div>
                          <h3 className="text-base md:text-lg font-bold text-slate-800">
                            {topic.title}
                          </h3>

                          <p className="text-sm text-slate-500">
                            {topic.subtopics.length} lessons
                          </p>
                        </div>
                      </div>

                      <div
                        className={`transition-transform duration-300 ${
                          isExpanded
                            ? "rotate-180"
                            : ""
                        }`}
                      >
                        <svg
                          className="w-5 h-5 text-slate-500"
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
                      <div className="px-5 pb-5 border-t border-slate-100">

                        <div className="pt-4 flex flex-col gap-2">

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
                                className="group w-full rounded-2xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all p-4 flex items-center justify-between"
                              >
                                <div className="flex items-center gap-3">

                                  <div className="h-9 w-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 group-hover:bg-blue-100">
                                    <svg
                                      className="w-4 h-4"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                    >
                                      <path d="M9 18l6-6-6-6" />
                                    </svg>
                                  </div>

                                  <span className="font-semibold text-slate-700 text-sm md:text-base">
                                    {subtopic}
                                  </span>
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