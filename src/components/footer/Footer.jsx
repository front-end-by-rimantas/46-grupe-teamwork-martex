import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import style from "./Footer.module.css";
import logoBlue from "../../assets/logo-blue.png";
import logoBlack from "../../assets/logo-black.png";
import {
  FaFacebookSquare,
  FaTwitter,
  FaGithub,
  FaBasketballBall,
  FaHeart,
  FaInstagram,
} from "react-icons/fa";

export function Footer(props) {
  const today = new Date();

  if (props.nav === true)
    return (
      <Container className="my-5">
        <Row className={style.higherFooter}>
          <Col xl={3}>
            <img className={style.logo} src={logoBlue} alt="Logo" />
          </Col>
          <Col sm={4} md={3} xl={2}>
            <p>Company</p>
            <p>About Us</p>
            <p>Careers</p>
            <p>Our Blog</p>
            <p>Contact Us</p>
          </Col>
          <Col sm={4} md={3} xl={2}>
            <p>Product</p>
            <p>Integration</p>
            <p>Customers</p>
            <p>Pricing</p>
            <p>Help Center</p>
          </Col>
          <Col sm={4} md={3} xl={2}>
            <p>Legal</p>
            <p>Terms of Use</p>
            <p> Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Site Map</p>
          </Col>
          <Col sm={5} md={3}>
            <p>Connect with us</p>
            <p>hello@yourdomain.com</p>
            <FaFacebookSquare className={style.icon} />
            <FaTwitter className={style.icon} />
            <FaGithub className={style.icon} />
            <FaBasketballBall className={style.icon} />
          </Col>
        </Row>
        <Row className={style.lowerFooter}>
          <Col md={6} sm={12}>
            <p>© {today.getFullYear()} Martex. All Rights Reserved</p>
          </Col>
          <Col md={6} sm={12}>
            <p>
              Made with <FaHeart className={style.icon} /> by @DSAThemes
            </p>
          </Col>
        </Row>
      </Container>
    );
  else
    return (
      <Container>
        <Row className="justify-content-center">
          <Col col={4} md={3} lg={2}>
            <img className={style.logo} src={logoBlack} alt="Logo" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm={12} md={9} lg={7} xxl={5}>
            <p className={style.nav}>
              <span>About</span>
              <span>Blog</span>
              <span>Privacy Policy</span>
              <span>Cookie Policy</span>
              <span>Contact Us</span>
            </p>
          </Col>
        </Row>
        <Row>
          <FaFacebookSquare />
          <FaTwitter />
          <FaInstagram />
        </Row>
      </Container>
    );
}
