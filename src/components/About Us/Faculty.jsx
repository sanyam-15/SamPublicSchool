import React from "react";
import HeroSection from "./HeroSection";
import InfrastructureComponent from "./InfrastructureComponent";

function Faculty() {
  return (
    <div>
      <HeroSection moto={"Our Teachers"} />
      <InfrastructureComponent
        image={"/Images/Library.jpg"}
        name={"Dr.Himadri Nayak"}
        employeeId={273}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, non enim! Omnis, quaerat praesentium. Dolorem ad quos amet enim similique unde veniam voluptatum molestias sint, assumenda nemo est laudantium beatae."
        }
      />
      <InfrastructureComponent
        image={"/Images/Library.jpg"}
        name={"Dr.Chetan Barde"}
        employeeId={272}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, non enim! Omnis, quaerat praesentium. Dolorem ad quos amet enim similique unde veniam voluptatum molestias sint, assumenda nemo est laudantium beatae."
        }
      />
      <InfrastructureComponent
        image={"/Images/Library.jpg"}
        name={"Dr.Purnendu Mondal"}
        employeeId={532}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, non enim! Omnis, quaerat praesentium. Dolorem ad quos amet enim similique unde veniam voluptatum molestias sint, assumenda nemo est laudantium beatae."
        }
      />
      <InfrastructureComponent
        image={"/Images/Library.jpg"}
        name={"Dr.Pradeep Kumar Biswal"}
        employeeId={403}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, non enim! Omnis, quaerat praesentium. Dolorem ad quos amet enim similique unde veniam voluptatum molestias sint, assumenda nemo est laudantium beatae."
        }
      />
    </div>
  );
}

export default Faculty;
