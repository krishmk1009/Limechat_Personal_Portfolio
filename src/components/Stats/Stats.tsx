import React, { useState, useEffect, useRef } from "react";

const Stats: React.FC = () => {
  const [isIntersecting, setIntersecting] = useState(false);
  const [industryProjects, setIndustryProjects] = useState(0);
  const [frontendDevelopment, setFrontendDevelopment] = useState(0);
  const [backendDevelopment, setBackendDevelopment] = useState(0);
  const statsRef = useRef(null);

  const incrementStats = () => {
    setIndustryProjects((prev) => (prev < 10 ? prev + 1 : prev));
    setFrontendDevelopment((prev) => (prev < 85 ? prev + 5 : prev));
    setBackendDevelopment((prev) => (prev < 75 ? prev + 5 : prev));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      const interval = setInterval(incrementStats, 100);

      return () => clearInterval(interval);
    }
  }, [isIntersecting]);

  const containerClasses = "bg-gradient-to-r from-lightGreenGrd to-lightYellowGrd md:rounded-tr-120 rounded-tr-[65px]";
  const titleClasses = "md:text-56 text-26 md:w-85 mx-auto leading-none font-kanit";
  const statsContainerClasses = "flex max-w-7xl mx-auto justify-center md:mt-10 mt-5 pt-3 md:pb-20 pb-10 font-poppins px-4 md:px-0";

  const statBlockContainerClasses = "md:mx-10 md:px-20 text-center";
  const statBlockHeadingClasses = "md:text-7xl text-26 font-semibold";
  const statBlockTextClasses = "text-center text-[14px] md:text-18 py-2";

  return (
    <div className={containerClasses}>
      <div className="max-w-7xl mx-auto text-center md:pt-20 pt-10">
        <h3 className={titleClasses}>
          Passion for thinking <br />
          <span className="text-green-900 font-semibold"> out of the box</span>
        </h3>
      </div>
      <div className={statsContainerClasses} ref={statsRef}>
        <div className={statBlockContainerClasses}>
          <h4 className={statBlockHeadingClasses}>
            {industryProjects} +
          </h4>
          <p className={statBlockTextClasses}>
            Industry Project
          </p>
        </div>
        <div className={statBlockContainerClasses}>
          <h4 className={statBlockHeadingClasses}>
            {frontendDevelopment}%
          </h4>
          <p className={statBlockTextClasses}>
            Frontend Development
          </p>
        </div>
        <div className={statBlockContainerClasses}>
          <h4 className={statBlockHeadingClasses}>
            {backendDevelopment}%
          </h4>
          <p className={statBlockTextClasses}>
            Backend Development
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
