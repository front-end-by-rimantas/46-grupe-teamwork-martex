import "./App.css";
import { Container } from "react-bootstrap/Container";
import { Row } from "react-bootstrap/Row";
import { Col } from "react-bootstrap/Col";

function App() {
  return (
    <>
      <header>
        <div>LOGO</div>
        <nav></nav>
      </header>
      <Container>
        <Row>
          <Col xs={12} sm={6}>
            <h1>Content is the key to building an audience</h1>
            <p>TEXT</p>
            <button>BUTTON</button>
            <p>TEXT</p>
          </Col>
          <Col xs={12} sm={6}>
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
          <Col xs={12} md={6} lg={3}>
            1 of 4
          </Col>
          <Col xs={12} md={6} lg={3}>
            2 of 4
          </Col>
          <Col xs={12} md={6} lg={3}>
            3 of 4
          </Col>
          <Col xs={12} md={6} lg={3}>
            4 of 4
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            IMAGE
          </Col>
          <Col xs={12} md={6}>
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
          <Col xs={12} md={6}>
            <h3>Solution that grows with you</h3>
            <p>TEXT</p>
            <h3>Connect your data sources</h3>
            <p>TEXT</p>
            <ul>
              <li>TEXT</li>
              <li>TEXT</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            IMAGE
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
