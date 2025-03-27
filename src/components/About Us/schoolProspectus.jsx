import { motion } from "framer-motion";
import HeroSection from "./HeroSection.jsx";
import { useEffect } from "react";

const SchoolProspectus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-100">
 {/* Hero Section */}
    <HeroSection moto={"Explore Our Vision"} description={"Sam Public School - Prospectus 2025-26"} section={"About Us"} />

       {/* Heading Section */}
       <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-extrabold text-blue-800">School Prospectus 2025-26</h2>
        <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
          Learn more about our institution, values, curriculum, and admission process.
        </p>
      </motion.div>
      {/* PDF Viewer */}
      <motion.div
        className="flex justify-center items-center py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <iframe
          src="/FullStackDeveloperInternTask.pdf"
          width="80%"
          height="600px"
          className="shadow-lg rounded-xl border"
          title="Admission Form"
        />
      </motion.div>
    </div>
  );
};

export default SchoolProspectus;
