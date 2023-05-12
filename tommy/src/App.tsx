import React from "react";
import headshot from "./images/headshot.png";
import Header from "./components/header";
import "./App.css";

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

const aboutMe = [
  {
    header: "About Me: ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque molestiae consequuntur eveniet minus eum dolor fugit delectus, illo ducimus blanditiis est in modi exercitationem corrupti recusandae, beatae accusamus qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque molestiae consequuntur eveniet minus eum dolor fugit delectus, illo ducimus blanditiis est in modi exercitationem corrupti recusandae, beatae accusamus qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque molestiae consequuntur eveniet minus eum dolor fugit delectus, illo ducimus blanditiis est in modi exercitationem corrupti recusandae, beatae accusamus qui.",
    contact: "Contact: tommytomsomething@gmail.com",
    image: require("./images/portrait.png"),
  },
];

function App() {
  return (
    <div className="App">
      <Header />

      <header className="App-header"></header>
      <img className="headshot" src={headshot} alt="headshot" />
      <div className="clickableBackground">
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

      <div className="aboutMe">
        {aboutMe.map((about, index) => (
          <div key={index} className="about">
            <div className="left">
              <h4>{about.header}</h4>
              <p>{about.description}</p>
              <p>{about.contact}</p>
            </div>
            <div className="right">
              <img className="portrait" src={about.image} alt={about.header} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
