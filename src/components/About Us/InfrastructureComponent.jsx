import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function InfrastructureComponent({ image, name, description, employeeId }) {
  return (
    <div className="w-full flex justify-center py-6 px-4 md:px-8 lg:px-12">
      <motion.div
        className="w-[85vw] flex flex-col md:flex-row justify-between items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="w-full max-w-sm h-[250px] sm:h-[300px] md:h-[275px] lg:h-[300px] bg-navy-700 overflow-hidden shadow-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img className="w-full h-full object-cover" src={image} alt="Infrastructure" />
        </motion.div>
        <motion.div
          className="h-auto lg:h-[275px] md:h-[250px] py-6 px-4 flex flex-col justify-center border border-navy-300 shadow-md bg-white dark:bg-navy-800"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-xl font-bold leading-8 mb-2 text-navy-900 dark:text-gold-400">{name}</h1>
          {employeeId && <h1 className="font-bold mb-4 text-navy-700 dark:text-gold-300">Employee ID: {employeeId}</h1>}
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
          {!employeeId && (
            <div className="mt-4">
              <div className="h-[1px] bg-navy-200 dark:bg-navy-600 mb-4"></div>
              <Link className="mt-4 text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300">View More</Link>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default InfrastructureComponent;