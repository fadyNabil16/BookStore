// type Props = {};

import BookOverview from "../../Components/BookSection/BookOverview";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Navbar from "../../Components/Navbar/Navbar";

const Landing = () => {
  return (
    <div className="overflow-hidden">
      <div className="bg-bgc-4">
        <Navbar />
        <Header className={`pt-[4rem]`} />
      </div>
      <Hero />
      <BookOverview Rate={4.5} />
    </div>
  );
};

export default Landing;
