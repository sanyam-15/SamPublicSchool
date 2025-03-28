import React, { useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "../About Us/HeroSection";

const Admission = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-navy-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <HeroSection 
        moto={"Apply to Sam Public School"} 
        description={"Begin your educational journey with us"} 
        section={"Admissions"} 
      />

      {/* Details Section */}
      <div className="p-8 max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-semibold mb-6 text-center text-navy-900 dark:text-gold-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Admission Process
        </motion.h2>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          At Sam Public School, we offer a streamlined application process focused on identifying
          and nurturing young talent through our dedicated programs and mentorship.
        </motion.p>

        {/* Services Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: "Academic Programs", 
              description: "Comprehensive curriculum from KG to 12th grade with special focus on STEM" 
            },
            { 
              title: "Extracurricular", 
              description: "Sports, arts, and clubs for holistic development" 
            },
            { 
              title: "Faculty Excellence", 
              description: "Highly qualified and experienced teaching staff" 
            },
            { 
              title: "Facilities", 
              description: "State-of-the-art labs, library, and sports infrastructure" 
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-navy-800 rounded-lg shadow-md border border-gray-100 dark:border-navy-700"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
            >
              <h3 className="text-xl font-bold mb-3 text-navy-800 dark:text-gold-300">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Third Background Image Section */}
      <motion.div
        className="relative bg-cover bg-center bg-fixed bg-no-repeat min-h-[60vh]"
        style={{
          backgroundImage: "url('https://img.freepik.com/premium-photo/group-happy-school-students-smiling-camera_488220-26194.jpg')",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-navy-900/60"></div>
      </motion.div>

      {/* Application Process */}
      <div className="bg-gray-100 dark:bg-navy-800 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <motion.h2
            className="text-3xl font-semibold text-center mb-12 text-navy-900 dark:text-gold-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Admission Process
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Online Application",
                desc: "Begin by completing our online application form with student details.",
              },
              {
                title: "Document Submission",
                desc: "Submit required documents including birth certificate and previous school records.",
              },
              {
                title: "Entrance Assessment",
                desc: "Students may be required to complete an age-appropriate assessment.",
              },
              {
                title: "Parent Interview",
                desc: "Meet with our admissions team to discuss your child's educational needs.",
              },
              {
                title: "Admission Decision",
                desc: "Receive notification of acceptance within 7-10 business days.",
              },
              {
                title: "Enrollment Completion",
                desc: "Finalize enrollment by submitting fees and completing registration.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-navy-700 p-6 rounded-lg shadow-md border border-gray-200 dark:border-navy-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="text-3xl font-bold text-gold-600 dark:text-gold-400 mb-3">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 text-navy-800 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="/apply-now"
              className="inline-block px-8 py-3 bg-gold-600 hover:bg-gold-700 text-white font-medium rounded-lg shadow-md transition-colors"
            >
              Begin Your Application
            </a>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Application deadline: May 31, 2025
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Admission;