import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from "./HeroElements";
import Navbar from "../Navbar";

const Hero = () => {
  return (
    <HeroContainer>
      <Navbar />
      <HeroContent>
        <HeroItems>
          <HeroItems>
            <HeroH1>Greatest pizza ever</HeroH1>
            <HeroP>Ready in 60 seconds</HeroP>
            <HeroBtn>Place Order</HeroBtn>
          </HeroItems>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
