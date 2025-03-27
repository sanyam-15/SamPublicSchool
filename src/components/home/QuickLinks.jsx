import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Calendar, Medal, Download, BookOpen, Users, Award, ClipboardList } from 'lucide-react';
import { motion } from 'framer-motion';

const QuickLinks = () => {
  const links = [
    {
      icon: FileText,
      title: "Admission Info",
      description: "Application process and requirements",
      link: "/admissions",
      color: "from-navy-600 to-navy-500"
    },
    {
      icon: BookOpen,
      title: "Academics",
      description: "Curriculum and syllabus details",
      link: "/academics",
      color: "from-navy-700 to-navy-600"
    },
    {
      icon: Calendar,
      title: "Exam Dates",
      description: "Upcoming examination schedule",
      link: "/academics/exam-schedule",
      color: "from-gold-600 to-gold-500"
    },
    {
      icon: Medal,
      title: "Results",
      description: "View examination results",
      link: "/academics/results",
      color: "from-gold-700 to-gold-600"
    },
    {
      icon: Users,
      title: "Faculty",
      description: "Meet our teaching staff",
      link: "/about/faculty",
      color: "from-navy-800 to-navy-700"
    },
    {
      icon: Award,
      title: "Achievements",
      description: "Student accomplishments",
      link: "/achievements",
      color: "from-gold-500 to-gold-400"
    },
    {
      icon: Download,
      title: "Downloads",
      description: "Forms and documents",
      link: "/resources/downloads",
      color: "from-navy-500 to-navy-400"
    },
    {
      icon: ClipboardList,
      title: "Events",
      description: "Upcoming school events",
      link: "/events",
      color: "from-gold-800 to-gold-700"
    }
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-navy-500 mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-gold-500 mix-blend-multiply filter blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-base font-semibold tracking-wider text-gold-500 uppercase">
            Quick Access
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-navy-900 dark:text-white tracking-tight sm:text-4xl">
            Important Links
          </p>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-navy-700 dark:text-gray-300">
            Everything you need in one place
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={item.link}
                className={`group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col items-center text-center border border-gray-100 dark:border-gray-700`}
              >
                {/* Gradient background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon with gradient background */}
                <div className={`relative z-10 mb-6 p-4 rounded-full bg-gradient-to-br ${item.color} text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8" />
                </div>
                
                <h3 className="relative z-10 text-xl font-bold mb-2 text-navy-900 dark:text-white group-hover:text-gold-500 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="relative z-10 text-navy-700 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
                
                {/* Animated arrow */}
                <div className="relative z-10 mt-4 text-gold-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Link
            to="/resources"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-navy-600 to-navy-800 hover:from-navy-700 hover:to-navy-900 transition-colors duration-300"
          >
            View All Resources
            <svg className="ml-3 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickLinks;