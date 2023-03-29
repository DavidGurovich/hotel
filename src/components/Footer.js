import React from 'react';

import LogoWhite from '../assets/img/logosd.svg';

const Footer = () => {
  return <footer className='bg-primary py-8'>
    <div className='container mx-auto text-white flex justify-between items-center'>
      <img src={LogoWhite} alt="" />
      Copyright &copy; 2022. All rights reserved.
    </div>
  </footer>;
};

export default Footer;
