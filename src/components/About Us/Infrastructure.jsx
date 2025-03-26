import { motion } from "framer-motion";
import HeroSection from "./HeroSection";

const infrastructureData = [
  { title: "Modern Classrooms", image: "https://picsum.photos/id/1/200/300", description: "Well-equipped digital classrooms with smart boards and high-speed internet." },
  { title: "Library", image: "https://picsum.photos/id/1/200/300", description: "A vast collection of books and digital resources for students and teachers." },
  { title: "Science Labs", image: "https://picsum.photos/id/1/200/300", description: "Advanced laboratories for Physics, Chemistry, and Biology experiments." },
  { title: "Sports Facilities", image: "https://picsum.photos/id/1/200/300", description: "State-of-the-art sports complex with indoor and outdoor games." },
  { title: "Auditorium", image: "https://picsum.photos/id/1/200/300", description: "A spacious and well-equipped auditorium for events and seminars." },
  { title: "Cafeteria", image: "https://picsum.photos/id/1/200/300", description: "Hygienic and nutritious food available for students and staff." }
];

export default function Infrastructure() {
  return (
    <div className="container mx-auto">
      <div>
        <HeroSection moto={"Facilities provided"} description={"Best Facilities ever."} />
      </div>
      <div className="w-[85vw] m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-16">
        {infrastructureData.map((item, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}