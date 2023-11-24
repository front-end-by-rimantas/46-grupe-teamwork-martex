//React

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Image from "react-bootstrap/Image";
//Components
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Content } from "./components/content/Content";
import { Card } from "./components/card/Card";
//Assets
import hero1 from "./assets/hero-1-img.png";
import img10 from "./assets/img-10.png";
import img06 from "./assets/img-06.png";
import f_06 from "./assets/f_06.png";
import f_04 from "./assets/f_04.png";
import img03 from "./assets/img-03.png";
import img02 from "./assets/img-02.png";
import img13 from "./assets/img-13.png";
import img09 from "./assets/img-09.png";
import Board from "./assets/board.svg";
import LightBulb from "./assets/lightbulb.svg";
import Graph from "./assets/graph.svg";
import WebPage from "./assets/webpage.svg";
import Layers from "./assets/layer.svg";
import MouseClick from "./assets/mouse-click.svg";
import DashBoard from "./assets/dashboard.png";
import Mobile from "./assets/mobile.png";
import LineGraph from "./assets/line-graph.png";
import SocialMedias from "./assets/social-medias.png";
import BigGraph from "./assets/big-graph.png";
import CapterraLogo from "./assets/capterra-logo.png";
import TrustpilotLogo from "./assets/trustpilot-logo.png";
import CrowdLogo from "./assets/crowd-logo.png";
import ZapierLogo from "./assets/zapier-logo.png";
import GoogleAnalyticsLogo from "./assets/google-analytics-logo.png";
import AmplitudeLogo from "./assets/amplitude-logo.png";
import HubspotLogo from "./assets/hubspot-logo.png";
import MailChimpLogo from "./assets/mail-chimp-logo.png";

