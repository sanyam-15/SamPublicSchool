import React from "react";
import Image from "/Images/Library.jpg";

const ComingSoon = () => {
  return (
    <div
      className="flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${Image})` }} 
    >
      <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center text-center bg-black bg-opacity-50 p-10">
        <h2 className="text-lg font-light">We Are</h2>
        <h1 className="text-6xl font-bold">COMING SOON</h1>
        <p className="text-md mt-4">Stay tuned for updates!</p>
        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
