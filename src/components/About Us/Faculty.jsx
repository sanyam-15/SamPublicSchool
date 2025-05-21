import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import InfrastructureComponent from "./InfrastructureComponent";

function Faculty() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-gray-50 dark:bg-navy-900">
      <HeroSection
        moto={"Our Teachers"}
        description={
          "Dedicated teachers guiding students with care and expertise."
        }
        section={"About Us"}
      />
      <InfrastructureComponent
        image={"https://media.istockphoto.com/id/1367498582/photo/indian-teacher-stock-photo.jpg?s=612x612&w=0&k=20&c=mVC_e-kpK0DPwrVg0e8ST7w6eBiAs9bMG7uGEGnfN_o="}
        name={"Pragya singh"}
        subjectTaught={"Hindi"}
        description={
          "Pragya Ma'am is a dedicated Hindi teacher known for making the language engaging and easy to understand."
        }
      />
      <InfrastructureComponent
        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VikAOE2G2gjohpGNr_thh_7XSL1kZV7udA&s"}
        name={"Vijay Diwedi"}
        subjectTaught={"Social Studies"}
        description={
          "Vijay Diwedi Sir is a passionate Social Studies teacher who makes history and civics come alive with his clear explanations."
        }
      />
      <InfrastructureComponent
        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VikAOE2G2gjohpGNr_thh_7XSL1kZV7udA&s"}
        name={"Vishesh kumar Singh"}
        subjectTaught={"Mathematics"}
        description={
          "Vishesh Sir is a highly skilled and dedicated Mathematics teacher known for his ability to simplify complex concepts with ease and clarity. His teaching style makes difficult topics understandable and enjoyable, helping students build strong mathematical foundations."
        }
      />
      <InfrastructureComponent
        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VikAOE2G2gjohpGNr_thh_7XSL1kZV7udA&s"}
        name={"Sonam Gupta"}
        subjectTaught={"Science"}
        description={
          "Sonam Ma'am is an enthusiastic Science teacher who sparks curiosity through interactive and practical learning."
        }
      />
      <InfrastructureComponent
        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VikAOE2G2gjohpGNr_thh_7XSL1kZV7udA&s"}
        name={"Satydev Srivastva"}
        subjectTaught={"Moral Science"}
        description={
          "Satydev Sir is a thoughtful Moral Values teacher who inspires students to lead with integrity and compassion."
        }
      />
      <InfrastructureComponent
        image={"https://media.istockphoto.com/id/1331422830/photo/confident-smiling-indian-school-teacher-with-students-in-background.jpg?s=612x612&w=0&k=20&c=Y6yICEM3uqYlF0f-PyNPUuVXyjcOyoaqToKZv8vyNZY="}
        name={"Shalini Patel"}
        subjectTaught={"General Knowledge"}
        description={
          "Shalini ma’am is a knowledgeable and engaging General Knowledge (GK) teacher. She makes learning interesting by connecting facts with real-life examples."
        }
      />
      <InfrastructureComponent
        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VikAOE2G2gjohpGNr_thh_7XSL1kZV7udA&s"}
        name={"Manoj Gupta"}
        subjectTaught={"English"}
        description={
          "Manoj Sir is an engaging English teacher who enhances language skills with creativity and clarity. He inspires students to express themselves confidently and improves their grammar, vocabulary, and communication abilities through interactive and practical lessons."
        }
      />
      <InfrastructureComponent
        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VikAOE2G2gjohpGNr_thh_7XSL1kZV7udA&s"}
        name={"Nitesh Shukla"}
        subjectTaught={"Computer"}
        description={
          "Nitesh Shukla Sir is a knowledgeable Computer teacher who makes technology and coding easy to learn and exciting. His teaching approach breaks down complex programming concepts into simple steps, encouraging students to explore and innovate with confidence.."
        }
      />
    </div>
  );
}

export default Faculty;
