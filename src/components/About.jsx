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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit iure
          at repudiandae obcaecati, earum recusandae dignissimos quibusdam ad
          hic expedita quis enim odio nesciunt voluptas laborum similique eius
          dolore eveniet laboriosam tenetur nisi maxime ex voluptatem corporis?
          Voluptas inventore similique accusantium hic reiciendis labore
          veritatis cupiditate obcaecati! Iusto, hic reiciendis.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          facere adipisci quos exercitationem tempora, repellendus soluta
          provident voluptatum iste odio magni sint, et libero ea quia
          aspernatur similique quod! Reprehenderit nemo iste aliquid sapiente
          illum incidunt, commodi omnis? Expedita quo, similique aut doloremque
          omnis sapiente voluptatem quam voluptatibus laborum voluptatum?
        </p>
      </div>
    </div>
  );
};

export default About;
