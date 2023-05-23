import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Link as NavLink } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="sticky top-0 bg-bg z-10 container py-4 mx-auto flex justify-between items-center max-lg:px-4"
      >
        <Link to="/" className="mt-1 text-4xl text-text font-bold">
          <span className="text-primary">job</span>trends
          <span className="text-primary">.</span>
        </Link>

        <div className="hidden md:flex items-center font-medium text-lg">
          <ul className="flex space-x-12 mr-8 relative max-md:space-x-2 max-md:text-sm max-lg:mr-4">
            <li>
              <NavLink
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className='relative before:content-[""] before:absolute before:-bottom-[5px] hover:before:w-full before:w-0 before:h-[3px] before:rounded before:bg-primary before:transition-all before:duration-300'
              >
                Industry Trends
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClass="active"
                to="region"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className='relative before:content-[""] before:absolute before:-bottom-[5px] hover:before:w-full before:w-0 before:h-[3px] before:rounded before:bg-primary before:transition-all before:duration-300'
              >
                Job Trends
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClass="active"
                to="topic"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className='relative before:content-[""] before:absolute before:-bottom-[5px] hover:before:w-full before:w-0 before:h-[3px] before:rounded before:bg-primary before:transition-all before:duration-300'
              >
                Programs
              </NavLink>
            </li>
          </ul>
        </div>

        <div
          className="md:hidden text-3xl items-center"
          onClick={() => {
            setMenu(true);
          }}
        >
          <RxHamburgerMenu />
        </div>
      </motion.nav>

      <div
        className={`${
          menu ? "top-0" : "top-[-490px]"
        } md:hidden transition-all duration-500 fixed w-full py-4 px-8 bg-even dark:bg-dark z-10 bg-bg`}
      >
        <AiOutlineClose
          className="float-right text-right text-lg"
          onClick={() => setMenu(false)}
        />
        <div className="mt-6 flex flex-col justify-center items-center">
          <ul className="text-center space-y-4 relative">
            <li>
              <NavLink
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className='active:before:w-full relative before:content-[""] before:absolute before:-bottom-[5px] hover:before:w-full before:w-0 before:h-[3px] before:rounded before:bg-primary before:transition-all before:duration-300'
              >
                Industry Trends
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClass="active"
                to="region"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className='active:before:w-full relative before:content-[""] before:absolute before:-bottom-[5px] hover:before:w-full before:w-0 before:h-[3px] before:rounded before:bg-primary before:transition-all before:duration-300'
              >
                Job Trends
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClass="active"
                to="topic"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className='active:before:w-full relative before:content-[""] before:absolute before:-bottom-[5px] hover:before:w-full before:w-0 before:h-[3px] before:rounded before:bg-primary before:transition-all before:duration-300'
              >
                Programs
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
