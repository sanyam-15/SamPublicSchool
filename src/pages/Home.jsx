import React from "react";
import HeroBanner from "../components/home/HeroBanner";
import AnnouncementTicker from "../components/home/AnnouncementTicker";
import QuickLinks from "../components/home/QuickLinks";
import PrincipalMessage from "../components/home/PrincipalMessage";
import KeyMetrics from "../components/home/KeyMetrics";
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import NewsUpdates from "../components/Core/NewsUpdates";
import ToppersSlider from "../components/Core/toppersSlider";
import PhotoGallery from "../components/Core/photoGallery";
import StatsSection from "../components/Core/counters";
import SchoolIntroSection from "../components/Core/SchoolIntroSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner />
      <div className="relative">
        {/* Space for the feature cards that overlap from HeroBanner */}
        {/* Feature Cards */}
        <div className="absolute top-0 left-0 right-0" style={{ transform: "translateY(-50%)" }}>
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-blue-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg z-50"
            >
              <GraduationCap className="text-primary-500 w-10 h-10 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Academic Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive curriculum fostering holistic development
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <Calendar className="text-primary-500 w-10 h-10 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Enriching Activities</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Diverse range of extracurricular programs
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <Award className="text-primary-500 w-10 h-10 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Proven Track Record</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Consistent academic achievements and accolades
              </p>
            </motion.div>
          </div>
        </div>
        <div className="pt-32">
          <AnnouncementTicker />
        </div>
        <SchoolIntroSection />
        <QuickLinks />
        <PrincipalMessage />
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <ToppersSlider />
          <NewsUpdates />
        </div>
        <StatsSection />
        <PhotoGallery />
        <KeyMetrics />
      </div>
    </div>
  );
};

export default Home;
