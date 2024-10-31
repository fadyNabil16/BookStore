// type Props = {};

import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";

const Landing = () => {
  return (
   <div>
      <div className="bg-bgc-4">
        <Navbar/>
        <Header/>
      </div>
      <Hero/>
   </div>
  );
};

export default Landing;
