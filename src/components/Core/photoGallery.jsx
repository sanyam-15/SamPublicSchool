import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Autoplay } from "swiper/modules";

const images = [
  "https://static.toiimg.com/thumb/msid-115556678,width-400,resizemode-4/115556678.jpg",
  "https://static.toiimg.com/thumb/msid-115556678,width-400,resizemode-4/115556678.jpg",
  "https://static.toiimg.com/thumb/msid-115556678,width-400,resizemode-4/115556678.jpg",
  "https://static.toiimg.com/thumb/msid-115556678,width-400,resizemode-4/115556678.jpg",
  "https://static.toiimg.com/thumb/msid-115556678,width-400,resizemode-4/115556678.jpg"
];

const PhotoGallery = () => {
  return (
    <div className=" py-10 px-4 text-center">
      <h2 className="text-3xl font-bold text-red-500 flex items-center justify-center gap-2">
        <span className="text-4xl">📸</span> PHOTO GALLERY
      </h2>

      <div className="w-[85vw] mx-auto mt-6">
        <Swiper
          slidesPerView={1.5}  // Default: Small screens
          spaceBetween={20}    // Space between images
          freeMode={true}
          loop={true}
          speed={5000}  // Smooth scrolling
          autoplay={{ delay: 0, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },  // Tablets
            768: { slidesPerView: 3 },  // Medium screens
            1024: { slidesPerView: 4 }, // Large screens
          }}
          modules={[FreeMode, Autoplay]}
        >
          {images.concat(images).map((img, index) => (  // Duplicate for seamless loop
            <SwiperSlide key={index} style={{ width: "auto" }}>
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-[300px] h-[200px] object-cover rounded-lg shadow-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button onClick={() => (window.location.href = "/gallery/images")} className="mt-6 px-6 py-2 text-red-500 border border-red-500 rounded-full text-lg hover:bg-red-500 hover:text-white transition">
        VIEW ALL
      </button>
    </div>
  );
};

export default PhotoGallery;
