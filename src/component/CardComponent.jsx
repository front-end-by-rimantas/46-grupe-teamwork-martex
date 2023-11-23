import Col from "react-bootstrap/Col";

export function CardComponent({ sequential, children }) {
  const first = children[0];
  const last = children[1];

  return (
    <Col>
      {sequential ? (
        <>
          {last}
          {first}
        </>
      ) : (
        <>
          {first}
          {last}
        </>
      )}
    </Col>
  );
}
