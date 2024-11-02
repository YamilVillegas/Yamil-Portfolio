import { Card } from 'reactstrap';
import { CardImg } from 'reactstrap';
import { CardImgOverlay } from 'reactstrap';
import { CardTitle } from 'reactstrap';

const ProjectsCard = ({ projects }) => {
    return (
        <Card>
            <CardImg 
                width='100%'
                src={projects.image}
                alt={projects.name}
            />
            <CardImgOverlay>
                <CardTitle>{projects.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

export default ProjectsCard;