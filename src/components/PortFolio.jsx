import React from "react";

import Profile from "/public/photo.avif"
import { Link } from "@mui/material";
function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo:  Profile,
      name: "AI Bot Chat",
      description: "Building AI Chatbot using React,Node and TanserFlow Js ",
      codeLink:"https://github.com/Rohit367673"
      
    },
    {
      id: 2,
      logo:  Profile,
      name: "Gerg Website",
      description: "Multi Brand Cloth Website build using MERN Stack,Razorpay.",
      codeLink:"https://github.com/Rohit367673"
    },
    {
      id: 3,
      logo:  Profile,
      name: "Realshop Website",
      description: "E-commerce website build using MERN Stack and Redux",
      codeLink:"https://github.com/Rohit367673/RealShop-Site"
    },
    {
      id: 4,
      logo:  Profile,
      name: "Weather Website",
      description: "Weather forecasting application using React and Weather API",
      codeLink:"https://github.com/Rohit367673/WeatherApp"
    },
  
   
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5 ">
          {cardItem.map(({ id, logo, name,description,codeLink }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300 border-sky-400"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2 text-sky-400">{name}</div>
                <p className="px-2 text-white">
                 {description}
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
              <Link top={codeLink}>
                <button className="bg-sky-400 hover:bg-sky-500 text-white font-bold px-4 py-2 rounded">
             
                  Source code
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
