import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Trophy, Star } from 'lucide-react';

const KeyMetrics = () => {
  const metrics = [
    {
      icon: Users,
      value: "300+",
      label: "Students",
      description: "Active learners"
    },
    {
      icon: BookOpen,
      value: "12:1",
      label: "Student-Teacher Ratio",
      description: "Personalized attention"
    },
    {
      icon: Trophy,
      value: "50+",
      label: "Awards",
      description: "Academic excellence"
    },
    {
      icon: Star,
      value: "98%",
      label: "Success Rate",
      description: "Academic achievement"
    }
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="w-[85vw] mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">School Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <metric.icon className="w-12 h-12 mx-auto mb-4 text-primary-500" />
              <h3 className="text-3xl font-bold mb-2 text-primary-600 dark:text-primary-400">
                {metric.value}
              </h3>
              <p className="text-lg font-semibold mb-2 dark:text-white">{metric.label}</p>
              <p className="text-gray-600 dark:text-gray-300">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyMetrics;