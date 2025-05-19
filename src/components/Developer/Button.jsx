import React from "react";
import { Link } from "react-router-dom";

const FixedButton = () => {
  return (
    <Link to={"/developer-info"}>
      <button className="fixed px-4 py-2 bg-[#D4AF37] text-[#0A1A3A] rotate-90 z-10 right-[-40px] top-1/2 h-[40px]">
        Developer
      </button>
    </Link>
  );
};

export default FixedButton;
