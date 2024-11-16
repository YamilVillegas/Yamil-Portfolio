import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import headshot from '../app/assets/img/CodingHeader.png'

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row>
          <Col md={6}>
          <h1 className="name-text animate">Yamil.</h1>
          <h2 className="hero-h2 animate">Web Designer & Frontend Developer</h2>
            <p>Dedicated to crafting exceptional digital solutions. Offering expertise in web design and frontend development.</p>
            <p>Custom website design tailored to your brand, driving online success.</p>
            <p>Responsive web development for seamless browsing across devices.</p>
          </Col>
          <Col md={6}>
            <img src= {headshot} alt="Headshot" className="img-fluid rounded-circle" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;