import React from 'react';
import { motion } from 'framer-motion';

const PrincipalMessage = () => {
  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80"
                alt="School Principal"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white py-4 px-6 rounded-lg shadow-lg">
                <p className="font-semibold">Dr. Sarah Johnson</p>
                <p className="text-sm">Principal</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Principal's Message</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                "Welcome to Modern School, where we believe in nurturing not just students, but future leaders, innovators, and responsible citizens of tomorrow. Our commitment goes beyond academic excellence – we strive to create an environment that fosters creativity, critical thinking, and character development."
              </p>
              <p>
                "Our dedicated faculty, state-of-the-art facilities, and comprehensive curriculum are designed to provide students with the tools they need to succeed in an ever-evolving world. We emphasize not only academic achievement but also the development of life skills, emotional intelligence, and moral values."
              </p>
              <p>
                "At Modern School, every child is special, and we are committed to helping each student discover and develop their unique talents and abilities. Join us in this exciting journey of learning and growth."
              </p>
            </div>
            <div className="pt-4">
              <img
                src="https://i.imgur.com/1234567.png"
                alt="Principal's Signature"
                className="h-12"
              />
              <p className="text-sm text-gray-500 dark:text-gray-400">Dr. Sarah Johnson</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Principal, Modern School</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrincipalMessage;