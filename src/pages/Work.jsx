import React, { useContext } from "react";
import { GalleryContext } from "../contexts/WorkGallery";
import { FiArrowRight } from "react-icons/fi";
import Wookie from "../assets/Wookie-clicker.png";
import tripPlanner from "../assets/tripPlanner.png";
import PopPursuit from "../assets/pop-pursuit.png";

const Work = () => {
  const { setCurrentImageSrc } = useContext(GalleryContext);

  const projects = [
    {
      title: "Wookie Clicker",
      description: "Personnal Project • React",
      imageSrc: Wookie,
      link: "http://wookie-clicker.roxannelucas.fr",
    },
    {
      title: "TripPlanner",
      description: "Hackathon: 24 hours / team of 2 • React / Node.js",
      imageSrc: tripPlanner,
      link: "http://tripplanner-mocha.vercel.app",
    },
    {
      title: "Pop Pursuit",
      description: "Personnal Project • React / Node.js / Express / MySQL",
      imageSrc: PopPursuit,
      link: "https://pop-pursuit.roxannelucas.fr",
    },
  ];

  return (
    <div className="work" id="work">
      <div className="project-img"></div>
      <ul className="projects">
        {projects.map((project, index) => (
          <li key={index} className="project-detail">
            <a
              className="project-container"
              href={project.link}
              target="_blank"
              onMouseOver={() => {
                setCurrentImageSrc(project.imageSrc);
              }}
              onMouseLeave={() => {
                setCurrentImageSrc("");
              }}
            >
              <h2 className="project-title">{project.title}</h2>
              <span className="project-description">{project.description}</span>
              <FiArrowRight
                style={{ height: "2em", width: "2em" }}
                className="arrow"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Work;
