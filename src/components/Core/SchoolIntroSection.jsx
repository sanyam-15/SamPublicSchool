import React from "react";

const SchoolIntroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center bg-gray-100 py-12 px-6 md:px-16">
      {/* Left: Image */}
      <div className="w-full md:w-1/2">
        <img
          src="https://www.qs.com/wp-content/uploads/2016/05/China-Webinar-FAQs-post.jpg" 
          alt="Students in discussion"
          className="rounded-lg shadow-lg"
        />
      </div>
      
      {/* Right: Text Content */}
      <div className="w-full md:w-1/2 bg-blue-900 text-white p-8 md:p-12 rounded-lg shadow-lg md:ml-8">
        <h2 className="text-xl md:text-3xl font-bold uppercase mb-4">Welcome to</h2>
        <h1 className="text-2xl md:text-4xl font-bold mb-6">
          Manava Bharati International School
        </h1>
        <p className="text-sm md:text-base leading-relaxed mb-6">
          Manava Bharati International School is affiliated to CBSE (Affiliation No. 330864) up to Senior Secondary Level. Unique in its perspectives and approach, we practice collaboration & participation in all spheres of life. This ensures holistic development of the students. Our students have demonstrated excellence in academics, sports, social & scientific environments, empathy to connect with the community and real-life situations.
        </p>
        <button className="bg-white text-blue-900 font-semibold px-6 py-2 rounded-lg hover:bg-gray-200 transition">
          Explore
        </button>
      </div>
    </section>
  );
};

export default SchoolIntroSection;
