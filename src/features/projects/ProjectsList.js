import { PROJECTS } from "../../app/shared/PROJECTS";
import { Col, Row, Container } from "reactstrap";
import ProjectsCard from "./ProjectsCard";

const ProjectsList = () => {
  return (
    <div className="project-section">
      <Container>
        <h1 className="projects-h1 text-start">Projects.</h1>
        <p className="projects-p text-start text-white">Here you will find some of the personal and client projects that I have created.</p>
        <Row>
          {PROJECTS.map((project, index) => (
            <Col xs={6} md={6} key={project.id}>
              <ProjectsCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProjectsList;
