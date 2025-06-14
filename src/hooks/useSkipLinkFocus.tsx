
import { useEffect } from "react";

/**
 * Moves keyboard focus to the main content after using the skip link.
 * Call this in the main page component.
 */
const useSkipLinkFocus = () => {
  useEffect(() => {
    const handleSkip = (event: Event) => {
      const hash = window.location.hash;
      if (hash === "#main-content") {
        const mainEl = document.getElementById("main-content");
        if (mainEl) {
          mainEl.tabIndex = -1;
          mainEl.focus();
        }
      }
    };
    window.addEventListener("hashchange", handleSkip);
    return () => window.removeEventListener("hashchange", handleSkip);
  }, []);
};

export default useSkipLinkFocus;
