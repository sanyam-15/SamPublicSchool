import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { 
      name: "About Us", path: "/about", dropdown: [
        { name: "About DPS Patna", path: "/about/dps-patna" },
        { name: "Infrastructure", path: "/about/infrastructure" },
        { name: "Faculty", path: "/about/faculty" },
        { name: "Co-Curricular Programme", path: "/about/co-curricular" },
        { name: "Assessments", path: "/about/assessments" },
        { name: "Transport", path: "/about/transport" },
        { name: "Mandatory Information", path: "/about/mandatory-info" },
      ]
    },
    { 
      name: "Admissions", path: "/admissions", dropdown: [
        { name: "Admission Procedure", path: "/admissions/procedure" },
        { name: "Admission Policy", path: "/admissions/admission-policy" },
        { name: "Admission Form", path: "/admissions/admission-form" },
        { name: "Fee Structure", path: "/admissions/fee-structure" },
        // { name: "School Prospectus", path: "/admissions/prospectus" },
      ]
    },
    { 
      name: "Rules and Regulations", path: "/rules", dropdown: [
        { name: "Guidelines for Students", path: "/rules/guidelines-for-students" },
        { name: "Good Student", path: "/rules/good-student" },
        { name: "Library Rules", path: "/rules/library-rules" },
        { name: "Fee Structure (2024-25)", path: "/rules/fee-structure" },
        { name: "Fee Rules", path: "/rules/fee-rules" },
        { name: "Admission & Withdrawal", path: "/rules/admission-withdrawal" },
        { name: "Syllabus", path: "/rules/syllabus" },
        { name: "Examination & Promotion", path: "/rules/examination-promotion" },
        { name: "Vehicles", path: "/rules/vehicles" },
        { name: "Recommendations to Parents", path: "/rules/recommendations-parents" },
      ]
    },
    { 
      name: "Achievements", path: "/achievements", dropdown: [
        { name: "Academics", path: "/achievements/academics" },
        { name: "Sports", path: "/achievements/sports" },
        { name: "Class 8th Toppers", path: "/achievements/class-8th-toppers" },
      ]
    },
    { 
      name: "Gallery", path: "/gallery", dropdown: [
        { name: "Image Gallery", path: "/gallery/images" },
        { name: "Video Gallery", path: "/gallery/videos" },
      ]
    },
    { name: "Online Fee", path: "/online-fee" },
    { name: "Contact", path: "/contact" },
  ];
  
  

  return (
    <div className="w-full"
    style={{marginBottom: `${isScrolled ? "64px": "0"}`}}
    >

      {/* Scrollable Top Section - Full on Large Screens, Minimal on Small Screens */}
      <div className="bg-gray-100 py-2 px-4 hidden md:block">
        <div className="flex flex-wrap justify-between items-center">
          <p className="text-sm">
            <span className="font-semibold">Affiliation Number:</span> 2133064 & School No.: 61225
          </p>
          <p className="text-sm">Affiliated to Central Board of Secondary Education, New Delhi</p>
        </div>
      </div>

      <div className="bg-white py-4 px-6 shadow-md">
        <div className="flex justify-between items-center">
          {/* Logo & Heading - Always Visible */}
          <div className="flex items-center space-x-2">
            <img
              src="https://w7.pngwing.com/pngs/382/222/png-transparent-delhi-public-school-faridabad-modern-delhi-public-school-delhi-public-school-society-national-secondary-school-others-thumbnail.png"
              alt="DPS Logo"
              className="h-12"
            />
            <div>
              <h1 className="text-lg font-bold text-red-700">Sam Public School, Tundla</h1>
              <p className="text-xs text-black hidden md:block">
                Under the aegis of Delhi Public School Society, New Delhi
              </p>
              <p className="text-xs text-black hidden md:block">
                Affiliated to Central Board of Secondary Education, New Delhi
              </p>
            </div>
          </div>

          {/* Contact Info & Address - Hidden on Small Screens */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="text-sm text-black">
              <p>📞 +91 7088744411</p>
              <p>📧 enquiry@dpsfirozabad.com</p>
            </div>
            <p className="text-sm text-black">📍 Vill. Daulatpur, New By Pass (Bamba Road), Firozabad</p>
            <button className="text-white px-4 py-2 rounded-md hover:opacity-80 bg-red-700">
              ONLINE REGISTRATION
            </button>
          </div>

          {/* Hamburger Menu Button - Visible on Small Screens */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md bg-gray-100 shadow-md">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Fixed Navbar */}
      <nav className={`w-full z-50 transition-all duration-300 ${isScrolled ? "fixed top-0 left-0 bg-white shadow-lg translate-y-[0%]" : "relative"}`}
      style={{transition: "transform 0.4s ease-in-out"}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex justify-center h-16 items-center space-x-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative h-16 flex items-center"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}>
                  <span className="cursor-pointer hover:text-green-600 transition-colors duration-200">
                    {link.name}
                  </span>
                  {activeDropdown === link.name && (
                    <div className="absolute left-0 top-[64px] w-64 bg-white text-black shadow-lg border border-gray-300">
                      {link.dropdown.map((item) => (
                        <Link key={item.name} to={item.path} className="block px-4 py-2 hover:bg-gray-200 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.name} to={link.path} className="text-black font-semibold hover:text-green-600 transition duration-200">
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-white shadow-md z-50">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="block px-3 py-2 rounded-md hover:bg-gray-200"
                onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;