
import { useEffect, useState } from "react";

/** 
 * Returns [scrolled] which is true when window is scrolled down more than 12px.
 * Useful for animated header shadows.
 */
export function useScrollShadow(): [boolean] {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return [scrolled];
}
