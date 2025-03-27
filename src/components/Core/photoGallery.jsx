import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { FaCamera } from "react-icons/fa";
import "swiper/css";
import "swiper/css/free-mode";

// Color Constants
const COLORS = {
  primary: '#1A365D',     // Navy Blue
  secondary: '#8B0000',   // Crimson
  accent: '#D4AF37',      // Gold
  lightBg: '#F8F9FA',     // Light Gray
  darkText: '#2D3748',    // Dark Gray
  lightText: '#718096'    // Gray
};

const images = [
  {
    url: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Science Fair Exhibition"
  },
  {
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Annual Sports Day"
  },
  {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Art & Craft Workshop"
  },
  {
    url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Library Reading Session"
  },
  {
    url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Music Recital"
  },
];

const PhotoGallery = () => {
  return (
    <section 
      className="relative py-20 px-4 sm:px-6 overflow-hidden"
      style={{ backgroundColor: COLORS.primary }}
    >
      {/* Background pattern */}
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
            className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full text-white mx-auto"
            style={{ backgroundColor: COLORS.accent }}
            whileHover={{ rotate: 15, scale: 1.1 }}
          >
            <FaCamera className="text-2xl" />
          </motion.div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Our <span style={{ color: COLORS.accent }}>School</span> Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Capturing the vibrant life and memorable moments of our learning community
          </p>
        </div>

        <div className="relative px-8">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={24}
            freeMode={true}
            loop={true}
            speed={4000}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3.5 },
              1280: { slidesPerView: 4 },
            }}
            modules={[FreeMode, Autoplay]}
            className="!pb-14"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative group overflow-hidden rounded-xl shadow-2xl"
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
                    style={{ backgroundColor: `${COLORS.primary}80` }}
                  >
                    <div>
                      <span className="text-white font-medium text-lg block">{img.title}</span>
                      <span 
                        className="text-sm"
                        style={{ color: COLORS.accent }}
                      >
                        Click to view more
                      </span>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Gradient edges */}
          <div 
            className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
            style={{ background: `linear-gradient(to right, ${COLORS.primary}, transparent)` }}
          ></div>
          <div 
            className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
            style={{ background: `linear-gradient(to left, ${COLORS.primary}, transparent)` }}
          ></div>
        </div>

        <motion.div 
          className="text-center mt-12"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: COLORS.secondary
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => (window.location.href = "/gallery")}
            className="px-8 py-3 rounded-lg text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            style={{ 
              backgroundColor: COLORS.accent,
              color: COLORS.primary
            }}
          >
            Explore Full Gallery
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PhotoGallery;