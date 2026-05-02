"use client";

import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-8 z-50 grid h-12 w-12 place-items-center bg-ink text-bone shadow-lg transition-all duration-300 hover:bg-sun hover:text-ink cursor-pointer ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <BsArrowUp size={18} />
    </button>
  );
}
