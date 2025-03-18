import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, ChevronRight } from 'lucide-react';

const announcements = [
  { id: 1, text: "Annual Sports Day Registration Now Open!", link: "/events/sports-day" },
  { id: 2, text: "Parent-Teacher Meeting Scheduled for Next Week", link: "/events/ptm" },
  { id: 3, text: "Holiday Notice: School Closed for Diwali Festival", link: "/announcements/holiday" },
  { id: 4, text: "Science Exhibition on Environmental Conservation", link: "/events/science-expo" }
];

const AnnouncementTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-primary-500 text-white py-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-4">
          <Bell className="w-5 h-5 animate-bounce" />
          <div className="flex-1 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                className="flex items-center"
              >
                <a 
                  href={announcements[currentIndex].link}
                  className="hover:underline flex items-center"
                >
                  {announcements[currentIndex].text}
                  <ChevronRight className="w-4 h-4 ml-2" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            {announcements.map((_, idx) => (
              <button
                key={idx}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementTicker;