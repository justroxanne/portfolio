import React, { useContext } from "react";
import { CursorContext } from "../contexts/CursorContext";
import { ThemeContext } from "../contexts/ThemeContext";

const ColorTheme = () => {
  const { setCursorData } = useContext(CursorContext);
  const { setColorTheme } = useContext(ThemeContext);

  return (
    <ul className="colors">
      <li
        className="white"
        onClick={() => {
          setColorTheme("light");
        }}
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
      ></li>
      <li
        className="black"
        onClick={() => {
          setColorTheme("dark");
        }}
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
      ></li>
    </ul>
  );
};

export default ColorTheme;
