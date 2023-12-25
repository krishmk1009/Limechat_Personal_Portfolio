import React from "react";

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => (
  <p className="px-4 mx-2 text-navItmClr text-18">{label}</p>
);

const Navbar: React.FC = () => {
  return (
    <div className="md:mx-auto md:max-w-7xl md:py-4 px-4 py-4">
      <div className="flex justify-between">
        <div className="my-auto">
          <img
            width={"164px"}
            src="https://assets-global.website-files.com/6371db14913d03869b606e68/63770aaf962ed77c0123fbd7_website-logo.webp"
            alt="Logo"
          />
        </div>

        <div className="my-auto hidden md:block lg:block">
          <ul className="flex font-kanit">
            <NavLink href="/" label="Home" />
            <NavLink href="/why" label="Why LimeChat" />
            <NavLink href="/solutions" label="Solutions" />
            <NavLink href="/pricing" label="Pricing" />
            <NavLink href="/company" label="Company" />
            <NavLink href="/resources" label="Resources" />
          </ul>
        </div>

        <div className="my-auto font-poppins hidden mg:block lg:block">
          <a
            href="https://drive.google.com/file/d/1GbfgzxUzoQ-GbxLZTAZxlU3zN9SjiafR/view?usp=sharing"
            target="blank"
          >
            <button className="bg-navBtnClr rounded-full p-3 px-8 font-medium text-lg w-48 transition duration-300 ease-in-out hover:bg-green-800 hover:text-white">
              Download CV
            </button>
          </a>
        </div>
        <div className="my-auto font-poppins  mg:hidden lg:hidden">
        <a href="https://github.com/krishmk1009" target="blank" >
          <button className=" p-3 px-8 font-poppins font-medium text-lg  hoverBtn lg:hidden md:hidden block underline underline-offset-8">
            Visit Github
          </button>
</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
