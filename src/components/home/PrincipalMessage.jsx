import React from 'react';
import { motion } from 'framer-motion';

// Color Constants
const COLORS = {
  primary: '#1A365D',     // Navy Blue
  secondary: '#8B0000',   // Crimson
  accent: '#D4AF37',      // Gold
  lightBg: '#F8F9FA',     // Light Gray
  darkText: '#2D3748',    // Dark Gray
  lightText: '#718096'    // Gray
};

const PrincipalMessage = () => {
  return (
    <div 
      className="relative py-12 md:py-20 overflow-hidden"
      style={{ backgroundColor: COLORS.lightBg }}
    >
      {/* Decorative elements */}
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-10"
        style={{ backgroundColor: COLORS.primary }}
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 
            className="text-sm md:text-base font-semibold tracking-wider uppercase"
            style={{ color: COLORS.accent }}
          >
            Leadership
          </h2>
          <p 
            className="mt-1 text-2xl md:text-3xl font-extrabold sm:text-3xl md:text-4xl"
            style={{ color: COLORS.primary }}
          >
            From Our Principal
          </p>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Principal Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full order-2 lg:order-1"
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl md:shadow-2xl">
              <img
                src="https://www.yearbooklife.com/wp-content/uploads/2015/02/Principal.jpg"
                alt="School Principal"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div 
                className="absolute inset-0"
                style={{ 
                  background: `linear-gradient(to top, ${COLORS.primary}80, transparent)`
                }}
              ></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 text-white py-2 px-4 md:py-4 md:px-6 rounded-lg shadow-lg"
              style={{ backgroundColor: COLORS.primary }}
            >
              <p className="font-bold text-sm md:text-lg">Mr. Dimpu Kumar</p>
              <p 
                className="text-xs md:text-sm"
                style={{ color: COLORS.accent }}
              >
                Principal
              </p>
            </motion.div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 md:space-y-6 order-1 lg:order-2"
          >
            <div className="relative">
              <div 
                className="absolute -left-4 lg:-left-8 top-0 h-full w-1 rounded-full"
                style={{ backgroundColor: COLORS.accent }}
              ></div>
              
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="bg-white p-4 md:p-0 rounded-lg md:rounded-none md:bg-transparent"
                  // style={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}
                >
                  <p className="text-base md:text-lg leading-relaxed">
                    <span 
                      className="font-semibold"
                      style={{ color: COLORS.primary }}
                    >"Welcome</span> to <span 
                      className="font-semibold"
                      style={{ color: COLORS.primary }}
                    >Greenland Public School</span>, where we nurture future leaders, innovators, and responsible citizens."
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="bg-white p-4 md:p-0 rounded-lg md:rounded-none md:bg-transparent"
                  // style={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}
                >
                  <p 
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: COLORS.darkText }}
                  >
                    "Our dedicated faculty and comprehensive curriculum provide students with tools to succeed in an evolving world, emphasizing life skills and moral values."
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="bg-white p-4 md:p-0 rounded-lg md:rounded-none md:bg-transparent"
                  // style={{ boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}
                >
                  <p 
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: COLORS.darkText }}
                  >
                    "Every child is special. We help each student discover their unique talents on this exciting journey of learning and growth."
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="pt-4 md:pt-6 border-t"
              style={{ borderColor: `${COLORS.primary}20` }}
            >
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="flex-shrink-0">
                  <svg 
                    className="h-8 w-8 md:h-10 md:w-10"
                    style={{ color: COLORS.accent }} 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                  </svg>
                </div>
                <div>
                  <p 
                    className="text-sm md:text-base font-medium"
                    style={{ color: COLORS.primary }}
                  >
                    Mr. Dimpu Kumar
                  </p>
                  <p 
                    className="text-xs md:text-sm"
                    style={{ color: COLORS.lightText }}
                  >
                    Principal, Greenland Public School
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mobile-only CTA button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="lg:hidden mt-6"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full font-medium py-3 px-6 rounded-lg shadow-md transition-all"
                style={{ 
                  backgroundColor: COLORS.accent,
                  color: COLORS.primary
                }}
              >
                Meet Our Leadership
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessage;