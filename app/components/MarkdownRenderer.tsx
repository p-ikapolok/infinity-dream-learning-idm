import React from "react"; import ReactMarkdown from "react-markdown"; import remarkMath from "remark-math"; import rehypeKatex from "rehype-katex";

// IMPORTANT: // Make sure you imported KaTeX CSS once in your app root: // import "katex/dist/katex.min.css";

interface MarkdownRendererProps { content: string; }

export default function MarkdownRenderer({ content }: MarkdownRendererProps) { return ( <div className="prose prose-slate max-w-none text-[#334155] leading-[1.8]"> <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} components={{ h1: ({ children }) => ( <h1 className="text-2xl font-bold text-[#0f172a] mt-6 mb-3"> {children} </h1> ), h2: ({ children }) => ( <h2 className="text-xl font-semibold text-[#0f172a] mt-5 mb-2"> {children} </h2> ), p: ({ children }) => ( <p className="mb-4 text-[16px] leading-[1.8]"> {children} </p> ), code: ({ children }) => ( <code className="bg-slate-100 px-2 py-1 rounded text-sm"> {children} </code> ), ul: ({ children }) => ( <ul className="list-disc ml-6 mb-4 space-y-1"> {children} </ul> ), li: ({ children }) => ( <li className="text-[15px] text-[#334155]"> {children} </li> ), }} > {content} </ReactMarkdown> </div> ); }