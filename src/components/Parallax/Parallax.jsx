/*
import "./Parallax.css";
import React, { useState, useEffect } from "react";
import mountain1 from "../../assets/mountain1.png";
import mountain2 from "../../assets/mountain2.png";
import mountain3 from "../../assets/mountain3.png";
//import { Parallax, ParallaxBannerLayer } from "react-scroll-parallax";

const Parallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <section className="mountains" id="mountains">
        <img
          src={mountain3}
          alt="mountain3"
          className="mountain3-img"
          id="mtn3"
          onScroll={scrollY}
        />
        <img
          src={mountain2}
          alt="mountain2"
          className="mountain2-img"
          id="mtn2"
          style={{ transform: "translateY(${scrollY * 1.5}px)" }}
        />
        <img
          src={mountain1}
          alt="mountain1"
          className="mountain1-img"
          id="mtn1"
          style={{ transform: "translateY(${scrollY * 0.5}px)" }}
        />
        <h2 id="text">The Dragon Horde</h2>
      </section>
    </div>
  );
};

console.log(scrollY);

export default Parallax;

*/

import "./Parallax.css";
import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Landscape() {
  return (
    <div>
      <Parallax
        pages={3}
        style={{
          backgroundImage: "linear-gradient(#e66465, #9198e5)",
        }}
      >
        <ParallaxLayer
          offset={0}
          className="center"
          style={{
            backgroundColor: "#ffccdd2",
          }}
        >
          <p className="welcome">Welcome</p>
          <p className="to the">To The</p>
          <p className="dragon horde">Dragon Horde</p>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          className="center"
          style={{
            backgroundColor: "#ef9a9a",
          }}
        >
          <div>Page 2</div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          className="center"
          style={{
            backgroundColor: "#e57373",
          }}
        >
          <div>Page 3</div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Landscape;
