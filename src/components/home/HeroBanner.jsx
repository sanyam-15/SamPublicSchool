import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroBanner = () => {
  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white max-w-2xl"
        >
          <h1 className="text-5xl font-bold mb-6">Nurturing Tomorrow's Leaders Today</h1>
          <p className="text-xl mb-8">Experience excellence in education from LKG to 8th standard in a nurturing environment that fosters growth, creativity, and leadership.</p>
          
          <div className="flex gap-4">
            <Link 
              to="/admissions" 
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Apply Now
            </Link>
            <Link 
              to="/virtual-tour" 
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold backdrop-blur-sm transition-colors"
            >
              Virtual Tour
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Feature Cards */}
      <div className="absolute  bottom-0 left-0 right-0 ">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <GraduationCap className="text-primary-500 w-10 h-10 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Academic Excellence</h3>
            <p className="text-gray-600 dark:text-gray-300">Comprehensive curriculum fostering holistic development</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <Calendar className="text-primary-500 w-10 h-10 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Enriching Activities</h3>
            <p className="text-gray-600 dark:text-gray-300">Diverse range of extracurricular programs</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <Award className="text-primary-500 w-10 h-10 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Proven Track Record</h3>
            <p className="text-gray-600 dark:text-gray-300">Consistent academic achievements and accolades</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;