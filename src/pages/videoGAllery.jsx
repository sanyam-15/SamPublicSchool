import { useState, useRef } from "react";
import { Button } from "../components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import HeroBanner from "../components/home/HeroBanner";
import HeroSection from "../components/About Us/HeroSection";

const videos = [
 "https://res.cloudinary.com/dc8x5xkaz/video/upload/v1747760852/AQNpIMeB_pG0v2YzDotGr-RfU6KtgV85gc_tECO4FuM0HeWipoXnQd_myZEOtfrJcV-Qb41WWMudl7W2eKbHWHYibsJiHwdhnw0wZgQiskFxMW1aSy-48ehPBccUPsTzGkZBxoqK5A_myxesv.mp4",
  "https://res.cloudinary.com/dc8x5xkaz/video/upload/v1747760841/AQNjO-3u9pwY-k03yrdGWY_dbUDOkzpFX5YMVh_NFK3xZqzcr1-4BxYMtNS3QxPrBRi1vnhenvx4ym_aA5dgah4U_zyelsu.mp4",
  "https://res.cloudinary.com/dc8x5xkaz/video/upload/v1747760833/AQMc1RBoidQ8hrYiAAfm9miPAsA3LSYkVerFvzarW2LaT_3tJm2R1roAq6fv_9CuPyx1KJHsfEcEvKvRpTxcdz0Z_btcpeg.mp4",
  "https://res.cloudinary.com/dc8x5xkaz/video/upload/v1747760831/AQOlPqnolhBCHjWzgttKWk0BdD8fuIF3oEqk6FYlt8BNCi-AztWJwYS-P2JlEUvG4mtl2pvUvqzPbpZ8BHVG0T1f_uhtp0q.mp4",
  "https://res.cloudinary.com/dc8x5xkaz/video/upload/v1747760830/AQOOD7t3eONAgeT0hUMzRH4xMb93APUsB6m52UuMxk4-Tsp-UrQXRBVh7JgK70Ye3_pJJ2x6tAN5QL4j96OunPTS_hcgdca.mp4",
  "https://res.cloudinary.com/dc8x5xkaz/video/upload/v1747760823/AQOOOrJSPmDR8bd3FsffrLhgYx7bhyMk4VfB9K_BKyI_Tzp7JpbbC_ImzUxbnoMJJcjrU3accfZiTVP0Hs36gFEE_wiwngd.mp4",
  "https://res.cloudinary.com/dc8x5xkaz/video/upload/v1747760824/AQOTqesiT5opyYbWP5cVu4yG0dpNGu-eJ_dY6Pnj8_Sf22y-X5oI1zbdhJO9ueTKOlblJqxIiFBRCpfFOPSII6Dz_1_wie2dy.mp4",
  "https://res.cloudinary.com/dc8x5xkaz/video/upload/v1747760821/AQOTqesiT5opyYbWP5cVu4yG0dpNGu-eJ_dY6Pnj8_Sf22y-X5oI1zbdhJO9ueTKOlblJqxIiFBRCpfFOPSII6Dz_yegyne.mp4",
  "https://res.cloudinary.com/dc8x5xkaz/video/upload/v1747760820/AQN54qBgmyTe75K1TfNClUq--2tswsuurKayoRN4eKOf6I1l6F0VgJdQ8iWIhUqfCuCF6POrqNOIz677_m8VJp1E_zhszyn.mp4"
];

const itemsPerPage = 8;

export default function VideoGallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalVideo, setModalVideo] = useState(null);
  const videoRefs = useRef([]);
  const modalVideoRef = useRef(null);

  const totalPages = Math.ceil(videos.length / itemsPerPage);
  const displayedVideos = videos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  // Pause all videos except the one currently playing
  const handleVideoPlay = (index, isModal = false) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });

    if (modalVideoRef.current && isModal) {
      modalVideoRef.current.play();
    } else if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
  };

  // Open video in modal
  const handleVideoClick = (index) => {
    setModalVideo(videos[index]);

    // Pause all videos in the grid before opening modal
    videoRefs.current.forEach((video) => video && video.pause());
  };

  // Close modal and stop the video
  const closeModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setModalVideo(null);
  };

  return (
    <div>
      <HeroSection moto={"Video Gallery"} section={"Gallery"} />
      <div className="flex flex-col items-center bg-[#F9FAFB] pb-10 mt-4">

        {/* Video Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
          {displayedVideos.map((src, index) => (
            <div
              key={index}
              className="relative transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer overflow-hidden"
              onClick={() => handleVideoClick(index)}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={src}
                className="w-88h-88 object-cover shadow-md"
                controls
                muted
                onPlay={() => handleVideoPlay(index)}
              />
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center space-x-2 mt-6 gap-2">
          <button
          className="rounded-full bg-blue-900 text-white p-2"
            onClick={handlePrev}
            disabled={currentPage === 1}
            size="sm"
            variant="outline"
          >
            <ChevronLeft />
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              size="sm"
              className={`px-3 py-1 ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white rounded-full"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300 rounded-full"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
          className="rounded-full bg-blue-900 text-white p-2"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            size="sm"
            variant="outline"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Modal for Enlarged Video */}
        {modalVideo && (
<div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-[9999]">

            <div className="relative flex justify-center items-center w-[90vw] h-[90vh]">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 bg-white text-black rounded-full p-3 shadow-lg hover:bg-gray-300 transition-all z-50"
              >
                <X size={30} />
              </button>
              <video
                ref={modalVideoRef}
                src={modalVideo}
                className="w-full h-full object-contain rounded-lg shadow-xl"
                controls
                autoPlay
                onPlay={() => handleVideoPlay(null, true)} // Pause grid videos when modal plays
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
