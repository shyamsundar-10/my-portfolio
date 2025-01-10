import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import resume from "../assets/Shyam_Resume.pdf";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated" : ""}>
                  <h1 id="heading1">{`Hi! I'm Shyam`} </h1>
                  <h1 id="heading2">Web & App Dev</h1>
                  <p>
                    I am a Innovative Fullstack Developer with expertise in
                    React.js & React Native. Experienced in building dynamic web
                    and mobile applications, including a successful e-commerce
                    app. Passionate about learning new technologies and solving
                    real-world problems through impactful solutions. Let’s
                    create something amazing together!
                  </p>
                  <button>
                    Know more - &nbsp;<a href={resume} download="Shyam_Resume"> Resume </a>
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
