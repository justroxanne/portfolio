import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './modal.scss';

const Modal = ({ imageSrc, mousePosition }) => {
  const appear = (elem) => {
    gsap.fromTo(
      elem,
      {
        autoAlpha: 0,
        scale: 0.001,
      },
      {
        autoAlpha: 1,
        scale: 1,
        duration: 1,
      }
    );
  };

  useEffect(() => {
    appear('.modal-img');
  }, [imageSrc]);

  return (
    <div
      className='modal'
      style={{
        zIndex: '-5',
        position: 'fixed',
        top: mousePosition.y,
        left: mousePosition.x,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <img className='modal-img' src={imageSrc} alt='Modal' />
    </div>
  );
};

export default Modal;
