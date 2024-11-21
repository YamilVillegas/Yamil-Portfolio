import React from 'react';
import { Container, Row, Col, Card } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
  return (
    <div className='about-me-section'>
      <Container>
        <Row className="align-items-start">
          <Col md={8}>
            <h1 className="about-me-title mb-4">About Me</h1>
            <p className='about-me-p'>
              Here you will find more information about me, what I do, and my skills mostly in terms of programming and web design.
            </p>
            <h2 className="about-me-h2 mt-4">Get To Know Me!</h2>
            <p className='about-me-p'>
              Hi, I'm Yamil, a Frontend Web Developer & Designer. I love turning ideas into pixel-perfect realities. With a passion for clean code and a knack for crafting intuitive interfaces, I'm always seeking new challenges to push my creative boundaries. I specialize in HTML, CSS, JavaScript, React, and React Native.
            </p>
            <p className='about-me-p'>Let's build something amazing together!</p>
          </Col>
          <Col md={4} className="skills-column">
            <Card className="bg-warning text-white skills-card">
              <div className="card-body">
                <h5 className="card-title">Skills</h5>
                <div className="skills-list">
                  <div className="skill-item">
                    <FontAwesomeIcon icon={faHtml5} className="icon" />
                    <span className="skill-name">HTML</span>
                  </div>
                  <div className="skill-item">
                    <FontAwesomeIcon icon={faCss3Alt} className="icon" />
                    <span className="skill-name">CSS</span>
                  </div>
                  <div className="skill-item">
                    <FontAwesomeIcon icon={faJs} className="icon" />
                    <span className="skill-name">JavaScript</span>
                  </div>
                  <div className="skill-item">
                    <FontAwesomeIcon icon={faReact} className="icon" />
                    <span className="skill-name">React</span>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;