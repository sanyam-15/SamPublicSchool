import React, { useEffect } from "react";
import VirtualTourImage from "/Images/VirtualImage.jpg"

function VirtualTour() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-[100%] h-auto">
      <img src={VirtualTourImage} alt="Virtual-Image" />
    </div>
  );
}

export default VirtualTour;
