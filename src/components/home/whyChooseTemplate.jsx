import React from "react";

const WhyChooseTemplate = () => {
  return (
    <div className="w-[85%] mx-auto rounded-lg shadow-lg text-white flex flex-col md:flex-row items-center bg-gray-100 p-8 rounded-2xl shadow-lg">
      {/* Text Section */}
      <div className="md:w-1/2 p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Why Choose Sam Public School?
        </h2>
        <p className="text-gray-600 mb-4">
        Sam Public School is renowned for its commitment to excellence in education, blending rich traditions with modern advancements. With a well-curated library and world-class sports facilities, we create a nurturing environment where students thrive. As one of the top CBSE schools in Patna, we emphasize academic success, all-round development, and equipping students with the skills they need to excel in life.
        </p>
        <ul className="text-gray-700 space-y-2">
          <li>✅ 28+ Years of Excellence in delivering top-quality education.</li>
          <li>✅ A library of 15,000+ books to foster a culture of reading.</li>
          <li>✅ State-of-the-art sports complex, spanning over 8,000 sq. ft.</li>
          <li>✅ 100% Result Guarantee - Achieving academic success year after year.</li>
          <li>✅ Recognized as one of the top CBSE schools in Jaipur.</li>
        </ul>
      </div>
      {/* Image Section */}
      <div className="md:w-1/2 p-6 flex justify-center">
        <img
          src="https://gyanvihar.school/wp-content/uploads/2023/03/gv-banner.png-1024x576.jpg"
          alt="Sam Public School"
          className="rounded-lg shadow-md w-full h-auto"
        />
      </div>
    </div>
  );
};

export default WhyChooseTemplate;
