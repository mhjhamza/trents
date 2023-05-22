import React,{useState} from "react";
import {HiOutlineSearch} from "react-icons/hi"
import {data} from "../data/data"

const Hero = ({callback}) => {
  const [search,setSearch] = useState("");
  const [filterData,setFilterData] = useState([]);
  const [focus,setFocus] = useState(false)
  const onSearch = (value) => {
    callback(value)
    setSearch(value)
    setFilterData([])
  }

  const onChange = (e) => {
    const value = e.target.value
    setSearch(value)
    
    const newFilter = Object.keys(data[0]).filter((item) => {
      return (item.toLowerCase().includes(value.toLowerCase()))
    });
    
    if (value === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  }

  return (
    <div className="container mx-auto text-center mt-24" id="home">
      <h1 className="text-4xl font-medium">The Easiest Way to Know about <span className="text-primary">New</span> Job Trends</h1>
      <div className="text-card py-2 px-4 rounded-full shadow-lg mt-8 bg-card mx-24">
        <div className="flex items-center w-full">
          <div className="relative w-full">
            <input type="text" className="border-0 outline-0 pl-8 py-2 w-full text-text" placeholder="City / Country" value={search} onChange={onChange}/>
            <HiOutlineSearch className="text-primary text-2xl absolute left-0 top-2"/>
          </div>
          
          {/* <button className="rounded-full bg-primary text-card py-2 px-8 outline-0 ml-4">Search</button> */}
        </div>
      </div>
      
      <div className="bg-card text-text text-left mx-24 mt-4 shadow-lg pl-10">
          {filterData.length !=0 && filterData.map((val,index)=>(
            <div key={index} className="py-4 px-2 hover:bg-bg cursor-pointer" onClick={()=>onSearch(val)}>{val}</div>
          ))}
        </div>
    </div>
  );
};

export default Hero;
