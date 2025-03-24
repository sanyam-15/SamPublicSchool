import React from 'react';
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
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Background Image Swiper */}
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{ clickable: true }}  // Ensure navigation is clickable
        autoplay={{ delay: 3000 }}
        loop={true}
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

      {/* Custom Navigation Buttons - Red Arrows */}
      <style>
        {`
          .swiper-button-next, .swiper-button-prev {
            color: white !important;
            background: rgba(239, 68, 68, 0.8) !important; /* Red background */
            width: 50px !important;
            height: 50px !important;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.3s ease-in-out;
          }
          .swiper-button-next:hover, .swiper-button-prev:hover {
            background: rgba(220, 38, 38, 0.9) !important; /* Darker red on hover */
          }
          .swiper-button-next::after, .swiper-button-prev::after {
            font-size: 20px !important;
            font-weight: bold;
          }
        `}
      </style>

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
