import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from 'reactstrap';

const Course=({course})=> {
    return (
        <Card>
            <CardBody className='text-center'>
                <CardSubtitle className='font-weight-bold'>{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className='text-center'>
                    <Button color='danger'>Delete</Button>
                    <Button color='warning ml-3'>Update</Button>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Course;