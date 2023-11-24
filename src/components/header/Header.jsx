import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Style from "./Header.module.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import WhiteLogo from "../../assets/logo-white.png";
import RedLogo from "../../assets/logo-red.png";

export function Header() {
  return (
    <Container className={`py-4 ${Style.navContainer} ${Style.transp}`} fluid>
      <Row className="justify-content-center">
        <Col xxl={7} lg={12}>
          <Navbar key="lg" expand="lg" className="mb-3">
            <Container fluid className={Style.transp}>
              <Navbar.Brand href="/" className={Style.logoWhite}>
                <img
                  src={WhiteLogo}
                  width="163"
                  height="38"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Navbar.Brand href="/" className={Style.logoDark}>
                <img
                  src={RedLogo}
                  width="163"
                  height="38"
                  className="d-inline-block align-top "
                  alt="React Bootstrap logo"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
              <Navbar.Offcanvas
                id="offcanvasNavbar-expand-lg"
                aria-labelledby="offcanvasNavbarLabel-expand-lg"
                placement="end"
              >
                <Offcanvas.Header closeButton className="" />
                <Offcanvas.Body>
                  <Nav
                    className="justify-content-end flex-grow-1 pe-3"
                    navbarScroll
                  >
                    <NavDropdown title="About" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/">Why Martex?</NavDropdown.Item>
                      <NavDropdown.Item href="/">Integrations</NavDropdown.Item>
                      <NavDropdown.Item href="/">How it Works</NavDropdown.Item>
                      <NavDropdown.Item href="/">
                        Best Solutions
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/">Testimonials</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/">Features</Nav.Link>
                    <NavDropdown title="Pages" id="basic-nav-dropdown">
                      <NavDropdown.Item href="/">About Us</NavDropdown.Item>
                      <NavDropdown.Item href="/">
                        Core Features
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/">
                        Pricing Page #1
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/">Blog Listing</NavDropdown.Item>
                      <NavDropdown.Item href="/">Our Team</NavDropdown.Item>
                      <NavDropdown.Item href="/">Our Projects</NavDropdown.Item>
                      <NavDropdown.Item href="/">
                        Pricing Page #2
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/">
                        Single Blog Post
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/">Careers</NavDropdown.Item>
                      <NavDropdown.Item href="/">
                        Project Details
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/">FAQs Page</NavDropdown.Item>
                      <NavDropdown.Item href="/">Login Page</NavDropdown.Item>
                      <NavDropdown.Item href="/">
                        Career Details
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/">Testimonials</NavDropdown.Item>
                      <NavDropdown.Item href="/">Help Center</NavDropdown.Item>
                      <NavDropdown.Item href="/">Signup Page</NavDropdown.Item>
                      <NavDropdown.Item href="/">Contact Us</NavDropdown.Item>
                      <NavDropdown.Item href="/">
                        Download Page
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/">404 Page</NavDropdown.Item>
                      <NavDropdown.Item href="/">
                        Reset Password
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/">Pricing</Nav.Link>
                    <Nav.Link href="/">FAQs</Nav.Link>
                    <Nav.Link href="/">Sign in</Nav.Link>
                    <Button variant="primary">Sign up</Button>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}
