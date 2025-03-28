import { motion } from "framer-motion";
import HeroSection from "../About Us/HeroSection";
import { useEffect } from "react";

export default function RulesAndRegulations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "General Rules",
      items: [
        "Parents must ensure their children attend school regularly. Coming late is not permitted.",
        "School hours are from 8:45 a.m. to 1:45 p.m. Latecomers will not be allowed.",
        "School policies are decided by the management, and adherence is expected.",
        "The school is not responsible for lost items.",
        "Students recovering from infectious diseases need a doctor's certificate.",
        "Absences must be recorded in the school diary and signed by parents.",
        "Prolonged absence without intimation will result in name removal from rolls.",
        "Attendance of 75% is mandatory.",
        "Parents must attend all PTMs and orientation programs.",
        "Interaction with students or teachers during school hours requires prior permission.",
        "The school is responsible for the safety of students only if they use the school bus.",
        "Respect for school property is mandatory.",
        "Students must carry their school identity card daily."
      ]
    },
    {
      title: "Admission Procedure",
      items: [
        "Admissions depend on seat availability and require a Transfer Certificate.",
        "Entrance tests may be required.",
        "The management's decision on admissions is final.",
        "The school reserves the right to change admission policies."
      ]
    },
    {
      title: "Withdrawal Procedure",
      items: [
        "A month's written notice is required for withdrawal.",
        "School leaving certificates are issued free; duplicates cost Rs. 200/-.",
        "Caution money is refundable only at the time of withdrawal.",
        "No transfer certificate will be issued until dues are cleared."
      ]
    },
    {
      title: "Fee Rules",
      items: [
        "Fees must be paid by the 10th of each month.",
        "Late payment incurs a Rs. 50/- fine per day.",
        "Annual charges apply if a student withdraws after March 31.",
        "Transport fees apply for 10 months, regardless of absences.",
        "Fee clearance slips are required before exams."
      ]
    },
    {
      title: "School Uniform",
      items: [
        "Neatly laundered uniform and polished shoes are mandatory.",
        "Winter uniform includes a maroon pullover.",
        "Fancy watches and jewelry are not allowed."
      ]
    },
    {
      title: "Note for Parents",
      items: [
        "Communication between parents and teachers is essential.",
        "Parents should encourage independence and acknowledge achievements.",
        "Regular checking of the school diary is advised.",
        "Address or contact changes must be reported to the class teacher.",
        "Parents must carry the Guardian Card when picking up their children."
      ]
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-navy-900">
      {/* Hero Section */}
      <HeroSection 
        moto={"School Guidelines"} 
        description={"Policies and procedures for our learning community"} 
        section={"Rules and Regulations"} 
      />

      {/* Rules Section */}
      <motion.div 
        className="min-h-screen p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white dark:bg-navy-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-navy-700"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="bg-navy-700 dark:bg-navy-900 p-4 text-center">
              <motion.h2 
                className="text-3xl font-bold text-gold-400"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Rules and Regulations
              </motion.h2>
              <p className="text-gold-100 mt-2">
                Academic Year 2025-26
              </p>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-8">
              {sections.map((section, sectionIndex) => (
                <motion.div 
                  key={sectionIndex}
                  className="space-y-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                >
                  <h3 className="text-xl font-semibold text-navy-900 dark:text-gold-300 border-b border-gold-500 pb-2">
                    {section.title}
                  </h3>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-800 dark:text-gray-300">
                    {section.items.map((item, itemIndex) => (
                      <motion.li 
                        key={itemIndex}
                        className="leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: sectionIndex * 0.1 + itemIndex * 0.05 }}
                      >
                        {item}
                      </motion.li>
                    ))}
                  </ol>
                </motion.div>
              ))}

              {/* Footer Note */}
              <motion.div
                className="mt-8 p-4 bg-gold-50 dark:bg-navy-700 rounded-lg border border-gold-200 dark:border-navy-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-navy-800 dark:text-gold-100 font-medium">
                  Note: The school reserves the right to modify these rules as necessary. 
                  Parents will be notified of any changes through official communication channels.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}