import React from "react";


const Feature2: React.FC = () => {
  return (
    <div className="hero-section md:my-20 py-10 relative h-100 overflow-hidden">
      <img
        src="https://assets-global.website-files.com/6371db14913d03869b606e68/64c7bd12ee17944c5c1c7b4f_left-gradient.svg"
        alt="Background Image"
        className="absolute inset-y-0 right-0 w-full h-full object-cover"
      />
      <div className="max-w-7xl mx-auto px-4 md:px-0 relative z-10">
        <div className="md:flex">
          <div>
            <img
            className="md:mr-20 px-6 md:px-0"
              width={"500px"}
              src="https://whatsgpt.tech/assets/robot-27f3657a.png"
            />
          </div>
          <div className="md:w-1/2 md:mt-10 md:ml-10">
            <a href="https://whatsgpt.tech/" target="blank">

         
            <h1 className="md:text-56 text-32 leading-none	md:py-3 pt-5 font-kanit">
            Langchain Based Chatbot {" "}
              <span className="text-darkGreen font-extrabold">
                {" "}
                WhatsGPT
              </span>
            </h1>
            </a>
            <p className=" text-20 md:w-5/6 md:font-medium py-3 md:pb-6 font-poppins text-[#323232]">
            Worked collaboratively as a member of a team of 4 to design and develop a versatile AI chatbot using Node.js, MongoDB, WebApi's
            </p>
            <div className="pb-6 font-poppins text-18">
              <div className="flex items-center w-86">
                <img
                  src="https://assets-global.website-files.com/6371db14913d03869b606e68/64b8e2eb2fd64bfc7c36bb67_pricing-right-icon.svg"
                  alt="Bullet Icon"
                  className="mr-4 "
                />
                <p className="mt-6">
                Successfully deployed the chatbot, which  boasted a user base of over 3000 users
                </p>
              </div>
              <div className="flex items-center w-86">
                <img
                  src="https://assets-global.website-files.com/6371db14913d03869b606e68/64b8e2eb2fd64bfc7c36bb67_pricing-right-icon.svg"
                  alt="Bullet Icon"
                  className="mr-4  "
                />
                <p className=" mt-6">
                Recognized in a news article highlighting the team's innovative work in the field of chatbot development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature2;
