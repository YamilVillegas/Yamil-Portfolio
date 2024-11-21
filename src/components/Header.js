import { Navbar, NavbarBrand, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import YLogo from '../app/assets/img/YLogo.png';
import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <>
      <Navbar
        dark
        className={`navbar-dark ${scrolled ? 'navbar-scrolled' : ''}`}
        sticky="top"
        expand="md"
      >
        <NavbarBrand href='/'>
          <img src={YLogo} alt='YLogo' />
        </NavbarBrand>
        <Button
          color="primary"
          className="ml-auto cta-button"
          onClick={toggleModal}
        >
          Contact Me
        </Button>
      </Navbar>
      <Modal isOpen={modalOpen} toggle={toggleModal} centered>
        <ModalHeader toggle={toggleModal}>Contact Me</ModalHeader>
        <ModalBody>
          <ContactForm />
        </ModalBody>
      </Modal>
    </>
  );
};

export default Header;