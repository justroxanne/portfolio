import React, { useContext } from "react";
import { GalleryContext } from "../contexts/WorkGallery";
import { CursorContext } from "../contexts/CursorContext";

interface Props {
  mousePosition: { x: number; y: number };
}

const Cursor = ({ mousePosition }: Props) => {
  const { currentImageSrc } = useContext(GalleryContext);
  const { cursorData } = useContext(CursorContext);

  return (
    <>
      <div
        id="cursor"
        className="cursor"
        data-background={currentImageSrc !== ""}
        data-text={cursorData.data === "text"}
        data-hover={cursorData.data === "hover"}
        style={{
          backgroundImage: currentImageSrc ? `url(${currentImageSrc})` : "none",
          transform: `translate(calc(${mousePosition.x}px - 50%), calc(${mousePosition.y}px - 50%))`,
        }}
      >
        {cursorData.text && <span>{cursorData.text}</span>}
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
