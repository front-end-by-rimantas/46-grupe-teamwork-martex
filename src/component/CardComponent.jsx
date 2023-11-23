import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { First, Last } from "react-bootstrap/esm/PageItem";

export function CardComponent({ sequential }) {
  return (
    <Container>
      <Row>
        <Col>
          <div xs={{ order: sequential ? Last : First }}>IMAGE</div>
          <div xs={{ order: sequential ? First : Last }}>TEXT</div>
        </Col>
      </Row>
    </Container>
  );
}

/* <Container>
  <Row>
    <Col xs={{ order: sequential ? "last" : "first" }}>
      {props.children[0]}
      </Col>
      <Col>
      {props.children[1]}
      </Col>
    </Col>
  </Row>
</Container>
(https://react-bootstrap.netlify.app/docs/layout/grid/#:~:text=columns%2B1).-,RESULT,-First%2C%20but%20last)
*/
