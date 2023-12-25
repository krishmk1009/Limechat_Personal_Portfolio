import React from "react";
import Footer from "../Footer/Footer";
import Arrow from "../Icons/Arrow";
const Newsletter: React.FC = () => {
  return (
    <div className="relative mt-44 md:mt-0">
      <div className="max-w-7xl  md:mx-auto mx-6  h-438 bg-gradient-to-tr from-white  via-yellow-100 to-lightGreenGrd flex flex-col-reverse md:flex-row md:rounded-[70px]  rounded-br-[70px] rounded-bl-[70px]   absolute md:-top-48 md:left-0 md:right-0 -top-44">
        <div className="md:w-3/5">
          <div className="md:p-20 ">
            <h3 className="text-[26px] md:text-56 px-6 md:px-0 md:leading-none leading-10 font-kanit">
              Excited to Contribute at{" "}
              <span className="font-semibold text-darkGreen">Limechat</span>{" "}
              with unique ideas
            </h3>

            <div className="md:flex pb-6 md:my-10 my-5 font-poppins px-6 md:px-0">
             
                <button className="bg-navBtnClr rounded-full md:p-3 md:py-0 py-3 md:px-8 px-5 font-medium md:text-lg text-sm md:w-48 transition duration-300 ease-in-out hover:bg-green-800 hover:text-white">  <a
                href="https://drive.google.com/file/d/1GbfgzxUzoQ-GbxLZTAZxlU3zN9SjiafR/view?usp=sharing"
                target="blank"
              >
                  Download CV </a>
                </button>
              
              <a href="https://github.com/krishmk1009" target="blank">
                <button className="hidden md:flex items-center p-3 px-8 font-medium text-[16px] hoverBtn">
                  Contact Me &nbsp;
                  <Arrow />
                </button>
              </a>
            </div>
          </div>
        </div>

        <div>
          <img
            className="rounded-tr-[68px] md:rounded-r-[68px]  rounded-tl-[68px] md:rounded-tl-none  md:px-0 mb-10 md:mb-0"
            width={"562.5px"}
            height={"439.5px"}
            src="https://assets-global.website-files.com/6371db14913d03869b606e68/64cc91adb5e5e509fba45b85_Limechat%20footer%20cta%20image-p-800.webp"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Newsletter;