function App() {
  return (
    <>
      <Container className="hero px-0" fluid>
        <Header />
        <Container className="py-5" />
        <Content sequential={false}>
          <div>
            <h1>Content is the key to building an audience</h1>
            <p>
              Mauris donec turpis suscipit sapien ociis sagittis sapien tempor a
              volute ligula and aliquet tortor
            </p>
            <Button>Get started it's free</Button>
            <p>✔ No credit card needed, free 14-day trial</p>
          </div>
          <div>
            <Image src={hero1} fluid />
          </div>
        </Content>
      </Container>

      <Container className="my-5">
        <Row className="text-center my-5">
          <h1>Build a customer-centric marketing strategy</h1>
          <p>Ligula risus auctor tempus magna feugiat lacinia.</p>
        </Row>
        <Row className="text-center">
          <Col>
            <Card>
              <div>
                <Image src={Board} style={{ width: "64px" }}></Image>
              </div>
              <div>
                <h4>Market Research</h4>
                <p>Luctus augue egestas undo ultrice and quisque lacus</p>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div>
                <Image src={LightBulb} style={{ width: "64px" }}></Image>
              </div>
              <div>
                <h4>User Experience</h4>
                <p>Luctus augue egestas undo ultrice and quisque lacus</p>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div>
                <Image src={Graph} style={{ width: "64px" }}></Image>
              </div>
              <div>
                <h4>Digital Marketing</h4>
                <p>Luctus augue egestas undo ultrice and quisque lacus</p>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div>
                <Image src={WebPage} style={{ width: "64px" }}></Image>
              </div>
              <div>
                <h4>SEO Services</h4>
                <p>Luctus augue egestas undo ultrice and quisque lacus</p>
              </div>
            </Card>
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
        <div>
          <Image src={img10} fluid></Image>
        </div>
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
        <div>
          <Image src={img06} fluid></Image>
        </div>
      </Content>

      <Container className="my-5">
        <Row className="text-center">
          <h2>Reach your audience through social media marketing</h2>
          <p>Ligula risus auctor tempus magna feugiat lacinia.</p>
        </Row>
        <Row className="text-center">
          <Col>
            <Card sequential={true}>
              <div>
                <Image src={f_06} fluid />
              </div>
              <div>
                <h2>Marketing Integrations</h2>
                <p>
                  Aliquam a augue suscipit luctus diam neque purus ipsum neque
                  and dolor primis libero
                </p>
              </div>
            </Card>
          </Col>
          <Col>
            <Card sequential={false}>
              <div>
                <Image src={f_04} fluid />
              </div>
              <div>
                <h2>Marketing Integrations</h2>
                <p>
                  Aliquam a augue suscipit luctus diam neque purus ipsum neque
                  and dolor primis libero
                </p>
              </div>
            </Card>
          </Col>
        </Row>

        <Container className="my-5">
          <Row>
            <Col sm={12} md={4}>
              <Row className="align-items-center">
                <Col md={12} lg={4}>
                  <h1>89k</h1>
                </Col>
                <Col md={12} lg={8}>
                  Porta justo integer and velna vitae auctor
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={4}>
              <Row className="align-items-center">
                <Col md={12} lg={4}>
                  <h1>76%</h1>
                </Col>
                <Col md={12} lg={8}>
                  Ligula magna suscipit vitae and rutrum
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={4}>
              <Row className="align-items-center">
                <Col md={12} lg={4}>
                  <h1>4.93</h1>
                </Col>
                <Col md={12} lg={8}>
                  Sagittis congue augue egestas an egestas
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Content sequential={true}>
          <div>
            <h3>The smarter way to work</h3>
            <p>
              Sodales tempor sapien quaerat ipsum undo congue laoreet turpis
              neque auctor turpis vitae dolor luctus placerat magna and ligula
              cursus purus vitae purus an ipsum suscipit
            </p>
            <h3>Full access to all features</h3>
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
          <div>
            <Image src={img03} fluid></Image>
          </div>
        </Content>

        <Content sequential={false}>
          <div>
            <p>ONE-STOP SOLUTION</p>
            <h1>Smart solutions, real-time results</h1>
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
                <Card>
                  <div>
                    <Image src={Layers} style={{ width: "64px" }} fluid></Image>
                  </div>
                  <div>
                    <h4>Content Marketing</h4>
                    <p>
                      Porta semper lacus and cursus feugiat at primis ultrice a
                      ligula auctor
                    </p>
                  </div>
                </Card>
              </Col>
              <Col sm={12} md={6}>
                <Card>
                  <div>
                    <Image
                      src={MouseClick}
                      style={{ width: "64px" }}
                      fluid
                    ></Image>
                  </div>
                  <div>
                    <h4>Pay Per Click (PPC)</h4>
                    <p>
                      Porta semper lacus and cursus feugiat at primis ultrice a
                      ligula auctor
                    </p>
                  </div>
                </Card>
              </Col>
              <Col sm={12} md={6}>
                <Card>
                  <div>
                    <Image
                      src={WebPage}
                      style={{ width: "64px" }}
                      fluid
                    ></Image>
                  </div>
                  <div>
                    <h4>Video Marketing</h4>
                    <p>
                      Porta semper lacus and cursus feugiat at primis ultrice a
                      ligula auctor
                    </p>
                  </div>
                </Card>
              </Col>
              <Col sm={12} md={6}>
                <Card>
                  <div>
                    <Image src={Graph} style={{ width: "64px" }} fluid></Image>
                  </div>
                  <div>
                    <h4>Business Analytics</h4>
                    <p>
                      Porta semper lacus and cursus feugiat at primis ultrice a
                      ligula auctor
                    </p>
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
        </Content>

        <Content sequential={true}>
          <div>
            <p>EASY INTEGRATION</p>
            <h1>Plug your essential tools in few clicks</h1>
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
          <Image src={img02} fluid></Image>
        </Content>
      </Container>

      <Container fluid>
        <Container className="my-5">
          {/*  ^ ADD BACKGROUND IMAGE TO THIS CONTAINER */}
          <Row className="text-center">
            <Col>
              <h1>Track the progress towards objectives with key results</h1>
              <p>Ligula risus auctor tempus magna feugiat lacinia.</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image src={DashBoard} fluid></Image>
            </Col>
          </Row>
          <Row className="text-center">
            <Col>
              <p>Martex is loved and trusted by thousands:</p>
            </Col>
          </Row>
          <Row className="text-center">
            <Col>Carousel component goes here</Col>
          </Row>
        </Container>
      </Container>

      <Container className="my-5">
        <Row className="text-center">
          <Col>
            <h1>The Complete Solutions</h1>
            <p>Ligula risus auctor tempus magna feugiat lacinia.</p>
          </Col>
        </Row>
        <Row className="justify-content-evenly text-center">
          <Col xs={8} md={4} lg={3}>
            <Card>
              <div>
                <Image src={Mobile} fluid></Image>
              </div>
              <div>
                <h4>Intuitive Dashboard</h4>
                <p>
                  Luctus egestas augue undo ultrice aliquam in lacus congue
                  dapibus
                </p>
              </div>
            </Card>
          </Col>
          <Col xs={8} md={4} lg={3}>
            <Card>
              <div>
                <Image src={SocialMedias} fluid></Image>
              </div>
              <div>
                <h4>Effortless Integration</h4>
                <p>
                  Tempor laoreet augue undo ultrice aliquam in lacusq luctus
                  feugiat
                </p>
              </div>
            </Card>
          </Col>
          <Col xs={8} md={4} lg={3}>
            <Card>
              <div>
                <Image src={LineGraph} fluid></Image>
              </div>
              <div>
                <h4>Engagement Analysis</h4>
                <p>
                  Egestas luctus augue undo ultrice aliquam in lacus feugiat
                  cursus
                </p>
              </div>
            </Card>
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
          <div>
            <Image src={img13} fluid></Image>
          </div>
        </Content>
      </Container>

      <Container className="my-5">
        <Row className="text-center">
          <h1>Discover insights across all your data with Martex</h1>
          <p>Ligula risus auctor tempus magna feugiat lacinia.</p>
        </Row>
        <Row className="justify-content-center">
          <Image src={BigGraph} fluid></Image>
        </Row>
        <Row className="text-center">
          <Col xs={12}>
            <Button>Monitor your activity</Button>
          </Col>
          <Col xs={12}>
            <p>Free 14 days trial | Exclusive Support | No Fees</p>
          </Col>
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

          <img src={img09} style={{ width: "90%" }} />
        </Content>
      </Container>

      <Container className="my-5">
        <Row className="text-center">
          <h1>Here's what our amazing clients are saying</h1>
          <p>Ligula risus auctor tempus magna feugiat lacinia.</p>
        </Row>
        <Row className="text-center">
          <Col>Carousel component goes here</Col>
        </Row>
        <Row className="text-center">
          <p>Our clients love us as much as we love them</p>
        </Row>
        <Row className="justify-content-evenly">
          <Col xs={12} md={2}>
            <Card>
              <div>
                <Image src={CapterraLogo} fluid></Image>
              </div>
              <div>
                <p className="text-center">4.7/5</p>
              </div>
            </Card>
          </Col>
          <Col xs={12} md={2}>
            <Card>
              <div>
                <Image src={TrustpilotLogo} fluid></Image>
              </div>
              <div>
                <p className="text-center">4.95/5</p>
              </div>
            </Card>
          </Col>
          <Col xs={12} md={2}>
            <Card>
              <div>
                <Image src={CrowdLogo} fluid></Image>
              </div>
              <div>
                <p className="text-center">4.24/5</p>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <Row className="text-center">
          <h1>Automate your workflow with our integrations</h1>
          <p>Ligula risus auctor tempus magna feugiat lacinia.</p>
        </Row>
        <Row className="text-center">
          <Col>
            <Card>
              <div>
                <Image src={ZapierLogo}></Image>
              </div>
              <div>
                <p>Zapier</p>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div>
                <Image src={GoogleAnalyticsLogo}></Image>
              </div>
              <div>
                <p>Google Analytics</p>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div>
                <Image src={AmplitudeLogo}></Image>
              </div>
              <div>
                <p>Amplitude</p>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div>
                <Image src={HubspotLogo}></Image>
              </div>
              <div>
                <p>Hubspot</p>
              </div>
            </Card>
          </Col>
          <Col>
            <Card>
              <div>
                <Image src={MailChimpLogo}></Image>
              </div>
              <div>
                <p>MailChimp</p>
              </div>
            </Card>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <Button>View all intergrations</Button>
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <Row className="text-center">
          <h1>Questions & Answers</h1>
          <p>Ligula risus auctor tempus magna feugiat lacinia.</p>
        </Row>
        <Row>
          <Col md={12} lg={6}>
            <h3>1. Getting started with Martex</h3>
            <p>
              Etiam amet mauris suscipit in odio integer congue metus and vitae
              arcu mollis blandit ultrice ligula egestas magna suscipit lectus
              magna suscipit luctus blandit and laoreet
            </p>
          </Col>
          <Col md={12} lg={6}>
            <h3>4. How does Martex handle my privacy?</h3>
            <p>
              Quaerat sodales sapien euismod blandit purus a purus ipsum primis
              in cubilia laoreet augue luctus dolor luctus An enim nullam tempor
              sapien gravida donec congue metus. Vitae arcu mollis blandit
              integer nemo volute velna
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={6}>
            <h3>2. What's inside the package?</h3>
            <p>
              An enim nullam tempor sapien gravida donec ipsum and enim porta
              justo integer at velna vitae auctor integer congue undo magna
              laoreet augue pretium purus pretium ligula
            </p>
          </Col>
          <Col md={12} lg={6}>
            <h3>5. I have an issue with my account</h3>
            <p>
              Cubilia laoreet augue egestas and luctus donec curabite diam vitae
              dapibus libero and quisque gravida donec neque blandit justo
              aliquam molestie nunc sapien justo
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} lg={6}>
            <h3>3. How do I choose a plan?</h3>
            <ul>
              <li>
                Fringilla risus, luctus mauris orci auctor purus ligula euismod
                pretium purus pretium rutrum tempor sapien
              </li>
              <li>
                Nemo ipsam egestas volute undo turpis purus lipsum primis
                aliquam sapien quaerat sodales pretium a purus
              </li>
            </ul>
          </Col>
          <Col md={12} lg={6}>
            <h3>6. Can I cancel at anytime?</h3>
            <p>
              An enim nullam tempor sapien gravida donec ipsum and enim porta
              justo integer at velna vitae auctor integer congue undo magna
              laoreet augue pretium purus pretium ligula
            </p>
          </Col>
        </Row>
        <Row className="text-center">
          <p>
            Have any questions?
            <span>
              <a href="#">Get in Touch</a>
            </span>
          </p>
        </Row>
      </Container>

      <Container className="my-5">
        <Row className="text-center">
          <h1>Starting with Martex is easy</h1>
          <p>Text</p>
        </Row>
        <Row className="text-center">
          <p>It only takes a few clicks to get started</p>
        </Row>
        <Row className="text-center">
          <Col>
            <Button>Get started - it's free</Button>
          </Col>
        </Row>
        <Row className="text-center">
          <p>✔ Free for 14 days, no credit card required.</p>
        </Row>
      </Container>

      <Footer nav={true} />
    </>
  );
}

export default App;
