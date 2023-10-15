import {  Container, Button } from 'reactstrap';const Home =() =>{
    return(
        <div className="text-center" style={{backgroundColor : '#f2f2f2', marginRight:'25px'}}>
                <h1>Course Website</h1>
                <p>This is developed for adding, upating, deleting various courses.</p>
                <Container>
                    <Button color="primary" outline>
                        Start Using
                    </Button>
                </Container>
        </div>
    )
}

export default Home;