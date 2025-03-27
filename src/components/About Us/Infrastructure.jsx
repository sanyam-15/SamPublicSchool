import React, { useEffect } from "react";
import InfrastructureComponent from "./InfrastructureComponent";
import HeroSection from "./HeroSection";

function Infrastructure() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div>
        <HeroSection moto={"Our Facilities"} description={"Best ever"} section={"About Us"} />
      </div>

      <InfrastructureComponent
        image={"/Images/Library.jpg"}
        name={"Computer Lab"}
        description={
          "Nurture digital prowess in our dynamic Computer Lab. Equipped with modern computers and software, students embark on a coding, programming, and multimedia creation, preparing them for the tech-driven world beyond the classroom."
        }
      />
      <InfrastructureComponent
        image={"/Images/Library.jpg"}
        name={"Biology Lab"}
        description={
          "Nurture digital prowess in our dynamic Computer Lab. Equipped with modern computers and software, students embark on a coding, programming, and multimedia creation, preparing them for the tech-driven world beyond the classroom."
        }
      />
      <InfrastructureComponent
        image={"/Images/Library.jpg"}
        name={"Music Room"}
        description={
          "Nurture digital prowess in our dynamic Computer Lab. Equipped with modern computers and software, students embark on a coding, programming, and multimedia creation, preparing them for the tech-driven world beyond the classroom."
        }
      />
      <InfrastructureComponent
        image={"/Images/Library.jpg"}
        name={"Chemistry Lab"}
        description={
          "Nurture digital prowess in our dynamic Computer Lab. Equipped with modern computers and software, students embark on a coding, programming, and multimedia creation, preparing them for the tech-driven world beyond the classroom."
        }
      />
      <InfrastructureComponent
        image={"/Images/Library.jpg"}
        name={"Physics Lab"}
        description={
          "Nurture digital prowess in our dynamic Computer Lab. Equipped with modern computers and software, students embark on a coding, programming, and multimedia creation, preparing them for the tech-driven world beyond the classroom."
        }
      />
    </div>
  );
}

export default Infrastructure;
