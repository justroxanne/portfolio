import React, { useContext } from "react";
import { GalleryContext } from "../contexts/WorkGallery.jsx";
import { CursorContext } from "../contexts/CursorData.jsx";

const Cursor = ({ mousePosition }) => {
  const { currentImageSrc } = useContext(GalleryContext);
  const { cursorData } = useContext(CursorContext);

  return (
    <>
      <div
        id="cursor"
        className="cursor"
        data-background={currentImageSrc !== ""}
        data-color={cursorData.data === "color"}
        data-hover={cursorData.data === "hover"}
        style={{
          backgroundImage: `url(${currentImageSrc})`,
          transform: `translate(calc(${mousePosition.x}px - 50%), calc(${mousePosition.y}px - 50%))`,
        }}
      >
        {cursorData.text}
      </div>
      <div
        className="cursor-follower"
        style={{
          transform: `translate(calc(${mousePosition.x}px - 50%), calc(${mousePosition.y}px - 50%))`,
        }}
      ></div>
    </>
  );
};

export default Cursor;
