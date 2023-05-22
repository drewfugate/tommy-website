import React from "react";
import headshot from "./images/headshot.png";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import "./App.css";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { animateScroll as scroll, scroller } from "react-scroll";

const albums = [
  {
    title: "Ruby Bottles",
    date: "2023",
    description: "description of Ruby Bottles",
    image: require("./images/bottles.png"),
    url: "https://spotify.com/ruby",
  },
  {
    title: "Emeralds and Jade",
    date: "2021",
    description: "description of Emeralds and Jade",
    image: require("./images/crystals.png"),
    url: "https://spotify.com/emeralds",
  },
  {
    title: "Numb It",
    date: "2020",
    description: "description of Numb It",
    image: require("./images/whiskey.png"),
    url: "https://spotify.com/whiskey",
  },
  {
    title: "The Marked",
    date: "2019",
    description: "description of The Marked",
    image: require("./images/hand.png"),
    url: "https://spotify.com/marked",
  },
  {
    title: "An Introduction",
    date: "2019",
    description: "description of An Introduction",
    image: require("./images/kingfisher.png"),
    url: "https://spotify.com/kingfisher",
  },
];

function App() {
  const goToURL = (props: string) => {
    window.open(props, "_blank");
  };

  return (
    <div id="Home" className="App">
      <Header />
      <header className="App-header"></header>
      <div className="portrait">
        <img className="headshot" src={headshot} alt="headshot" />
        <button onClick={() => goToURL("https://www.spotify.com")}>
          CHECK OUT MY MUSIC HERE
        </button>
      </div>
      <div id="Discography" className="clickableBackground">
        <h4 className="disco">Discography</h4>
      </div>
      <div className="above-discography"></div>
      <div className="album-grid">
        {albums.map((album, index) => (
          <div key={index} className="album" onClick={() => goToURL(album.url)}>
            <img src={album.image} alt={album.title} />
            <h4>{album.title}</h4>
            <p>{album.date}</p>
            <p>{album.description}</p>
          </div>
        ))}
      </div>
      <div className="below-album"></div>
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
