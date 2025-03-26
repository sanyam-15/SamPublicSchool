import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function InfrastructureComponent({ image, name, description, employeeId }) {
  return (
    <div className="w-full flex justify-center py-6">
      <motion.div
        className="w-[85vw] flex flex-col md:flex-row justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="h-[250px] w-[400px] bg-blue-300 overflow-hidden shadow-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img className="w-full h-full object-cover" src={image} alt="Infrastructure" />
        </motion.div>
        <motion.div
          className="w-[60vw] h-[225px] py-6 px-4 flex flex-col justify-center border border-gray-300 shadow-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-xl font-bold leading-8 mb-2">{name}</h1>
          {
            employeeId && (<h1 className="font-bold mb-4">Employeed Id: {employeeId}</h1>)
          }
          <p className="text-gray-700">
            {description}
          </p>
          {
            !employeeId && (
              <div className="mt-4">
                <div className="h-[1px] bg-black mb-4" ></div>
                <Link className="mt-4 text-blue-600 gap-4">View More</Link>
              </div>
            )
          }
        </motion.div>
      </motion.div>
    </div>
  );
}

export default InfrastructureComponent;