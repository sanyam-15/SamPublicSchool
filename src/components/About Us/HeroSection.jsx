import React from "react";

function HeroSection({moto, description}) {
  return (
    <div
      className="relative h-80 w-full bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/id/10/1600/600')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          {moto}
        </h1>
        <p className="text-lg md:text-xl text-white mt-3 font-light max-w-2xl">
          {description}
        </p>
      </div>
    </div>
  );
}

export default HeroSection;