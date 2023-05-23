import { data } from "../data/data";
import React from "react";

const IndustryTrend = ({ city }) => {
  return (
    <div className="container mx-auto w-full bg-card shadow-lg mt-16 px-16 py-4 overflow-x-auto">
      <div className="min-w-[640px] overflow-x-scroll">
        <table className="w-full table-auto bg-bg">
          <thead>
            <tr className="text-left text-card bg-primary">
              <th className="px-2 py-2">Ranking</th>
              <th>Trending Now</th>
              <th>Previous 5 Years</th>
              <th>Future 5 Years</th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody>
            {data && data[0][city].IndustryTrends.length == 0 ? (
              <tr className="text-xl text-center">
                <td className="py-4" colSpan={5}>
                  No Data Found
                </td>
              </tr>
            ) : (
              data[0][city].IndustryTrends.map((val, index) => (
                <tr key={index} className="py-4 border-b">
                  <td className="px-2 py-2">
                    {val.Ranking == null ? "null" : val.Ranking}
                  </td>
                  <td>
                    {val.IndustrysTrendingNow == null
                      ? "null"
                      : val.IndustrysTrendingNow}
                  </td>
                  <td>
                    {val["5YearsPrevious(MD)"] == null
                      ? "null"
                      : val["5YearsPrevious(MD)"]}
                  </td>
                  <td>
                    {val["5YearsFuture(MD)"] == null
                      ? "null"
                      : val["5YearsFuture(MD)"]}
                  </td>
                  <td>{val.Language == null ? "null" : val.Language}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IndustryTrend;
