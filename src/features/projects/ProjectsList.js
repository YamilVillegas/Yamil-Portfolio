import { PROJECTS } from "../../app/shared/PROJECTS";
import { Col, Row } from "reactstrap";
import ProjectsCard from "./ProjectsCard";

const ProjectsList = () => {
    return (
        <Row className='ms-auto'>
            {PROJECTS.map((project) => {
                return (
                    <Col md='5' className='m-4' key={project.id}>
                        <ProjectsCard project={project} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default ProjectsList;
