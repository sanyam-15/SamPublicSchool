import React, { useEffect } from "react";
import InfrastructureComponent from "./InfrastructureComponent";
import HeroSection from "./HeroSection";

function Infrastructure() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const facilities = [
  {
    name: "Computer Lab",
    description: "Our Computer Lab is a dynamic learning hub equipped with modern desktop systems, high-speed internet, and educational software. Students of all age groups engage in activities that include learning fundamental computer operations, typing skills, coding in languages like Scratch and Python, and exploring digital tools that support their academics. Under the guidance of trained instructors, the lab cultivates technological fluency and prepares students for a digitally driven future.",
    image: "https://indianschool.bh/images/facilities/computer-lab/25.jpg"
  },
  {
    name: "Music and Dance Room",
    description: "The Music and Dance Room at Greenland Public School is a vibrant space that encourages students to express their creativity through rhythm, melody, and movement. Outfitted with a variety of musical instruments such as keyboards, tablas, harmoniums, and drums, as well as ample space for dance rehearsals, this facility is where cultural expression flourishes. Students regularly practice and perform for school events, building confidence, coordination, and an appreciation for the performing arts.",
    image: "https://media.istockphoto.com/id/1218725110/photo/odissi-dancer-performing.jpg?s=612x612&w=0&k=20&c=MRrjaBXxv-y20w62cGvFr9D5ux9BM7w0RCjGdCP1OQk="
  },
  {
    name: "Library",
    description: "Our school library is a sanctuary for curious minds, offering a rich collection of fiction, non-fiction, academic reference materials, and periodicals for all age groups. Designed to promote a culture of reading and independent learning, the library includes quiet reading zones, interactive corners for storytelling sessions, and digital resources for research. It serves as a vital space for nurturing imagination, critical thinking, and lifelong learning habits among students.",
    image: "/Images/Library.jpg"
  },
  {
    name: "Art and Craft",
    description: "The Art and Craft room at Greenland Public School is a creative haven where students explore various artistic mediums, including painting, drawing, sculpture, and handicrafts. Guided by skilled instructors, children learn to express their imagination, improve fine motor skills, and develop an appreciation for aesthetics and cultural heritage. This space hosts workshops, exhibitions, and craft competitions that encourage innovation and self-expression.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
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