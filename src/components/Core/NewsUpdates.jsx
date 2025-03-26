import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const newsData = [
  { id: 1, date: "17 Mar 25", title: "For new session", content: "Dear Parents, we would like to inform you that the school will remain closed for Term Break..." },
  { id: 2, date: "10 Mar 25", title: "Holi Wishes", content: "Wishing all students and parents a very happy and colorful Holi! May this festival bring joy..." },
  { id: 3, date: "5 Mar 25", title: "Annual Sports Meet", content: "Our Annual Sports Meet was a grand success! Thank you to all students and parents for..." },
  { id: 4, date: "1 Mar 25", title: "New Library Opening", content: "Exciting news! Our new school library is now open with over 5000 books across different genres..." },
  { id: 5, date: "25 Feb 25", title: "Exam Schedule Released", content: "The final term exam schedule is now available on the school website. Please check for details..." },
];

export default function NewsUpdates() {
  const [selectedNews, setSelectedNews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    startScrolling();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startScrolling = () => {
    intervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        if (scrollTop + clientHeight >= scrollHeight) {
          scrollRef.current.scrollTop = 0;
        } else {
          scrollRef.current.scrollTop += 2;
        }
      }
    }, 30);
  };

  const stopScrolling = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div className="relative w-full max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl h-[350px] overflow-hidden border rounded-lg bg-white-50 p-4 shadow-lg mx-auto">
      <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3">📢 News Updates</h2>
      <div
        className="h-[300px] overflow-y-scroll scrollbar-hide"
        ref={scrollRef}
        onMouseEnter={stopScrolling}
        onMouseLeave={startScrolling}
      >
        {newsData.map((news) => (
          <motion.div key={news.id} className="py-3 border-b">
            <div className="text-xs md:text-sm text-gray-500 font-medium">{news.date}</div>
            <h3 className="text-sm md:text-lg font-bold text-gray-800">{news.title}</h3>
            <p className="text-xs md:text-sm text-gray-700">{news.content}</p>
            <button
              className="text-red-600 hover:underline text-xs md:text-sm font-medium"
              onClick={() => {
                setSelectedNews(news);
                setIsModalOpen(true);
              }}
            >
              View More
            </button>
          </motion.div>
        ))}
      </div>

      {isModalOpen && selectedNews && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-sm md:max-w-md">
            <h2 className="text-lg md:text-xl font-bold">{selectedNews.title}</h2>
            <p className="mt-2 text-sm md:text-base text-gray-700">{selectedNews.content}</p>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
