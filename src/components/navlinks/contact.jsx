import React, { useEffect } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import HeroSection from "../About Us/HeroSection";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white font-sans">
      <HeroSection moto={"Contact Us"} description={"Build connection with me"} section={"Contact"} />

      {/* Contact Information */}
      <section className="bg-[#F9FAFB] text-black py-8 grid grid-cols-1 md:grid-cols-3 text-center">
        <div>
          <FaPhone className="text-3xl mx-auto mb-2" />
          <p>Phone</p>
          <p className="text-red-500">+1 234-567-2345</p>
        </div>
        <div>
          <FaEnvelope className="text-3xl mx-auto mb-2" />
          <p>Email</p>
          <p className="text-red-500">contact@kingster.com</p>
        </div>
        <div>
          <FaMapMarkerAlt className="text-3xl mx-auto mb-2" />
          <p>Location</p>
          <p>41st Bowling Street, Liverpool, UK</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-bold">LEAVE US YOUR INFO</h2>
        <p>AND WE WILL GET BACK TO YOU.</p>
        <form className="max-w-lg mx-auto mt-6">
          <input type="text" placeholder="Full Name" className="w-full p-3 border mb-4" required />
          <input type="email" placeholder="Email" className="w-full p-3 border mb-4" required />
          <input type="text" placeholder="Subject" className="w-full p-3 border mb-4" required />
          <textarea placeholder="Message" className="w-full p-3 border mb-4" required></textarea>
          <button type="submit" className="bg-red-700 text-white py-3 px-6 font-bold">SUBMIT NOW</button>
        </form>
      </section>

      {/* Google Map */}
      <section className="h-96">
        <iframe
          title="Google Map"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.7590935978453!2d-2.9778383841580783!3d53.40837197999879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b21683b5f8d27%3A0xa12c2b12c4510b1b!2s41st%20Bowling%20Street%2C%20Liverpool%2C%20UK!5e0!3m2!1sen!2sus!4v1645101925679!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;
