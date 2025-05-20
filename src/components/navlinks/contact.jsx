import React, { useEffect, useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("https://greenland-server.onrender.com/api/sendEmail", formData);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-navy-900 font-sans">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="light"
      />

      {/* Hero Section */}
      <header
        className="relative text-white text-center flex items-center justify-center min-h-[70vh]"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2024/08/19/11/27/school-8980534_1280.jpg')",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gold-400">
            Contact Greenland Public School
          </h1>
          <p className="text-xl text-gold-100 max-w-2xl mx-auto">
            We're here to answer your questions and welcome your feedback
          </p>
        </motion.div>
      </header>

      {/* Contact Information */}
      <section className="py-12 bg-white dark:bg-navy-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            {
              icon: <FaPhone className="text-3xl mx-auto mb-4 text-gold-500" />,
              title: "Phone",
              content: "+91 8789628764",
              sub: "Mon-Fri, 8:30AM-4:30PM",
            },
            {
              icon: (
                <FaEnvelope className="text-3xl mx-auto mb-4 text-gold-500" />
              ),
              title: "Email",
              content: "greenlandpublicschool09@gmail.com",
              sub: "Response within 24 hours",
            },
            {
              icon: (
                <FaMapMarkerAlt className="text-3xl mx-auto mb-4 text-gold-500" />
              ),
              title: "Location",
              content: "Future city, Kaliganj, Bihta-Lai Road, Patna, Bihar",
              sub: "Pincode: 801103",
            },
            {
              icon: <FaClock className="text-3xl mx-auto mb-4 text-gold-500" />,
              title: "Office Hours",
              content: "8:00 AM - 5:00 PM",
              sub: "Monday to Saturday",
            },
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
              <h3 className="text-xl font-semibold mb-2 text-navy-800 dark:text-gold-300">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                {item.content}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {item.sub}
              </p>
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
            <h2 className="text-3xl font-bold mb-6 text-navy-900 dark:text-gold-400">
              Send Us a Message
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent dark:bg-navy-800"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent dark:bg-navy-800"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent dark:bg-navy-800"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent dark:bg-navy-800"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-gold-600 hover:bg-gold-700 text-white py-3 px-6 font-bold rounded-lg transition-colors w-full md:w-auto"
              >
                {loading ? "Sending..." : "Send Message"}
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
              <h3 className="text-2xl font-semibold mb-4 text-navy-800 dark:text-gold-300">
                Visit Our Campus
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We welcome prospective families to tour our campus and see our
                facilities firsthand. Schedule a visit to experience the
                Greenland Public School difference.
              </p>
              <div className="bg-navy-100 dark:bg-navy-700 p-4 rounded-lg">
                <h4 className="font-medium text-navy-900 dark:text-gold-200 mb-2">
                  Tour Hours:
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Monday-Friday: 9:00 AM - 2:00 PM
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Saturday: 10:00 AM - 12:00 PM
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-navy-800 dark:text-gold-300">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/16PQTGThSe/"
                  className="text-navy-700 dark:text-gold-400 hover:text-gold-600 text-2xl"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="text-navy-700 dark:text-gold-400 hover:text-gold-600 text-2xl"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-navy-700 dark:text-gold-400 hover:text-gold-600 text-2xl"
                >
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
          title="Greenland Public School Location"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.233212007665!2d84.8298159!3d25.5306075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d57fe7d4e85b7%3A0x4c9255342b140d2e!2sFuture%20City!5e0!3m2!1sen!2sin!4v1747734029791!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;
