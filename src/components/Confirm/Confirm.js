import React, {Component} from 'react';
import { Navbar, Container, ListGroup, Button } from "react-bootstrap";

class Confirm extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;
        return (
            <>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Form</Navbar.Brand>
                        <h4 className="title text-white">Enter Personal Details</h4>
                    </Container>
                </Navbar>
                <Container>
                    <ListGroup className="list-group">
                        <ListGroup.Item variant="light" className="list-group-item">
                            <span>FirstName:</span>
                            <span>{firstName}</span>
                        </ListGroup.Item>
                        <ListGroup.Item variant="light">
                            <span>LastName:</span>
                            <span>{lastName}</span>
                        </ListGroup.Item>
                        <ListGroup.Item variant="light">
                            <span>Email:</span>
                            <span>{email}</span>
                        </ListGroup.Item>
                        <ListGroup.Item variant="light">
                            <span>Occupation:</span>
                            <span>{occupation}</span>
                        </ListGroup.Item>
                        <ListGroup.Item variant="light">
                            <span>City:</span>
                            <span>{city}</span>
                        </ListGroup.Item>
                        <ListGroup.Item variant="light">
                            <span>Bio:</span>
                            <span>{bio}</span>
                        </ListGroup.Item>

                    </ListGroup>
                   <div className="wrap-btn">
                       <Button variant="dark" type="button" onClick={this.back}>
                           Back
                       </Button>
                       <Button variant="primary" type="button" onClick={this.continue}>
                           Continue
                       </Button>
                   </div>
                </Container>
            </>
        );
    }
}

export default Confirm;