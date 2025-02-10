import React from "react";

import pic from "/public/WhatsApp Image 2025-02-09 at 12.45.28.jpeg";

import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub} from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import { Button} from "@mui/material";
import { styled } from "@mui/system";


import { ReactTyped } from "react-typed";

function Home() {
  const CvButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#00c8ff",
    color: "white",
    marginTop: "20px",
    padding: "10px 20px",
    borderRadius: "25px",
    fontSize: "1rem",
    textTransform: "none",
    boxShadow: "0px 4px 10px rgba(0,200,255,0.3)",
    "&:hover": {
      backgroundColor: "#00b2e2",
    },
  }));
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Assets/Rohit-React-Resume.pdf";
    link.download = "Rohit_Resume.pdf";
    link.click();
  };  
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello,It's Me</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-sky-400 font-bold"
                strings={["Rohit","React Developer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
            I am deeply passionate about continuously enhancing my technical skills and staying driven by the desire to learn and grow. Embracing new challenges, I am always eager to take on innovative tasks and contribute to dynamic projects.

            </p>
            <br />
            {/* social media icons */}
            <div className="  flex flex-col  md:flex-row justify-between space-y-6 md:space-y-0 sm:justify-start">
              <div className="  space-y-2">
                <h1 className="font-bold  ">Available on</h1>
                <ul className="flex space-x-5 mb-4">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaInstagram className="text-3xl cursor-pointer  text-sky-400  mb-4" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin className="text-3xl cursor-pointer text-sky-400 mb-4 " />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <IoLogoGithub className="text-3xl cursor-pointer text-sky-400 mb-4 " />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank">
                      <SiLeetcode className="text-3xl cursor-pointer text-sky-400  mb-4" />
                    </a>
                  </li>
                </ul>
        
              </div>
           
       
            </div>
            <CvButton onClick={handleDownload} variant="contained" >
          Download CV
        </CvButton>
          </div>
          
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      
      </div>
    


    </>
  );
}

export default Home;
