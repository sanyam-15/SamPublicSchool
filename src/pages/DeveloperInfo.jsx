import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const developers = [
  {
    name: "Abhay Keshri",
    role: "Full Stack Developer",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQG9qO-j-OUQSw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699386259667?e=1748476800&v=beta&t=3R-_W1EBKHvP3TTwV09c8YmhwXpiMP-FKs0gaze2yFc",
    bio: "Passionate MERN stack developer with expertise in front-end and back-end technologies.",
    linkedin: "https://linkedin.com/in/abhaykeshri",
    github: "https://github.com/abhaykeshri",
  },
  {
    name: "Sanyam Jain",
    role: "UI/UX Designer & Frontend Developer",
    image: "https://media.licdn.com/dms/image/v2/D5603AQH7tnRDtRTtCw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727691608794?e=1748476800&v=beta&t=LuDOqwZebQfp0L_RSCU2XNLejrvDMxiLY7WqFlnCS0I",
    bio: "Creative UI/UX designer with expertise in modern web technologies and visual storytelling.",
    linkedin: "https://linkedin.com/in/sanyamjain",
    github: "https://github.com/sanyamjain",
  },
];

const DeveloperInfo = () => {
  return (
    <div className="container mx-auto py-12 px-5 w-[85vw]">
      <motion.h2
        className="text-4xl font-bold text-center mb-10 text-blue-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Meet the Developers
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-10">
        {developers.map((dev, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center text-center transition-transform transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <motion.img
              src={dev.image}
              alt={dev.name}
              className="w-32 h-32 rounded-full mb-4 shadow-md"
              whileHover={{ scale: 1.1 }}
            />
            <h3 className="text-2xl font-semibold text-gray-900">{dev.name}</h3>
            <p className="text-gray-600 font-medium">{dev.role}</p>
            <p className="mt-3 text-gray-700 max-w-sm">{dev.bio}</p>
            <div className="mt-4 flex gap-4">
              <motion.a
                href={dev.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-2xl"
                whileHover={{ scale: 1.2 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href={dev.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 text-2xl"
                whileHover={{ scale: 1.2 }}
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