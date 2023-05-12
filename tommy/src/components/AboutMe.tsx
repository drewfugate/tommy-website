import "../App.css";
import React from "react";

const aboutMe = [
  {
    header: "About Me: ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque molestiae consequuntur eveniet minus eum dolor fugit delectus, illo ducimus blanditiis est in modi exercitationem corrupti recusandae, beatae accusamus qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque molestiae consequuntur eveniet minus eum dolor fugit delectus, illo ducimus blanditiis est in modi exercitationem corrupti recusandae, beatae accusamus qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque molestiae consequuntur eveniet minus eum dolor fugit delectus, illo ducimus blanditiis est in modi exercitationem corrupti recusandae, beatae accusamus qui.",
    contact: "Contact: tommytomsomething@gmail.com",
    image: require("../images/portrait.png"),
  },
];

export default function AboutMe() {
  return (
    <div id="About" className="aboutMe">
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
  );
}
