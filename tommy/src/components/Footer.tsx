import "./Footer.css";
import TikTok from "../images/TikTok.png";
import Twitch from "../images/Twitch.png";
import Twitter from "../images/Twitter.png";
import Instagram from "../images/Instagram.png";
import YouTube from "../images/YouTube.png";
import { animateScroll as scroll, scroller } from "react-scroll";

export default function Footer() {
  const scrollToAbout = (props: string) => {
    scroller.scrollTo(props, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -50,
    });
  };

  const goToURL = (props: string) => {
    window.open(props, "_blank");
  };

  return (
    <div className="footer">
      <div className="hutlet">
        <p>Hutlet</p>
      </div>
      <div className="scrollButtons">
        <button onClick={() => scrollToAbout("Home")}>HOME</button>
        <button onClick={() => scrollToAbout("Discography")}>
          DISCOGRAPHY
        </button>
        <button onClick={() => scrollToAbout("About")}>ABOUT</button>
      </div>
      <div className="socialButtons">
        <img
          src={TikTok}
          alt="TikTok"
          onClick={() => goToURL("https://www.spotify.com")}
        ></img>
        <img
          src={Twitch}
          alt="Twitch"
          onClick={() => goToURL("https://www.twitch.tv")}
        ></img>
        <img
          src={Twitter}
          alt="Twitter"
          onClick={() => goToURL("https://www.twitter.com")}
        ></img>
        <img
          src={Instagram}
          alt="Instagram"
          onClick={() => goToURL("https://www.instagram.com")}
        ></img>
        <img
          src={YouTube}
          alt="YouTube"
          onClick={() => goToURL("https://www.youtube.com")}
        ></img>
      </div>
    </div>
  );
}
