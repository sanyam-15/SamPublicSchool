import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function InfrastructureComponent({ image, name, description }) {
  return (
    <div className="w-full flex justify-center">
      <motion.div
        className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Image Section */}
        <motion.div
          className="w-full lg:w-1/2 h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg relative"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <img 
            className="w-full h-full object-cover" 
            src={image} 
            alt={name} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="w-full lg:w-1/2 bg-white dark:bg-navy-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-navy-700"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-navy-900 dark:text-gold-400 mb-3">
            {name}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {description}
          </p>
          <Link 
            to="#" 
            className="text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 font-medium flex items-center"
          >
            Learn more
            <svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default InfrastructureComponent;