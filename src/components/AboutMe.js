import React from 'react';
import { Container, Row, Col, Card } from 'reactstrap';

const AboutMe = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <h1 className="mb-4">About Me</h1>
          <p>
            Here you will find more information about me, what I do, and my skills mostly in terms of programming and web design.
          </p>
          <h2 className="mt-4">Get To Know Me!</h2>
          <p>
            Hi, I'm Yamil, a Frontend Web Developer & Designer. I love turning ideas into pixel-perfect realities. With a passion for clean code and a knack for crafting intuitive interfaces, I'm always seeking new challenges to push my creative boundaries. I specialize in HTML, CSS, JavaScript, React, and React Native.
          </p>
          <p>Let's build something amazing together!</p>
        </Col>
        <Col md={4}>
          <Card className="bg-warning text-white">
            <div className="card-body">
              <h5 className="card-title">Skills</h5>
              {/* I will add more content here, like a list of skills */}
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;