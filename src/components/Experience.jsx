import React from "react";

import solidity from "../assets/solidity.png";
import hardhat from "../assets/hardhat.png";
import ethersjs from "../assets/ethers.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import node from "../assets/node.png";
import docker from "../assets/docker.png";
import github from "../assets/github.png";
import git from "../assets/git.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: solidity,
      title: "SOLIDITY",
      style: "shadow-gray-500",
    },
    {
      id: 2,
      src: hardhat,
      title: "HARDHAT",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: ethersjs,
      title: "ETHERS JS",
      style: "shadow-blue-800",
    },
    {
      id: 4,
      src: javascript,
      title: "JAVA SCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: reactImage,
      title: "React Js",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: git,
      title: "GIT",
      style: "shadow-red-600",
    },
    {
      id: 7,
      src: node,
      title: "Node JS",
      style: "shadow-lime-600",
    },
    {
      id: 8,
      src: docker,
      title: "DOCKER",
      style: "shadow-cyan-500/50",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full md:grid-cols-6"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          Tech stack
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
