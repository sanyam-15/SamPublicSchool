import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const facilities = [
  {
    title: "Music and Dance",
    description:
      "Our school nurtures creativity through music and dance, helping students bond while offering a refreshing break from academics.",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3",
  },
  {
    title: "Art & Craft",
    description:
      "Millennium World Schools Patna Art and Craft program connects creativity and innovation at an early stage of children’s development.",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3",
  },
  {
    title: "Swimming Pool",
    description:
      "From learning to float to mastering the butterfly, our MWS School's pool teaches life lessons with every ripple.",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3",
  },
  {
    title: "Library",
    description:
      "Our well-stocked library encourages students to develop a love for reading and research, fostering knowledge and creativity.",
    image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3",
  },
];

const FacilitiesSection = () => {
  return (
    <section className="text-center py-16 px-4 bg-gray-50 relative">
      <h2 className="text-4xl font-bold">
        Facilities At A <span className="text-red-600">Glance</span>
      </h2>
      <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
        Millennium World School offers a wide range of facilities to support students' academic, spiritual, and social growth.
      </p>
      
      <div className="mt-10 max-w-5xl mx-auto relative">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          pagination={{ clickable: true }}
          loop={false}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {facilities.map((facility, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-xs mx-auto"
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-5 text-left">
                  <h3 className="text-xl font-semibold">{facility.title}</h3>
                  <p className="text-gray-600 mt-2">{facility.description}</p>
                  <Link
                    to="/facilities"
                    className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons - Responsive */}
        <button className="custom-prev absolute left-2 md:left-[-50px] top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition z-10">
          ❮
        </button>
        <button className="custom-next absolute right-2 md:right-[-50px] top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition z-10">
          ❯
        </button>
      </div>
    </section>
  );
};

export default FacilitiesSection;
