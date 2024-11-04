import { Card } from 'reactstrap';
import { CardImg } from 'reactstrap';
import { CardImgOverlay } from 'reactstrap';
import { CardTitle } from 'reactstrap';

const ProjectsCard = ({ project }) => {
    return (
        <Card className='project-card'>
            <CardImg 
                width='100%'
                src={project.image}
                alt={project.name}
            />
            <CardImgOverlay>
                <CardTitle>{project.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

export default ProjectsCard;