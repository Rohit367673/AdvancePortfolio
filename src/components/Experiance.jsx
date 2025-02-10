import React from "react";
import express from "../../public/express.png";
import css from "../../public/css.jpg";
import react from "../../public/reactjs.png";
import javascript from "../../public/javascript.png";
import node from "../../public/node.png";
import mongodb from "../../public/mongodb.jpg";
import tanserflow from "../../public/54e81d02971f53e8.png";
function Experiance() {
  const cardItem = [
    {
      id: 3,
      logo: react,
      name: "React Js",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },

    {
      id: 6,
      logo: node,
      name: "Node Js",
    },
    {
      id: 7,
      logo: express,
      name: "Express Js",
    },
    {
      id: 8,
      logo: tanserflow,
      name: "Tanserflow Js",
    },
    {
      id: 1,
      logo: mongodb,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-sky-400">Technical Skills</h1>
        <p className="  ">
          I've experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" border-sky-400 flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
