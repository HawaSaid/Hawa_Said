import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/HTML.png";
import meter2 from "../assets/img/css.png";
import meter3 from "../assets/img/javascript.png";
import meter4 from "../assets/img/MySQL.png";
import meter5 from "../assets/img/C.png";
import meter6 from "../assets/img/C++.png";
import meter7 from "../assets/img/bootstrap.png";
import meter8 from "../assets/img/python.png";
import meter9 from "../assets/img/java.png";
import meter10 from "../assets/img/nodejs.png";
import meter11 from "../assets/img/reactjs.png";



export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Skills
              </h2>
              <p>Welcome to the Skills section of my portfolio! <br/>Over the past two years, I've cultivated a diverse set of skills through various projects and coursework.</p>
              <br />
              <Carousel responsive={responsive} infinite={true} className="skills-slider">
                <div className="item1">
                  <img src={meter1} alt="Image" />
                  <h5><span>HTML</span></h5>
                </div>
                <div className="item2">
                  <img src={meter2} alt="Image" />
                  <h5><span> CSS </span> </h5>
                </div>
                <div className="item3">
                  <img src={meter3} alt="Image" />
                  <h5> <span>JavaScript</span> </h5>
                </div>
                <div className="item4">
                  <img src={meter11} alt="Image" />
                  <h5> <span> React.js</span> </h5>
                </div>
                <div className="item5">
                  <img src={meter7} alt="Image" />
                  <h5> <span> Bootstrap </span> </h5>
                </div>
                <div className="item6">
                  <img src={meter9} alt="Image" />
                  <h5><span> Java </span></h5>
                </div>
                <div className="item7">
                  <img src={meter8} alt="Image" />
                  <h5><span> Python </span> </h5>
                </div>
                <div className="item8">
                  <img src={meter5} alt="Image" />
                  <h5><span> C </span> </h5>
                </div>
                <div className="item9">
                  <img src={meter6} alt="Image" />
                  <h5><span> C++ </span> </h5>
                </div>
                <div className="item10">
                  <img src={meter10} alt="Image" />
                  <h5><span> Node.js </span> </h5>
                </div>
                <div className="item11">
                  <img src={meter4} alt="Image" />
                  <h5><span> MySQL </span> </h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

  )

}
export default Skills