import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaMusic, FaPaintBrush, FaSwimmer, FaBookOpen } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Color Constants
const COLORS = {
  primary: '#1A365D',     // Navy Blue
  secondary: '#8B0000',   // Crimson
  accent: '#D4AF37',      // Gold
  lightBg: '#F8F9FA',     // Light Gray
  darkText: '#2D3748',    // Dark Gray
  lightText: '#718096'    // Gray
};

const facilities = [
  {
    title: "Music and Dance",
    description: "Our school nurtures creativity through music and dance, helping students bond while offering a refreshing break from academics.",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: <FaMusic className="text-3xl" />
  },
  {
    title: "Art & Craft",
    description: "Millennium World Schools Art and Craft program connects creativity and innovation at an early stage of children's development.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: <FaPaintBrush className="text-3xl" />
  },
  {
    title: "Swimming Pool",
    description: "From learning to float to mastering the butterfly, our school's pool teaches life lessons with every ripple.",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: <FaSwimmer className="text-3xl" />
  },
  {
    title: "Library",
    description: "Our well-stocked library encourages students to develop a love for reading and research, fostering knowledge and creativity.",
    image: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: <FaBookOpen className="text-3xl" />
  },
];

const FacilitiesSection = () => {
  return (
    <section 
      className="relative py-20 px-4 sm:px-6 overflow-hidden"
      style={{ backgroundColor: COLORS.lightBg }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full text-white shadow-lg mx-auto"
            style={{ backgroundColor: COLORS.primary }}
            whileHover={{ rotate: 15, scale: 1.1 }}
          >
            <FaBookOpen className="text-2xl" style={{ color: COLORS.accent }} />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4">
            Our <span style={{ color: COLORS.accent }}>World-Class</span> Facilities
          </h2>
          <p 
            className="text-xl max-w-2xl mx-auto"
            style={{ color: COLORS.lightText }}
          >
            Designed to inspire learning, creativity, and holistic development
          </p>
        </div>

        <div className="relative px-8">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".facilities-next",
              prevEl: ".facilities-prev",
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true 
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-14"
          >
            {facilities.map((facility, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div 
                      className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-md"
                      style={{ color: COLORS.primary }}
                    >
                      {facility.icon}
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 
                      className="text-xl font-bold mb-3"
                      style={{ color: COLORS.primary }}
                    >
                      {facility.title}
                    </h3>
                    <p 
                      className="mb-4"
                      style={{ color: COLORS.lightText }}
                    >
                      {facility.description}
                    </p>
                    <Link
                      to="/facilities"
                      className="inline-flex items-center font-semibold transition-colors"
                      style={{ color: COLORS.accent }}
                    >
                      Learn more
                      <svg 
                        className="w-4 h-4 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        style={{ color: COLORS.accent }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button 
            className="facilities-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-colors hover:scale-110"
            style={{ 
              backgroundColor: COLORS.lightBg,
              color: COLORS.primary,
              border: `1px solid ${COLORS.primary}`
            }}
          >
            ❮
          </button>
          <button 
            className="facilities-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-colors hover:scale-110"
            style={{ 
              backgroundColor: COLORS.accent,
              color: COLORS.primary
            }}
          >
            ❯
          </button>
        </div>

        <motion.div 
          className="text-center mt-12"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "/about/infrastructure")}
            className="px-8 py-3 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            style={{ 
              backgroundColor: COLORS.accent,
              color: COLORS.primary
            }}
          >
            Explore All Facilities
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FacilitiesSection;