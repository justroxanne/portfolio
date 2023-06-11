import React from 'react';
import './modal.scss';

const Modal = ({ imageSrc, mousePosition }) => {
  return (
    <div
      className='modal'
      style={{
        position: 'fixed',
        top: `${mousePosition.y - 300}px`,
        left: mousePosition.x,
        transform: 'translateX(-50%)',
      }}
    >
      <img src={imageSrc} alt='Modal' />
    </div>
  );
};

export default Modal;
