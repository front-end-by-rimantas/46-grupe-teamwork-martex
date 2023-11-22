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
