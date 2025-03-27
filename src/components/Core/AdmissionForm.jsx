import { motion } from "framer-motion";
import HeroSection from "../About Us/HeroSection";
import { useEffect } from "react";

const AdmissionPage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

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
{/* First Background Image Section */}
<motion.div
  className="bg-cover bg-center bg-no-repeat bg-black/60 bg-blend-overlay min-h-[40vh] md:min-h-[60vh] flex flex-col items-center justify-center text-white text-center px-4 md:px-8 py-6 md:py-12"
  style={{
    backgroundImage: `url('https://cdn.pixabay.com/photo/2020/01/22/09/39/listening-4784915_1280.jpg')`,
  }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <div className="max-w-7xl mx-auto">
    <motion.h1
      className="text-xl md:text-3xl font-bold bg-blue-600 px-4 py-2 rounded-lg shadow-lg uppercase tracking-wide"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      ADMISSIONS OPEN 2025-26
    </motion.h1>
    <motion.p
      className="text-sm md:text-lg mt-2 text-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      Enroll now and shape your future with us!
    </motion.p>
  </div>
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
