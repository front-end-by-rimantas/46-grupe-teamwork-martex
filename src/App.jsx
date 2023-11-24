import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Content } from "./components/content/Content";
import hero1 from "./assets/hero-1-img.png";
import img10 from "./assets/img-10.png";
import img06 from "./assets/img-06.png";
import f_06 from "./assets/f_06.png";
import f_04 from "./assets/f_04.png";
import img03 from "./assets/img-03.png";
import img02 from "./assets/img-02.png";
import img13 from "./assets/img-13.png";
import img09 from "./assets/img-09.png";
import { NewCard } from "./components/card/NewCard";

function App() {
  return (
    <>
      <Header />
      <Container
        fluid
        className=" bg-danger bg-gradient"
        style={{ paddingBottom: "8rem" }}
      ></Container>
      <Content sequential={false} textFirst={true}>
        <div>
          <h1>Content is the key to building an audience</h1>
          <p>
            Mauris donec turpis suscipit sapien ociis sagittis sapien tempor a
            volute ligula and aliquet tortor
          </p>
          <button>BUTTON</button>
          <p> No credit card needed, free 14-day trial</p>
        </div>
        <img src={hero1} alt="" style={{ width: "100%" }} />
      </Content>
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
            <NewCard sequential={false}>
              <div>SVG ICON</div>
              <div>
                <h6>Market ResearchNEW CARD</h6>
                <p>Luctus augue egestas undo ultrice and quisque lacus</p>
              </div>
            </NewCard>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <NewCard sequential={false}>
              <div>SVG ICON</div>
              <div>
                <h6>User Experience</h6>
                <p>Luctus augue egestas undo ultrice and quisque lacus</p>
              </div>
            </NewCard>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <NewCard sequential={false}>
              <div>SVG ICON</div>
              <div>
                <h6>Digital Marketing</h6>
                <p>Luctus augue egestas undo ultrice and quisque lacus</p>
              </div>
            </NewCard>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <NewCard sequential={false}>
              <div>SVG ICON</div>
              <div>
                <h6>SEO Services</h6>
                <p>Luctus augue egestas undo ultrice and quisque lacus</p>
              </div>
            </NewCard>
          </Col>
        </Row>
      </Container>
      <Content sequential={true}>
        <div>
          <p>ENHANCE ENGAGEMENT</p>
          <h1>Engage your most valuable visitors</h1>
          <p>
            Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque
            auctor turpis vitae dolor luctus placerat magna and ligula cursus
            purus vitae purus an ipsum suscipit
          </p>
          <h3>Digits that define growth</h3>
          <ul>
            <li>
              Sapien quaerat tempor an ipsum laoreet purus and sapien dolor an
              ultrice ipsum aliquam undo congue cursus dolor
            </li>
            <li>
              Purus suscipit cursus vitae cubilia magnis volute egestas vitae
              sapien turpis ultrice auctor congue magna placerat
            </li>
          </ul>
        </div>
        <img src={img10} alt="img10" style={{ width: "90%" }} />
      </Content>
      <Content sequential={false}>
        <div>
          <h3>Solution that grows with you</h3>
          <p>
            Sodales tempor sapien quaerat ipsum undo congue laoreet turpis neque
            auctor turpis vitae dolor luctus placerat magna and ligula cursus
            purus vitae purus an ipsum suscipit
          </p>
          <h3>Connect your data sources</h3>
          <p>
            Tempor sapien sodales quaerat ipsum undo congue laoreet turpis neque
            auctor turpis vitae dolor luctus placerat magna and ligula cursus
            purus an ipsum vitae suscipit purus
          </p>
          <ul>
            <li>
              Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an
              ultrice ipsum aliquam undo congue dolor cursus
            </li>
            <li>
              Cursus purus suscipit vitae cubilia magnis volute egestas vitae
              sapien turpis ultrice auctor congue magna placerat
            </li>
          </ul>
        </div>
        <img src={img06} alt="img06" style={{ width: "90%" }} />
      </Content>
      <Container>
        <Container>
          <h2>Reach your audience through social media marketing</h2>
          <p>Ligula risus auctor tempus magna feugiat lacinia.</p>
        </Container>
        <Content sequential={false} textFirst={true}>
          <div>
            <NewCard sequential={true}>
              <img src={f_06} alt="" style={{ width: "70%" }} />
              <div>
                <h2>Marketing Integrations</h2>
                <p>
                  Aliquam a augue suscipit luctus diam neque purus ipsum neque
                  and dolor primis libero
                </p>
              </div>
            </NewCard>
          </div>
          <div>
            <NewCard sequential={false}>
              <img src={f_04} alt="" style={{ width: "70%" }} />
              <div>
                <h2>Enhance Engagement</h2>
                <p>
                  Aliquam a augue suscipit luctus diam neque purus ipsum neque
                  and dolor primis libero
                </p>
              </div>
            </NewCard>
          </div>
        </Content>
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
        <Content>
          <div>
            <h2>The smarter way to work</h2>
            <p>
              Sodales tempor sapien quaerat ipsum undo congue laoreet turpis
              neque auctor turpis vitae dolor luctus placerat magna and ligula
              cursus purus vitae purus an ipsum suscipit
            </p>
            <h2>Full access to all features</h2>
            <ul>
              <li>
                Cursus purus suscipit vitae cubilia magnis volute egestas vitae
                sapien turpis sodales magna undo aoreet primis
              </li>
              <li>
                Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an
                ultrice ipsum aliquam undo congue dolor cursus purus congue and
                ipsum purus sapien a blandit
              </li>
            </ul>
            <Button>Button</Button>
          </div>
          <img src={img03} alt="" style={{ width: "90%" }} />
        </Content>
        <Content sequential={false} textFirst={true}>
          <div>
            <p>ONE-STOP SOLUTION</p>
            <h2>Smart solutions, real-time results</h2>
            <p>
              Sodales tempor sapien quaerat ipsum and congue undo laoreet turpis
              neque auctor turpis vitae dolor luctus placerat magna ligula and
              cursus vitae
            </p>
            <ul>
              <li>Magna dolor luctus at egestas sapien</li>
              <li>
                Cursus purus suscipit vitae cubilia magnis volute egestas vitae
                sapien turpis and ultrice magnis
              </li>
              <li>Volute turpis dolores and sagittis congue</li>
            </ul>
          </div>
          <div>
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
          </div>
        </Content>
        <Content sequential={true}>
          <div>
            <p>EASY INTEGRATION</p>
            <h2>Plug your essential tools in few clicks</h2>
            <ul>
              <li>
                Cursus purus suscipit vitae cubilia magnis volute egestas vitae
                sapien turpis sodales magna undo aoreet primis
              </li>
              <li>
                Tempor sapien quaerat an ipsum laoreet purus and sapien dolor an
                ultrice ipsum aliquam undo congue dolor cursus purus congue and
                ipsum purus sapien a blandit
              </li>
            </ul>
          </div>
          <img src={img02} alt="" style={{ width: "90%" }} />
        </Content>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col sm={10} md={8} xxl={7}>
            {" "}
            HEADER TEXT{" "}
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm={11} md={12}>
            {" "}
            BLOCK CONTENT{" "}
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col> SOME SLIDING CARDS </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-center">
          <Col sm={10} md={7} xxl={6}>
            {" "}
            HEADER TEXT{" "}
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm={12} md={4}>
            {" "}
            CARD{" "}
          </Col>
          <Col sm={12} md={4}>
            {" "}
            CARD{" "}
          </Col>
          <Col sm={12} md={4}>
            {" "}
            CARD{" "}
          </Col>
        </Row>

        <Content sequential={false}>
          <div>
            <p>PRODUCTIVITY FOCUSED</p>
            <h1>Achieve more with better workflows</h1>
            <p>
              Sodales tempor sapien quaerat ipsum undo congue laoreet turpis
              neque auctor turpis vitae dolor luctus placerat magna and ligula
              cursus purus vitae purus an ipsum suscipit
            </p>
            <ul>
              <li>Magna dolor luctus at egestas sapien</li>
              <li>
                Cursus purus suscipit vitae cubilia magnis volute egestas vitae
                sapien turpis ultrice auctor congue varius magnis
              </li>
              <li>Volute turpis dolores and sagittis congue</li>
            </ul>
          </div>
          <img src={img13} alt="" style={{ width: "90%" }} />
        </Content>
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

        <Content sequential={true}>
          <div>
            <div>
              <div>
                <h3>Register in 30 seconds</h3>
              </div>
              <p>
                Ligula risus auctor tempus feugiat dolor lacinia nemo purus in
                lipsum purus sapien quaerat a primis viverra tellus vitae luctus
                dolor ipsum neque ligula quaerat
              </p>
            </div>
            <div>
              <div>
                <h3>Customizable Dashboards</h3>
              </div>
              <p>
                Ligula risus auctor tempus feugiat dolor lacinia nemo purus in
                lipsum purus sapien quaerat a primis viverra tellus vitae luctus
                dolor ipsum neque ligula quaerat
              </p>
            </div>
            <div>
              <div>
                <h3>Improved Productivity</h3>
              </div>
              <p>
                Ligula risus auctor tempus feugiat dolor lacinia nemo purus in
                lipsum purus sapien quaerat a primis viverra tellus vitae luctus
                dolor ipsum n eque ligula quaerat
              </p>
            </div>
          </div>

          <img src={img09} alt="" style={{ width: "90%" }} />
        </Content>
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

      <Footer nav={true} />
    </>
  );
}

export default App;
