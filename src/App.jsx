import "./App.css";
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container>
      <Row className="block">
        <Col className="col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8 col-xxl-7"> HEADER TEXT </Col>
      </Row>
      <Row className="block">
        <Col className="col-11 col-sm-11 col-md-12 col-lg-12 col-xl-12 col-xxl-12"> BLOCK CONTENT </Col>
      </Row>
      <Row className="block">
        <Col> SOME SLIDING CARDS - tikrinau visur uzima 12col ploti... </Col>
      </Row>
      <Row className="block">
        <Col className="col-11 col-sm-10 col-md-7 col-lg-7 col-xl-7 col-xxl-6"> HEADER TEXT </Col>
      </Row>
      <Row className="block">
        <Col className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4"> CARD </Col>
        <Col className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4"> CARD </Col>
        <Col className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4"> CARD </Col>
      </Row>
      <Row className="block">
        <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"> TEXT </Col>
        <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"> IMAGE </Col>
      </Row>
      
    </Container>
  );
}

export default App;
