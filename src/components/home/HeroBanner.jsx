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
    </div>
  );
};

export default HeroBanner;