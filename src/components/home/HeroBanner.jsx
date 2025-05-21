import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import VirtualSchool from "/Images/VirtualImage.jpg"
const images = [
  {
    url: 'https://png.pngtree.com/background/20210709/original/pngtree-school-season-welcome-new-students-blackboard-hand-painted-picture-image_923634.jpg',
    alt: 'Students learning in classroom'
  },
  {
    url: 'https://png.pngtree.com/thumb_back/fw800/background/20240522/pngtree-a-middle-school-or-junior-high-school-student-wipes-the-blackboard-image_15676502.jpg',
    alt: 'School building exterior'
  },
  {
    url: 'https://t4.ftcdn.net/jpg/11/56/08/19/360_F_1156081960_qppU7rE9UkBISotVvJ3XazdHLT4C1MmB.webp',
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
  className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 
             bg-gold-600 hover:bg-gold-700 text-white 
             w-6 h-6 md:w-16 md:h-16 
             rounded-full z-50 flex items-center justify-center 
             shadow-md border border-white 
             transition-all duration-300 hover:scale-105"
>
  <FaArrowLeft className="text-[10px] md:text-4xl" />
</button>

<button 
  className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 
             bg-gold-600 hover:bg-gold-700 text-white 
             w-6 h-6 md:w-16 md:h-16 
             rounded-full z-50 flex items-center justify-center 
             shadow-md border border-white 
             transition-all duration-300 hover:scale-105"
>
  <FaArrowRight className="text-[10px] md:text-4xl" />
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
            className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed z-20"
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-0"
      >
        <div className="animate-bounce w-8 h-14 border-4 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white mt-2 rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroBanner;