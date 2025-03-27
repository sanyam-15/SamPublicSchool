import { motion } from "framer-motion";
import HeroSection from "../components/About Us/HeroSection";

const FeeStructurePage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <HeroSection moto={"Fee Structure"} section={"Admissions"} />

      {/* Fee Structure Content */}
      <div className="container mx-auto py-12 px-6">
        <motion.h2
          className="text-3xl font-bold text-center mb-8 text-gray-800"
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
            className="bg-white shadow-xl rounded-xl p-6 mb-8 border-l-8 border-blue-600"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-4 text-center">
              {section.title}
            </h3>
            <motion.table
              className="w-full border-collapse shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <thead>
                <tr className="bg-blue-600 text-white">
                  {section.columns.map((col, i) => (
                    <th key={i} className="p-3 border">{col}</th>
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
                      <td key={j} className="p-3 border">{cell}</td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>
          </motion.div>
        ))}
      </div>

      {/* PDF Viewer Section */}
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
          title="Fee Structure Document"
        />
      </motion.div>
    </div>
  );
};

export default FeeStructurePage;
