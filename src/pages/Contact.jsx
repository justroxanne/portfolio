import React, { useContext } from "react";
import { motion } from "framer-motion";
import { CursorContext } from "../contexts/CursorData.jsx";
import { FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  const { setCursorData } = useContext(CursorContext);

  return (
    <div className="contact">
      <motion.h2
        initial={{ opacity: 0, y: "25vh" }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "20%" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Let's talk together
      </motion.h2>
      <div>
        <a
          href="mailto:hello@roxannelucas.fr"
          target="_blank"
          rel="noopener"
          className="signature"
          onMouseOver={() =>
            setCursorData({
              data: "text",
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
          <li
            onMouseOver={() => {
              setCursorData({
                data: "hover",
              });
            }}
            onMouseLeave={() => {
              setCursorData({
                data: "",
              });
            }}
          >
            <a
              className="link"
              href="https://www.linkedin.com/in/roxannelucas/"
              target="_blank"
            >
              LINKEDIN
            </a>
          </li>
          <li
            onMouseOver={() => {
              setCursorData({
                data: "hover",
              });
            }}
            onMouseLeave={() => {
              setCursorData({
                data: "",
              });
            }}
          >
            <a
              className="link"
              href="https://github.com/justroxanne"
              target="_blank"
            >
              GITHUB
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
