import React from 'react';
import { Link } from 'react-scroll';
import './header.css';

const Header = () => {
  return (
    <ul className='navbar'>
      <li>
        <Link to='hello' spy={true} smooth={true} duration={600}>
          01/HELLO
        </Link>
      </li>
      <li>
        <Link to='work' spy={true} smooth={true} duration={600}>
          02/WORK
        </Link>
      </li>
      <li>
        <Link to='about' spy={true} smooth={true} duration={600}>
          03/ABOUT
        </Link>
      </li>
      <li>
        <Link to='contact' spy={true} smooth={true} duration={600}>
          04/CONTACT
        </Link>
      </li>
    </ul>
  );
};

export default Header;
