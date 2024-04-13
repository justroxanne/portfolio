import React, { useContext } from "react";
import { GalleryContext } from "../contexts/WorkGallery.jsx";
import { FollowerContext } from "../contexts/FollowerData.jsx";

const Follower = ({ mousePosition }) => {
  const { currentImageSrc } = useContext(GalleryContext);
  const { followerData } = useContext(FollowerContext);

  return (
    <div
      id="follower"
      className="cursor-follower"
      data-background={currentImageSrc !== ""}
      data-hover={followerData.data === "hover"}
      style={{
        backgroundImage: `url(${currentImageSrc})`,
        transform: `translate(calc(${mousePosition.x}px - 50%), calc(${mousePosition.y}px - 50%))`,
      }}
    >
      {followerData.text}
    </div>
  );
};

export default Follower;
