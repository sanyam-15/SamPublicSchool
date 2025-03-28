import React, { useEffect } from "react";
import InfrastructureComponent from "./InfrastructureComponent";
import HeroSection from "./HeroSection";

function Infrastructure() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const facilities = [
    {
      image: "/Images/Library.jpg",
      name: "Computer Lab",
      description: "Nurture digital prowess in our dynamic Computer Lab. Equipped with modern computers and software, students embark on coding, programming, and multimedia creation, preparing them for the tech-driven world beyond the classroom."
    },
    {
      image: "/Images/Library.jpg",
      name: "Biology Lab",
      description: "Explore life sciences in our well-equipped Biology Lab. Students engage in hands-on experiments and microscopic observations, fostering scientific curiosity and understanding of biological concepts."
    },
    {
      image: "/Images/Library.jpg",
      name: "Music Room",
      description: "Cultivate artistic expression in our vibrant Music Room. With a variety of instruments and sound equipment, students develop musical skills and appreciation for different genres and cultures."
    },
    {
      image: "/Images/Library.jpg",
      name: "Chemistry Lab",
      description: "Discover chemical reactions in our state-of-the-art Chemistry Lab. Equipped with modern apparatus, students conduct experiments that bring theoretical concepts to life in a safe environment."
    },
    {
      image: "/Images/Library.jpg",
      name: "Physics Lab",
      description: "Investigate fundamental principles in our advanced Physics Lab. Through practical experiments and demonstrations, students gain deeper insights into the laws governing the physical world."
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-navy-900">
      <HeroSection 
        moto={"Our World-Class Facilities"} 
        description={"State-of-the-art infrastructure designed to inspire learning and innovation"} 
        section={"About Us"} 
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-12">
          {facilities.map((facility, index) => (
            <InfrastructureComponent
              key={index}
              image={facility.image}
              name={facility.name}
              description={facility.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Infrastructure;