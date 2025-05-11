import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HTML from "../assets/img/HTML.png";
import CSS from "../assets/img/css.png";
import JS from "../assets/img/javascript.png";
import MYSQL from "../assets/img/MySQL.png";
import C from "../assets/img/C.png";
import CPP from "../assets/img/C++.png";
import Bootstrap from "../assets/img/bootstrap.png";
import Python from "../assets/img/python.png";
import Java from "../assets/img/java.png";
import NodeJS from "../assets/img/nodejs.png";
import ReactJs from "../assets/img/reactjs.png";
import Figma from "../assets/img/figma.png";
import PostgreSQL from "../assets/img/postgres.png";

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
              <p>Welcome to the Skills section of my portfolio! <br/>Over the past three years, I've cultivated a diverse set of skills through various projects and coursework.</p>
              <br />
              <Carousel responsive={responsive} infinite={true} className="skills-slider">
                <div className="item1">
                  <img src={HTML} alt="HTML" />
                  <h5><span>HTML</span></h5>
                </div>
                <div className="item2">
                  <img src={CSS} alt="CSS" />
                  <h5><span> CSS </span> </h5>
                </div>
                <div className="item3">
                  <img src={JS} alt="JavaScript" />
                  <h5> <span>JavaScript</span> </h5>
                </div>
                <div className="item4">
                  <img src={ReactJs} alt="React.js" />
                  <h5> <span> React.js</span> </h5>
                </div>
                <div className="item5">
                  <img src={Bootstrap} alt="Bootstrap" />
                  <h5> <span> Bootstrap </span> </h5>
                </div>
                <div className="item6">
                  <img src={Java} alt="Java" />
                  <h5><span> Java </span></h5>
                </div>
                <div className="item7">
                  <img src={Python} alt="Python" />
                  <h5><span> Python </span> </h5>
                </div>
                <div className="item8">
                  <img src={C} alt="C" />
                  <h5><span> C </span> </h5>
                </div>
                <div className="item9">
                  <img src={CPP} alt="C++" />
                  <h5><span> C++ </span> </h5>
                </div>
                <div className="item10">
                  <img src={NodeJS} alt="Node.js" />
                  <h5><span> Node.js </span> </h5>
                </div>
                <div className="item11">
                  <img src={MYSQL} alt="MySQL" />
                  <h5><span> MySQL </span> </h5>
                </div>
                <div className="item12">
                  <img src={Figma} alt="Figma" />
                  <h5><span> Figma </span> </h5>
                </div>
                <div className="item13">
                  <img src={PostgreSQL} alt="PostgreSQL" />
                  <h5><span> PostgreSQL </span> </h5>
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