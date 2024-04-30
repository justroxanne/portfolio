import React, { useContext } from "react";
import { CursorContext } from "../contexts/CursorData.jsx";
import { FiArrowRight } from "react-icons/fi";
import portrait from "../assets/portrait-roxanne.jpeg";
import cvfile from "../assets/RoxanneLucasCV2023.pdf";

const About = () => {
  const { setCursorData } = useContext(CursorContext);

  return (
    <div className="about" id="about">
      <p className="intro">
        <i>
          "The skills acquired during my career as a tattoo artist enable me to
          understand the challenges faced by marketing and creative teams. It is
          for the satisfaction of solving complex problems that I have turned to
          the fascinating world of coding."
        </i>
      </p>
      <img src={portrait} className="portrait" />
      <div className="parkour">
        <p>
          • Feb to Aug 2023 • Web and web mobile developper
          <br />
          <i>Bootcamp training Wild Code School Biarritz </i>
        </p>
        <p>
          • 2012 to 2023 • Founder and tattoo artist
          <br />
          <i>L'antichambre tattoo studio and art gallery Anglet</i>
        </p>
      </div>
      <a
        href={cvfile}
        target="_blank"
        className="resume-pdf"
        onMouseOver={() =>
          setCursorData({
            data: "hover",
            text: "Click me !",
          })
        }
        onMouseLeave={() =>
          setCursorData({
            data: "",
            text: "",
          })
        }
      >
        <span>Explore my resume</span>
        <FiArrowRight
          style={{ height: "1.5em", width: "1.5em" }}
          className="arrow"
        />
      </a>
    </div>
  );
};

export default About;
