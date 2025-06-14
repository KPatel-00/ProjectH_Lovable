
// AnimatedSwitch.tsx
import React, { useRef, useEffect, useState } from "react";

/**
 * AnimatedSwitch transitions its children in/out smoothly when the key changes.
 * It animates both opacity/scale and container height.
 */
const AnimatedSwitch: React.FC<{
  children: React.ReactNode;
  animationKey: string;
}> = ({ children, animationKey }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | "auto">("auto");
  const [show, setShow] = useState(true);
  const [prev, setPrev] = useState<React.ReactNode>(children);

  useEffect(() => {
    // Animate OUT
    setShow(false);

    // Let out animation finish, then update content
    const timeout = setTimeout(() => {
      setPrev(children);
      setShow(true);
    }, 160); // Slightly > outgoing animation for smoothness

    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [animationKey]);

  useEffect(() => {
    // Animate container height
    if (!containerRef.current) return;
    const el = containerRef.current;
    // Use next frame to capture updated child's height
    requestAnimationFrame(() => {
      if (el.firstElementChild) {
        setHeight(el.firstElementChild.scrollHeight);
        // After animation, reset to auto for content changes (for inputs, steps, etc)
        setTimeout(() => setHeight("auto"), 200);
      }
    });
  }, [animationKey, show, prev, children]);

  return (
    <div
      ref={containerRef}
      // Animate height for container (extra smooth!)
      style={{
        transition: "height 210ms cubic-bezier(.4,0,.2,1)",
        height: typeof height === "number" ? `${height}px` : "auto",
        position: "relative",
      }}
    >
      <div
        className={`absolute w-full left-0 top-0 transition-all duration-200 ease-in-out ${
          show
            ? "opacity-100 pointer-events-auto animate-fade-in animate-scale-in"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          willChange: "opacity, transform",
        }}
        key={animationKey}
      >
        {show ? children : prev}
      </div>
    </div>
  );
};
export default AnimatedSwitch;
