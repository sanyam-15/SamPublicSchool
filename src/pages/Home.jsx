import React, { useEffect } from "react";
import HeroBanner from "../components/home/HeroBanner";
import QuickLinks from "../components/home/QuickLinks";
import PrincipalMessage from "../components/home/PrincipalMessage";
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import NewsUpdates from "../components/Core/NewsUpdates";
import ToppersSlider from "../components/Core/toppersSlider";
import PhotoGallery from "../components/Core/photoGallery";
import StatsSection from "../components/Core/counters";
import SchoolIntroSection from "../components/Core/SchoolIntroSection";
import FacilitiesSection from "../components/home/facilitiesSection";
import WhyChooseTemplate from "../components/home/whyChooseTemplate";
import WhatsAppButton from "../components/Core/whatsapp";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-900">
      {/* Hero Section with Overlapping Cards */}
      <div className="relative">
        <HeroBanner />
        
        {/* Feature Cards */}
        <div className="z-10 absolute -bottom-12 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white dark:bg-navy-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-gold-100 dark:bg-gold-900/20 rounded-full mb-4">
                <GraduationCap className="text-gold-600 dark:text-gold-400 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gold-100 mb-3">Academic Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive curriculum fostering holistic development and critical thinking skills
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white dark:bg-navy-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-navy-700 rounded-full mb-4">
                <Calendar className="text-blue-600 dark:text-gold-400 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gold-100 mb-3">Enriching Activities</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Diverse range of extracurricular programs for all-round development
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white dark:bg-navy-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-purple-100 dark:bg-navy-700 rounded-full mb-4">
                <Award className="text-purple-600 dark:text-gold-400 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-gold-100 mb-3">Proven Track Record</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Consistent academic achievements and national-level accolades
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-32 pb-20">
        <SchoolIntroSection />
        
        <div className="max-w-7xl mx-auto px-4">
          <QuickLinks />
          <PrincipalMessage />
          <WhyChooseTemplate />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-16">
            <ToppersSlider />
            <NewsUpdates />
          </div>
          
          <StatsSection />
          <PhotoGallery />
          <FacilitiesSection />
        </div>
      </div>

      <WhatsAppButton />
    </div>
  );
};

export default Home;