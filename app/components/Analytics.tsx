import React, { useMemo } from "react";

// ==========================================
// TYPES & INTERFACES
// ==========================================
interface TermScore {
  term: string;
  score: number;
  classAverage: number;
}

interface SubjectData {
  id: string;
  name: string;
  history: TermScore[];
}

interface CompetencyData {
  name: string;
  score: number;
}

interface StrandData {
  name: string;
  score: number;
  competency: string;
}

// ==========================================
// MOCK REALISTIC CBC DATA (GRADE 8)
// ==========================================
const MOCK_SUBJECTS: SubjectData[] = [
  { id: "s1", name: "Mathematics", history: [{ term: "T1", score: 62, classAverage: 65 }, { term: "T2", score: 68, classAverage: 66 }, { term: "T3", score: 74, classAverage: 67 }, { term: "T4", score: 82, classAverage: 69 }] },
  { id: "s2", name: "English", history: [{ term: "T1", score: 70, classAverage: 72 }, { term: "T2", score: 74, classAverage: 73 }, { term: "T3", score: 76, classAverage: 74 }, { term: "T4", score: 79, classAverage: 75 }] },
  { id: "s3", name: "Kiswahili", history: [{ term: "T1", score: 85, classAverage: 78 }, { term: "T2", score: 88, classAverage: 79 }, { term: "T3", score: 86, classAverage: 80 }, { term: "T4", score: 91, classAverage: 81 }] },
  { id: "s4", name: "Integrated Science", history: [{ term: "T1", score: 55, classAverage: 60 }, { term: "T2", score: 60, classAverage: 62 }, { term: "T3", score: 64, classAverage: 63 }, { term: "T4", score: 68, classAverage: 65 }] },
  { id: "s5", name: "Social Studies", history: [{ term: "T1", score: 78, classAverage: 70 }, { term: "T2", score: 80, classAverage: 71 }, { term: "T3", score: 84, classAverage: 72 }, { term: "T4", score: 88, classAverage: 73 }] }
];

const MOCK_COMPETENCIES: CompetencyData[] = [
  { name: "Communication", score: 85 },
  { name: "Critical Thinking", score: 72 },
  { name: "Creativity", score: 78 },
  { name: "Citizenship", score: 92 },
  { name: "Digital Literacy", score: 68 }
];

const MOCK_STRANDS: StrandData[] = [
  { name: "Number Sense", score: 84, competency: "ME" },
  { name: "Algebra", score: 65, competency: "AE" },
  { name: "Science Inquiry", score: 72, competency: "EE" },
  { name: "Social Awareness", score: 88, competency: "EX" }
];

const ATTENDANCE_HISTORY = [92, 94, 91, 95, 96, 98, 97]; // Weekly %

// ==========================================
// UTILITY FUNCTIONS
// ==========================================
const getGrade = (score: number): string => {
  if (score >= 80) return "EX"; // Exceeding Expectation
  if (score >= 70) return "EE"; // Meeting Expectation (Adjusted mapping)
  if (score >= 60) return "ME"; // Approaching Expectation
  return "AE";                  // Below Expectation
};

const getGradeColor = (grade: string): string => {
  switch (grade) {
    case "EX": return "text-[#2563eb] bg-[#eff6ff] border-[#bfdbfe]";
    case "EE": return "text-[#059669] bg-[#ecfdf5] border-[#a7f3d0]";
    case "ME": return "text-[#d97706] bg-[#fffbeb] border-[#fde68a]";
    case "AE": return "text-[#dc2626] bg-[#fef2f2] border-[#fecaca]";
    default: return "text-[#64748b] bg-[#f8fafc] border-[#e2e8f0]";
  }
};

