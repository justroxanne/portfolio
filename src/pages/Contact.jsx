import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import { FiArrowUpRight } from 'react-icons/fi';
import './contact.scss';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Contact = () => {
  const moveUp = (elem) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: '-10dvh',
      },
      {
        opacity: 1,
        y: '-30dvh',
        delay: 2,
        duration: 5,
        scrollTrigger: {
          trigger: elem,
          scrub: 3,
          start: 'top bottom',
          end: 'top center',
        },
      }
    );
  };

  useEffect(() => {
    moveUp('#contact-title');
  }, []);

  return (
    <div className='contact'>
      <h1 id='contact-title'>Let's talk together</h1>
      <a
        href='mailto:hello@roxannelucas.fr'
        target='_blank'
        className='signature'
      >
        <FiArrowUpRight className='before' />
        <span>hello@roxannelucas.fr</span>
        <FiArrowUpRight className='after' />
      </a>
      <ul className='links'>
        <li>
          <a href='https://www.linkedin.com/in/roxannelucas/'>LINKEDIN</a>
        </li>
        <li>
          <a href='https://github.com/justroxanne'>GITHUB</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
