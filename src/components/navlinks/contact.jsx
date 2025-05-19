import React, { useEffect } from "react";

import HeroSection from "../About Us/HeroSection";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 dark:bg-navy-900 font-sans">
      {/* Hero Section */}
      <header 
        className="relative text-white text-center flex items-center justify-center min-h-[70vh]"
        style={{
          backgroundImage: "url('https://cdn.pixabay.com/photo/2024/08/19/11/27/school-8980534_1280.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-navy-900/70"></div>
        <motion.div 
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gold-400">Contact Greenland Public School</h1>
          <p className="text-xl text-gold-100 max-w-2xl mx-auto">
            We're here to answer your questions and welcome your feedback
          </p>
        </motion.div>
      </header>

      {/* Contact Information */}
      <section className="py-12 bg-white dark:bg-navy-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: <FaPhone className="text-3xl mx-auto mb-4 text-gold-500" />, 
              title: "Phone", 
              content: "+91 8789628764",
              sub: "Mon-Fri, 8:30AM-4:30PM" 
            },
            { icon: <FaEnvelope className="text-3xl mx-auto mb-4 text-gold-500" />, 
              title: "Email", 
              content: "greenlandpublicschool09@gmail.com",
              sub: "Response within 24 hours" 
            },
            { icon: <FaMapMarkerAlt className="text-3xl mx-auto mb-4 text-gold-500" />, 
              title: "Location", 
              content: "123 Education Lane, Knowledge City",
              sub: "Pincode: 110001" 
            },
            { icon: <FaClock className="text-3xl mx-auto mb-4 text-gold-500" />, 
              title: "Office Hours", 
              content: "8:00 AM - 5:00 PM",
              sub: "Monday to Saturday" 
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg border border-gray-200 dark:border-navy-700"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2 text-navy-800 dark:text-gold-300">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">{item.content}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-navy-900 dark:text-gold-400">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full p-3 border border-gray-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent dark:bg-navy-800" 
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full p-3 border border-gray-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent dark:bg-navy-800" 
                  required 
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full p-3 border border-gray-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent dark:bg-navy-800" 
                required 
              />
              <textarea 
                placeholder="Your Message" 
                rows="5"
                className="w-full p-3 border border-gray-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent dark:bg-navy-800" 
                required
              ></textarea>
              <button 
                type="submit" 
                className="bg-gold-600 hover:bg-gold-700 text-white py-3 px-6 font-bold rounded-lg transition-colors w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-navy-800 dark:text-gold-300">Visit Our Campus</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We welcome prospective families to tour our campus and see our facilities firsthand. 
                Schedule a visit to experience the Sam Public School difference.
              </p>
              <div className="bg-navy-100 dark:bg-navy-700 p-4 rounded-lg">
                <h4 className="font-medium text-navy-900 dark:text-gold-200 mb-2">Tour Hours:</h4>
                <p className="text-gray-700 dark:text-gray-300">Monday-Friday: 9:00 AM - 2:00 PM</p>
                <p className="text-gray-700 dark:text-gray-300">Saturday: 10:00 AM - 12:00 PM</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-navy-800 dark:text-gold-300">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-navy-700 dark:text-gold-400 hover:text-gold-600 text-2xl">
                  <FaFacebook />
                </a>
                <a href="#" className="text-navy-700 dark:text-gold-400 hover:text-gold-600 text-2xl">
                  <FaTwitter />
                </a>
                <a href="#" className="text-navy-700 dark:text-gold-400 hover:text-gold-600 text-2xl">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Google Map */}
      <section className="h-96 w-full">
        <iframe
          title="Sam Public School Location"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.789636057864!2d77.2098653150821!3d28.61390098242866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2a99b6f9fa7%3A0x83a25e55f0af1c82!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1628684416784!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;