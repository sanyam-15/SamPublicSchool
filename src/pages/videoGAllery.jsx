import { useState, useRef } from "react";
import { Button } from "../components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const videos = [
  "https://www.w3schools.com/html/movie.mp4",

  "https://www.w3schools.com/html/movie.mp4",

  "https://www.w3schools.com/html/movie.mp4",

  "https://www.w3schools.com/html/movie.mp4",
];

const itemsPerPage = 3;

export default function VideoGallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalVideo, setModalVideo] = useState(null);
  const videoRefs = useRef([]);
  const modalVideoRef = useRef(null);

  const totalPages = Math.ceil(videos.length / itemsPerPage);
  const displayedVideos = videos.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

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
    <div className="flex flex-col items-center bg-gray-100 pb-10">
      {/* Banner */}
      <div
        className="w-full h-[50vh] bg-cover bg-center flex items-center justify-center text-white text-5xl font-extrabold shadow-md"
        style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2024/03/29/17/43/ai-generated-8663299_1280.png)' }}
      >
        Video Gallery
      </div>

      {/* Gallery Title */}
      <h1 className="text-2xl font-bold my-6 text-gray-800">Video Gallery</h1>

      {/* Video Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {displayedVideos.map((src, index) => (
          <div
            key={index}
            className="relative transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer rounded-lg overflow-hidden"
            onClick={() => handleVideoClick(index)}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={src}
              className="w-140 h-88 object-cover rounded-lg shadow-md"
              controls
              onPlay={() => handleVideoPlay(index)} // Ensure only one plays at a time
            />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center space-x-2 mt-6">
        <Button onClick={handlePrev} disabled={currentPage === 1} size="sm" variant="outline">
          <ChevronLeft />
        </Button>
        {[...Array(totalPages)].map((_, index) => (
          <Button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            size="sm"
            className={`px-3 py-1 ${currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"}`}
          >
            {index + 1}
          </Button>
        ))}
        <Button onClick={handleNext} disabled={currentPage === totalPages} size="sm" variant="outline">
          <ChevronRight />
        </Button>
      </div>

      {/* Modal for Enlarged Video */}
      {modalVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative flex justify-center items-center w-[90vw] h-[90vh]">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 bg-white text-black rounded-full p-3 shadow-lg hover:bg-gray-300 transition-all z-50"
            >
              <X size={30} />
            </button>
            <video
              ref={modalVideoRef} // Assign ref to modal video
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
  );
}
