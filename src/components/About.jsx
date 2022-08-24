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
          I'm a Blockchain Developer who is passionate about Blockchain
          technology, dedicated to keen on growing the global community, and
          endowed with an innovative mind to strategize technology architecture.
          I realized that the most exciting things would happen in Blockchain.
        </p>

        <br />

        <p className="text-xl">
          I have more than 1 year of experience building Dapps and writing smart
          contracts. Currently, I love to work on Web3 applications using
          technologies like Solidity, Hardhat, ReactJs, NodeJs, and more.
        </p>
      </div>
    </div>
  );
};

export default About;
