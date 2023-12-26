import React from "react";
import Navbar from "../Navbar/Navbar";
import Arrow from "../Icons/Arrow";
import "./Hero.css";
import LinkedinImg from "../../assets/linkedin.png";
import HeroImg from "../../assets/hero.png";
const Hero: React.FC = () => {
  return (
    <section>
      <div className="bg-myYellow hidden md:block lg:block">
        <p className="flex justify-center py-3 text-sm tracking-wide font-poppins">
          A MERN stack developer with a passion for Coding& Startup&nbsp;
          <span className="underline underline-offset-8 font-poppins font-medium">
            Your Ideal Candidate!
          </span>
        </p>
      </div>

      <Navbar />
      <div className="hero-section md:my-20  md:py-10 my-10 py-5  relative h-100 overflow-hidden">
        <img
          src="https://assets-global.website-files.com/6371db14913d03869b606e68/64c7bd12ee17944c5c1c7b4f_left-gradient.svg"
          alt="Background Image"
          className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 w-auto h-full"
        />
        <div className="max-w-7xl md:mx-auto lg:mx-auto">
          <div className="md:flex">
            <div className="md:w-1/2">
              <h1 className="md:text-56 leading-none	md:py-3 font-kanit text-headingClr md:w-4/5 px-8 md:px-0 text-32 text-center md:text-left">
                Hire your Ideal Candidate as{" "}
                <span className="text-darkGreen font-extrabold">
                  {" "}
                  Frontend Developer
                </span>
              </h1>

              <p className="md:w-4/5 md:pr-10 md:text-18 py-3 my-3 md:my-0 md:py-3 px-6 md:px-0 pb-6 font-poppins text-center md:text-left text-[16px] leading-[30px] md:leading-0">
                Frontend Developement Intern application, Presented by Krushna,
                a 2023 Computer Science Graduate
              </p>
              <div className="flex pb-6 mx-2 md:mx-0 px-1 md:px-0 font-poppins justify-center md:justify-normal md:mt-2">
                <a
                  href="https://drive.google.com/file/d/1GbfgzxUzoQ-GbxLZTAZxlU3zN9SjiafR/view?usp=sharing"
                  target="blank"
                >
                  <button className="bg-navBtnClr rounded-full p-3 px-6 font-medium md:text-lg w-48 text-16 transition duration-300 ease-in-out hover:bg-green-800 hover:text-white mr-2 md:mr-0">
                    Download CV
                  </button>
                </a>
                <a href="https://github.com/krishmk1009" target="blank">
                  <button className="flex items-center p-3 md:px-8 px-2 font-poppins font-medium md:text-lg  hoverBtn text-[15px]">
                    Visit Github &nbsp;
                    <Arrow />
                  </button>
                </a>
              </div>
              <a
                href="https://www.linkedin.com/in/krushnamodhave/"
                target="blank"
              >
                <img
                  className="mx-auto px-6 mt-2 md:px-0 md:mt-0 md:mx-0"
                  width={"320px"}
                  src={LinkedinImg}
                />
              </a>
            </div>
            <div>
              <img
                className="hero-img w-600 mt-10 md:mt-0 px-2 md:px-0"
                src={HeroImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

{
  /* */
}
