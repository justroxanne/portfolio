import React, { useState } from "react";
import { Link } from "react-scroll";
import { useContext } from "react";
import { CursorContext } from "../contexts/CursorContext";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import ColorTheme from "./ColorTheme";

const Navbar = () => {
  const { setCursorData } = useContext(CursorContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const variants = {
    open: {
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
    closed: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: -20,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <div className="menu" data-open={isMenuOpen}>
      {!isDesktop && (
        <>
          <div role="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <motion.ul
            className="mobile-navigation"
            variants={variants}
            initial="closed"
            animate={isMenuOpen ? "open" : "closed"}
            data-open={isMenuOpen}
          >
            <motion.li variants={itemVariants}>
              <Link
                to="hello"
                smooth={true}
                duration={600}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                01/HELLO
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link
                to="work"
                smooth={true}
                duration={600}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                02/WORK
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link
                to="about"
                smooth={true}
                duration={600}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                03/ABOUT
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link
                to="contact"
                smooth={true}
                duration={600}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                04/CONTACT
              </Link>
            </motion.li>
            <motion.li
              variants={itemVariants}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <ColorTheme />
            </motion.li>
          </motion.ul>
        </>
      )}
      {isDesktop && (
        <ul className="main-navigation">
          <li
            onMouseOver={() => {
              setCursorData({
                data: "hover",
                text: "",
              });
            }}
            onMouseLeave={() => {
              setCursorData({
                data: "",
                text: "",
              });
            }}
          >
            <Link
              to="hello"
              spy={true}
              hashSpy={true}
              smooth={true}
              duration={600}
              className="link"
            >
              01/HELLO
            </Link>
          </li>
          <li
            onMouseOver={() => {
              setCursorData({
                data: "hover",
                text: "",
              });
            }}
            onMouseLeave={() => {
              setCursorData({
                data: "",
                text: "",
              });
            }}
          >
            <Link
              to="work"
              spy={true}
              hashSpy={true}
              smooth={true}
              duration={600}
              className="link"
            >
              02/WORK
            </Link>
          </li>
          <li
            onMouseOver={() => {
              setCursorData({
                data: "hover",
                text: "",
              });
            }}
            onMouseLeave={() => {
              setCursorData({
                data: "",
                text: "",
              });
            }}
          >
            <Link
              to="about"
              spy={true}
              hashSpy={true}
              smooth={true}
              duration={600}
              className="link"
            >
              03/ABOUT
            </Link>
          </li>
          <li
            onMouseOver={() => {
              setCursorData({
                data: "hover",
                text: "",
              });
            }}
            onMouseLeave={() => {
              setCursorData({
                data: "",
                text: "",
              });
            }}
          >
            <Link
              to="contact"
              spy={true}
              hashSpy={true}
              smooth={true}
              duration={600}
              className="link"
            >
              04/CONTACT
            </Link>
          </li>
          <li>
            <ColorTheme />
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
