import React from "react";

const NotFoundPage = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/city-traffic-with-cars-parked-line-street-side-vehicle-parking-concept_127089-21153.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-75"></div>

      {/* Content */}
      <div className="relative text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <h2 className="text-2xl font-semibold mt-2">PAGE NOT FOUND</h2>
        <p className="mt-4 text-lg">
          Sorry, we couldn't find the page you're looking for.
        </p>

        {/* Back to Homepage Button */}
        <a href="/" className="inline-block mt-6">
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition">
            Back to Homepage
          </button>
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
