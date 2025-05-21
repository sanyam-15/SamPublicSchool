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
      {/* Background elements */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 opacity-95"
        style={{ backgroundColor: `${COLORS.primary}08` }}
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
                className="text-3xl md:text-4xl font-extrabold mb-6"
                style={{ color: COLORS.lightBg }}
              >
                Why Choose <span style={{ color: COLORS.accent }}>Greenland Public School?</span>
              </motion.h2>

              <motion.p
                className="text-lg mb-8 leading-relaxed"
                style={{ color: `${COLORS.lightBg}CC` }}
              >
                Greenland Public School is a humble educational institution that values discipline, sincerity, and personal growth. We focus on building a strong academic foundation while nurturing moral values and personal development in every student.
              </motion.p>

              <ul className="space-y-4">
                {[
                  "Over 8 years of consistent service in foundational education",
                  "Dedicated teachers with personal attention to each student",
                  "Emphasis on discipline, values, and character building",
                  "Affordable and accessible education for local families",
                  "Active participation in cultural and community programs"
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
                  Get in Touch
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
                  src="https://res.cloudinary.com/dc8x5xkaz/image/upload/v1747772296/WhatsApp_Image_2025-05-21_at_01.40.22_867973cc_db6pdn.jpg"
                  alt="Greenland Public School Campus"
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
                    onClick={() => (window.location.href = "/contact")}
                    className="w-full font-semibold py-3 px-6 rounded-lg shadow-md transition-all"
                    style={{ 
                      backgroundColor: COLORS.accent,
                      color: COLORS.primary
                    }}
                  >
                    Contact the School
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
