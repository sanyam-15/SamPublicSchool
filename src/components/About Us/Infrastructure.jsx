import React, { useEffect } from "react";
import InfrastructureComponent from "./InfrastructureComponent";
import HeroSection from "./HeroSection";

function Infrastructure() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const facilities = [
    {
      image: "https://indianschool.bh/images/facilities/computer-lab/25.jpg",
      name: "Computer Lab",
      description: "Our school’s Computer Lab offers students a fun and engaging space to learn basic computer skills, explore educational software, and get introduced to coding and technology in a guided environment."
    },
    {
      image: "https://scontent.flko10-1.fna.fbcdn.net/v/t39.30808-6/471308790_122099473196712060_1315160518816551848_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=mD7V14CyVUEQ7kNvwH8PZAj&_nc_oc=AdlABk5mHCK8F8uz1LSP0Pa88Le5KH2I_M58ATXal4QB8DdeMjzjUvysTsFMT4Qla25nye63nXbSIifxVGiRJOie&_nc_zt=23&_nc_ht=scontent.flko10-1.fna&_nc_gid=DedwRFTkBZR-Lf1hC6Uv7w&oh=00_AfIjvCrOKiW81-iZKrZDjuXWzX9275hfzUw48UNmsBkbIw&oe=68320BDD",
      name: "Music and Dance Room",
      description: "Our Music Room is a lively space where students explore their creativity through music and dance. Equipped with sound systems and instruments, it hosts regular performances, celebrations, and cultural events that nurture artistic expression"
    },
    // {
    //   image: "/Images/Library.jpg",
    //   name: "Biology Lab",
    //   description: "Explore life sciences in our well-equipped Biology Lab. Students engage in hands-on experiments and microscopic observations, fostering scientific curiosity and understanding of biological concepts."
    // },
    // {
    //   image: "/Images/Library.jpg",
    //   name: "Chemistry Lab",
    //   description: "Discover chemical reactions in our state-of-the-art Chemistry Lab. Equipped with modern apparatus, students conduct experiments that bring theoretical concepts to life in a safe environment."
    // },
    // {
    //   image: "/Images/Library.jpg",
    //   name: "Physics Lab",
    //   description: "Investigate fundamental principles in our advanced Physics Lab. Through practical experiments and demonstrations, students gain deeper insights into the laws governing the physical world."
    // }
  ];

  return (
    <div className="bg-gray-50 dark:bg-navy-900">
      <HeroSection 
        moto={"Our Facilities"} 
        description={"Well-equipped spaces that foster learning and creativity."} 
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