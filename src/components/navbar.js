import { Navbar, Container, Nav } from 'react-bootstrap'

const NavigationBar = () => {
    return (
        <div>
            <Navbar bg='danger'>
                <Container>
                    <Navbar.Brand className='fw-bold fs-3 '>MOVIES LIST</Navbar.Brand>
                    <Nav>
                        <Nav.Link className='fw-bold fs-4'>TV Series</Nav.Link>
                        <Nav.Link className='fw-bold fs-4'>Genres</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar
