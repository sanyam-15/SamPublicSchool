import React, { useEffect } from "react";
import HeroSection from "./HeroSection";

function Transport() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <HeroSection
        moto={"Our Transport Facilities"}
        description={
          "Safe and reliable transport services ensuring timely commute for our students."
        }
        section={"About Us"}
      />

      <div className="h-[30vw] flex justify-center items-center mb-[50px]">
        <p className="text-[#0A1A3A] text-3xl font-bold">Comming Soon !</p>
      </div>
    </div>
  );
}

export default Transport;
