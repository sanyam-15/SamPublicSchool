import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import HeroSection from "../About Us/HeroSection";

const images = Array(36).fill("https://picsum.photos/800");
const itemsPerPage = 24;

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalImage, setModalImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    window.scrollTo(0, 0);
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-navy-900">
      <HeroSection 
        moto={"Our School Gallery"} 
        description={"Capturing moments of learning, growth, and achievement"} 
        section={"Gallery"} 
      />

      <div className="flex flex-col items-center py-10 px-4 max-w-7xl mx-auto">
        {/* Image Grid with Animation */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {displayedImages.map((src, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.03 }}
              onClick={() => handleImageClick(src)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover aspect-square"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white font-medium">Event {index + 1}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination Controls */}
        <motion.div 
          className="flex items-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <button
            className={`p-2 rounded-full ${currentPage === 1 ? 'bg-gray-300 dark:bg-navy-700 text-gray-500' : 'bg-navy-700 text-gold-400 hover:bg-navy-800'}`}
            onClick={handlePrev}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="flex gap-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                  currentPage === index + 1
                    ? "bg-gold-600 text-white font-bold"
                    : "bg-gray-200 dark:bg-navy-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-navy-600"
                }`}
                aria-label={`Go to page ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          
          <button
            className={`p-2 rounded-full ${currentPage === totalPages ? 'bg-gray-300 dark:bg-navy-700 text-gray-500' : 'bg-navy-700 text-gold-400 hover:bg-navy-800'}`}
            onClick={handleNext}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>

        {/* Modal for Enlarged Image */}
        <AnimatePresence>
          {modalImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="relative max-w-5xl w-full"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute -top-12 right-0 text-white hover:text-gold-400 transition-colors"
                  aria-label="Close image"
                >
                  <X size={32} />
                </button>
                <img
                  src={modalImage}
                  alt="Enlarged view"
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                />
                <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-navy-900/70 py-2 rounded-lg mx-auto max-w-max px-4">
                  School Event Photo
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}