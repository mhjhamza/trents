import React from "react";
import { Chart } from "react-google-charts";
import {IoMdDownload} from "react-icons/io"
import {BsFillShareFill} from "react-icons/bs"

const ChartData = () => {
   const data = [
    ["Year", "Sales"],
    ["Feb 24, 20016", 0,],
    ["Mar 16, 20018", 25],
    ["Feb 14, 2021", 75],
    ["June 18, 2023", 100],
  ];

  const options = {
    curveType: "function",
    legend: "none",
  };
  
  return (
    <div className="container mx-auto w-full bg-card shadow mt-16 px-16 py-4">
      <div className="w-full flex justify-between items-center my-4">
        <p className="text-lg font-medium">Interest over time</p>
        <div className="text-primary flex text-2xl">
            <IoMdDownload className="mr-8"/>
            <BsFillShareFill/>
        </div>
      </div>
      <hr className="w-full"/>
      <div className="w-full">
      <Chart
        chartType="LineChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
      />
      </div>
    </div>
  );
};

export default ChartData;
