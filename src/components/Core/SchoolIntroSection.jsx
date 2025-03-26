import React from "react";

const SchoolIntroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-gray-100 py-12 px-6 md:px-16 rounded-lg shadow-lg ">
      {/* Left: Image */}
      <div className="w-full md:w-1/2">
        <img
          src="https://www.qs.com/wp-content/uploads/2016/05/China-Webinar-FAQs-post.jpg"
          alt="Students in discussion"
          className="w-full h-full object-cover rounded-l-lg"
        />
      </div>
      
      {/* Right: Text Content with Background image */}
      <div className="w-full md:w-1/2 bg-red-900 text-white p-8 md:p-12 rounded-r-lg relative bg-cover bg-center" style={{ backgroundImage: "url('')" }}>
        <div className="absolute inset-0 bg-red-800 opacity-50 rounded-r-lg"></div>
        <div className="relative z-10">
          <h2 className="text-xl md:text-3xl font-bold uppercase mb-4">Welcome to</h2>
          <h1 className="text-2xl md:text-4xl font-bold mb-6">
            Manava Bharati International School
          </h1>
          <p className="text-sm md:text-base leading-relaxed mb-6">
            Manava Bharati International School is affiliated to CBSE (Affiliation No. 330864) up to Senior Secondary Level. Unique in its perspectives and approach, we practice collaboration & participation in all spheres of life. This ensures holistic development of the students. Our students have demonstrated excellence in academics, sports, social & scientific environments, empathy to connect with the community and real-life situations.
          </p>
          <button className="bg-white text-red-900 font-semibold px-6 py-2 rounded-lg hover:bg-gray-200 transition">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default SchoolIntroSection;
