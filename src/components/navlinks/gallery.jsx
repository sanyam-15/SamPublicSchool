import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const galleryData = [
  {
    title: "Principal's Day",
    date: "24-Jan-2025",
    images: Array(12).fill(
      "https://cdn.pixabay.com/photo/2021/11/12/18/18/abandoned-school-6789778_1280.jpg"
    ),
    count: 20,
  },
  {
    title: "Annual Prize Distribution & House Gathering 2025",
    date: "Feb 2025",
    images: Array(12).fill(
      "https://cdn.pixabay.com/photo/2021/11/12/18/18/abandoned-school-6789778_1280.jpg"
    ),
    count: 10,
  },
];

export default function Gallery() {
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [popupImage, setPopupImage] = useState(null);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Photo Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryData.map((gallery, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer relative"
            onClick={() => setSelectedGallery(index)}
          >
            <Card className="overflow-hidden rounded-2xl shadow-lg relative">
              <img
                src={gallery.images[0]}
                alt={gallery.title}
                className="w-full h-48 object-cover brightness-75"
              />
              <CardContent className="absolute bottom-0 left-0 p-4 text-white">
                <h2 className="text-xl font-semibold">{gallery.title}</h2>
                <p className="text-sm">{gallery.date}</p>
              </CardContent>
              <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold py-1 px-2 rounded-full">
                {gallery.count}
              </span>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Modal for Viewing Gallery */}
      {selectedGallery !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-6 rounded-lg shadow-xl max-w-xl w-full relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedGallery(null)}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-lg font-bold"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4">
              {galleryData[selectedGallery].title}
            </h2>

            {/* Scrollable Images */}
            <div className="grid grid-cols-2 gap-2 overflow-y-auto max-h-96 p-2">
              {galleryData[selectedGallery].images.map((image, i) => (
                <motion.img
                  key={i}
                  src={image}
                  alt={`Gallery Image ${i + 1}`}
                  className="w-60 h-60 object-cover rounded-lg cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPopupImage(image)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {/* Image Popup with Proper Centering */}
      {popupImage && (
        <div className="fixed top-20 inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-4 rounded-lg shadow-lg max-w-full w-auto relative flex flex-col items-center"
          >
            {/* Close Button */}
            <button
              onClick={() => setPopupImage(null)}
              className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-lg font-bold"
            >
              ✕
            </button>

            {/* Image properly centered inside white background */}
            <div className="flex items-center justify-center">
              <img
                src={popupImage}
                alt="Selected"
                className="w-auto h-auto max-w-[90vw] max-h-[80vh] rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
