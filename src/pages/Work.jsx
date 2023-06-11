import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Modal from '../components/Modal';
import Wookie from '../assets/Wookie-clicker.png';
import tripPlanner from '../assets/tripPlanner.png';
import './work.scss';

const Work = ({ mousePosition }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageSrc, setCurrentImageSrc] = useState('');

  const openModal = (imageSrc) => {
    setIsModalOpen(true);
    setCurrentImageSrc(imageSrc);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='work' id='work'>
      <div className='project-img'></div>
      <ul className='projects'>
        <li>
          <a
            href='http://wookie-clicker.roxannelucas.fr'
            target='_blank'
            onMouseOver={() => {
              openModal(Wookie);
            }}
            onMouseLeave={closeModal}
          >
            <h2>Wookie Clicker</h2>
            <span>Personnal Project • React</span>
            <FiArrowRight
              style={{ height: '2em', width: '2em' }}
              className='arrow'
            />
            {isModalOpen && (
              <Modal imageSrc={currentImageSrc} mousePosition={mousePosition} />
            )}
          </a>
        </li>
        <hr></hr>
        <li>
          <a
            href='http://tripplanner-mocha.vercel.app'
            target='_blank'
            onMouseOver={() => {
              openModal(tripPlanner);
            }}
            onMouseLeave={closeModal}
          >
            <h2>TripPlanner</h2>
            <span>Hackathon: 24 hours / team of 2 • React / Node.js</span>
            <FiArrowRight
              style={{ height: '2em', width: '2em' }}
              className='arrow'
            />
            {isModalOpen && (
              <Modal imageSrc={currentImageSrc} mousePosition={mousePosition} />
            )}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Work;
