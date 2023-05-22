import React,{useState} from "react";
import IndustryTrend from "../components/IndustryTrend";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Region from "../components/Region";
import Topics from "../components/Topics"
import Footer from "../components/Footer"

const Home = () => {
  const [city,setCity] = useState("Mexico City, Mexico")
  const callback = payload => {
    setCity(payload)
    console.log(payload)
  }
  return (
    <div className="bg-bg text-text">
      <Navbar />
      <Hero callback={callback}/>
      <IndustryTrend city={city}/>
      <Region city={city}/>
      <Topics city={city}/>
      <Footer/>
    </div>
  );
};

export default Home;
