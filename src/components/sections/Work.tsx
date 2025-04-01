import React, { useContext } from "react";
import { GalleryContext } from "../../contexts/WorkGallery";
import { FiArrowRight } from "react-icons/fi";

const Work = () => {
  const { setCurrentImageSrc } = useContext(GalleryContext);

  const projects = [
    {
      title: "Les Rives d'Argentière",
      description: "Website development from scratch • Next JS",
      imageSrc: "/rives-argentiere.webp",
      link: "https://lesrivesdargentiere.vercel.app",
    },
    {
      title: "Wookie Clicker",
      description: "Personal Project • React",
      imageSrc: "/Wookie-clicker.png",
      link: "https://wookie-clicker.roxannelucas.fr",
    },
    {
      title: "Pop Pursuit",
      description: "Personal Project • React",
      imageSrc: "/pop-pursuit.png",
      link: "https://pop-pursuit.roxannelucas.fr",
    },
    {
      title: "Kaya",
      description: "Shopify theme customization for Ultrō • Liquid",
      imageSrc: "/kaya.webp",
      link: "https://kaya.io",
    },
    {
      title: "La Rosée",
      description: "Site maintenance for Ultrō • Hydrogen/Remix",
      imageSrc: "/la-rosee.avif",
      link: "https://larosee-cosmetiques.com",
    },
    {
      title: "Arva",
      description: "Store locator development • Next.js",
      imageSrc: "/arva.webp",
      link: "https://dealers.arva-equipment.com/fr",
    },
    {
      title: "Kimberfeel",
      description: "Shopify theme customization for Ultrō • Liquid",
      imageSrc: "/kimberfeel.webp",
      link: "https://kimberfeel.com",
    },
  ];

  return (
    <div className="work" id="work">
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
