//Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function ContentHeader(props) {
  return (
    <>
      <Row className="justify-content-center text-center content-header">
        <Col lg={9}>
          {props.children[0]}
          {props.children[1]}
        </Col>
      </Row>
    </>
  );
}
