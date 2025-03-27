import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import PrincipalMessage from "../home/PrincipalMessage";

const Principal = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection moto={"Principal Message"} description={""} section={"About Us"} />
      <PrincipalMessage/>
    </div>
  );
};

export default Principal;
