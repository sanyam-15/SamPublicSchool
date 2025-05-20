import { useState, useEffect } from "react";
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

const toppers = [
  { 
    name: "DEEPIKA", 
    percentage: "95.25%", 
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    class: "VIIIth",
    achievement: "Academic Excellence Award" 
  },
  { 
    name: "SOUMYA YADAV", 
    percentage: "94.5%", 
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    class: "VIIIth",
    achievement: "Science Olympiad Gold Medalist" 
  },
  { 
    name: "RAVI KUMAR", 
    percentage: "93.8%", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    class: "VIIIth",
    achievement: "Mathematics Champion" 
  },
  { 
    name: "ANJALI SHARMA", 
    percentage: "92.6%", 
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    class: "VIIIth",
    achievement: "Academic Excellence Award" 
  },
];

export default function ToppersSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % toppers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 transition-all hover:shadow-2xl"
      style={{ backgroundColor: COLORS.lightBg }}
    >
      {/* Header */}
      <div 
        className="p-5"
        style={{ backgroundColor: COLORS.primary }}
      >
        <h2 className="text-xl md:text-2xl font-bold text-white text-center">
          OUR <span style={{ color: COLORS.accent }}>TOP</span> ACHIEVERS
        </h2>
      </div>
      
      {/* Topper Card */}
      <div className="p-6">
        <motion.div
          key={index}
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full max-w-xs">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-all hover:shadow-xl">
              <div className="relative h-48 md:h-56 w-full overflow-hidden">
                <img
                  src={toppers[index].image}
                  alt={toppers[index].name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div 
                  className="absolute bottom-0 left-0 right-0 p-4"
                  style={{ 
                    background: `linear-gradient(to top, ${COLORS.primary}CC, transparent)`
                  }}
                >
                  <h3 
                    className="text-lg md:text-xl font-bold text-white"
                    style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                  >
                    {toppers[index].name}
                  </h3>
                  <p 
                    className="text-sm text-white/90"
                    style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
                  >
                    {toppers[index].achievement}
                  </p>
                </div>
              </div>
              <div className="p-4 text-center">
                <div className="flex justify-between items-center mb-3">
                  <span 
                    className="text-sm"
                    style={{ color: COLORS.lightText }}
                  >
                    Class {toppers[index].class}
                  </span>
                  <span 
                    className="font-bold text-lg"
                    style={{ color: COLORS.accent }}
                  >
                    {toppers[index].percentage}
                  </span>
                </div>
                <div className="mt-2">
                  <span 
                    className="inline-block text-xs px-3 py-1 rounded-full font-medium"
                    style={{ 
                      backgroundColor: `${COLORS.accent}20`,
                      color: COLORS.primary
                    }}
                  >
                    🏆 {toppers[index].achievement}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {toppers.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-6' : 'w-3'}`}
              style={{
                backgroundColor: i === index ? COLORS.primary : `${COLORS.primary}30`
              }}
              aria-label={`View ${toppers[i].name}'s profile`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}