import React from 'react';
import { Link } from 'react-scroll';
import './header.css';

const Header = () => {
  return (
    <div className='navbar'>
      <Link to='hello' spy={true} smooth={true} duration={600}>
        01/HELLO
      </Link>
      <Link to='about' spy={true} smooth={true} duration={600}>
        02/ABOUT
      </Link>
      <Link to='work' spy={true} smooth={true} duration={600}>
        03/WORK
      </Link>
      <Link to='contact' spy={true} smooth={true} duration={600}>
        04/CONTACT
      </Link>
    </div>
  );
};

export default Header;
