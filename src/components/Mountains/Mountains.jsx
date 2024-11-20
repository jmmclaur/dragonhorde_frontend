import "./Mountains.css";
import React, { useState, useEffect } from "react";
import mountain1 from "../../assets/mountain1.png";
import mountain2 from "../../assets/mountain2.png";
import mountain3 from "../../assets/mountain3.png";
import background from "../../assets/background.png";
//import { useParallax } from "react-scroll-parallax";

const Parallax = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
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
          style={{ transform: "translateY(${scrollY * 0.5}px)" }}
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

/*
function Mountains({ handleScroll }) {
  //const currentUser = useContext(CurrentUserContext);
  //const parallax = useParallax({ speed: -10 });
  //ref={parallax.ref}
  const { value } = window.scrollY;

  return (
    <section className="mountains" id="mountains">
      <img
        src={mountain3}
        alt="mountain3"
        className="mountain3-img"
        id="mtn3"
      />
      <img
        src={mountain2}
        alt="mountain2"
        className="mountain2-img"
        id="mtn2"
      />
      <img
        src={mountain1}
        alt="mountain1"
        className="mountain1-img"
        id="mtn1"
      />
      <h2 id="text">The Dragon Horde</h2>
    </section>
  );
} */
/*
<script type="text/javascript">
        window.addEventListener("scroll", function()
        {(mountain1.style.top = { value } * 0.5 + "px")}; )
      </script>

  <script type="text/javascript">
  let mountain1 = document.getElementById("mtn1"); 
  let mountain2 = document.getElementById("mtn2"); 
  let mountain3 = document.getElementById("mtn3"); 

  window.addEventListener('scroll', function(){ 
  const { value } = window.scrollY;   
      mountain1.style.top = {value} * 0.5 + 'px';
      mountain2.style.top = {value} * 0.15 + 'px';
      mountain3.style.top = {value} * 0.5 + 'px';
      text.style.top = value * 1 + 'px';
  });
</script>; */

export default Parallax;
