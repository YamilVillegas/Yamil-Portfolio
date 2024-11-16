import { Navbar, NavbarBrand } from "reactstrap";
import YLogo from '../app/assets/img/YLogo.png';
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      dark
      className={`navbar-dark ${scrolled ? 'navbar-scrolled' : ''}`}
      sticky="top"
      expand="md"
    >
      <NavbarBrand href='/'>
        <img src={YLogo} alt='YLogo' />
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;