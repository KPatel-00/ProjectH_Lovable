
// AnimatedSwitch.tsx
import React, { useRef, useEffect, useState } from "react";

/**
 * AnimatedSwitch transitions its children in/out smoothly when the key changes.
 * It uses a height and fade (opacity) animation only for subtle transitions.
 */
const AnimatedSwitch: React.FC<{
  children: React.ReactNode;
  animationKey: string;
}> = ({ children, animationKey }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayed, setDisplayed] = useState(children);
  const [isTransitioning, setTransitioning] = useState(false);
  const [height, setHeight] = useState<number | "auto">("auto");
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (!containerRef.current) return;

    // Start fade out, set fixed height
    const el = containerRef.current;
    setHeight(el.scrollHeight);
    setOpacity(0);
    setTransitioning(true);

    // After fade out, show new content, fade in
    const timeout1 = setTimeout(() => {
      setDisplayed(children);
      setHeight(el.scrollHeight); // May different after new content render
      setOpacity(1);

      // After fade in, set auto height
      setTimeout(() => {
        setHeight("auto");
        setTransitioning(false);
      }, 220);
    }, 170);

    return () => {
      clearTimeout(timeout1);
    };
    // eslint-disable-next-line
  }, [animationKey]); // use animationKey

  return (
    <div
      ref={containerRef}
      style={{
        transition: "height 220ms cubic-bezier(.4,0,.2,1)",
        height: typeof height === "number" ? `${height}px` : "auto",
        minHeight: 180,
        position: "relative",
      }}
    >
      <div
        style={{
          opacity: opacity,
          transition: "opacity 170ms cubic-bezier(.4,0,.2,1)",
        }}
        className="w-full"
      >
        {displayed}
      </div>
    </div>
  );
};
export default AnimatedSwitch;
