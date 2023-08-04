import React, { useState, useEffect } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Modal from '../components/Modal';
import Wookie from '../assets/Wookie-clicker.png';
import tripPlanner from '../assets/tripPlanner.png';
import PopPursuit from '../assets/pop-pursuit.png';
import './work.scss';

const Work = ({ mousePosition }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageSrc, setCurrentImageSrc] = useState('');

  const projects = [
    {
      title: 'Wookie Clicker',
      description: 'Personnal Project • React',
      imageSrc: Wookie,
      link: 'http://wookie-clicker.roxannelucas.fr',
    },
    {
      title: 'TripPlanner',
      description: 'Hackathon: 24 hours / team of 2 • React / Node.js',
      imageSrc: tripPlanner,
      link: 'http://tripplanner-mocha.vercel.app',
    },
    {
      title: 'Pop Pursuit',
      description: 'Personnal Project • React / Node.js / Express / MySQL',
      imageSrc: PopPursuit,
      link: 'https://pop-pursuit.roxannelucas.fr',
    },
  ];

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
        {projects.map((project, index) => (
          <li key={index} className='project-detail'>
            <a
              className='project-container'
              href={project.link}
              target='_blank'
              onMouseOver={() => {
                openModal(project.imageSrc);
              }}
              onMouseLeave={closeModal}
            >
              <h2 className='project-title'>{project.title}</h2>
              <span className='project-description'>{project.description}</span>
              <FiArrowRight
                style={{ height: '2em', width: '2em' }}
                className='arrow'
              />
              {window.innerWidth > 900 && isModalOpen && (
                <Modal
                  imageSrc={currentImageSrc}
                  mousePosition={mousePosition}
                />
              )}
            </a>
            <hr></hr>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Work;
