import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import HeroSection from "../About Us/HeroSection";

const images = Array(36).fill(
  "https://picsum.photos/800"
);

const itemsPerPage = 24;

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalImage, setModalImage] = useState(null);
  const totalPages = Math.ceil(images.length / itemsPerPage);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handleImageClick = (src) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  const displayedImages = images.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  

  return (
    <div>
      <HeroSection moto={"Image Gallery"} section={"Gallery"} />;
      <div className="flex flex-col items-center bg-[#F9FAFB] pb-10">

        {/* Gallery Title */}
        {/* <h1 className="text-2xl font-bold my-6 text-gray-800">Image Gallery</h1> */}

        {/* Image Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 px-4">
          {displayedImages.map((src, index) => (
            <div
              key={index}
              className="relative transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer overflow-hidden"
              onClick={() => handleImageClick(src)}
            >
              <img
                src={src}
                alt="Gallery"
                className="w-44 h-44 object-cover shadow-md"
              />
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center space-x-2 mt-6">
          <Button
          className="rounded-full"
            onClick={handlePrev}
            disabled={currentPage === 1}
            size="sm"
            variant="outline"
          >
            <ChevronLeft className="rounded-full" />
          </Button>
          {[...Array(totalPages)].map((_, index) => (
            <Button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              size="sm"
              className={`px-3 py-1 ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            size="sm"
            variant="outline"
          >
            <ChevronRight />
          </Button>
        </div>

        {/* Modal for Enlarged Image */}
        {modalImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative p-4 flex justify-center items-center">
              {/* Close Button (Visible & Well Positioned) */}
              <button
                onClick={closeModal}
                className="absolute top-8 right-8 bg-transparentt text-black"
              >
                <X size={24} />
              </button>
              <img
                src={modalImage}
                alt="Enlarged"
                className="max-w-[80vw] max-h-[80vh] object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
