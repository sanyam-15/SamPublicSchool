import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const developers = [

  {
    name: "Abhay Keshri",
    role: "Full Stack Developer",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEH8gZ635a7MQ/profile-displayphoto-shrink_400_400/B56ZXrcUJlHEAg-/0/1743411824068?e=1749081600&v=beta&t=c0CycHKGclZRebNzTY2uUu_1j3ZbrIFW56m_aiRurbY",
    bio: "Passionate MERN stack developer with expertise in front-end and back-end technologies.",
    linkedin: "https://linkedin.com/in/abhaykeshri",
    github: "https://github.com/abhaykeshri",
  },
  {
    name: "Sanyam Jain",
    role: "Full Stack Developer",
    image: "https://media.licdn.com/dms/image/v2/D5603AQH7tnRDtRTtCw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727691608794?e=1748476800&v=beta&t=LuDOqwZebQfp0L_RSCU2XNLejrvDMxiLY7WqFlnCS0I",
    bio: "Passionate MERN stack developer with expertise in front-end and back-end technologies.",
    linkedin: "https://www.linkedin.com/in/sanyam-jain-b03807290/",
    github: "https://github.com/sanyam-15",
  },
];

const DeveloperInfo = () => {
  return (
    <div className="container mx-auto py-12 px-5 w-[85vw]">
      <motion.h2
        className="text-4xl font-bold text-center mb-10 text-navy-900 dark:text-gold-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Meet the Developers
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {developers.map((dev, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-navy-800 p-6 rounded-2xl shadow-xl flex flex-col items-center text-center transition-all hover:shadow-2xl hover:translate-y-[-5px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.img
              src={dev.image}
              alt={dev.name}
              className="w-32 h-32 rounded-full mb-4 shadow-md border-4 border-gold-500 dark:border-gold-600"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            <h3 className="text-2xl font-semibold text-navy-900 dark:text-gold-300">{dev.name}</h3>
            <p className="text-gold-600 dark:text-gold-400 font-medium">{dev.role}</p>
            <p className="mt-3 text-gray-700 dark:text-gray-300 max-w-sm">{dev.bio}</p>
            <div className="mt-4 flex gap-4">
              <motion.a
                href={dev.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-700 dark:text-gold-400 text-2xl hover:text-navy-900 dark:hover:text-gold-300 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href={dev.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-700 dark:text-gold-400 text-2xl hover:text-navy-900 dark:hover:text-gold-300 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperInfo;