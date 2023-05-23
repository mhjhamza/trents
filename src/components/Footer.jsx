import React from 'react'
import { Link as NavLink } from "react-scroll";

const Footer = () => {
  return (
    <div className='text-card bg-text mt-16'>
    <div className="container py-4 mx-auto flex justify-between items-center max-lg:px-4 py-8 max-sm:justify-center max-sm:flex-col">
        <h1 className="mt-1 text-3xl font-bold max-sm:mb-8">jobtrends.</h1>

        <div className="flex items-center font-medium text-lg max-xs:justify-center">
          <ul className="flex space-x-12 relative max-xs:flex-col max-xs:justify-center max-xs:items-center max-xs:space-x-0 max-xs:space-y-2 max-xs:text-base">
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
        </div>
  )
}

export default Footer