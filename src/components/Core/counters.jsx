import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { FaBook, FaUserGraduate, FaChalkboardTeacher, FaTrophy } from "react-icons/fa";

const stats = [
  { icon: <FaBook size={40} />, value: 30, label: "Clubs & Activities" },
  { icon: <FaUserGraduate size={40} />, value: 450, label: "Happy Students" },
  { icon: <FaChalkboardTeacher size={40} />, value: 20, label: "Qualified Staff" },
  { icon: <FaTrophy size={40} />, value: 10, label: "Win Awards" }
];

export default function StatsSection() {
  return (
    <div
      className="relative w-full bg-fixed py-16 bg-cover bg-center w-[85%] mx-auto rounded-lg shadow-lg text-white"
      style={{ backgroundImage: "url('https://img.freepik.com/free-photo/book-day-with-group-younf-childre_23-2148445696.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative container mx-auto px-6 flex flex-col md:flex-row justify-center gap-8">
        <button className="absolute left-0 top-1/2 -translate-y-1/2 px-4 py-2 bg-red-600 text-white rotate-90 rounded-t-md">
          Quick Enquiry
        </button>
        
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-white">
            <div className="w-20 h-20 flex items-center justify-center bg-red-600 rounded-full text-white">
              {stat.icon}
            </div>
            <h2 className="text-4xl font-bold mt-4">
              <CountUp start={0} end={stat.value} duration={5} />
            </h2>
            <p className="text-lg mt-2">+ {stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
