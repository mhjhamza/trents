import React, { Fragment } from "react";
import {data} from "../data/data" 
import Map from "./Map";

const Topics = ({city}) => {  
  
  return (
    <div className="container mx-auto mt-16" id="topic">
      <div className="text-center flex justify-center items-center">
        <div className="w-1.5 bg-primary h-10 text-primary mr-2 max-sm:h-8 max-xs:h-6"></div>
        <span className="text-3xl text-text font-medium max-sm:text-2xl max-xs:text-xl max-xxs:text-base">
          By Related Programs & Queries
        </span>
      </div>
      <p className="my-8 text-text text-center text-lg max-sm:text-base max-xxs:text-sm">
        Stay up-to-date on regional trends and discover which region is best for
        you
      </p>

      <div className="flex justify-center gap-8 max-md:block">
        <div className="flex-[2] bg-card shadow rounded-lg p-4 max-md:mb-4">
          <p className="text-text text-lg font-bold">Available Program</p>
          <hr className="mt-2 mb-8" />
          <div>
          {data && data[0][city].AvailablePrograms.map((val,index)=>(
            <Fragment key={index}>
              <div>
                <p className="text-lg font-medium max-lg:text-[1.05rem]"><span className="text-primary">{index+1}</span> - {val.AvailableProgram}</p>
                <p className="text-maintext text-medium pl-6 pt-2">{val.Description}</p>
              </div>
              {index+1!=val.length && <hr className="my-8" />}
            </Fragment>
          ))}
            
          </div>
        </div>

        <div className="flex-[1] max-md:w-full max-md:flex max-md:items-center max-sm:block">
          <div className="bg-card shadow rounded-lg p-4 max-md:w-full">
          <p className="text-text text-lg font-bold">Trending Job Searches</p>
          <hr className="mt-2 mb-8" />
          <div>
          {data && data[0][city].TrendingSearches.map((val,index)=>(
            <Fragment key={index}>
              <div>
                <p className="text-lg font-medium max-lg:text-[1.05rem]"><span className="text-primary">{index+1}</span> - {val["TrendingJobSearches "]}</p>
              </div>
              {index+1!=val.length && <hr className="my-4" />}
            </Fragment>
          ))}
            
          </div>
          </div>
          
          <div className="bg-card shadow rounded-lg p-4 mt-2 max-md:mt-0 max-md:w-full max-md:ml-2 max-sm:block max-sm:ml-0 max-sm:mt-4">
            <p className="text-text text-lg font-bold">Location Information</p>
            <hr className="my-4" />
            <div>
            <p className="text-primary text-lg font-bold">Languages</p>
            <div className="flex items-center">
            {data && data[0][city].LocationInformation[0].Language.split(",").map((val,index)=>(
              <Fragment key={index} >
                <div className="flex items-center mx-2">
                  <div className="w-2 h-2 bg-primary rounded-lg mr-2 my-4"></div>
                  <span className="text-text font-medium">{val}</span>
                </div>
              </Fragment>
            ))}
            </div>  
            </div>
            <p className="text-primary text-lg font-bold my-4 ">Coordinates</p>
            <div className="h-56 overflow-hidden max-md:h-[11.5rem]">
              <Map coord={data[0][city].LocationInformation[0].Coordinants}/>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Topics;
