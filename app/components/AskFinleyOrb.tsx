export default function AskFinleyOrb() {
  return (
    <>
      <div className="fixed bottom-5 right-5 z-[9999]">

        <div className="relative w-[38px] h-[38px] finley-float cursor-pointer">

          {/* OUTER CINEMATIC GLOW */}
          <div className="absolute inset-0 rounded-full finley-glow" />

          {/* MAIN ORB */}
          <div className="absolute inset-[2px] rounded-full overflow-hidden border border-white/10 backdrop-blur-xl bg-black/30">

            {/* MOVING AI COLORS */}
            <div className="absolute inset-0 finley-gradient" />

            {/* INNER LIGHT CORE */}
            <div className="absolute inset-[9px] rounded-full bg-white/90 blur-[1px]" />

            {/* ROTATING TEXT */}
            <svg
              className="absolute inset-0 w-full h-full finley-rotate"
              viewBox="0 0 100 100"
            >
              <defs>
                <path
                  id="finleyCirclePath"
                  d="
                    M 50,50
                    m -32,0
                    a 32,32 0 1,1 64,0
                    a 32,32 0 1,1 -64,0
                  "
                />
              </defs>

              <text
                fill="white"
                fontSize="6.5"
                fontWeight="600"
                letterSpacing="1.8"
              >
                <textPath href="#finleyCirclePath" startOffset="0%">
                  ASK FINLEY • ASK FINLEY •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        .finley-float {
          animation: finleyFloat 4s ease-in-out infinite;
        }

        .finley-rotate {
          animation: finleyRotate 10s linear infinite;
        }

        .finley-gradient {
          background: linear-gradient(
            270deg,
            #00e5ff,
            #7c4dff,
            #ff4081,
            #ff9100,
            #00e5ff
          );
          background-size: 400% 400%;
          animation: finleyGradient 6s ease infinite;
          opacity: 0.95;
        }

        .finley-glow {
          background: linear-gradient(
            270deg,
            #00e5ff,
            #7c4dff,
            #ff4081,
            #ff9100,
            #00e5ff
          );
          background-size: 400% 400%;
          filter: blur(10px);
          opacity: 0.9;
          animation:
            finleyGradient 6s ease infinite,
            finleyPulse 3s ease-in-out infinite;
        }

        @keyframes finleyRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes finleyGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes finleyFloat {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes finleyPulse {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.08);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.8;
          }
        }
      `}</style>
    </>
  );
}