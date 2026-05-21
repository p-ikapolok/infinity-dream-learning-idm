import React, { useState } from "react";
import {
  MessageCircle,
  X,
  Maximize2,
  Minimize2,
  Send,
} from "lucide-react";

export default function AskFinleyWidget() {
  const [open, setOpen] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <>
      {/* FLOATING ORB */}
      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
        }}
      >
        {!open && (
          <button onClick={() => setOpen(true)} className="finley-orb">
            
            {/* GLOW */}
            <div className="finley-glow" />

            {/* CORE */}
            <div className="finley-core">

              {/* MOVING AI COLORS */}
              <div className="finley-gradient" />

              {/* INNER WHITE CORE */}
              <div className="finley-inner-core" />

              {/* ROTATING TEXT */}
              <svg className="finley-text" viewBox="0 0 100 100">
                <defs>
                  <path
                    id="circlePath"
                    d="
                      M 50,50
                      m -34,0
                      a 34,34 0 1,1 68,0
                      a 34,34 0 1,1 -68,0
                    "
                  />
                </defs>

                <text
                  fill="white"
                  fontSize="8.5"
                  fontWeight="600"
                  letterSpacing="2"
                >
                  <textPath href="#circlePath">
                    ASK FINLEY • ASK FINLEY • ASK FINLEY •
                  </textPath>
                </text>
              </svg>
            </div>
          </button>
        )}

        {/* CHATBOX */}
        {open && (
          <div className={`finley-chatbox ${fullscreen ? "fullscreen" : ""}`}>

            {/* HEADER */}
            <div className="finley-header">

              <div className="finley-header-left">
                <div className="finley-mini-orb">
                  <div className="finley-mini-glow" />
                  <div className="finley-mini-inner">
                    <MessageCircle size={14} color="white" />
                  </div>
                </div>

                <div>
                  <h3>Finley AI</h3>
                  <p>Online</p>
                </div>
              </div>

              <div className="finley-actions">
                <button onClick={() => setFullscreen(!fullscreen)}>
                  {fullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                </button>

                <button onClick={() => setOpen(false)}>
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* BODY */}
            <div className="finley-body">
              <div className="finley-message">
                <div className="finley-ai-avatar">✦</div>
                <div className="finley-bubble">
                  Hello 👋 I'm Finley.  
                  How can I help you today?
                </div>
              </div>
            </div>

            {/* INPUT */}
            <div className="finley-input-area">
              <div className="finley-input-box">
                <input type="text" placeholder="Ask Finley..." />
                <button>
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* STYLES */}
      <style>{`
        .finley-orb {
          position: relative;
          width: 62px;
          height: 62px;
          border: none;
          background: transparent;
          cursor: pointer;
          animation: float 4s ease-in-out infinite;
        }

        .finley-glow {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: linear-gradient(
            90deg,
            #00e5ff,
            #b400ff,
            #ff008c,
            #ff9800
          );
          filter: blur(16px);
          opacity: 0.95;
          animation: spinSlow 8s linear infinite;
        }

        .finley-core {
          position: absolute;
          inset: 3px;
          border-radius: 50%;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(10px);
        }

        .finley-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            #00e5ff,
            #9c27b0,
            #ff008c,
            #ff9800
          );
          background-size: 300% 300%;
          animation: gradientMove 5s ease infinite;
          opacity: 0.85;
        }

        .finley-inner-core {
          position: absolute;
          inset: 13px;
          border-radius: 50%;
          background: rgba(255,255,255,0.9);
          filter: blur(1px);
        }

        .finley-text {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          animation: rotateText 12s linear infinite;
        }

        .finley-chatbox {
          width: 360px;
          height: 520px;
          border-radius: 28px;
          overflow: hidden;
          background: rgba(0,0,0,0.75);
          backdrop-filter: blur(18px);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 0 40px rgba(0,0,0,0.4);
          display: flex;
          flex-direction: column;
          transition: all 0.4s ease;
        }

        .finley-chatbox.fullscreen {
          position: fixed;
          inset: 16px;
          width: auto;
          height: auto;
        }

        .finley-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
        }

        .finley-header-left {
          display: flex;
          align-items: center;
          gap: 12px;
          color: white;
        }

        .finley-header-left h3 {
          margin: 0;
          font-size: 14px;
        }

        .finley-header-left p {
          margin: 0;
          font-size: 11px;
          color: #00e5ff;
        }

        .finley-mini-orb {
          position: relative;
          width: 32px;
          height: 32px;
        }

        .finley-mini-glow {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: linear-gradient(
            90deg,
            #00e5ff,
            #b400ff,
            #ff9800
          );
          filter: blur(6px);
          animation: spinSlow 8s linear infinite;
        }

        .finley-mini-inner {
          position: absolute;
          inset: 2px;
          border-radius: 50%;
          background: black;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .finley-actions {
          display: flex;
          gap: 8px;
        }

        .finley-actions button {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.06);
          color: white;
          cursor: pointer;
        }

        .finley-body {
          flex: 1;
          padding: 16px;
          overflow-y: auto;
        }

        .finley-message {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .finley-ai-avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: linear-gradient(
            90deg,
            #00e5ff,
            #b400ff,
            #ff9800
          );
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .finley-bubble {
          max-width: 80%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          color: white;
          padding: 12px 14px;
          border-radius: 18px;
          line-height: 1.5;
          font-size: 14px;
        }

        .finley-input-area {
          padding: 14px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .finley-input-box {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 10px 12px;
        }

        .finley-input-box input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: white;
          font-size: 14px;
        }

        .finley-input-box button {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          color: white;
          background: linear-gradient(
            90deg,
            #00e5ff,
            #b400ff,
            #ff9800
          );
        }

        @keyframes rotateText {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.08); }
          to { transform: rotate(360deg) scale(1); }
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </>
  );
}