// ==========================================
// ICONS (PURE SVG)
// ==========================================
const Icons = {
  Sparkles: ({ className = "w-5 h-5" }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>,
  AlertTriangle: ({ className = "w-5 h-5" }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>,
  TrendingUp: ({ className = "w-5 h-5" }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
  TrendingDown: ({ className = "w-5 h-5" }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>,
  CheckCircle: ({ className = "w-5 h-5" }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>,
  Book: ({ className = "w-5 h-5" }) => <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-0-5H20"/></svg>
};

// ==========================================
// SVG CHART COMPONENTS
// ==========================================

const SVGSmoothLineChart = ({ data, color = "#2563eb", height = 60 }: { data: number[], color?: string, height?: number }) => {
  if (data.length === 0) return null;
  const width = 200;
  const min = Math.max(0, Math.min(...data) - 10);
  const max = Math.min(100, Math.max(...data) + 10);
  const range = max - min || 1;
  
  const points = data.map((d, i) => ({
    x: (i / (data.length - 1)) * width,
    y: height - ((d - min) / range) * height
  }));

  // Cubic bezier calculation
  let path = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const curr = points[i];
    const next = points[i + 1];
    const cp1x = curr.x + (next.x - curr.x) / 2;
    path += ` C ${cp1x} ${curr.y}, ${cp1x} ${next.y}, ${next.x} ${next.y}`;
  }

  return (
    <svg width="100%" height="100%" viewBox={`-10 -10 ${width + 20} ${height + 20}`} preserveAspectRatio="none" className="overflow-visible">
      <path d={path} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="4" fill="white" stroke={color} strokeWidth="2" />
      ))}
    </svg>
  );
};

const SVGDualLineChart = ({ studentData, classData }: { studentData: number[], classData: number[] }) => {
  const width = 400;
  const height = 150;
  const min = 40; // Fixed baseline for visual realism
  const max = 100;
  const range = max - min;

  const buildPath = (data: number[]) => {
    const points = data.map((d, i) => ({
      x: (i / (data.length - 1)) * width,
      y: height - ((d - min) / range) * height
    }));
    let p = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const curr = points[i];
      const next = points[i + 1];
      const cp1x = curr.x + (next.x - curr.x) / 2;
      p += ` C ${cp1x} ${curr.y}, ${cp1x} ${next.y}, ${next.x} ${next.y}`;
    }
    return { path: p, points };
  };

  const studentPath = buildPath(studentData);
  const classPath = buildPath(classData);

  // Build area under student line
  const areaPath = `${studentPath.path} L ${width} ${height} L 0 ${height} Z`;

  return (
    <svg width="100%" height="100%" viewBox={`0 -10 ${width} ${height + 20}`} preserveAspectRatio="none" className="overflow-visible">
      {/* Grid Lines */}
      {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
        <line key={i} x1="0" y1={height * ratio} x2={width} y2={height * ratio} stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
      ))}
      
      {/* Class Path */}
      <path d={classPath.path} fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 6" />
      
      {/* Student Area & Path */}
      <path d={areaPath} fill="url(#studentGradient)" opacity="0.2" />
      <path d={studentPath.path} fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
      
      {/* Points */}
      {studentPath.points.map((p, i) => (
        <g key={i}>
          <circle cx={classPath.points[i].x} cy={classPath.points[i].y} r="3" fill="#cbd5e1" />
          <circle cx={p.x} cy={p.y} r="5" fill="white" stroke="#2563eb" strokeWidth="2" />
        </g>
      ))}

      <defs>
        <linearGradient id="studentGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

