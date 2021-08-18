import React, {Component} from "react";
import { Navbar, Container, Form, Button } from "react-bootstrap";
import "./FormUserDetails.css";

class FormUserDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Form</Navbar.Brand>
                        <h4 className="title text-white">Enter User Details</h4>
                    </Container>
                </Navbar>
                <Container>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="First Name"
                                          defaultValue={values.firstName}
                                          onChange={handleChange("firstName")} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Last Name"
                                          defaultValue={values.lastName}
                                          onChange={handleChange("lastName")} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="Email"
                                          defaultValue={values.email}
                                          onChange={handleChange("email")} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={this.continue}>
                            Continue
                        </Button>
                    </Form>
                </Container>
            </>
        );
    }
}

export default FormUserDetails;