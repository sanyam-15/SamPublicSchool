import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Calendar, Medal, Download } from 'lucide-react';

const QuickLinks = () => {
  const links = [
    {
      icon: FileText,
      title: "Admission Info",
      description: "Application process and requirements",
      link: "/admissions"
    },
    {
      icon: Calendar,
      title: "Exam Dates",
      description: "Upcoming examination schedule",
      link: "/academics/exam-schedule"
    },
    {
      icon: Medal,
      title: "Results",
      description: "View examination results",
      link: "/academics/results"
    },
    {
      icon: Download,
      title: "Downloads",
      description: "Forms and documents",
      link: "/resources/downloads"
    }
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group"
            >
              <item.icon className="w-8 h-8 text-primary-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;