import { FaFacebook, FaSkype, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import schoolLogo from "/Images/School Logo.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  let socialMediaIconColor = "#c50227";
  return (
    <footer className="text-[#8d8d8d] pt-10 bg-[#181818]">
      <div className="w-[85vw] flex flex-col justify-between m-auto">
        <div className="lg:flex justify-between md:grid-cols-1 md:place-items-start leading-[1.7]">
          <div className="text-center md:text-left">
            <h2 className="text-white text-xl font-bold flex flex-col md:flex-row items-center justify-center md:justify-start">
              <img
                src={schoolLogo}
                alt="Logo"
                className="w-20 h-20 mb-2 md:mb-0 md:mr-2"
              />
              <span>Kingster HighSchool</span>
            </h2>
            <p className="mt-4">Box 35300</p>
            <p>1810 Campus Way NE</p>
            <p>Bothell, WA 98011-8246</p>
            <p className="mt-4 font-semibold text-white">+1-2534-4456-345</p>
            <p className="text-red-500">admin@kingsteruni.edu</p>
            <hr className="border-[#c50227] my-4 w-full" />
          </div>

          <div>
            <h3 className="text-white text-lg font-bold border-b-2 border-[#c50227] lg:w-[15vw] md:w-[40vw] sm:w-fit w-fit mx-auto md:mx-0 pb-1">
              Our Campus
            </h3>
            <ul className="mt-4 space-y-2 text-center md:text-left">
              <li className="footerHoverEffect">Academic</li>
              <li className="footerHoverEffect">Planning & Administration</li>
              <li className="footerHoverEffect">Campus Safety</li>
              <li className="footerHoverEffect">Office of the Chancellor</li>
              <li className="footerHoverEffect">Facility Services</li>
              <li className="footerHoverEffect">Human Resources</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold border-b-2 border-[#c50227] lg:w-[15vw] md:w-[40vw] sm:w-fit w-fit mx-auto md:mx-0 pb-1">
              Campus Life
            </h3>
            <ul className="mt-4 space-y-2 text-center md:text-left">
              <li className="footerHoverEffect">Accessibility</li>
              <li className="footerHoverEffect">Financial Aid</li>
              <li className="footerHoverEffect">Food Services</li>
              <li className="footerHoverEffect">Housing</li>
              <li className="footerHoverEffect">Information Technologies</li>
              <li className="footerHoverEffect">Student Life</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold border-b-2 border-[#c50227] lg:w-[15vw] md:w-[40vw] sm:w-fit w-fit mx-auto md:mx-0 pb-1">
              Academics
            </h3>
            <ul className="mt-4 space-y-2 text-center md:text-left">
              <li className="footerHoverEffect">Canvas</li>
              <li className="footerHoverEffect">Catalyst</li>
              <li className="footerHoverEffect">Library</li>
              <li className="footerHoverEffect">Time Schedule</li>
              <li className="footerHoverEffect">Apply For Admissions</li>
              <li className="footerHoverEffect">Pay My Tuition</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#202020] text-[#838383] mt-10 text-sm py-6"
      style={{marginBottom: "50px"}}
      >
        <div className="w-[85vw] flex flex-col justify-between items-center m-auto md:flex-row">
          <p className="text-center md:text-left">
            Copyright All Rights Reserved 2025, Developer401
          </p>
          <div className="flex space-x-4 text-red-500 text-xl mt-4 md:mt-0">
            <Link to="https://www.facebook.com/"><FaFacebook className="cursor-pointer" color={socialMediaIconColor} /></Link>
            <Link to="https://www.linkedin.com/in/abhay-keshari-234966280/"><IoLogoLinkedin className="cursor-pointer" color={socialMediaIconColor} /></Link>
            <FaSkype className="cursor-pointer" color={socialMediaIconColor} />
            <FaXTwitter className="cursor-pointer" color={socialMediaIconColor} />
            <FaInstagram className="cursor-pointer" color={socialMediaIconColor} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
