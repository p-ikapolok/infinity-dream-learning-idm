import { useState, useEffect, useRef } from "react";

// Mock interface for transcript messages
interface TranscriptLine {
  id: string;
  speaker: "Student" | "Finley";
  text: string;
  timestamp: Date;
}

export default function AIVoiceInterface() {
  const [isListening, setIsListening] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [transcript, setTranscript] = useState<TranscriptLine[]>([
    {
      id: "init",
      speaker: "Finley",
      text: "Voice module initialized. I'm ready when you are. Press the microphone to start.",
      timestamp: new Date()
    }
  ]);
  
  // Animation state for the visualizer bars
  const [audioLevels, setAudioLevels] = useState<number[]>(Array(12).fill(20));
  const visualizerInterval = useRef<NodeJS.Timeout | null>(null);
  const transcriptEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the transcript
  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [transcript]);

  // Simulate audio levels for the visualizer
  useEffect(() => {
    if (isListening || isPlaying) {
      visualizerInterval.current = setInterval(() => {
        setAudioLevels(Array.from({ length: 12 }, () => Math.floor(Math.random() * 60) + 10));
      }, 100);
    } else {
      if (visualizerInterval.current) clearInterval(visualizerInterval.current);
      setAudioLevels(Array(12).fill(10)); // Reset to flatline
    }

    return () => {
      if (visualizerInterval.current) clearInterval(visualizerInterval.current);
    };
  }, [isListening, isPlaying]);

  const toggleRecording = () => {
    if (isListening) {
      // Stop listening and simulate Finley's response
      setIsListening(false);
      setIsPlaying(true);
      
      setTranscript(prev => [...prev, {
        id: Date.now().toString(),
        speaker: "Student",
        text: "Can you explain how we update the weights in this layer?",
        timestamp: new Date()
      }]);

      // Simulate Finley thinking then speaking
      setTimeout(() => {
        setTranscript(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          speaker: "Finley",
          text: "Sure thing! We update the weights using gradient descent. The formula is $ W_{new} = W_{old} - \\alpha \\nabla_W J(W) $. The learning rate, $ \\alpha $, controls how big of a step we take.",
          timestamp: new Date()
        }]);
        
        // Stop playing after reading
        setTimeout(() => setIsPlaying(false), 4000);
      }, 1000);

    } else {
      // Start listening
      setIsListening(true);
      setIsPlaying(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-8 text-gray-900 dark:text-gray-100 font-sans flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Column: Voice Controls & Visualizer */}
        <div className="bg-gradient-to-br from-indigo-600 to-blue-700 p-8 flex flex-col items-center justify-center md:w-2/5 relative overflow-hidden">
          {/* Decorative background ripples */}
          {isListening && (
            <>
              <div className="absolute w-64 h-64 bg-white/10 rounded-full animate-ping opacity-20" />
              <div className="absolute w-48 h-48 bg-white/10 rounded-full animate-ping opacity-30 delay-150" />
            </>
          )}

          <div className="relative z-10 flex flex-col items-center">
            {/* Status Text */}
            <div className="text-white/80 text-sm font-bold tracking-widest uppercase mb-8 h-4">
              {isListening ? "Listening..." : isPlaying ? "Finley is speaking..." : "Standby"}
            </div>

            {/* Main Microphone Button */}
            <button 
              onClick={toggleRecording}
              className={`w-24 h-24 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
                isListening 
                  ? "bg-red-500 hover:bg-red-600 scale-110" 
                  : "bg-white text-indigo-600 hover:bg-gray-50 hover:scale-105"
              }`}
            >
              {isListening ? (
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10h6v4H9z" /></svg>
              ) : (
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
              )}
            </button>

            {/* Audio Visualizer Bars */}
            <div className="flex items-end gap-1.5 h-16 mt-10">
              {audioLevels.map((level, idx) => (
                <div 
                  key={idx}
                  className="w-2 bg-white/80 rounded-t-sm transition-all duration-75"
                  style={{ height: `${level}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Live Transcript */}
        <div className="flex-1 p-6 flex flex-col h-[500px]">
          <div className="flex items-center gap-3 mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
            <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            <h2 className="text-xl font-bold">Live Transcript</h2>
          </div>

          <div className="flex-1 overflow-y-auto space-y-6 pr-2">
            {transcript.map((line) => (
              <div 
                key={line.id} 
                className={`flex flex-col ${line.speaker === "Student" ? "items-end" : "items-start"} animate-[fadeIn_0.3s_ease-out]`}
              >
                <span className="text-xs text-gray-400 font-bold mb-1 px-1">
                  {line.speaker}
                </span>
                <div className={`p-4 rounded-2xl max-w-[90%] text-sm leading-relaxed shadow-sm ${
                  line.speaker === "Student"
                    ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-tr-none"
                    : "bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/50 text-indigo-900 dark:text-indigo-100 rounded-tl-none"
                }`}>
                  {line.text}
                </div>
              </div>
            ))}
            <div ref={transcriptEndRef} />
          </div>
          
          {/* Footer controls */}
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center text-xs text-gray-500">
            <button className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>
              Export Log
            </button>
            <span>Powered by Finley Audio Engine</span>
          </div>
        </div>

      </div>
    </div>
  );
}