import React from 'react';

import burgetLogo from '../../assets/images/burger-logo.png';
import './Logo.css';

const Logo = (props) => (
  <div className='Logo'>
    <img src={burgetLogo} alt='MyBurger' />
  </div>
);

export default Logo;
