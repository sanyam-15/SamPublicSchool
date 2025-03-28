import { motion } from "framer-motion";
import HeroSection from "../About Us/HeroSection";
import { useEffect } from "react";

const AdmissionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-navy-900">
      {/* Hero Section */}
      <HeroSection 
        moto={"Admissions Open for 2025-26"} 
        description={"Begin your journey with Sam Public School"} 
        section={"Admissions"} 
      />

      {/* Admission Form Heading */}
      <motion.div
        className="text-center mt-12 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-gold-400">
          Admission Form
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          Download and complete the form to begin your admission process
        </p>
      </motion.div>

      {/* PDF Viewer Section */}
      <motion.div
        className="flex justify-center items-center py-12 px-4"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="w-full max-w-5xl bg-white dark:bg-navy-800 shadow-xl rounded-xl overflow-hidden border border-gray-200 dark:border-navy-700">
          <div className="bg-navy-700 dark:bg-navy-900 py-3 px-4 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p className="text-white dark:text-gold-200 text-sm ml-4">
              Sam_Public_School_Admission_Form_2025-26.pdf
            </p>
          </div>
          <iframe
            src="/FullStackDeveloperInternTask.pdf"
            width="100%"
            height="600px"
            className="border-0"
            title="Admission Form 2025-26"
          />
        </div>
      </motion.div>

      {/* Download Button Section */}
      <motion.div
        className="flex flex-col items-center pb-16 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <a
          href="/FullStackDeveloperInternTask.pdf"
          download="Sam_Public_School_Admission_Form_2025-26.pdf"
          className="px-8 py-3 bg-gold-600 hover:bg-gold-700 text-white font-medium rounded-lg shadow-md transition-colors duration-300 flex items-center mb-4"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download Admission Form
        </a>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
          Deadline: May 31, 2025
        </p>
      </motion.div>
    </div>
  );
};

export default AdmissionPage;