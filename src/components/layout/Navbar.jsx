import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

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
        { name: "About Sam", path: "/about/dps-patna" },
        { name: "Infrastructure", path: "/about/infrastructure" },
        { name: "Faculty", path: "/about/faculty" },
        { name: "Principle Message", path: "/about/co-curricular" },
        { name: "Transport", path: "/about/transport" },
        { name: "School Prospectus", path: "/about/school-prospectus" },
      ]
    },
    { 
      name: "Admissions", path: "/admissions", dropdown: [
        { name: "Admission Procedure", path: "/admissions/procedure" },
        { name: "Admission Policy", path: "/admissions/admission-policy" },
        { name: "Admission Form", path: "/admissions/admission-form" },
        { name: "Fee Structure", path: "/admissions/fee-structure" },
      ]
    },
    { 
      name: "Rules and Regulations", path: "/rules", dropdown: [
        { name: "Guidelines for Students", path: "/rules/guidelines-for-students" },
        { name: "Syllabus", path: "/rules/syllabus" },
        { name: "Examination & Promotion", path: "/rules/examination-promotion" },
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
    <div className="w-full" style={{ marginBottom: `${isScrolled ? "64px" : "0"}` }}>
      {/* Top Info Bar */}
      <div className="bg-navy-900 text-gold-100 py-2 px-4 hidden md:block">
        <div className="flex flex-wrap justify-between items-center max-w-7xl mx-auto">
          <p className="text-sm">
            <span className="font-semibold">Affiliation Number:</span> 2133064 & School No.: 61225
          </p>
          <p className="text-sm">Affiliated to Central Board of Secondary Education, New Delhi</p>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-4 px-6 shadow-md">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo & Heading */}
          <div className="flex items-center space-x-2">
            <img
              src="https://w7.pngwing.com/pngs/382/222/png-transparent-delhi-public-school-faridabad-modern-delhi-public-school-delhi-public-school-society-national-secondary-school-others-thumbnail.png"
              alt="School Logo"
              className="h-12"
            />
            <div>
              <h1 className="text-lg font-bold text-navy-900">Sam Public School, Tundla</h1>
              <p className="text-xs text-gray-600 hidden md:block">
                Under the aegis of Delhi Public School Society, New Delhi
              </p>
              <p className="text-xs text-gray-600 hidden md:block">
                Affiliated to Central Board of Secondary Education, New Delhi
              </p>
            </div>
          </div>

          {/* Contact Info - Hidden on Mobile */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="text-sm text-gray-800">
              <p className="flex items-center gap-1">
                <span className="text-gold-600">📞</span> +91 7088744411
              </p>
              <p className="flex items-center gap-1">
                <span className="text-gold-600">📧</span> enquiry@sampublicschool.com
              </p>
            </div>
            <button className="text-white px-4 py-2 rounded-md hover:bg-gold-700 transition-colors bg-gold-600 shadow-md">
              ONLINE REGISTRATION
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="p-2 rounded-md bg-navy-900 text-gold-100 shadow-md"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`w-full z-50 transition-all duration-300 ${isScrolled ? "fixed top-0 left-0 bg-white shadow-lg" : "relative bg-navy-900"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex justify-center h-16 items-center space-x-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div 
                  key={link.name} 
                  className="relative h-16 flex items-center"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span className={`cursor-pointer flex items-center gap-1 transition-colors duration-200 ${isScrolled ? 'text-navy-900 hover:text-gold-600' : 'text-gold-100 hover:text-white'}`}>
                    {link.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        activeDropdown === link.name ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </span>

                  {activeDropdown === link.name && (
                    <div className={`absolute left-0 top-[64px] w-64 ${isScrolled ? 'bg-white text-navy-900' : 'bg-navy-800 text-gold-100'} shadow-lg border ${isScrolled ? 'border-gray-200' : 'border-navy-700'}`}>
                      {link.dropdown.map((item) => (
                        <Link 
                          key={item.name} 
                          to={item.path} 
                          className={`block px-4 py-2 transition-colors duration-200 ${isScrolled ? 'hover:bg-gray-100' : 'hover:bg-navy-700'}`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`relative font-semibold transition duration-200 ${isScrolled ? 'text-navy-900 hover:text-gold-600' : 'text-gold-100 hover:text-white'}
                    after:content-[''] after:absolute after:left-0 after:bottom-[-20px] 
                    after:h-[5px] after:bg-gold-600 after:transition-all after:duration-300 
                    ${location.pathname === link.path ? 'after:w-full' : 'after:w-0'} 
                    hover:after:w-full cursor-pointer`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-32 bg-white shadow-md z-50 overflow-y-auto">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link 
                  to={link.path} 
                  className="block px-3 py-3 rounded-md hover:bg-gray-100 text-navy-900 font-medium border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="pl-4">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;