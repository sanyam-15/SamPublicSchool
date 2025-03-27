import { motion } from "framer-motion";
import { useEffect } from "react";
import HeroSection from "../components/About Us/HeroSection";

const AdmissionPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div>

      {/* Hero Section */}
      <HeroSection moto={"Admissions Policy"} description={"Rules for admissions"} section={"Admissions"} />

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
      Admission Policy
    </motion.h1>
    <motion.p
      className="text-sm md:text-lg mt-2 text-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      Your gateway to academic excellence.
    </motion.p>
  </div>
</motion.div>


      {/* Admission Policy Content */}
      <div className="container mx-auto py-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Admission Guidelines
          </h2>
        </motion.div>

        {/* Sections */}
        {[
          {
            title: "Eligibility Criteria",
            items: [
              "Students must meet the minimum age requirement for the respective class.",
              "Applicants must submit previous academic records for verification.",
              "Admission is subject to the availability of seats.",
            ],
          },
          {
            title: "Admission Process",
            items: [
              "Fill out the admission application form online or at the school office.",
              "Submit required documents, including birth certificate and academic transcripts.",
              "Appear for an entrance test (if applicable).",
              "Attend an interaction session with the school authorities.",
              "Selected candidates will receive an admission confirmation letter.",
            ],
          },
          {
            title: "Required Documents",
            items: [
              "Birth Certificate (for age verification)",
              "Previous School Report Card",
              "Transfer Certificate (if applicable)",
              "Passport-size Photographs",
              "Identity Proof of Parents/Guardians",
            ],
          },
          {
            title: "Important Notes",
            items: [
              "Admissions are granted based on merit and seat availability.",
              "School reserves the right to deny admission without specifying reasons.",
              "Fee payment must be completed within the deadline to confirm admission.",
            ],
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 mb-8 border-l-8 border-blue-600"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              {section.title}
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {section.items.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdmissionPolicyPage;
