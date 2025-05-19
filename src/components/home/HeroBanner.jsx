import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
    alt: 'Students learning in classroom'
  },
  {
    url: 'https://images.unsplash.com/photo-1516972810927-80185027ca84?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
    alt: 'School building exterior'
  },
  {
    url: 'https://images.unsplash.com/photo-1531315630201-bb15abeb7a27?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
    alt: 'Children playing in school yard'
  },
];

const HeroBanner = () => {
  const swiperRef = useRef(null);

  return (
    <div className="relative h-screen max-h-[800px] w-full overflow-hidden">
      {/* Background Image Swiper with Fade Effect */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ 
          delay: 5000,
          disableOnInteraction: false 
        }}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        className="absolute inset-0 w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img.url})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900/30 to-navy-800/30" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button 
        className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 bg-gold-600 hover:bg-gold-700 text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center z-50 shadow-lg border-2 border-white transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <FaArrowLeft className="text-lg md:text-xl" />
      </button>
      <button 
        className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 bg-gold-600 hover:bg-gold-700 text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center z-50 shadow-lg border-2 border-white transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <FaArrowRight className="text-lg md:text-xl" />
      </button>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl w-full"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-gold-400">Greenland</span> Public <span className="text-navy-300">School</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Nurturing young minds from LKG to 8th standard with excellence in academics, sports, and character development.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/admissions/procedure"
              className="bg-gold-600 hover:bg-gold-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Apply Now
            </Link>
            <Link
              to="/virtual-tour"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105 border border-white/20"
            >
              Virtual Tour
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scrolling Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="animate-bounce w-8 h-14 border-4 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white mt-2 rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroBanner;