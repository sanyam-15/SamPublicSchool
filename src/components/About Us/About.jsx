import { motion } from "framer-motion";
import HeroSection from "./HeroSection";

export default function AboutDPS() {
  return (
    <div className="relative bg-gray-100">
      {/* Hero Section */}
      <HeroSection moto={"About Sam Public School"} description={"Excellence in education, shaping leaders for a better future."} />
      
      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">Our Journey</h2>
        <p className="text-md md:text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          Established in 1949, Delhi Public School has been a pioneer in academic excellence and holistic development. 
          With a legacy of nurturing bright minds, DPS ensures a progressive and innovative learning environment.
        </p>
        <p className="text-md md:text-lg text-gray-700 leading-relaxed mt-6 text-center max-w-3xl mx-auto">
          Our commitment to quality education, state-of-the-art infrastructure, and a student-centric approach makes DPS
          a beacon of learning and growth.
        </p>
        
        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <motion.div className="bg-white p-6 shadow-lg rounded-xl text-center"
            whileHover={{ scale: 1.05 }}>
            <h3 className="text-2xl font-semibold text-blue-600">Academic Excellence</h3>
            <p className="text-gray-600 mt-3">A curriculum that fosters critical thinking and academic success.</p>
          </motion.div>
          <motion.div className="bg-white p-6 shadow-lg rounded-xl text-center"
            whileHover={{ scale: 1.05 }}>
            <h3 className="text-2xl font-semibold text-green-600">Holistic Development</h3>
            <p className="text-gray-600 mt-3">A balanced approach to education, including sports, arts, and leadership.</p>
          </motion.div>
          <motion.div className="bg-white p-6 shadow-lg rounded-xl text-center"
            whileHover={{ scale: 1.05 }}>
            <h3 className="text-2xl font-semibold text-red-600">Innovative Learning</h3>
            <p className="text-gray-600 mt-3">Integrating technology and modern teaching methods for enhanced learning.</p>
          </motion.div>
        </div>
        
        {/* Vision & Mission */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mt-16 mb-8">Our Vision & Mission</h2>
        <p className="text-md md:text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          DPS envisions nurturing responsible global citizens with academic excellence and strong ethical values. 
          We aim to empower students to become innovative thinkers and compassionate leaders.
        </p>
        <p className="text-md md:text-lg text-gray-700 leading-relaxed mt-6 text-center max-w-3xl mx-auto">
          Through a blend of traditional values and modern educational strategies, we inspire students to excel in their 
          chosen fields and contribute positively to society.
        </p>
      </div>
    </div>
  );
}
