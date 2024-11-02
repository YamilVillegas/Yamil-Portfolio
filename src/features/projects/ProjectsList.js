import { PROJECTS } from "../../app/shared/PROJECTS";
import { Col, Row } from "reactstrap";
import ProjectsCard from "./ProjectsCard";

const ProjectsList = () => {
    return (
        <div className="container d-flex justify-content-center">
            <Row>
                {PROJECTS.map((project) => (
                    <Col xs={3} className="m-1" key={project.id}>
                        <ProjectsCard project={project} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ProjectsList;
