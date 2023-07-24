import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hey, I'm Sarams Rauniyar. I'm a Front-End Developer from Nepal. I have
          serious passion for UI effects, animations and creating intuitive,
          dynamic user experiences. I've a quite of experience in developing the
          web application and websites. Some of the language which i used are
          HTML, CSS, TAILWIND, REACT, JAVASCRIPT, etc......
        </p>
      </div>
    </div>
  );
};

export default About;
