import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const images = [
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1516972810927-80185027ca84?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1531315630201-bb15abeb7a27?auto=format&fit=crop&q=80',
];

const HeroBanner = () => {
  const swiperRef = useRef(null);

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Background Image Swiper */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
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
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-600 text-white w-14 h-14 rounded-full flex items-center justify-center z-50 shadow-lg border border-white">
        ◀
      </button>
      <button className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-600 text-white w-14 h-14 rounded-full flex items-center justify-center z-50 shadow-lg border border-white">
        ▶
      </button>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl font-bold mb-6">Sam Public School</h1>
          <p className="text-xl mb-8">
            Experience excellence in education from LKG to 8th standard in a nurturing environment that fosters growth, creativity, and leadership.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/admissions/procedure"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Apply Now
            </Link>
            <Link
              to="/virtual-tour"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold backdrop-blur-sm transition-colors"
            >
              Virtual Tour
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;
