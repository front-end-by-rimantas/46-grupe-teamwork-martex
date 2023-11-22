import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Header } from "./component/navbar/Header";

function App() {
  return (
    <>
      <Header />
      <Container fluid className="pt-5 bg-danger bg-gradient">
        {/* ^ visa class ir "fluid" galima trinti padaryta laikinai */}
        <Row className="pt-5">
          {/* ^ visa class galima trinti padaryta laikinai */}
          <Col xs={12} sm={6} className="pt-5">
            {/* ^ visa class galima trinti padaryta laikinai */}
            <h1>Content is the key to building an audience</h1>
            <p>TEXT</p>
            <button>BUTTON</button>
            <p>TEXT</p>
          </Col>
          <Col xs={12} sm={6}>
            <div>IMAGE</div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h1>Build a customer-centric marketing strategy</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>TEXT</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} lg={3}>
            1 of 4
          </Col>
          <Col xs={12} md={6} lg={3}>
            2 of 4
          </Col>
          <Col xs={12} md={6} lg={3}>
            3 of 4
          </Col>
          <Col xs={12} md={6} lg={3}>
            4 of 4
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            IMAGE
          </Col>
          <Col xs={12} md={6}>
            <p>TEXT</p>
            <h1>Engage your most valuable visitors</h1>
            <p>TEXT</p>
            <h3>Digits that define growth</h3>
            <ul>
              <li>TEXT</li>
              <li>TEXT</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <h3>Solution that grows with you</h3>
            <p>TEXT</p>
            <h3>Connect your data sources</h3>
            <p>TEXT</p>
            <ul>
              <li>TEXT</li>
              <li>TEXT</li>
            </ul>
          </Col>
          <Col xs={12} md={6}>
            IMAGE
          </Col>
        </Row>
      </Container>
      <Container>
        <Container>
          <h2>Reach your audience through social media marketing</h2>
          <p>Ligula risus auctor tempus magna feugiat lacinia.</p>
        </Container>
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <h2>Marketing Integrations</h2>
              <p>
                Aliquam a augue suscipit luctus diam neque purus ipsum neque and
                dolor primis libero
              </p>
              IMG
            </Col>
            <Col sm={12} md={6}>
              IMG
              <h2>Enhance Engagement</h2>
              <p>
                Aliquam a augue suscipit luctus diam neque purus ipsum neque and
                dolor primis libero
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm={12} md={4}>
              <Row className="align-items-center">
                <Col md={12} lg={4}>
                  89k
                </Col>
                <Col md={12} lg={8}>
                  Porta justo integer and velna vitae auctor
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={4}>
              <Row className="align-items-center">
                <Col md={12} lg={4}>
                  76%
                </Col>
                <Col md={12} lg={8}>
                  Ligula magna suscipit vitae and rutrum
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={4}>
              <Row className="align-items-center">
                <Col md={12} lg={4}>
                  4.93
                </Col>
                <Col md={12} lg={8}>
                  Sagittis congue augue egestas an egestas
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm={12} md={6}>
              IMG
            </Col>
            <Col sm={12} md={6}>
              <h2>The smarter way to work</h2>
              <p>
                Sodales tempor sapien quaerat ipsum undo congue laoreet turpis
                neque auctor turpis vitae dolor luctus placerat magna and ligula
                cursus purus vitae purus an ipsum suscipit
              </p>
              <h2>Full access to all features</h2>
              <ul>
                <li>
                  Cursus purus suscipit vitae cubilia magnis volute egestas
                  vitae sapien turpis sodales magna undo aoreet primis
                </li>
                <li>
                  Tempor sapien quaerat an ipsum laoreet purus and sapien dolor
                  an ultrice ipsum aliquam undo congue dolor cursus purus congue
                  and ipsum purus sapien a blandit
                </li>
              </ul>
              <Button>Button</Button>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <p>ONE-STOP SOLUTION</p>
              <h2>Smart solutions, real-time results</h2>
              <p>
                Sodales tempor sapien quaerat ipsum and congue undo laoreet
                turpis neque auctor turpis vitae dolor luctus placerat magna
                ligula and cursus vitae
              </p>
              <ul>
                <li>Magna dolor luctus at egestas sapien</li>
                <li>
                  Cursus purus suscipit vitae cubilia magnis volute egestas
                  vitae sapien turpis and ultrice magnis
                </li>
                <li>Volute turpis dolores and sagittis congue</li>
              </ul>
            </Col>
            <Col sm={12} md={6}>
              <Row>
                <Col sm={12} md={6}>
                  IMG
                  <h4>Content Marketing</h4>
                  <p>
                    Porta semper lacus and cursus feugiat at primis ultrice a
                    ligula auctor
                  </p>
                </Col>
                <Col sm={12} md={6}>
                  IMG
                  <h4>Pay Per Click (PPC)</h4>
                  <p>
                    Porta semper lacus and cursus feugiat at primis ultrice a
                    ligula auctor
                  </p>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={6}>
                  IMG
                  <h4>Video Marketing</h4>
                  <p>
                    Porta semper lacus and cursus feugiat at primis ultrice a
                    ligula auctor
                  </p>
                </Col>
                <Col sm={12} md={6}>
                  IMG
                  <h4>Business Analytics</h4>
                  <p>
                    Porta semper lacus and cursus feugiat at primis ultrice a
                    ligula auctor
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col sm={12} md={6}>
              IMG
            </Col>
            <Col sm={12} md={6}>
              <p>EASY INTEGRATION</p>
              <h2>Plug your essential tools in few clicks</h2>
              <ul>
                <li>
                  Cursus purus suscipit vitae cubilia magnis volute egestas
                  vitae sapien turpis sodales magna undo aoreet primis
                </li>
                <li>
                  Tempor sapien quaerat an ipsum laoreet purus and sapien dolor
                  an ultrice ipsum aliquam undo congue dolor cursus purus congue
                  and ipsum purus sapien a blandit
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col sm={10} md={8} xxl={7}>
            HEADER TEXT
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm={11} md={12}>
            BLOCK CONTENT
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col> SOME SLIDING CARDS </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col sm={10} md={7} xxl={6}>
            HEADER TEXT
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm={12} md={4}>
            CARD
          </Col>
          <Col sm={12} md={4}>
            CARD
          </Col>
          <Col sm={12} md={4}>
            CARD
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm={12} md={6}>
            TEXT
          </Col>
          <Col sm={12} md={6}>
            IMAGE
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col lg={9}>
            <h1>Discover insights across all your data with Martex</h1>
            <p className="text-center">
              Ligula risus auctor tempus magna feugiat lacinia.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <p>image</p>
          </Col>
        </Row>
        <Row>
          <Col>Monitor your activity button</Col>
        </Row>
        <Row>
          <Breadcrumb>
            <Breadcrumb.Item>Free 14 days trial</Breadcrumb.Item>
            <Breadcrumb.Item>Exclusive Support</Breadcrumb.Item>
            <Breadcrumb.Item>No Fees</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row>
          <Col s={12} md={6}>
            Image
          </Col>
          <Col s={12} md={6}>
            <div>
              <div>
                <h3>Register in 30 seconds</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, dolor.
              </p>
            </div>
            <div>
              <div>
                <h3>Customizable Dashboards</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, dolor.
              </p>
            </div>
            <div>
              <div>
                <h3>Improved Productivity</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, dolor.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col lg={9}>
            <h1>Here's what</h1>
            <p>Text</p>
          </Col>
        </Row>
        <Row>
          <Col>Gallery</Col>
        </Row>
        <Row>
          <Col>Our clients love us as much as we love them</Col>
        </Row>
        <Row>
          <Col md={4} s={12}>
            Brand1
          </Col>
          <Col md={4} s={12}>
            Brand2
          </Col>
          <Col md={4} s={12}>
            Brand3
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col lg={9}>
            <h1>Automate</h1>
            <p>Text</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={2} s={12}>
            Brand1
          </Col>
          <Col md={2} s={12}>
            Brand2
          </Col>
          <Col md={2} s={12}>
            Brand3
          </Col>
          <Col md={2} s={12}>
            Brand4
          </Col>
          <Col md={2} s={12}>
            Brand5
          </Col>
        </Row>
        <Row>
          <Col>View all integrations button</Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col lg={9}>
            <h1>Q&A</h1>
            <p>Text</p>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={6}>
            1.text
          </Col>
          <Col md={12} lg={6}>
            4.text
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={6}>
            2.text
          </Col>
          <Col md={12} lg={6}>
            5.text
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={6}>
            3.text
          </Col>
          <Col md={12} lg={6}>
            6.text
          </Col>
        </Row>
        <Row>
          <Col>Have any questions? Get in Touch</Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col lg={9}>
            <h1>Starting with Martex is easy</h1>
            <p>Text</p>
          </Col>
        </Row>
        <Row>
          <Col>Button</Col>
        </Row>
        <Row>
          <Col>Text</Col>
        </Row>
      </Container>
      <Container className="mb-5">
        <Row>
          <Col xxl={3} lg={12}>
            Logo
          </Col>
          <Col xl={2} lg={3} md={4} xs={6}>
            Company
          </Col>
          <Col xl={2} lg={3} md={4} xs={6}>
            Product
          </Col>
          <Col xl={2} lg={3} md={4} xs={12}>
            Legal
          </Col>
          <Col lg={3}>
            Follow the best
            <br />
            input
          </Col>
        </Row>
        <Row>
          <Col md={6} sm={12}>
            Rights reserved
          </Col>
          <Col md={6} sm={12}>
            Socials
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
