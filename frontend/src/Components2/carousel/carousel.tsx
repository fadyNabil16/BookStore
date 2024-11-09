import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import panner1 from "../../assets/panner1.webp";
import panner2 from "../../assets/panner2.webp";

type Props = {};

const CustomCarousel = (props: Props) => {
  return (
    <Carousel
      autoPlay={true}
      duration={400}
      interval={17000}
      stopAutoPlayOnHover={true}
      cycleNavigation={true}
      animation="slide"
      indicators={false}
      swipe={true}
    >
      <div>
        <img src={panner1} alt="" className="w-[100%] h-[100%] object-fit" />
      </div>
      <div>
        <img src={panner2} alt="" className="w-[100%] h-[100%] object-fit" />
      </div>
      <div>
        <img src={panner1} alt="" className="w-[100%] h-[100%] object-fit" />
      </div>
    </Carousel>
  );
};

export default CustomCarousel;
