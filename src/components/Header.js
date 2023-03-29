import React, {useState, useEffect} from 'react';

import LogoWhite from '../assets/img/logo-white.svg';
import LogoSD from '../assets/img/logosd.svg';

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', ()=> {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    })
  })

  return <header 
  className={`${header ? 'bg-white py-5 shadow-lg' : 'bg-transparent py-8'} fixed z-50 w-full transition-all duration-500`}>
    <div className='container mx-auto'>
      <a href="/">
        {header ? <img className='w-[160px]' src={LogoSD}/> : <img className='w-[160px]' src={LogoSD}/>}
      </a>
      <nav className={`${header ? 'text-primary' : 'text-white'}`}>nav</nav>
    </div>
    </header>;
};

export default Header;
