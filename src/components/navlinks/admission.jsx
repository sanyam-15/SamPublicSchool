import React from "react";
import { motion } from "framer-motion";

const Admission = () => {
  return (
    <div className="bg-white text-gray-900 text-center">
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
      Apply To Kingster
    </motion.h1>
    <motion.p
      className="text-sm md:text-lg mt-2 text-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      Your journey starts here!
    </motion.p>
  </div>
</motion.div>


      {/* Details Section */}
      <div className="p-8 max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Details About How To Apply
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          If you would like to study in the heart of the city, our institution
          offers a comprehensive application process. We focus on identifying
          talent and fostering growth through dedicated programs and mentorship.
        </motion.p>

        {/* Services Section */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Education Services",
            "International Hubs",
            "Bachelor's and Master's",
            "University Life",
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-4 bg-blue-100 rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2">{item}</h3>
              <p className="text-gray-600">
                Kingster University was established by John Smith to serve the
                public benefit.
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Third Background Image Section */}
      <motion.div
        className="bg-cover bg-center bg-fixed bg-no-repeat bg-black/60 bg-blend-overlay min-h-[60vh]"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/group-happy-school-students-smiling-camera_488220-26194.jpg')",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Application Process */}
      <div className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-8">
          <motion.h2
            className="text-3xl font-semibold text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            The Application Process
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Start Online Submission",
                desc: "A wonderful serenity has taken possession of my soul.",
              },
              {
                title: "Submit The Form",
                desc: "Complete the application form and provide the required documents.",
              },
              {
                title: "Review The Submission",
                desc: "Our team will carefully review your application details.",
              },
              {
                title: "Gather Necessary Documents",
                desc: "Ensure you submit valid identification and certificates.",
              },
              {
                title: "Interviewing Process",
                desc: "Selected students will proceed to an interview round.",
              },
              {
                title: "Final Decision",
                desc: "Final selections will be communicated to successful candidates.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-[45px] text-[#c50227] mb-2">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
