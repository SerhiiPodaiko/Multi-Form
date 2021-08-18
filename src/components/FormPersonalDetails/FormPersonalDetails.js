import {Navbar, Container, Form, Button} from "react-bootstrap";

const FormPersonalDetails = (props) => {
    const {values: { occupation, city, bio }, handleChange} = props;

    const next = (e) => {
        e.preventDefault();
        if (occupation && city && bio) {
            props.nextStep();
        } else {
            alert("Data not filled")
        }

    }

    const back = (e) => {
        e.preventDefault();
       props.prevStep();
    }

    return (
        <>
            <Navbar bg="primary" variant="dark" className="header">
                <Container>
                    <Navbar.Brand href="#home">Form</Navbar.Brand>
                    <h4 className="title text-white">Enter Personal Details</h4>
                </Container>
            </Navbar>
            <main className="main">
                <Container>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Occupation"
                                          defaultValue={occupation}
                                          onChange={handleChange("occupation")}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="City"
                                          defaultValue={city}
                                          onChange={handleChange("city")}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="Bio"
                                          defaultValue={bio}
                                          onChange={handleChange("bio")}/>
                        </Form.Group>
                        <div className='wrap-btn'>
                            <Button variant="dark" type="submit" onClick={back}>
                                Back
                            </Button>
                            <Button variant="primary" type="submit" onClick={next}>
                                Continue
                            </Button>
                        </div>
                    </Form>
                </Container>
            </main>
        </>
    );
}

export default FormPersonalDetails;