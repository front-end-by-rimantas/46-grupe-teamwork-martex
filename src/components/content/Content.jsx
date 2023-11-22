import style from "./Content.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export function Content(props) {
  let imgPosition = "";
  let textPositionOnSmallScreen = "";

  if (props.sequential === false) {
    imgPosition = "left";
  } else imgPosition = "right";

  if (props.textFirst === true) {
    textPositionOnSmallScreen = "textFirst";
  }

  return (
    <Container>
      <Row
        className={style[imgPosition] + " " + style[textPositionOnSmallScreen]}
      >
        <Col xs={12} md={6}>
          {props.children[0]}
        </Col>
        <Col xs={12} md={6}>
          {props.children[1]}
        </Col>
      </Row>
    </Container>
  );
}
