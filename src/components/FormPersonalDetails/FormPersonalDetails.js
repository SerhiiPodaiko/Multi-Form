import React, {Component} from 'react';
import { Navbar, Container, Form, Button } from "react-bootstrap";

class FormPersonalDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Form</Navbar.Brand>
                        <h4 className="title text-white">Enter Personal Details</h4>
                    </Container>
                </Navbar>
                <Container>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Occupation"
                                          defaultValue={values.occupation}
                                          onChange={handleChange("occupation")} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="City"
                                          defaultValue={values.city}
                                          onChange={handleChange("city")} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="Bio"
                                          defaultValue={values.bio}
                                          onChange={handleChange("bio")} />
                        </Form.Group>
                       <div className='wrap-btn'>
                           <Button variant="dark" type="submit" onClick={this.back}>
                               Back
                           </Button>
                           <Button variant="primary" type="submit" onClick={this.continue}>
                               Continue
                           </Button>
                       </div>
                    </Form>
                </Container>
            </>
        );
    }
}

export default FormPersonalDetails;