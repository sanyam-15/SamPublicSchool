import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

// Color Constants
const COLORS = {
  primary: '#1A365D',     // Navy Blue
  secondary: '#8B0000',   // Crimson
  accent: '#D4AF37',      // Gold
  lightBg: '#F8F9FA',     // Light Gray
  darkText: '#2D3748',    // Dark Gray
  lightText: '#718096'    // Gray
};

const WhyChooseTemplate = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      Background elements
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 opacity-95"
        style={{ backgroundColor: `${COLORS.primary}08` }} // 8% opacity
      ></div>
      <div 
        className="absolute top-0 right-0 w-40 h-40 rounded-full filter blur-3xl"
        style={{ backgroundColor: COLORS.primary, opacity: 0.1 }}
      ></div>
      <div 
        className="absolute bottom-0 left-0 w-40 h-40 rounded-full filter blur-3xl"
        style={{ backgroundColor: COLORS.accent, opacity: 0.1 }}
      ></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl shadow-2xl overflow-hidden relative"
          style={{ backgroundColor: COLORS.primary }}
        >
          {/* Decorative texture */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{ 
              backgroundImage: "url('https://www.transparenttextures.com/patterns/concrete-wall.png')",
              backgroundSize: "300px"
            }}
          ></div>
          
          <div className="flex flex-col lg:flex-row">
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 p-8 md:p-10 lg:p-12 relative z-10"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl font-extrabold mb-6"
                style={{ color: COLORS.lightBg }}
              >
                Why Choose <span style={{ color: COLORS.accent }}>Greenland Public School?</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg mb-8 leading-relaxed"
                style={{ color: `${COLORS.lightBg}CC` }}
              >
                Greenland Public School is renowned for its commitment to excellence in education, blending rich traditions with modern advancements. Our world-class facilities and holistic approach ensure students excel academically and personally.
              </motion.p>
              
              <ul className="space-y-4">
                {[
                  "28+ Years of Excellence in delivering top-quality education",
                  "A library of 15,000+ books to foster a culture of reading",
                  "State-of-the-art sports complex spanning over 8,000 sq. ft",
                  "100% Result Guarantee - Achieving academic success year after year",
                  "Recognized as one of the top CBSE schools in the region"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.4 }}
                    className="flex items-start"
                    style={{ color: COLORS.lightBg }}
                  >
                    <CheckCircle 
                      className="flex-shrink-0 w-6 h-6 mt-1 mr-3" 
                      style={{ color: COLORS.accent }}
                    />
                    <span className="text-base md:text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile-only CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-8 lg:hidden"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full font-semibold py-3 px-6 rounded-lg shadow-md transition-all"
                  style={{ 
                    backgroundColor: COLORS.accent,
                    color: COLORS.primary
                  }}
                >
                  Learn More About Us
                </motion.button>
              </motion.div>
            </motion.div>
            
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-1/2 p-6 lg:p-8 flex items-center justify-center relative"
            >
              <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Manava Bharati School Campus"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div 
                  className="absolute inset-0"
                  style={{ 
                    background: `linear-gradient(to top, ${COLORS.primary}80, transparent)`
                  }}
                ></div>
                
                {/* Desktop CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute bottom-6 left-6 right-6 hidden lg:block"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => (window.location.href = "/not-found")}
                    className="w-full font-semibold py-3 px-6 rounded-lg shadow-md transition-all"
                    style={{ 
                      backgroundColor: COLORS.accent,
                      color: COLORS.primary
                    }}
                  >
                    Schedule a Campus Tour
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseTemplate;