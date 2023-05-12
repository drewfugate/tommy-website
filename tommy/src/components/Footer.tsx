import "./Footer.css";
import TikTok from "../images/TikTok.png";
import Twitch from "../images/Twitch.png";
import Twitter from "../images/Twitter.png";
import Instagram from "../images/Instagram.png";
import YouTube from "../images/YouTube.png";

export default function Footer() {
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
        <img src={TikTok} alt="TikTok"></img>
        <img src={Twitch} alt="Twitch"></img>
        <img src={Twitter} alt="Twitter"></img>
        <img src={Instagram} alt="Instagram"></img>
        <img src={YouTube} alt="YouTube"></img>
      </div>
    </div>
  );
}
