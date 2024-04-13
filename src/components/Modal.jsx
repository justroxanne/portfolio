import React, { useEffect } from "react";
import { gsap } from "gsap";

const Modal = ({ imageSrc, mousePosition }) => {
  // const appear = (elem) => {
  //   gsap.fromTo(
  //     elem,
  //     {
  //       autoAlpha: 0,
  //       clipPath: "circle(0% at 50% 50%)",
  //     },
  //     {
  //       autoAlpha: 1,
  //       clipPath: "circle(100% at 50% 50%)",
  //       duration: 1,
  //     }
  //   );
  // };

  // useEffect(() => {
  //   appear(".modal-img");
  // }, [imageSrc]);

  return (
    <div
      className="modal"
      style={{
        zIndex: "-5",
        position: "fixed",
        top: mousePosition.y,
        left: mousePosition.x,
        transform: "translate(-50%, -150%)",
      }}
    >
      <img className="modal-img" src={imageSrc} alt="Modal" />
    </div>
  );
};

export default Modal;
