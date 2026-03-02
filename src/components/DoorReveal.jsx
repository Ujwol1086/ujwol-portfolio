import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";

const SCROLL_SENSITIVITY = 0.002; // wheel delta to progress (roughly 500px total to open)
const MIN_SCALE = 0.8;
const MAX_SCALE = 1;

const DoorReveal = ({ children }) => {
  const [progress, setProgress] = useState(0);
  const [doorFullyOpen, setDoorFullyOpen] = useState(false);
  const [isReady] = useState(() => typeof window !== "undefined");
  const touchStartY = useRef(0);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const updateProgress = useCallback((delta) => {
    setProgress((p) => {
      const next = Math.min(1, Math.max(0, p + delta));
      if (next >= 1) {
        requestAnimationFrame(() => {
          setDoorFullyOpen(true);
          document.body.style.overflow = "";
          document.body.style.touchAction = "";
        });
      }
      return next;
    });
  }, []);

  useEffect(() => {
    if (!isReady || doorFullyOpen) return;

    const handleWheel = (e) => {
      e.preventDefault();
      updateProgress(e.deltaY * SCROLL_SENSITIVITY);
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const deltaY = touchStartY.current - e.touches[0].clientY;
      touchStartY.current = e.touches[0].clientY;
      updateProgress(deltaY * SCROLL_SENSITIVITY);
    };

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isReady, doorFullyOpen, updateProgress]);

  // Reduced motion: skip door
  useEffect(() => {
    if (isReady && prefersReducedMotion) {
      setDoorFullyOpen(true);
      setProgress(1);
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
  }, [isReady, prefersReducedMotion]);

  const scale = doorFullyOpen ? MAX_SCALE : MIN_SCALE + (MAX_SCALE - MIN_SCALE) * progress;
  const leftX = -progress * 100;
  const rightX = progress * 100;

  return (
    <>
      <motion.div
        className="origin-top min-h-full w-full"
        style={{
          scale,
          transition: doorFullyOpen ? undefined : "transform 0.1s linear",
        }}
      >
        {children}
      </motion.div>

      {isReady && !doorFullyOpen && (
        <div
          className="fixed inset-0 z-[100] flex pointer-events-auto"
          aria-hidden="true"
        >
          {/* Left door - position driven by progress */}
          <motion.div
            className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-950 flex items-center justify-end pr-4 md:pr-8 shadow-2xl"
            style={{
              x: `${leftX}%`,
              transition: "transform 0.1s linear",
            }}
          />
          {/* Right door */}
          <motion.div
            className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-bl from-gray-900 via-gray-800 to-purple-950 flex items-center justify-start pl-4 md:pl-8 shadow-2xl"
            style={{
              x: `${rightX}%`,
              transition: "transform 0.1s linear",
            }}
          />

          {/* Name only when door is closed (progress 0); remove once door opens */}
          {progress === 0 && (
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
              <motion.p
                className="text-white text-2xl md:text-4xl font-bold tracking-tight text-center px-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Ujwol Aryal
              </motion.p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default DoorReveal;
