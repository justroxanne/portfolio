import React, { useContext } from "react";
import { CursorContext } from "../contexts/CursorData";
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
          });
        }}
        onMouseLeave={() => {
          setCursorData({
            data: "",
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
          });
        }}
        onMouseLeave={() => {
          setCursorData({
            data: "",
          });
        }}
      ></li>
    </ul>
  );
};

export default ColorTheme;
