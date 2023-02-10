import { Col, Container, Row, Form } from "react-bootstrap";

const Intro = () => {
    const search = (q) => {
        console.log({ q });
    };
    return (
        <div className="intro text-white ">
            <input placeholder="Search Movies..." className="Movie-search" onChange={({ target }) => search(target.value)} />
        </div>
    );
};

export default Intro;
