import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, ChevronRight } from 'lucide-react';

const announcements = [
  { id: 2, text: "Parent-Teacher Meeting Scheduled for 1st July", link: "/events/ptm" },
  { id: 3, text: "Holiday Notice: School Closed for Summer Vaccation", link: "/announcements/holiday" }
];

const AnnouncementTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % announcements.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + announcements.length) % announcements.length);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % announcements.length);
  };

  return (
    <div className="bg-navy-700 text-gold-100 py-3 shadow-md ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left side - Bell icon */}
          <div className="flex items-center space-x-4">
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 5
              }}
            >
              <Bell className="w-5 h-5" />
            </motion.div>
            <span className="font-semibold hidden sm:inline-block">ANNOUNCEMENTS:</span>
          </div>

          {/* Center - Announcement text */}
          <div 
            className="flex-1 mx-4 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={announcements[currentIndex].id}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="text-center"
              >
                <a 
                  href={announcements[currentIndex].link}
                  className="hover:text-gold-300 transition-colors flex items-center justify-center"
                >
                  {announcements[currentIndex].text}
                  <ChevronRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right side - Navigation controls */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={handlePrev}
              className="p-1 rounded-full hover:bg-navy-600 transition-colors"
              aria-label="Previous announcement"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex items-center space-x-1">
              {announcements.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentIndex ? 'bg-gold-400' : 'bg-gold-400/30'
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to announcement ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="p-1 rounded-full hover:bg-navy-600 transition-colors"
              aria-label="Next announcement"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementTicker;