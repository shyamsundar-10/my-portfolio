import c from "../assets/img/c.png";
import java from "../assets/img/java.png";
import python from "../assets/img/python.png";
import web from "../assets/img/web.png";
import react from "../assets/img/react.png";
import js from "../assets/img/js.png";
import mongodb from "../assets/img/mongodb.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Proficient in Fullstack Development, Mobile App Creation, and
                Modern Web Technologies. Skilled in React, React Native, and
                Expo, with a passion for innovative solutions.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1500}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={c} alt="" />
                  <h5>C</h5>
                </div>
                <div className="item">
                  <img src={java} alt="" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={python} alt="" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={web} alt="" />
                  <h5>HTML & CSS</h5>
                </div>
                <div className="item">
                  <img src={js} alt="" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={react} alt="" />
                  <h5>React.JS</h5>
                </div>
                <div className="item">
                  <img src={react} alt="" />
                  <h5>React Native</h5>
                </div>
                <div className="item">
                  <img src={mongodb} alt="" />
                  <h5>MongoDB</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
