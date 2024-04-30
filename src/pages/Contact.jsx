import React, { useContext, useEffect } from "react";
import { CursorContext } from "../contexts/CursorData.jsx";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { FiArrowUpRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Contact = () => {
  const { setCursorData } = useContext(CursorContext);

  const moveUp = (elem) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: "-10dvh",
      },
      {
        opacity: 1,
        y: "-30dvh",
        delay: 2,
        duration: 5,
        scrollTrigger: {
          trigger: elem,
          scrub: 3,
          start: "top bottom",
          end: "top center",
        },
      }
    );
  };

  useEffect(() => {
    moveUp("#contact-title");
  }, []);

  return (
    <div className="contact">
      <h1 id="contact-title">Let's talk together</h1>
      <a
        href="mailto:hello@roxannelucas.fr"
        target="_blank"
        rel="noopener"
        className="signature"
        onMouseOver={() =>
          setCursorData({
            data: "hover",
            text: "contact me!",
          })
        }
        onMouseLeave={() =>
          setCursorData({
            data: "",
            text: "",
          })
        }
      >
        <FiArrowUpRight className="before" />
        <span>hello@roxannelucas.fr</span>
        <FiArrowUpRight className="after" />
      </a>
      <ul className="links">
        <li>
          <a href="https://www.linkedin.com/in/roxannelucas/" target="_blank">
            LINKEDIN
          </a>
        </li>
        <li>
          <a href="https://github.com/justroxanne" target="_blank">
            GITHUB
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
