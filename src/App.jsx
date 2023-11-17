import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function App() {
  return (
    // start of discover section
    <>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col lg={9}>
            <h1>Discover insights across all your data with Martex</h1>
            <p className="text-center">
              Ligula risus auctor tempus magna feugiat lacinia.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={10}>
            <p>image</p>
          </Col>
        </Row>
        <Row>
          <Col>Monitor your activity button</Col>
        </Row>
        <Row>
          <Breadcrumb>
            <Breadcrumb.Item>Free 14 days trial</Breadcrumb.Item>
            <Breadcrumb.Item>Exclusive Support</Breadcrumb.Item>
            <Breadcrumb.Item>No Fees</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row>
          <Col>Image</Col>
          <Col>Text</Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-center">
          <Col lg={9}>
            <h1>Here's what</h1>
            <p>Text</p>
          </Col>
        </Row>
        <Row>
          <Col>Gallery</Col>
        </Row>
        <Row>
          <Col>Our clients love us as much as we love them</Col>
        </Row>
        <Row>
          <Col>Brand1</Col>
          <Col>Brand2</Col>
          <Col>Brand3</Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-center">
          <Col lg={9}>
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
          <Col>View all integrations button</Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-center">
          <Col lg={9}>
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
          <Col>Have any questions? Get in Touch</Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-center">
          <Col lg={9}>
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

      <Container className="mb-5">
        <Row>
          <Col lg={3}>Logo</Col>
          <Col>Footer table</Col>
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
