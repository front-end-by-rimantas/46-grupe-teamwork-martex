import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Card(props) {
  let order = { order: "last" };
  if (props.sequential) {
    order = { order: "first" };
  }
  return (
    <Row>
      <Col xs={12}>{props.children[0]}</Col>
      <Col xs={{ order: "last" }} md={order}>
        {props.children[1]}
      </Col>
    </Row>
  );
}
