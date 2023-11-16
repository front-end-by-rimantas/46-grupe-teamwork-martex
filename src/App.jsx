import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Placeholder from "react-bootstrap/Placeholder";

function App() {
  return (
    // start of discover section
    <>
      <Container className="mt-5">
        <Row className="justify-content-center mb-5">
          <Col lg={9}>
            <h1 style={{ fontSize: "3.2rem" }} className="fw-bold text-center">
              Discover insights across all your data with Martex
            </h1>
            <p className="text-center">
              Ligula risus auctor tempus magna feugiat lacinia.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Image src="./images/total-points-graph.png" fluid />
          </Col>
        </Row>
        <Row>
          <Col>Button</Col>
        </Row>
        <Row>
          <Col>Text under button</Col>
          <Col>Text under button</Col>
          <Col>Text under button</Col>
        </Row>
        <Row>
          <Col>Image</Col>
          <Col>Text</Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col>
            <h1>Here's what</h1>
            <p>Text</p>
          </Col>
        </Row>
        <Row>
          <Col>Gallery</Col>
        </Row>
        <Row>
          <Col>Text</Col>
        </Row>
        <Row>
          <Col>Brand1</Col>
          <Col>Brand2</Col>
          <Col>Brand3</Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col>
            <h1>Automate</h1>
            <p>Text</p>
          </Col>
        </Row>
        <Row>
          <Col>Brand1</Col>
          <Col>Brand2</Col>
          <Col>Brand3</Col>
          <Col>Brand4</Col>
          <Col>Brand5</Col>
        </Row>
        <Row>
          <Col>Button</Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col>
            <h1>Q&A</h1>
            <p>Text</p>
          </Col>
        </Row>
        <Row>
          <Col>1.text</Col>
          <Col>4.text</Col>
        </Row>
        <Row>
          <Col>2.text</Col>
          <Col>5.text</Col>
        </Row>
        <Row>
          <Col>3.text</Col>
          <Col>6.text</Col>
        </Row>
        <Row>
          <Col>text</Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col>
            <h1>Starting with Martex is easy</h1>
            <p>Text</p>
          </Col>
        </Row>
        <Row>
          <Col>Button</Col>
        </Row>
        <Row>
          <Col>Text</Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Row>
          <Col>Logo</Col>
          <Col>Footer grid</Col>
        </Row>
        <Row>
          <Col>Rights reserved</Col>
          <Col>Socials</Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
