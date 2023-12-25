import React from "react";
import Feature2Img from "../../assets/feature2.png";
const Feature1: React.FC = () => {
  return (
    <div className="hero-section md:my-20 py-10  relative md:h-100 overflow-hidden">
      <img
        src="https://assets-global.website-files.com/6371db14913d03869b606e68/64c7bd12ee17944c5c1c7b4f_left-gradient.svg"
        alt="Background Image"
        className="absolute left-0 md:top-1/2 top-1/3 transform -translate-y-1/2 w-auto md:h-full h-1/2"
      />
      <div className="max-w-7xl mx-auto">
        <div className="md:flex">
          <div className="md:w-1/2 mt-10 px-4 md:px-0  text-left">
            <h1 className="md:text-56 text-32 leading-none	py-3 font-kanit">
              Online Salon Booking Platform:{" "}
              <span className="text-darkGreen font-extrabold"> Freelon</span>
            </h1>

            <p className=" md:pr-10 md:text-20 text-20 md:w-5/6  md:py-3 md:pb-6 font-poppins md:font-medium text-[#323232]">
              Led the successful implementation of a salon booking platform in
              Ahmednagar.
            </p>
            <div className=" pb-6 font-poppins">
              <div className="flex items-center md:w-86">
                <img
                  src="https://assets-global.website-files.com/6371db14913d03869b606e68/64b8e2eb2fd64bfc7c36bb67_pricing-right-icon.svg"
                  alt="Bullet Icon"
                  className="mr-4 "
                />
                <p className="text-18 mt-6">
                  Expanded the user base by partnering with 20+ professional
                  salons.
                </p>
              </div>
              <div className="flex items-center md:w-86">
                <img
                  src="https://assets-global.website-files.com/6371db14913d03869b606e68/64b8e2eb2fd64bfc7c36bb67_pricing-right-icon.svg"
                  alt="Bullet Icon"
                  className="mr-4  "
                />
                <p className="text-18 mt-6">
                  Demonstrated strong leadership skills and a commitment to
                  achieving project goals throughout implementation process.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img className="md:ml-20 md:mt-10 mt-5 px-6 md:px-0" width={"600px"} src={Feature2Img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature1;
