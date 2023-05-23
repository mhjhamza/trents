import React,{useState} from "react";
import {data} from "../data/data"
import Accordion from "./Accordion";

const Region = ({city}) => {
  const [disable,setDisable] = useState(false)
  const [jobs,setJobs] = useState("")

  return (
    <div className="container mx-auto mt-16" id="region">
      <div className="text-center flex justify-center items-center">
        <div className="w-1.5 bg-primary h-10 text-primary mr-2 max-xs:h-8"></div>
        <span className="text-3xl text-text font-medium max-xs:text-2xl">Job Trends by industry</span>
      </div>
      <p className="my-8 text-text text-center text-lg max-xs:text-medium max-xs:text-base">
        Stay up-to-date on regional trends and discover which region is best for
        you
      </p>
      <div className="bg-card text-text p-4 shadow w-full">
        <div className="flex justify-between items-center w-full max-sm:justify-center max-sm:flex-col">
          <p className="text-lg font-medium max-sm:font-medium max-sm:text-xl max-sm:mb-4">Job Trends</p>
          <div className="flex justify-center items-center max-xs:text-sm">
            <button className={`${jobs ==="" ? 'bg-primary text-card':'bg-transparent'} rounded-full border-2 border-primary py-1 px-2 hover:bg-primary hover:text-card hover:transition-all hover:duration-500`} onClick={()=>{setDisable(false); setJobs("")}}>Trending Now</button>
            <button className={`${jobs ==="PastJobTrends" ? 'bg-primary text-card':'bg-transparent'} rounded-full border-2 border-primary py-1 px-2 mx-2 hover:bg-primary hover:text-card hover:transition-all hover:duration-500`} onClick={()=>{setDisable(true); setJobs("PastJobTrends")}}>Past 5 Years</button>
            <button className={`${jobs ==="FutureJobPredictions " ? 'bg-primary text-card':'bg-transparent'} rounded-full border-2 border-primary py-1 px-2 hover:bg-primary hover:text-card hover:transition-all hover:duration-500`} onClick={()=>{setDisable(true); setJobs("FutureJobPredictions ");}}>Future 5 Years</button>
          </div>
        </div>

        <hr className="my-4" />

        <div className="overflow-y-scroll h-[60vh] bar">
        {data && data[0][city].JobTrends.length==0 ? (
          <p className="text-center pt-4 text-xl">No Data Found</p>
        ): ( data[0][city].JobTrends.map((val,index)=>(
          <Accordion val={val} key={index} disable={disable} jobs={jobs}/>
        )))}

        </div>
        </div>
      </div>
  );
};

export default Region;
