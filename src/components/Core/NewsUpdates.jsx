import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaBullhorn } from "react-icons/fa";

// Color Constants
const COLORS = {
  primary: '#1A365D',     // Navy Blue
  secondary: '#8B0000',   // Crimson
  accent: '#D4AF37',      // Gold
  lightBg: '#F8F9FA',     // Light Gray
  darkText: '#2D3748',    // Dark Gray
  lightText: '#718096'    // Gray
};

const newsData = [
  { 
    id: 1, 
    date: "17 Mar 2024", 
    title: "New Session Announcement", 
    content: "The new academic session will commence on 2nd April 2024. Please ensure all documents are submitted by 15th March.",
    category: "Admissions"
  },
  { 
    id: 2, 
    date: "10 Mar 2024", 
    title: "Holi Celebration", 
    content: "Wishing all students a happy Holi! School will remain closed on 25th March for celebrations.",
    category: "Events"
  },
  { 
    id: 3, 
    date: "5 Mar 2024", 
    title: "Annual Sports Meet", 
    content: "Our Annual Sports Meet was a grand success with over 500 participants! Congratulations to all winners.",
    category: "Achievements"
  },
  { 
    id: 4, 
    date: "1 Mar 2024", 
    title: "Library Expansion", 
    content: "Our new school library wing is now open with over 5000 books across different genres.",
    category: "Facilities"
  },
];

export default function NewsUpdates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  // Auto-rotation effect
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        if (!isHovered) {
          setDirection(1);
          setCurrentIndex(prev => (prev + 1) % newsData.length);
        }
      }, 5000);
    };

    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % newsData.length);
    resetInterval();
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + newsData.length) % newsData.length);
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isHovered) {
        setDirection(1);
        setCurrentIndex(prev => (prev + 1) % newsData.length);
      }
    }, 5000);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.5 }
    })
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 h-full transition-all duration-300 hover:shadow-xl"
      style={{ backgroundColor: COLORS.lightBg }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div 
        className="p-5"
        style={{ backgroundColor: COLORS.primary }}
      >
        <h2 className="text-2xl font-bold text-white flex items-center">
          <FaBullhorn className="mr-3" style={{ color: COLORS.accent }} />
          NEWS & UPDATES
        </h2>
      </div>
      
      {/* News content */}
      <div className="relative h-[350px] md:h-[400px] overflow-hidden">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 p-6 flex flex-col"
          >
            {/* Date and Category */}
            <div className="flex justify-between items-start mb-5">
              <div 
                className="rounded-lg p-3 text-center shadow-sm"
                style={{ backgroundColor: COLORS.lightBg }}
              >
                <div 
                  className="text-sm font-bold"
                  style={{ color: COLORS.primary }}
                >
                  {newsData[currentIndex].date.split(' ')[0]}
                </div>
                <div 
                  className="text-xs"
                  style={{ color: COLORS.lightText }}
                >
                  {newsData[currentIndex].date.split(' ')[1]}
                </div>
                <div 
                  className="text-xs"
                  style={{ color: COLORS.lightText }}
                >
                  {newsData[currentIndex].date.split(' ')[2]}
                </div>
              </div>
              
              <span 
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ 
                  backgroundColor: `${COLORS.accent}20`,
                  color: COLORS.primary
                }}
              >
                {newsData[currentIndex].category}
              </span>
            </div>
            
            {/* News Title */}
            <h3 
              className="text-xl md:text-2xl font-bold mb-4"
              style={{ color: COLORS.darkText }}
            >
              {newsData[currentIndex].title}
            </h3>
            
            {/* News Content */}
            <p 
              className="mb-6 flex-g-1"
              style={{ color: COLORS.lightText }}
            >
              {newsData[currentIndex].content}
            </p>
            
            {/* Navigation Controls */}
            <div className="mt-auto flex justify-between items-center">
              {/* Indicators */}
              <div className="flex space-x-2">
                {newsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1);
                      setCurrentIndex(index);
                      resetInterval();
                    }}
                    className={`h-2 rounded-full transition-all ${index === currentIndex ? 'w-6' : 'w-3'}`}
                    style={{
                      backgroundColor: index === currentIndex ? COLORS.primary : `${COLORS.primary}30`
                    }}
                    aria-label={`View ${newsData[index].title}`}
                  />
                ))}
              </div>
              
              {/* Arrows */}
              <div className="flex space-x-3">
                <button 
                  onClick={handlePrev}
                  className="p-2 rounded-full shadow-md hover:scale-110 transition-all"
                  style={{
                    backgroundColor: COLORS.lightBg,
                    color: COLORS.primary,
                    border: `1px solid ${COLORS.primary}`
                  }}
                  aria-label="Previous news"
                >
                  <FaChevronLeft />
                </button>
                <button 
                  onClick={handleNext}
                  className="p-2 rounded-full shadow-md hover:scale-110 transition-all"
                  style={{
                    backgroundColor: COLORS.accent,
                    color: COLORS.primary
                  }}
                  aria-label="Next news"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}