const SVGRadarChart = ({ data }: { data: CompetencyData[] }) => {
  const size = 240;
  const cx = size / 2;
  const cy = size / 2;
  const radius = (size / 2) - 30;

  const getPoint = (val: number, index: number, total: number) => {
    const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
    const r = (val / 100) * radius;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  };

  const levels = [20, 40, 60, 80, 100];
  const gridPolygons = levels.map(level => {
    return data.map((_, i) => {
      const p = getPoint(level, i, data.length);
      return `${p.x},${p.y}`;
    }).join(" ");
  });

  const dataPoints = data.map((d, i) => getPoint(d.score, i, data.length));
  const dataPolygon = dataPoints.map(p => `${p.x},${p.y}`).join(" ");

  return (
    <div className="relative w-full aspect-square flex items-center justify-center max-w-[300px] mx-auto">
      <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`}>
        {/* Background Grids */}
        {gridPolygons.map((points, i) => (
          <polygon key={i} points={points} fill="none" stroke="#f1f5f9" strokeWidth="1" />
        ))}
        {/* Axes */}
        {data.map((_, i) => {
          const p = getPoint(100, i, data.length);
          return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="#f1f5f9" strokeWidth="1" />;
        })}
        
        {/* Data Area */}
        <polygon points={dataPolygon} fill="#2563eb" fillOpacity="0.15" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round" />
        {dataPoints.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r="4" fill="white" stroke="#2563eb" strokeWidth="2" />
        ))}

        {/* Labels */}
        {data.map((d, i) => {
          const p = getPoint(125, i, data.length);
          // Adjust alignment based on position
          const anchor = p.x < cx - 10 ? "end" : p.x > cx + 10 ? "start" : "middle";
          return (
            <text key={i} x={p.x} y={p.y} textAnchor={anchor} alignmentBaseline="middle" className="text-[10px] font-medium fill-[#64748b]">
              {d.name}
            </text>
          );
        })}
      </svg>
    </div>
  );
};

const SVGCircularProgress = ({ percentage, color = "#2563eb" }: { percentage: number, color?: string }) => {
  const size = 120;
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle cx={size/2} cy={size/2} r={radius} stroke="#f1f5f9" strokeWidth={strokeWidth} fill="none" />
        <circle 
          cx={size/2} cy={size/2} r={radius} 
          stroke={color} strokeWidth={strokeWidth} fill="none" 
          strokeDasharray={circumference} strokeDashoffset={offset} 
          strokeLinecap="round" 
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-[#0f172a] tracking-tight">{percentage}%</span>
        <span className="text-[11px] text-[#64748b] font-medium uppercase tracking-wider">Attendance</span>
      </div>
    </div>
  );
};

// ==========================================
// MAIN DASHBOARD COMPONENT
// ==========================================
export default function CBCAnalyticsDashboard() {
  // --- Derived AI Analytics Logic ---
  const { insights, globalMean, studentTrendData, classTrendData } = useMemo(() => {
    let totalScore = 0;
    let weakest = MOCK_SUBJECTS[0];
    let strongest = MOCK_SUBJECTS[0];
    let risks: string[] = [];

    const latestScores = MOCK_SUBJECTS.map(sub => {
      const last = sub.history[sub.history.length - 1].score;
      const prev = sub.history[sub.history.length - 2].score;
      totalScore += last;
      
      if (last < weakest.history[weakest.history.length - 1].score) weakest = sub;
      if (last > strongest.history[strongest.history.length - 1].score) strongest = sub;
      if (last < 70) risks.push(sub.name);

      return { name: sub.name, diff: last - prev };
    });

    const mean = Math.round(totalScore / MOCK_SUBJECTS.length);
    const overallTrend = latestScores.reduce((acc, curr) => acc + curr.diff, 0) > 0 ? "Improving" : "Declining";

    // Build trend arrays for Dual Chart (Aggregate of all subjects per term)
    const termsCount = MOCK_SUBJECTS[0].history.length;
    const sTrend = Array(termsCount).fill(0);
    const cTrend = Array(termsCount).fill(0);
    
    MOCK_SUBJECTS.forEach(sub => {
      sub.history.forEach((h, i) => {
        sTrend[i] += h.score;
        cTrend[i] += h.classAverage;
      });
    });

    return {
      globalMean: mean,
      studentTrendData: sTrend.map(v => Math.round(v / MOCK_SUBJECTS.length)),
      classTrendData: cTrend.map(v => Math.round(v / MOCK_SUBJECTS.length)),
      insights: {
        weakest: weakest.name,
        strongest: strongest.name,
        trend: overallTrend,
        risks
      }
    };
  }, []);

  const overallGrade = getGrade(globalMean);
  const formula = String.raw`P_{t+1} = S_t + \frac{\sum_{i=1}^{n} (S_i - S_{i-1})}{n}`;

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans p-4 md:p-8">
      <div className="max-w-[1440px] mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 pb-4 border-b border-[#e2e8f0]">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Academic Analytics</h1>
            <p className="text-[#64748b] text-sm mt-1">Grade 8 Competency Based Curriculum (CBC) Profiling</p>
          </div>
          <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-xl border border-[#e2e8f0] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex flex-col items-end border-r border-[#e2e8f0] pr-4">
              <span className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Mean Score</span>
              <span className="text-xl font-bold">{globalMean}</span>
            </div>
            <div className="flex flex-col items-center pl-2">
              <span className="text-[11px] font-bold text-[#64748b] uppercase tracking-wider">Overall Grade</span>
              <span className={`text-lg font-bold px-2 py-0.5 rounded border ${getGradeColor(overallGrade)} mt-0.5`}>
                {overallGrade}
              </span>
            </div>
          </div>
        </div>

        {/* Top Grid: Comparison & Radar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Trend Graph (Col Span 2) */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-[#e2e8f0] p-6 shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold tracking-tight">Performance Trend vs Class Average</h2>
              <div className="flex items-center gap-4 text-xs font-medium">
                <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-[#2563eb]"></div>Student</div>
                <div className="flex items-center gap-1.5"><div className="w-3 h-0.5 border-t-2 border-dashed border-[#94a3b8]"></div>Class Average</div>
              </div>
            </div>
            <div className="flex-1 min-h-[200px] w-full mt-4">
              <SVGDualLineChart studentData={studentTrendData} classData={classTrendData} />
            </div>
          </div>

          {/* CBC Competency Radar */}
          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 shadow-sm flex flex-col items-center">
            <h2 className="text-lg font-semibold tracking-tight w-full mb-2">Core Competencies</h2>
            <p className="text-[13px] text-[#64748b] w-full mb-6">Radar visualization of CBC attributes</p>
            <div className="flex-1 w-full flex items-center justify-center">
              <SVGRadarChart data={MOCK_COMPETENCIES} />
            </div>
          </div>

        </div>

        {/* Middle Grid: AI Insights & Subjects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* AI Insights Engine */}
          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Icons.Sparkles className="w-5 h-5 text-[#2563eb]" />
              <h2 className="text-lg font-semibold tracking-tight">AI Learning Insights</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f8fafc] border border-[#f1f5f9]">
                <Icons.TrendingUp className="w-5 h-5 text-[#10b981] mt-0.5" />
                <div>
                  <h4 className="text-[14px] font-semibold">Strongest Discipline</h4>
                  <p className="text-[13px] text-[#64748b] leading-tight mt-1">Excellent mastery shown in <span className="font-medium text-[#0f172a]">{insights.strongest}</span> consistently over the last 2 terms.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f8fafc] border border-[#f1f5f9]">
                <Icons.TrendingDown className="w-5 h-5 text-[#d97706] mt-0.5" />
                <div>
                  <h4 className="text-[14px] font-semibold">Area for Growth</h4>
                  <p className="text-[13px] text-[#64748b] leading-tight mt-1"><span className="font-medium text-[#0f172a]">{insights.weakest}</span> requires more attention to reach the class median.</p>
                </div>
              </div>

              {insights.risks.length > 0 && (
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#fef2f2] border border-[#fecaca]">
                  <Icons.AlertTriangle className="w-5 h-5 text-[#ef4444] mt-0.5" />
                  <div>
                    <h4 className="text-[14px] font-semibold text-[#b91c1c]">Intervention Required</h4>
                    <p className="text-[13px] text-[#991b1b] leading-tight mt-1">Scores fell below 70 in: {insights.risks.join(", ")}.</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Subjects Breakdown */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-[#e2e8f0] p-6 shadow-sm">
            <h2 className="text-lg font-semibold tracking-tight mb-6">Subject Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {MOCK_SUBJECTS.map((subject) => {
                const latestScore = subject.history[subject.history.length - 1].score;
                const prevScore = subject.history[subject.history.length - 2].score;
                const grade = getGrade(latestScore);
                const isUp = latestScore >= prevScore;

                return (
                  <div key={subject.id} className="flex flex-col group">
                    <div className="flex justify-between items-end mb-2">
                      <div className="flex items-center gap-2">
                        <Icons.Book className="w-4 h-4 text-[#64748b]" />
                        <span className="text-[14px] font-semibold text-[#0f172a]">{subject.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[11px] font-bold px-1.5 py-0.5 rounded border ${getGradeColor(grade)}`}>{grade}</span>
                        <span className="text-[15px] font-bold">{latestScore}</span>
                      </div>
                    </div>
                    <div className="h-[40px] w-full bg-[#f8fafc] rounded-lg border border-[#f1f5f9] p-1">
                      <SVGSmoothLineChart data={subject.history.map(h => h.score)} color={isUp ? "#2563eb" : "#94a3b8"} height={30} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Grid: Strands, Prediction, Attendance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* CBC Strands Breakdown */}
          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 shadow-sm">
            <h2 className="text-lg font-semibold tracking-tight mb-6">CBC Strands Breakdown</h2>
            <div className="space-y-5">
              {MOCK_STRANDS.map((strand, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center text-[13px]">
                    <span className="font-medium text-[#0f172a]">{strand.name}</span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${getGradeColor(strand.competency)}`}>
                      {strand.score}% • {strand.competency}
                    </span>
                  </div>
                  {/* Custom SVG Line Progress (No standard bars) */}
                  <svg width="100%" height="6" className="rounded-full">
                    <line x1="0" y1="3" x2="100%" y2="3" stroke="#f1f5f9" strokeWidth="6" strokeLinecap="round" />
                    <line x1="0" y1="3" x2={`${strand.score}%`} y2="3" stroke="#2563eb" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Attendance Analytics */}
          <div className="bg-white rounded-2xl border border-[#e2e8f0] p-6 shadow-sm flex flex-col items-center justify-center">
            <h2 className="text-lg font-semibold tracking-tight self-start w-full mb-4">Term Attendance</h2>
            <SVGCircularProgress percentage={94} color="#10b981" />
            <div className="w-full mt-6 flex flex-col gap-2">
              <span className="text-[12px] font-medium text-[#64748b]">Weekly Trend</span>
              <div className="h-[30px] w-full">
                <SVGSmoothLineChart data={ATTENDANCE_HISTORY} color="#10b981" height={30} />
              </div>
            </div>
          </div>

          {/* Next Term Prediction */}
          <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-2xl border border-[#334155] p-6 shadow-sm text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Icons.Sparkles className="w-5 h-5 text-[#60a5fa]" />
                <h2 className="text-lg font-semibold tracking-tight">Next Term Projection</h2>
              </div>
              <p className="text-[13px] text-[#94a3b8] leading-relaxed mb-4">
                Based on current momentum and moving averages, the expected baseline score is calculated via: <br/>
                <span className="block mt-2 font-mono text-xs text-[#cbd5e1] opacity-90">
  $ {formula} $
               </span>
              </p>
            </div>
            
            <div className="bg-white/10 rounded-xl p-4 border border-white/10 backdrop-blur-sm flex items-center justify-between">
              <div className="flex flex-col">
                <span className="text-[12px] font-medium text-[#94a3b8] uppercase tracking-wider">Predicted Mean</span>
                <span className="text-3xl font-bold tracking-tight text-white mt-1">78</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[12px] font-medium text-[#94a3b8] uppercase tracking-wider">Est. Grade</span>
                <span className="mt-1 px-3 py-1 bg-white/20 rounded border border-white/20 text-sm font-bold text-white">
                  EE
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}