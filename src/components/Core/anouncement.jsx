import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const COLORS = {
  primary: "#1A365D",
  secondary: "#8B0000",
  accent: "#D4AF37",
  lightBg: "#F8F9FA",
  darkText: "#2D3748",
  lightText: "#718096",
};

const Announcement = () => {
  const announcements = [
    "Admissions Open for Academic Session 2025-26",
    "Limited Seats Available - Apply Now!",
    "Scholarship Tests on 15th November 2024",
    "Early Bird Discount Available Until 30th September",
  ];

  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth);
    }
  }, []);

  return (
    <div
      className="py-3 overflow-hidden"
      style={{ backgroundColor: COLORS.primary }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center">
          <div
            className="flex-shrink-0 mr-3 px-2 py-1 rounded-md"
            style={{
              backgroundColor: `${COLORS.accent}20`,
              border: `1px solid ${COLORS.accent}`,
            }}
          >
            <span
              className="font-semibold text-sm"
              style={{ color: COLORS.accent }}
            >
              NEWS
            </span>
          </div>
          <div className="relative w-full overflow-hidden" ref={containerRef}>
            <motion.div
              className="flex space-x-8 whitespace-nowrap"
              initial={{ x: "100%" }}
              animate={{ x: `-${width}px` }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              style={{ display: "flex" }}
            >
              {[...announcements, ...announcements].map((announcement, index) => (
                <p
                  key={index}
                  className="font-bold text-lg"
                  style={{ color: COLORS.lightBg }}
                >
                  {announcement}
                  <span className="mx-4" style={{ color: `${COLORS.lightBg}80` }}>
                    •
                  </span>
                </p>
              ))}
            </motion.div>
          </div>
          <motion.a
            href="/admissions/admission-form"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-3 flex-shrink-0 px-3 py-1 rounded-md text-sm font-bold transition-colors"
            style={{ backgroundColor: COLORS.accent, color: COLORS.primary }}
          >
            Apply Now
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Announcement;