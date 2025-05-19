import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import { useEffect } from "react";
import { GraduationCap, Award, Lightbulb } from 'lucide-react';

export default function AboutDPS() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-gray-50 dark:bg-navy-900">
      {/* Hero Section */}
      <HeroSection 
        moto={"About Greenland Public School"} 
        description={"Excellence in education, shaping leaders for a better future."} 
        section={"About Us"} 
      />
      
      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-gold-400 text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Journey
        </motion.h2>
        
        <motion.p 
          className="text-md md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa unde iste deserunt alias dolores accusantium corporis error tempora, at inventore nemo voluptate accusamus, quisquam expedita quam vitae molestiae dignissimos. Maxime!
        </motion.p>
        
        <motion.p 
          className="text-md md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Our commitment to quality education, state-of-the-art infrastructure, and a student-centric approach makes 
          Greenland Public School a beacon of learning and growth.
        </motion.p>
        
        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div 
            className="bg-white dark:bg-navy-800 p-6 shadow-lg rounded-xl text-center border border-gray-100 dark:border-navy-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
          >
            <div className="w-16 h-16 bg-gold-100 dark:bg-gold-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="text-gold-600 dark:text-gold-400 w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold text-navy-800 dark:text-gold-300">Academic Excellence</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-3">
              A curriculum that fosters critical thinking and academic success.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-navy-800 p-6 shadow-lg rounded-xl text-center border border-gray-100 dark:border-navy-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
          >
            <div className="w-16 h-16 bg-gold-100 dark:bg-gold-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-gold-600 dark:text-gold-400 w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold text-navy-800 dark:text-gold-300">Holistic Development</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-3">
              A balanced approach to education, including sports, arts, and leadership.
            </p>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-navy-800 p-6 shadow-lg rounded-xl text-center border border-gray-100 dark:border-navy-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
          >
            <div className="w-16 h-16 bg-gold-100 dark:bg-gold-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="text-gold-600 dark:text-gold-400 w-8 h-8" />
            </div>
            <h3 className="text-2xl font-semibold text-navy-800 dark:text-gold-300">Innovative Learning</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-3">
              Integrating technology and modern teaching methods for enhanced learning.
            </p>
          </motion.div>
        </div>
        
        {/* Vision & Mission */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-gold-400 text-center mt-16 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          Our Vision & Mission
        </motion.h2>
        
        <motion.p 
          className="text-md md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          Greenland Public School envisions nurturing responsible global citizens with academic excellence and strong ethical values. 
          We aim to empower students to become innovative thinkers and compassionate leaders.
        </motion.p>
        
        <motion.p 
          className="text-md md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          Through a blend of traditional values and modern educational strategies, we inspire students to excel in their 
          chosen fields and contribute positively to society.
        </motion.p>
      </div>
    </div>
  );
}