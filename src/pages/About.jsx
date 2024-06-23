import React, { useContext } from "react";
import { CursorContext } from "../contexts/CursorData.jsx";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import portrait from "../assets/portrait-roxanne.jpeg";
import cvfile from "../assets/RoxanneLucasCV2023.pdf";

const About = () => {
  const { setCursorData } = useContext(CursorContext);

  return (
    <div className="about" id="about">
      <motion.p
        className="intro"
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-20%" }}
      >
        <i>
          “The skills acquired during my career as a tattoo artist enable me to
          understand the challenges faced by marketing and creative teams. It is
          for the satisfaction of solving complex problems that I have turned to
          the fascinating world of coding.”
        </i>
      </motion.p>
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
        <p>
          • Sept 2023 to now • Frontend Developper
          <br />
          <a
            onMouseOver={() => setCursorData({ data: "hover" })}
            onMouseLeave={() => setCursorData({ data: "" })}
            href="https://ultro.fr/"
          >
            <i>Ultrō</i>
          </a>
        </p>
      </div>
      <a
        href={cvfile}
        target="_blank"
        className="resume-pdf"
        onMouseOver={() =>
          setCursorData({
            data: "text",
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
        <span>EXPLORE MY RESUME</span>
        <FiArrowRight
          style={{ height: "1.5em", width: "1.5em" }}
          className="arrow"
        />
      </a>
    </div>
  );
};

export default About;
