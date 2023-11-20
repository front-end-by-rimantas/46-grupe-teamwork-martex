import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

export function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="./img/martex-logo-white.png"
            width="163"
            height="38"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="About" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Why Martex?</NavDropdown.Item>
              <NavDropdown.Item href="/">Integrations</NavDropdown.Item>
              <NavDropdown.Item href="/">How it Works</NavDropdown.Item>
              <NavDropdown.Item href="/">Best Solutions</NavDropdown.Item>
              <NavDropdown.Item href="/">Testimonials</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">Features</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <Container style={{ width: "845px" }}>
                <Row>
                  <Col>
                    <NavDropdown.Item href="/">About Us</NavDropdown.Item>
                  </Col>
                  <Col>
                    <NavDropdown.Item href="/">Core Features</NavDropdown.Item>
                  </Col>
                  <Col>
                    <NavDropdown.Item href="/">
                      Pricing Page #1
                    </NavDropdown.Item>
                  </Col>
                  <Col>
                    <NavDropdown.Item href="/">Blog Listing</NavDropdown.Item>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <NavDropdown.Item href="/">Our Team</NavDropdown.Item>
                  </Col>
                  <Col>
                    <NavDropdown.Item href="/">Our Projects</NavDropdown.Item>
                  </Col>
                  <Col>
                    <NavDropdown.Item href="/">
                      Pricing Page #2
                    </NavDropdown.Item>
                  </Col>
                  <Col>
                    <NavDropdown.Item href="/">
                      Single Blog Post
                    </NavDropdown.Item>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <NavDropdown.Item href="/">Careers</NavDropdown.Item>
                  </Col>
                  <Col>
                    <NavDropdown.Item href="/">
                      Project Details
                    </NavDropdown.Item>
                  </Col>
                  <Col>
                    <NavDropdown.Item href="/">FAQs Page</NavDropdown.Item>
                  </Col>
                  <Col>
                    <NavDropdown.Item href="/">Login Page</NavDropdown.Item>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <NavDropdown.Item href="/">Career Details</NavDropdown.Item>
                  </Col>
                  <Col>
                    <NavDropdown.Item href="/">Testimonials</NavDropdown.Item>
                  </Col>
                  <Col>
                    <NavDropdown.Item href="/">Help Center</NavDropdown.Item>
                  </Col>
                  <Col>
                    <NavDropdown.Item href="/">Signup Page</NavDropdown.Item>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <NavDropdown.Item href="/">Contact Us</NavDropdown.Item>
                  </Col>
                  <Col>
                    <NavDropdown.Item href="/">Download Page</NavDropdown.Item>
                  </Col>
                  <Col>
                    <NavDropdown.Item href="/">404 Page</NavDropdown.Item>
                  </Col>
                  <Col>
                    <NavDropdown.Item href="/">Reset Password</NavDropdown.Item>
                  </Col>
                </Row>
              </Container>
            </NavDropdown>
            <Nav.Link href="/">Pricing</Nav.Link>
            <Nav.Link href="/">FAQs</Nav.Link>
            <Nav.Link href="/">Sign in</Nav.Link>
            <Button variant="primary">Sign up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
