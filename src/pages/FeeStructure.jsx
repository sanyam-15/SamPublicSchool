import { motion } from "framer-motion";
import HeroSection from "../components/About Us/HeroSection";

const FeeStructurePage = () => {
  return (
    <div className="bg-gray-100">
<<<<<<< HEAD
      {/* Hero Section */}
      <HeroSection moto={"Fee Structure"} section={"Admissions"} />
=======
      {/* First Background Image Section */}
      <motion.div
        className="bg-cover bg-center bg-no-repeat bg-black/60 bg-blend-overlay min-h-[50vh] flex flex-col items-center justify-center text-white text-center px-4 py-6 md:py-12"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2020/01/22/09/39/listening-4784915_1280.jpg')`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            className="text-xl md:text-3xl font-bold bg-blue-600 px-4 py-2 rounded-lg shadow-lg uppercase tracking-wide"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Fee Structure 2025-26
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
>>>>>>> c60d7c9079d204e32728bbc5b3977a0a6d40fd3f

      {/* Fee Structure Content */}
      <div className="container mx-auto py-6 px-4 md:py-12 md:px-6">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Session 2024-25
        </motion.h2>

        {/* Fee Structure Sections */}
        {[
          {
            title: "School Fees (Charged Quarterly)",
            columns: ["Particulars", "Total School Fee", "Quarterly School Fee"],
            data: [
              ["School Fee (upto IX)", "₹ 86,000", "₹ 21,500"],
              ["School Fee (X - XII WB)", "₹ 88,000", "₹ 22,000"],
              ["School Fee (X - XII)", "₹ 80,000", "₹ 20,000"],
              ["School Fee (XI - XII)", "₹ 84,000", "₹ 21,000"],
            ],
          },
          {
            title: "Annual Fees (Charged in 4 Quarters)",
            columns: ["Particulars", "Total Annual Fee", "Quarterly Annual Fee"],
            data: [
              ["Annual Fee (upto IX)", "₹ 7,650", "₹ 1,910"],
              ["Annual Fee (X - XII)", "₹ 10,800", "₹ 2,700"],
              ["Annual Fee (XII)", "₹ 18,000", "₹ 3,600"],
            ],
          },
          {
            title: "At the time of Admission (Only once from new students)",
            columns: ["Particulars", "Amount", "Remarks"],
            data: [
              ["Admission Fee (upto IX)", "₹ 20,500", "Charged at admission"],
              ["Admission Fee (X - XII)", "₹ 40,000", "Charged at admission"],
            ],
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-xl rounded-xl p-4 md:p-6 mb-6 md:mb-8 border-l-4 border-blue-600"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            <h3 className="text-lg md:text-2xl font-semibold text-blue-700 mb-3 md:mb-4 text-center">
              {section.title}
            </h3>
            <motion.div className="overflow-x-auto">
              <motion.table
                className="w-full border-collapse shadow-lg text-sm md:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
              >
                <thead>
                  <tr className="bg-blue-600 text-white">
                    {section.columns.map((col, i) => (
                      <th key={i} className="p-2 md:p-3 border">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.data.map((row, i) => (
                    <motion.tr
                      key={i}
                      className="hover:bg-gray-100 transition duration-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.2 }}
                    >
                      {row.map((cell, j) => (
                        <td key={j} className="p-2 md:p-3 border">{cell}</td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </motion.table>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* PDF Viewer Section */}
      <motion.div
        className="flex flex-col items-center py-6 md:py-12 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <iframe
          src="/FullStackDeveloperInternTask.pdf"
          width="100%"
          height="500px"
          className="shadow-lg rounded-xl border"
          title="Fee Structure Document"
        />
      </motion.div>
    </div>
  );
};

export default FeeStructurePage;
