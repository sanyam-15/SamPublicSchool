import React from "react";

const developers = [
  {
    name: "Abhay Keshri",
    role: "Full Stack Developer",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQG9qO-j-OUQSw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1699386259667?e=1748476800&v=beta&t=3R-_W1EBKHvP3TTwV09c8YmhwXpiMP-FKs0gaze2yFc",
    bio: "John is a passionate developer with experience in MERN stack development and cloud technologies. He has worked on multiple projects involving front-end and back-end development.",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
  },
  {
    name: "Sanyam Jain",
    role: "UI/UX Designer & Frontend Developer",
    image: "https://media.licdn.com/dms/image/v2/D5603AQH7tnRDtRTtCw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1727691608794?e=1748476800&v=beta&t=LuDOqwZebQfp0L_RSCU2XNLejrvDMxiLY7WqFlnCS0I",
    bio: "Jane specializes in creating user-friendly and visually appealing interfaces. She has a strong background in React.js, Tailwind CSS, and modern UI design principles.",
    linkedin: "https://linkedin.com/in/janesmith",
    github: "https://github.com/janesmith",
  },
];

const DeveloperInfo = () => {
  return (
    <div className="container mx-auto py-10 px-5">
      <h2 className="text-3xl font-bold text-center mb-8">Meet the Developers</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {developers.map((dev, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
          >
            <img
              src={dev.image}
              alt={dev.name}
              className="w-32 h-32 rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">{dev.name}</h3>
            <p className="text-gray-600">{dev.role}</p>
            <p className="mt-3 text-gray-700">{dev.bio}</p>
            <div className="mt-4 flex gap-4">
              <a
                href={dev.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
              <a
                href={dev.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperInfo;
