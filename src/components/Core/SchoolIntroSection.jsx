import React, { useEffect } from "react";
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

const SchoolIntroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={ref}
      className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: COLORS.lightBg }}
    >
      <div 
        className="absolute inset-0 opacity-20"
        style={{ backgroundColor: COLORS.primary }}
      ></div>
      
      <motion.div
        className="relative max-w-7xl mx-auto"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left: Image */}
          <motion.div 
            className="w-full lg:w-1/2 relative rounded-xl overflow-hidden shadow-2xl"
            variants={imageVariants}
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Students in discussion"
                className="w-full h-full object-cover rounded-xl transform hover:scale-105 transition-transform duration-500"
              />
              <div 
                className="absolute inset-0"
                style={{ 
                  background: `linear-gradient(to top, ${COLORS.primary}80, transparent)`
                }}
              ></div>
            </div>
          </motion.div>
          
          {/* Right: Text Content */}
          <motion.div 
            className="w-full lg:w-1/2 text-white p-8 md:p-10 rounded-xl shadow-2xl relative overflow-hidden"
            style={{ backgroundColor: COLORS.primary }}
            variants={itemVariants}
          >
            <div 
              className="absolute inset-0 opacity-10"
              style={{ 
                backgroundImage: "url('https://www.transparenttextures.com/patterns/concrete-wall.png')",
                backgroundSize: "300px"
              }}
            ></div>
            
            <div className="relative z-10">
              <motion.h2 
                className="text-lg md:text-xl font-medium uppercase mb-2 tracking-wider"
                style={{ color: COLORS.accent }}
                variants={itemVariants}
              >
                Welcome to
              </motion.h2>
              
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                variants={itemVariants}
              >
                <span className="bg-clip-text text-transparent" style={{ 
                  backgroundImage: `linear-gradient(to right, ${COLORS.lightBg}, ${COLORS.accent})`
                }}>
                  Manava Bharati International School
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-base md:text-lg leading-relaxed mb-8"
                style={{ color: `${COLORS.lightBg}CC` }}
                variants={itemVariants}
              >
                Manava Bharati International School is affiliated to CBSE (Affiliation No. 330864) up to Senior Secondary Level. Unique in its perspectives and approach, we practice collaboration & participation in all spheres of life. This ensures holistic development of the students.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={itemVariants}
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => (window.location.href = "/about/dps-patna")}
                  className="font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ 
                    backgroundColor: COLORS.accent,
                    color: COLORS.primary
                  }}
                >
                  Explore Campus
                </motion.button>
                <motion.button 
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: `${COLORS.primary}90`
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => (window.location.href = "/about/dps-patna")}
                  className="border-2 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                  style={{ 
                    borderColor: COLORS.accent,
                    color: COLORS.accent
                  }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SchoolIntroSection;