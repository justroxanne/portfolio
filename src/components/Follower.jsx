import React, { useEffect, useState } from 'react';
import './follower.scss';

const Follower = ({ mousePosition }) => {
  return (
    <div
      id='follower'
      style={{
        position: 'fixed',
        top: mousePosition.y,
        left: mousePosition.x,
        transform: 'translate(-50%, -50%)',
      }}
    ></div>
  );
};

export default Follower;
