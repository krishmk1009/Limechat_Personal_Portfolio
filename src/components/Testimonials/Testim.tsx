import React from "react";
import Slider from "react-slick";
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testim: React.FC = () => {
  const slidesContent = [
    {
      bgColor: "bg-yellow-300",
      text: "Graduate Er Trainee",
      content:
        "Currently undergoing comprehensive training program to develop a strong foundation in VOIS.Actively participating in team discussions and training sessions to gain insights into the company's projects, processes, and methodologies.",
      user: "Vodafone Intelligent Sols",
    },
    {
      bgColor: "bg-yellow-300",
      text: "Co-founder",
      content:
        "Developed and operated a platform for pre-booking seats in parlours and saloons, with 20+ registered professional saloons. Led a team of two developers in the successful implementation of the platform in Ahmednagar.",
      user: "Freelon.in",
    },
    {
      bgColor: "bg-yellow-300",
      text: "Web Developer",
      content:
        "Created the website architecture, Designed and managed the website backend, including database and server integration. Task:Designing and building the website frontend.Creating the website architecture. Designing and managing the website back-end including database and server integration. ",
      user: "Wealo Studio",
    },
    {
      bgColor: "bg-yellow-300",
      text: "Wordpress Developer",
      content:
        "Identified and reported bugs, collaborating with the development team for timely resolution and a good user experience.Task:  Developed a web application using Wordpress builder, contributing to the successful launch of the project. Identified and reported bugs, working closely with the development team to ensure timely resolution and a seamless user experience.Interacted with clients to provide high-quality customer service and ensure satisfaction with the project.  .",
      user: "CyberArtLab Solutions",
    },
    {
      bgColor: "bg-yellow-300",
      text: "Co-founder",
      content:
        "Developed and operated a platform for pre-booking seats in parlours and saloons, with 20+ registered professional saloons. Led a team of two developers in the successful implementation of the platform in Ahmednagar.",
      user: "Freelon.in",
    },
    
    // Add more objects for additional slides


  ];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      
    ]
  };

  return (
    <div className="max-w-7xl mx-auto hidden md:block lg:block">
      <div className="flex justify-center my-12 font-kanit text-[#2E2E2E]">
        <h3 className="md:text-56 text-32 md:mx-3">Work</h3>
        
        <img
          className="md:h-12 md:w-12 h-6 w-6 md:mt-6 mt-4 mx-2 md:mx-0"
          src="https://assets-global.website-files.com/6371db14913d03869b606e68/63bbf2fc09562750cdd04259_heart.svg"
        />{" "}
        <h3 className="md:text-56 text-32  md:mx-3 font-semibold">Experience</h3>
      </div>
      <div>

      <Slider {...settings}>
        {slidesContent.map((slide, index) => (
          <div
            key={index}
            className="slick-slide md:h-386 w-[500px] h-[350px] md:w-320 rounded-2xl border-2 border-black py-4 px-4 md:mr-20"
          >
            <p
              className={`${slide.bgColor} text-[16px] text-[#323232] font-semibold font-kanit py-1 px-8 rounded-full inline-block`}
            >
              {slide.text}
            </p>

            <p className="my-4 font-poppins text-[14px]">{slide.content}</p>

            <p className="bg-testUser py-2 px-8 rounded-xl text-[16px] text-[#323232] font-semibold inline-block absolute top-360">
              {slide.user}
            </p>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default Testim;

