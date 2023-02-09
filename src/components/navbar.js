import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <div>
            <Navbar bg="danger">
                <Container>
                    <Navbar.Brand className="fw-bold">MOVIES LIST</Navbar.Brand>
                    <Nav>
                        <Nav.Link className="fw-bold">TV Series</Nav.Link>
                        <Nav.Link className="fw-bold">Genres</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;
