import {Navbar, Container, Alert} from "react-bootstrap";

const Success = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark" className="header">
                <Container>
                    <Navbar.Brand>Success</Navbar.Brand>
                </Container>
            </Navbar>

            <main className="main">
                <Container>
                    <Alert variant="success text-center">
                        <Alert.Heading>Thank You For Your Submission</Alert.Heading>
                        <hr />
                        <p>You will get an email with further instructions</p>
                    </Alert>
                </Container>
            </main>
        </>
    );
}

export default Success;