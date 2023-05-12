import "./Footer.css";
import TikTok from "../images/TikTok.png";
import Twitch from "../images/Twitch.png";
import Twitter from "../images/Twitter.png";
import Instagram from "../images/Instagram.png";
import YouTube from "../images/YouTube.png";

export default function Footer() {
  const goToURL = (props: string) => {
    window.open(props, "_blank");
  };

  return (
    <div className="footer">
      <div className="hutlet">
        <p>Hutlet</p>
      </div>
      <div className="scrollButtons">
        <p>HOME</p>
        <p>DISCOGRAPHY</p>
        <p>ABOUT</p>
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
