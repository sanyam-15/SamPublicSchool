import React from "react";
import HeroSection from "../About Us/HeroSection";

function Syllabus() {
  return (
    <div>
      <HeroSection
        moto={"Syllabus"}
        description={"Best curriculum ever"}
        section={"Rules and Regulations"}
      />
      <div className="h-[30vw] flex justify-center items-center mb-[50px]">
        <p className="text-[#0A1A3A] text-3xl">Comming Soon !</p>
      </div>
    </div>
  );
}

export default Syllabus;
