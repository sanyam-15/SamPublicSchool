import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { toggleTheme } from '../../store/themeSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'About Us',
      path: '/about',
      dropdown: [
        { name: 'About DPS Patna', path: '/about/dps-patna' },
        { name: 'Infrastructure', path: '/about/infrastructure' },
        { name: 'Academic Programme', path: '/about/academic-programme' },
        { name: 'Faculty', path: '/about/faculty' },
        { name: 'Co-Curricular Programme', path: '/about/co-curricular' },
        { name: 'Assessments', path: '/about/assessments' },
        { name: 'Transport', path: '/about/transport' },
        { name: 'Mandatory Information', path: '/about/mandatory-info' },
      ],
    },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">School Name</Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative leading-4"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <span className="cursor-default hover:text-blue-600 transition-colors duration-200">
                    {link.name}
                  </span>
                  {activeDropdown === link.name && (
                    <div className="absolute left-0 mt-2 w-64 bg-white text-gray-800 shadow-lg rounded-lg">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-2 hover:bg-gray-200 transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.name} to={link.path} className="hover:text-blue-600 transition-colors duration-200">
                  {link.name}
                </Link>
              )
            )}
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name} className="relative">
                    <button
                      className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                      onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                    >
                      {link.name}
                    </button>
                    {activeDropdown === link.name && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.dropdown.map((item) => (
                          <Link key={item.name} to={item.path} className="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={link.name} to={link.path} className="block px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
