import React from "react";
import "./header.css";
import { animateScroll as scroll, scroller } from "react-scroll";

function Header() {
  const scrollToAbout = (props: string) => {
    scroller.scrollTo(props, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -50,
    });
  };
  return (
    <div className="header">
      <p>Hutlet</p>
      <div className="right">
        <button onClick={() => scrollToAbout("Home")}>HOME</button>
        <button onClick={() => scrollToAbout("Discography")}>
          DISCOGRAPHY
        </button>
        <button onClick={() => scrollToAbout("about")}>ABOUT</button>
        <button id="whiteButton">LISTEN NOW</button>
      </div>
    </div>
  );
}

export default Header;
