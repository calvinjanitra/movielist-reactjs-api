import { Col, Container, Row, Form } from "react-bootstrap";

const Intro = () => {
    return (
        <div className="intro text-white ">
            <Container className="d-flex justify-content-center">
                <Form.Control placeholder="Search Movie..." />
            </Container>
        </div>
    );
};

export default Intro;
