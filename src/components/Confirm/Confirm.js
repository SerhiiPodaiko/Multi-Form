import {Navbar, Container, ListGroup, Button} from "react-bootstrap";

const Confirm = (props) => {
    const next = (e) => {
        e.preventDefault();
        props.nextStep();
    }

    const back = (e) => {
        e.preventDefault();
        props.prevStep();
    }

    const {values: {firstName, lastName, email, occupation, city, bio}} = props;

    return (
        <>
            <Navbar bg="primary" variant="dark" className="header">
                <Container>
                    <Navbar.Brand href="#home">Form</Navbar.Brand>
                    <h4 className="title text-white">Confirm User Data</h4>
                </Container>
            </Navbar>
           <main className="main">
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
                       <Button variant="dark" type="button" onClick={back}>
                           Back
                       </Button>
                       <Button variant="primary" type="button" onClick={next}>
                           Continue
                       </Button>
                   </div>
               </Container>
           </main>
        </>
    );
}

export default Confirm;