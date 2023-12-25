import React from "react";

const Feature3: React.FC = () => {
  return (
    <div className="hero-section md:my-20  md:py-10 px-4 md:px-0  relative h-100 overflow-hidden">
      <img
        src="https://assets-global.website-files.com/6371db14913d03869b606e68/64c7bd12ee17944c5c1c7b4f_left-gradient.svg"
        alt="Background Image"
        className="absolute left-0 top-1/2 md:top-1/3 transform -translate-y-1/2 w-auto h-full"
      />
      <div className="max-w-7xl mx-auto">
        <div className="md:flex">
          <div className="md:w-1/2 mt-10">
            <a href="https://www.tradingcompass.in/" target="blank">
              
            
            <h1 className="md:text-56 text-32  leading-none	md:py-3 font-kanit ">
             Financial Data Visualization:{" "}
              <span className="text-darkGreen font-extrabold">
                {" "}
               Trading Compass
              </span>
            </h1>
            </a>
            <p className=" md:pr-10 text-20 md:w-5/6 md:font-medium font-poppins py-3 pb-6 text-[#323232]">
            Contributed as a front-end developer to create a user-friendly financial data visualization platform. 
            </p>
            <div className=" pb-6 font-poppins text-18">
              <div className="flex items-center w-86">
                <img
                  src="https://assets-global.website-files.com/6371db14913d03869b606e68/64b8e2eb2fd64bfc7c36bb67_pricing-right-icon.svg"
                  alt="Bullet Icon"
                  className="mr-4 "
                />
                <p className=" md:mt-6">
                Utilized a range of graphical tools to enable users to analyze movements in the derivative market
                </p>
              </div>
              <div className="flex items-center w-86">
                <img
                  src="https://assets-global.website-files.com/6371db14913d03869b606e68/64b8e2eb2fd64bfc7c36bb67_pricing-right-icon.svg"
                  alt="Bullet Icon"
                  className="mr-4  "
                />
                <p className="mt-6">
               Collaborated effectively with the rest of the development team to ensure the successful deployment of the platform
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
            className="px-6 md:px-0"
              width={"600px"}
              src="https://assets-global.website-files.com/6371db14913d03869b606e68/63e656bb22b40212695c3f2d_Website-creatives-Part-2-updated-v3-p-800.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature3;
