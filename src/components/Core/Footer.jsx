import { FaFacebook, FaSkype, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import schoolLogo from "/Images/School Logo.png";
import "./Footer.css"

const Footer = () => {
    let socialMediaIconColor = "#c50227";
  return (
    <footer className="text-[#8d8d8d] pt-10" style={{backgroundColor: "#181818"}}>
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 place-items-center leading-[1.7] md:grid-cols-4 gap-8 h-80 sm:grid-cols-1 h-[100%]">
        {/* Logo & Contact */}
        <div>
          <h2 className="text-white text-xl font-bold flex items-center">
            <img src={schoolLogo} alt="Logo" className="w-16 h-16 mr-2" /> Kingster HighSchool
          </h2>
          <p className="mt-4">Box 35300</p>
          <p>1810 Campus Way NE</p>
          <p>Bothell, WA 98011-8246</p>
          <p className="mt-4 font-semibold text-white">+1-2534-4456-345</p>
          <p className="text-red-500">admin@kingsteruni.edu</p>
        </div>

        {/* Our Campus */}
        <div>
          <h3 className="text-white text-lg font-bold border-b-2 border-[#c50227]" style={{width: "250px"}}>Our Campus</h3>
          <ul className="mt-4 space-y-2 font-poppins">
            <li className="footerHoverEffect">Academic</li>
            <li className="footerHoverEffect">Planning & Administration</li>
            <li className="footerHoverEffect">Campus Safety</li>
            <li className="footerHoverEffect">Office of the Chancellor</li>
            <li className="footerHoverEffect">Facility Services</li>
            <li className="footerHoverEffect">Human Resources</li>
          </ul>
        </div>

        {/* Campus Life */}
        <div>
          <h3 className="text-white text-lg font-bold border-b-2 border-[#c50227]" style={{width: "250px"}}>Campus Life</h3>
          <ul className="mt-4 space-y-2 font-poppins">
            <li className="footerHoverEffect">Accessibility</li>
            <li className="footerHoverEffect">Financial Aid</li>
            <li className="footerHoverEffect">Food Services</li>
            <li className="footerHoverEffect">Housing</li>
            <li className="footerHoverEffect">Information Technologies</li>
            <li className="footerHoverEffect">Student Life</li>
          </ul>
        </div>

        {/* Academics */}
        <div>
          <h3 className="text-white text-lg font-bold border-b-2 border-[#c50227]" style={{width: "250px"}}>Academics</h3>
          <ul className="mt-4 space-y-2 font-poppins">
            <li className="footerHoverEffect">Canvas</li>
            <li className="footerHoverEffect">Catalyst</li>
            <li className="footerHoverEffect">Library</li>
            <li className="footerHoverEffect">Time Schedule</li>
            <li className="footerHoverEffect">Apply For Admissions</li>
            <li className="footerHoverEffect">Pay My Tuition</li>
          </ul>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="bg-[#202020] text-[#838383] mt-10 lg:px-[10vw] md:px-[5vw] flex flex-col md:flex-row justify-between items-center border-gray-600 font-poppins text-sm leading-[1.7] border-b-2" style={{height: "100px"}}>
        <p className="">Copyright All Rights Reserved 2025, Developer401</p>
        <div className="flex space-x-4 text-red-500 text-xl">
          <FaFacebook color={socialMediaIconColor} />
          <IoLogoLinkedin color={socialMediaIconColor} />
          <FaSkype color={socialMediaIconColor} />
          <FaXTwitter color={socialMediaIconColor} />
          <FaInstagram color={socialMediaIconColor} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;