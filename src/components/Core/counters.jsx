import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaBook, FaUserGraduate, FaChalkboardTeacher, FaTrophy } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Color Constants
const COLORS = {
  primary: '#1A365D',     // Navy Blue
  secondary: '#8B0000',   // Crimson
  accent: '#D4AF37',      // Gold
  lightBg: '#F8F9FA',     // Light Gray
  darkText: '#2D3748',    // Dark Gray
  lightText: '#718096'    // Gray
};

const stats = [
  { icon: <FaBook className="text-white" size={40} />, value: 30, suffix: "+", label: "Clubs & Activities" },
  { icon: <FaUserGraduate className="text-white" size={40} />, value: 450, suffix: "+", label: "Happy Students" },
  { icon: <FaChalkboardTeacher className="text-white" size={40} />, value: 20, suffix: "+", label: "Qualified Staff" },
  { icon: <FaTrophy className="text-white" size={40} />, value: 10, suffix: "", label: "Win Awards" }
];

const StatItem = ({ stat, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: delay * 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="flex flex-col items-center p-4 md:p-6"
    >
      <motion.div 
        className="w-20 h-20 flex items-center justify-center rounded-full mb-4"
        style={{ backgroundColor: COLORS.secondary }}
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {stat.icon}
      </motion.div>
      <h2 
        className="text-4xl font-bold mb-2 font-serif"
        style={{ color: COLORS.accent }}
      >
        <CountUp 
          start={0} 
          end={stat.value} 
          duration={2.5} 
          suffix={stat.suffix}
          delay={delay * 0.1}
        />
      </h2>
      <p 
        className="text-lg text-center font-medium"
        style={{ color: COLORS.lightBg }}
      >
        {stat.label}
      </p>
    </motion.div>
  );
};

export default function StatsSection() {
  return (
    <div className="relative w-full py-16 md:py-24 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
          backgroundAttachment: "fixed"
        }}
      >
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: COLORS.primary, opacity: 0.9 }}
        ></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.button 
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 px-6 py-3 font-medium rounded-r-lg shadow-lg transform -rotate-90 origin-left transition-all duration-300"
          style={{ 
            backgroundColor: COLORS.accent,
            color: COLORS.primary
          }}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: '#E6C229' // Slightly lighter gold
          }}
          whileTap={{ scale: 0.95 }}
        >
          Quick Enquiry
        </motion.button>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} delay={index} />
          ))}
        </div>
      </div>
    </div>
  );
}