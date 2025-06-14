
import React, { useRef, useEffect, useState } from "react";
import TenantSearchBar from "../TenantSearchBar";

const TenantSearchBarSticky: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        setSticky(window.scrollY > ref.current.offsetTop);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div ref={ref} className={isSticky ? "sticky top-0 z-30 bg-background/95 shadow animate-fade-in" : ""}>
      <TenantSearchBar />
    </div>
  );
};
export default TenantSearchBarSticky;
