import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Color Constants
const COLORS = {
  primary: '#1A365D',     // Navy Blue
  secondary: '#8B0000',   // Crimson
  accent: '#D4AF37',      // Gold
  lightBg: '#F8F9FA',     // Light Gray
  darkText: '#2D3748',    // Dark Gray
  lightText: '#718096'    // Gray
};

const Announcement = () => {
  const announcements = [
    "Admissions Open for Academic Session 2025-26",
    "Limited Seats Available - Apply Now!",
    "Scholarship Tests on 15th November 2024",
    "Early Bird Discount Available Until 30th September"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [announcements.length]);

  return (
    <div 
      className="py-3 overflow-hidden"
      style={{ backgroundColor: COLORS.primary }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center">
          <div 
            className="flex-shrink-0 mr-3 px-2 py-1 rounded-md"
            style={{ 
              backgroundColor: `${COLORS.accent}20`,
              border: `1px solid ${COLORS.accent}`
            }}
          >
            <span 
              className="font-semibold text-sm"
              style={{ color: COLORS.accent }}
            >
              NEWS
            </span>
          </div>
          
          <div className="relative h-8 overflow-hidden w-full">
            {announcements.map((announcement, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: index === currentIndex ? 0 : -20,
                  opacity: index === currentIndex ? 1 : 0
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 flex items-center ${
                  index === currentIndex ? "z-10" : "z-0"
                }`}
              >
                <p 
                  className="font-bold text-lg whitespace-nowrap"
                  style={{ color: COLORS.lightBg }}
                >
                  {announcement}
                  <span 
                    className="mx-4"
                    style={{ color: `${COLORS.lightBg}80` }}
                  >
                    •
                  </span>
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.a
            href="/admissions"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-3 flex-shrink-0 px-3 py-1 rounded-md text-sm font-bold transition-colors"
            style={{ 
              backgroundColor: COLORS.accent,
              color: COLORS.primary
            }}
          >
            Apply Now
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Announcement;