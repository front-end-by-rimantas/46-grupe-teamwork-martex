import "./App.css";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container>
      <Row className="Row">
        <Col className="col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8 col-xxl-7"> HEADER TEXT </Col>
      </Row>
      <Row className="Row">
        <Col className="col-11 col-sm-11 col-md-12 col-lg-12 col-xl-12 col-xxl-12"> BLOCK CONTENT </Col>
      </Row>
      <Row className="Row">
        <Col> SOME SLIDING CARDS - tikrinau visur uzima 12col ploti... </Col>
      </Row>
      <Row className="Row">
        <Col className="col-11 col-sm-10 col-md-7 col-lg-7 col-xl-7 col-xxl-6"> HEADER TEXT </Col>
      </Row>
      <Row className="Row">
        <Col className="col-8 col-sm-8 col-md-11 col-lg-11 col-xl-11 col-xxl-12"> SOME 3 CARDS </Col>
      </Row>
      <Row className="Row">
        <Col className="col-11 col-sm-11 col-md-12 col-lg-12 col-xl-12 col-xxl-12"> BLOCK CONTENT </Col>
      </Row>
    </Container>
  );
}

export default App;
