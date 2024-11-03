import { PROJECTS } from "../../app/shared/PROJECTS";
import { Col, Row } from "reactstrap";
import ProjectsCard from "./ProjectsCard";

const ProjectsList = () => {
    return (
        <div className="project-section">
            <div className="container">
                <Row className="justify-content-center">
                    {PROJECTS.map((project) => (
                        <Col xs={12} md={4} className="m-" key={project.id}>
                            <ProjectsCard project={project} />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default ProjectsList;
