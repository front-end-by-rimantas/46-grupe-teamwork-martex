import "./App.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css"
import  Button  from "react-bootstrap/Button";


function App() {
  return (
    <>
    <Container className="reach-your-audience-to-track-the-progress">

      <Container>
      <h2>Reach your audience through social media marketing</h2>
      <p>Ligula risus auctor tempus magna feugiat lacinia.</p>
      </Container>

        <Container>
          <Row>
            <Col s={12} md={6}>
              <h2>Marketing Integrations</h2>
              <p>Aliquam a augue suscipit luctus diam neque purus ipsum neque and dolor primis libero</p>
              IMG
            </Col>
            <Col s={12} md={6}>
              IMG
              <h2>Enhance Engagement</h2>
              <p>Aliquam a augue suscipit luctus diam neque purus ipsum neque and dolor primis libero</p>
            </Col>
          </Row>
        </Container>

        <Container>
        <Row>

          <Col s={12} md={4}>
            <Row>
              <Col lg={4} md={12} >
                89k
              </Col>
              <Col lg={8} md={12} >
                Porta justo integer and velna vitae auctor
              </Col>
            </Row>
          </Col>

          <Col s={12} md={4}>
            <Row>
              <Col lg={4} md={12} >
                76%
              </Col>
              <Col lg={8} md={12} >
                Ligula magna suscipit vitae and rutrum
              </Col>
            </Row>
          </Col>

          <Col s={12} md={4}>
            <Row>
              <Col lg={4} md={12} >
                4.93
              </Col>
              <Col lg={8} md={12} >
              Sagittis congue augue egestas an egestas
              </Col>
            </Row>
          </Col>

        </Row>
        </Container>

        <Container>
          <Row>
            <Col s={12} md={6}>
              IMG
            </Col>
            <Col s={12} md={6}>
              <h2>The smarter way to work</h2>
              <p>Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque auctor turpis vitae dolor luctus placerat magna and ligula cursus purus vitae purus an ipsum suscipit</p>
              <h2>Full access to all features</h2>
              <ul>
                <li>Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis sodales magna undo aoreet primis</li>
                <li>Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an ultrice ipsum aliquam undo congue dolor cursus purus congue and ipsum purus sapien a blandit</li>
              </ul>
              <Button>Button</Button>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col s={12} md={6}>
              <p>ONE-STOP SOLUTION</p>
              <h2>Smart solutions, real-time results</h2>
              <p>Sodales tempor sapien quaerat ipsum and congue undo laoreet turpis neque auctor turpis vitae dolor luctus placerat magna ligula and cursus vitae</p>
              <ul>
                <li>Magna dolor luctus at egestas sapien</li>
                <li>Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis and ultrice magnis</li>
                <li>Volute turpis dolores and sagittis congue</li>
              </ul>
            </Col>

            <Col s={12} md={6}>
            <Row>
              <Col md={6} s={12}>
                IMG
                <h4>Content Marketing</h4>
                <p>Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor</p>
              </Col>
              <Col md={6} s={12}>
                IMG
                <h4>Pay Per Click (PPC)</h4>
                <p>Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor</p>
              </Col>
            </Row>
            <Row>
              <Col md={6} s={12}>
                IMG
                <h4>Video Marketing</h4>
                <p>Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor</p>
              </Col>
              <Col md={6} s={12}>
                IMG
                <h4>Business Analytics</h4>
                <p>Porta semper lacus and cursus feugiat at primis ultrice a ligula auctor</p>
              </Col>
            </Row>
            </Col>
          </Row>
        </Container>


        <Container>
          <Row>
            <Col md={6} s={12}>
              IMG
            </Col>
            <Col md={6} s={12}>
              <p>EASY INTEGRATION</p>
              <h2>Plug your essential tools in few clicks</h2>
              <ul>
                <li>Cursus purus suscipit vitae cubilia magnis volute egestas vitae sapien turpis sodales magna undo aoreet primis</li>
                <li>Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an ultrice ipsum aliquam undo congue dolor cursus purus congue and ipsum purus sapien a blandit</li>
              </ul>
            </Col>
          </Row>
        </Container>


        
    </Container>
    </>
  )
}

export default App;
