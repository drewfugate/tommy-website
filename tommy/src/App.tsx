import React from "react";
import headshot from "./images/headshot.png";
import Header from "./components/header";
import AboutMe from "./components/AboutMe";
import "./App.css";
import { animateScroll as scroll, scroller } from "react-scroll";

const albums = [
  {
    title: "Ruby Bottles",
    date: "2023",
    description: "description of Ruby Bottles",
    image: require("./images/bottles.png"),
  },
  {
    title: "Emeralds and Jade",
    date: "2021",
    description: "description of Emeralds and Jade",
    image: require("./images/crystals.png"),
  },
  {
    title: "Numb It",
    date: "2020",
    description: "description of Numb It",
    image: require("./images/whiskey.png"),
  },
  {
    title: "The Marked",
    date: "2019",
    description: "description of The Marked",
    image: require("./images/hand.png"),
  },
  {
    title: "An Introduction",
    date: "2019",
    description: "description of An Introduction",
    image: require("./images/kingfisher.png"),
  },
];

function App() {
  return (
    <div id="Home" className="App">
      <Header />
      <header className="App-header"></header>
      <img className="headshot" src={headshot} alt="headshot" />
      <div id="Discography" className="clickableBackground">
        <h4 className="disco">Discography</h4>
      </div>
      <div className="album-grid">
        {albums.map((album, index) => (
          <div key={index} className="album">
            <img src={album.image} alt={album.title} />
            <h4>{album.title}</h4>
            <p>{album.date}</p>
            <p>{album.description}</p>
          </div>
        ))}
      </div>
      <AboutMe />
    </div>
  );
}

export default App;
