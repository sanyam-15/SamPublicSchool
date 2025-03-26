import { motion } from "framer-motion";

const AdmissionPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <motion.div
        className="bg-cover bg-center bg-no-repeat bg-black/60 bg-blend-overlay min-h-[60vh] flex flex-col items-center justify-center text-white text-center p-8"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2020/01/22/09/39/listening-4784915_1280.jpg')`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl font-extrabold bg-blue-600 px-6 py-3 rounded-lg shadow-lg uppercase tracking-wide"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Admissions Open 2024-25
        </motion.h1>
        <p className="text-lg mt-2 text-gray-200">
          Enroll now and shape your future with us!
        </p>
      </motion.div>

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
