import React from "react";

function HeroSection({ moto, description, section, image }) {
  return (
    <div>
      <div
        className="relative h-80 w-full bg-cover bg-center"
        style={{
          backgroundImage: "url('https://picsum.photos/id/10/1600/600')",
        }}
      >
        <div className="absolute inset-0 bg-navy-900 bg-opacity-80 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gold-100 drop-shadow-lg">
            {moto}
          </h1>
          <p className="text-lg md:text-xl text-gold-50 mt-3 font-light max-w-2xl">
            {description}
          </p>
        </div>
      </div>
      <div className="m-auto w-[85vw] mt-4 flex gap-2">
        <p className="text-navy-700" style={{fontSize: "15px"}}>Home</p> 
        &nbsp; 
        <p className="text-navy-700" style={{fontSize: "15px"}}>{`>`}</p> 
        &nbsp; 
        <p className="text-gold-600 font-medium" style={{fontSize: "15px"}}>{section}</p>
      </div>
    </div>
  );
}

export default HeroSection;