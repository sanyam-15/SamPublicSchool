import { motion } from "framer-motion";
import HeroSection from "../About Us/HeroSection";

const AdmissionPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <HeroSection moto={"Admissions Open for 2025-26"} section={"Admissions"} />

      {/* Admission Form Heading */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-blue-700">Admission Form</h2>
        <p className="text-gray-600 mt-2">
          Download and fill out the form to apply for admission.
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

export default AdmissionPage;
