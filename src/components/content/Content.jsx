import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export function Content(props) {
  let order = { order: "last" };
  if (props.sequential) {
    order = { order: "first" };
  }
  return (
    <Container className="mb-5">
      <Row className="align-items-center">
        <Col xs={12} md={6}>
          {props.children[0]}
        </Col>
        <Col xs={{ order: "last" }} md={order}>
          {props.children[1]}
        </Col>
      </Row>
    </Container>
  );
}
