import React, { useEffect, useState } from "react";

export default function PageLoader({ active }) {
  const [visible, setVisible] = useState(active);

  useEffect(() => {
    if (!active) {
      // Wait for fade-out animation (300ms)
      const timeout = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timeout);
    } else {
      setVisible(true);
    }
  }, [active]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-white z-50
      transition-opacity duration-300
      ${active ? "opacity-100" : "opacity-0"}`}
    >
      <div className="relative flex items-center justify-center">
        {/* Rotating Ring */}
        <div className="absolute w-32 h-32 border-4 border-gray-300 
                        border-t-black rounded-full animate-spin"></div>

        {/* Center Image */}
        <img
          src="/images/logo/logo-transparent.png"
          alt="Artiselo Loading"
          className="w-30 h-30 object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}
