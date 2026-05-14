import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LearningLayout from '../components/LearningLayout';

export default function CourseTopicsView() {
  // State to manage which topic accordion is open
  const [expandedTopic, setExpandedTopic] = useState<string | null>("numbers");
  const [collapsed, setCollapsed] = useState(false);
const navigate = useNavigate();
const handleSubtopicClick = (
  topicId: string,
  subtopic: string
) => {
  navigate(
    `/content/${topicId}/${encodeURIComponent(subtopic)}`
  );
};

  // Mock data structure based on the sketch
  const courseData = {
    grade: "GRADE 6",
    title: "MATHS 101",
    topics: [
      {
        id: "numbers",
        title: "NUMBERS",
        subtopics: ["Whole numbers", "Integers", "Factors and Multiples", "Prime numbers"],
      },
      {
        id: "algebra",
        title: "ALGEBRA",
        // Strict LaTeX integration for math rendering
        subtopics: ["Variables", "Expressions", "Linear Equations ($ y = mx + c $)"],
      },
      {
        id: "fractions",
        title: "FRACTIONS AND DECIMALS",
        subtopics: ["Adding Fractions", "Multiplying Decimals"],
      },
      {
        id: "percentages",
        title: "PERCENTAGES",
        subtopics: ["Calculating Percentages", "Discounts"],
      },
      {
        id: "geometry",
        title: "GEOMETRY",
        subtopics: ["Angles", "Polygons"],
      },
      {
        id: "measurements",
        title: "MEASUREMENTS",
        subtopics: ["Length and Area", "Volume"],
      },
    ],
  };

  const toggleTopic = (id: string) => {
    setExpandedTopic((prev) => (prev === id ? null : id));
  };

  return (
    <LearningLayout
      collapsed={collapsed}
      setCollapsed={setCollapsed}
    >
      {/* 
        Removed max-w-4xl and mx-auto. 
        Now uses h-full and w-full to stretch seamlessly within LearningLayout 
      */}
      <div className="w-full h-full p-6 text-slate-800 bg-slate-50 flex flex-col">
        
        {/* Top Banner Context */}
        <div className="mb-2 text-sm font-bold tracking-widest text-blue-600 uppercase">
          {courseData.grade}
        </div>

        {/* Main Box Area - Now expands to fill vertical space if needed */}
        <div className="flex-1 border-2 border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm">

          {/* Header: Title and Search/Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between p-6 border-b-2 border-slate-100 bg-white">
            <h1 className="text-2xl font-black text-slate-900 uppercase tracking-wide mb-4 md:mb-0">
              {courseData.title}
            </h1>

            <div className="flex items-center gap-3">
              {/* Search Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="search"
                  className="w-48 pl-10 pr-4 py-2 border-2 border-slate-200 rounded-full bg-slate-50 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                />
              </div>

              {/* Filter Button */}
              <button className="p-2 border-2 border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                <svg className="w-5 h-5 text-slate-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="21" x2="4" y2="14"></line>
                  <line x1="4" y1="10" x2="4" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12" y2="3"></line>
                  <line x1="20" y1="21" x2="20" y2="16"></line>
                  <line x1="20" y1="12" x2="20" y2="3"></line>
                  <line x1="1" y1="14" x2="7" y2="14"></line>
                  <line x1="9" y1="8" x2="15" y2="8"></line>
                  <line x1="17" y1="16" x2="23" y2="16"></line>
                </svg>
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6 bg-white">
            {/* Topics Badge */}
            <div className="inline-block px-4 py-1 mb-8 border-2 border-blue-600 text-blue-600 rounded-full font-bold uppercase tracking-widest text-sm">
              Topics
            </div>

            {/* Topics List */}
            <div className="flex flex-col gap-4">
              {courseData.topics.map((topic) => {
                const isExpanded = expandedTopic === topic.id;

                return (
                  <div key={topic.id} className="flex flex-col">
                    {/* Parent Topic Row */}
                    <button
                      onClick={() => toggleTopic(topic.id)}
                      className="flex items-center gap-3 py-2 text-left hover:text-blue-600 transition-colors group"
                    >
                      {/* Thick blue vertical line indicator */}
                      <div className="w-1.5 h-6 bg-blue-600 rounded-full" />

                      <span className="text-lg font-bold uppercase tracking-wide text-slate-800 group-hover:text-blue-600">
                        {topic.title}
                      </span>

                      {/* Expand/Collapse Chevron */}
                      <svg
                        className={`w-5 h-5 ml-2 transition-transform duration-200 ${
                          isExpanded ? "rotate-180 text-blue-600" : "text-slate-400 group-hover:text-blue-600"
                        }`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>

                    {/* Subtopics (Collapsible Content) */}
                    {isExpanded && (
                      <div className="flex flex-col gap-3 mt-3 ml-6">
                        {topic.subtopics.map((subtopic, index) => (
                          <button
  key={index}
  onClick={() =>
    handleSubtopicClick(topic.id, subtopic)
  }
  className="flex items-center gap-3 group cursor-pointer hover:bg-slate-100 p-2 rounded-lg transition text-left"
>
                            {/* Thinner blue vertical line for subtopics */}
                            <div className="w-1 h-5 bg-blue-400 rounded-full" />
                            <span className="text-md text-slate-600 font-medium">
                              {subtopic}
                            </span>
                          </button>
                        ))}
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