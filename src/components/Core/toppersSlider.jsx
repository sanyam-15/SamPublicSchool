import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const toppers = [
  { name: "DEEPIKA", percentage: "95.25%", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mWG7dhFwx2mIZUzIIuEn20DY7Z7C4EtVbw&s" },
  { name: "SOUMYA YADAV", percentage: "94.5%", image: "https://i.pinimg.com/236x/b1/67/93/b1679368da6d49cc8568c0b0ecfb7b71.jpg" },
  { name: "RAVI KUMAR", percentage: "93.8%", image: "https://e1.pngegg.com/pngimages/947/974/png-clipart-shraddha-kapoor-woman-in-white-floral-top-smiling.png" },
  { name: "ANJALI SHARMA", percentage: "92.6%", image: "https://images.pexels.com/photos/206551/pexels-photo-206551.jpeg?cs=srgb&dl=pexels-pixabay-206551.jpg&fm=jpg" },
];

export default function ToppersSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 2) % toppers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden flex flex-col justify-center items-center bg-white py-4">
      <h2 className="text-2xl font-bold mb-4">TOPPERS 8TH</h2>
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl border-2 border-gray-300 rounded-lg p-4 shadow-lg bg-gray-50 overflow-hidden">
        <motion.div
          key={index}
          className="flex w-full flex-wrap justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          {toppers.slice(index, index + 2).map((topper, idx) => (
            <div key={idx} className="w-1/2 px-2 md:w-1/2 lg:w-1/2">
              <div className="bg-white shadow-md rounded-lg overflow-hidden text-center border border-gray-300">
                <div className="w-full h-32 md:h-40 overflow-hidden">
                  <img
                    src={topper.image}
                    alt={topper.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm md:text-lg font-semibold">{topper.name}</h3>
                  <p className="text-gray-600 text-xs md:text-sm">VIIIth</p>
                  <p className="text-red-500 font-bold text-sm md:text-base">{topper.percentage}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
