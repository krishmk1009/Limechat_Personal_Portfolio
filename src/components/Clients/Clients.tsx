import React from "react";
import ClientSlider from "./ClientsSlider";

const Clients: React.FC = () => {
  return (
    <div className="bg-gray-100 pt-5 md:pt-10 md:pb-10 pb-5 hidden md:block lg:block">
      <div className="max-w-7xl mx-auto">

        <h3 className="text-center md:mb-6 text-32 font-kanit">
     <span className="font-semibold text-green-900 ">
     4+ Startups
        </span>   Working Experience



        </h3>
        <ClientSlider />
      </div>
    </div>
  );
};

export default Clients;
