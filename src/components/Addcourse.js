import { Fragment, useEffect } from "react"
import { Button, Container, Form, FormGroup, Input } from "reactstrap"

const Addcourse=()=>{
    useEffect(() => {
        document.title = "Add Course"
    }, []);

    return (
        <Fragment>
            <h1 className="text-center my-3">Fill course details</h1>
            <Form>
                <FormGroup>
                    <label>Course Id</label>
                    <Input type="text" placeholder="Enter here" name="userId" id="userId">
                    </Input>
                </FormGroup>
                <FormGroup>
                    <label for="title"> Course Title</label>
                    <Input type="text" placeholder="Enter title here" id="title">
                    </Input>
                </FormGroup>
                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea" placeholder="Enter Description here" id="description"
                    style={{height:150}}></Input>
                </FormGroup>

                <Container className="text-center">
                    <Button color="success">Add course </Button>{"    "}
                    <Button color="warning" > Clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
};

export default Addcourse;