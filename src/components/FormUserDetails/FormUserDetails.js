import {Navbar, Container, Form, Button} from "react-bootstrap";
import "./FormUserDetails.css";

const FormUserDetails = (props) => {
    const {values: { firstName, lastName, email }, handleChange} = props;

    const next = (e) => {
        e.preventDefault();
       props.nextStep();
    }

    return (
        <>
            <Navbar bg="primary" variant="dark" className="header">
                <Container>
                    <Navbar.Brand href="#home">Form</Navbar.Brand>
                    <h4 className="title text-white">Enter User Details</h4>
                </Container>
            </Navbar>
            <main className="main">
                <Container>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="First Name"
                                          defaultValue={firstName}
                                          onChange={handleChange("firstName")}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Last Name"
                                          defaultValue={lastName}
                                          onChange={handleChange("lastName")}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="Email"
                                          defaultValue={email}
                                          onChange={handleChange("email")}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={next}>
                            Continue
                        </Button>
                    </Form>
                </Container>
            </main>
        </>
    );
}

export default FormUserDetails;