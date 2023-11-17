import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <header>
        <div>LOGO</div>
        <nav></nav>
      </header>
      <Container>
        <Row>
          <Col className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <h1>Content is the key to building an audience</h1>
            <p>TEXT</p>
            <button>BUTTON</button>
            <p>TEXT</p>
          </Col>
          <Col className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div>IMAGE</div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h1>Build a customer-centric marketing strategy</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>TEXT</p>
          </Col>
        </Row>
        <Row>
          <Col className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
            1 of 4
          </Col>
          <Col className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
            2 of 4
          </Col>
          <Col className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
            3 of 4
          </Col>
          <Col className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
            4 of 4
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            IMAGE
          </Col>
          <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <p>TEXT</p>
            <h1>Engage your most valuable visitors</h1>
            <p>TEXT</p>
            <h3>Digits that define growth</h3>
            <ul>
              <li>TEXT</li>
              <li>TEXT</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <h3>Solution that grows with you</h3>
            <p>TEXT</p>
            <h3>Connect your data sources</h3>
            <p>TEXT</p>
            <ul>
              <li>TEXT</li>
              <li>TEXT</li>
            </ul>
          </Col>
          <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            IMAGE
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
