import React from "react";
import Feature1 from "./Feature1";
import Feature2 from "./Feature2";
import Feature3 from "./Feature3";

const Features: React.FC = () => {
  return (
   <div className="md:mb-0 mb-72">
    <Feature1 />
    <Feature2 />
    <Feature3 />
   </div>
  );
};

export default Features;
