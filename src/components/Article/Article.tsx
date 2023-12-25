import React from "react";
import NewsImg from "../../assets/news.png";
const Article: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto my-10  md:my-20 lg:my-20">
      <div className="flex flex-col-reverse md:flex-col ">
        <div className="text-center">
          <h3 className="md:text-56 leading-none md:my-4   my-3 text-32 pt-5 pb-1 font-kanit px-5 md:px-0">
            Tech Passionate &
            <span className="text-green-900 font-semibold">
              {" "}
              Startup Enthusiast
            </span>
          </h3>
          <p className="md:text-18 text-16  w-4/5 md:w-3/5 mx-auto font-poppins">
            Featured in news articles by Punekar News and interviewed by
            RadioMirchi FM for the development of WhatsGPT.
          </p>
        </div>
        <div className="md:py-10 px-5 md:px-0">
          <a href="https://www.punekarnews.in/pune-students-create-ai-powered-whatsapp-chatbot-whatsgpt-to-offer-instant-information-and-assistance-for-everyday-tasks/z" target="blank">
       
          <img
            width={"900px"}
            className="mx-auto  rounded-2xl "
            src={NewsImg}
          />
               
               </a>
        </div>
      </div>
    </div>
  );
};

export default Article;
