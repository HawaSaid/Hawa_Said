import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCards } from "./ProjectCards";
import projImg1 from "../assets/img/Real_Estate_System.png";
import projImg2 from '../assets/img/fleetflow.png';
import projImg3 from '../assets/img/radius15.png';
import projImg4 from '../assets/img/c-project.png';

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Real Estate App",
      description: "Full-stack real estate web application that helps homebuyers, renters, brokers, and administrators.",
      imgUrl: projImg1,
      url: "https://github.com/6amigos-concordia/6amigos-soen341projectF2023",
      category: "Web development",
      stack: ["React.js", "Node.js", "MongoDB", "HTML", "CSS", "JavaScript", "Java"],
    },
    {
      title: "Fleetflow",
      description: "Scheduling software designed to optimize appointment processes for vehicle service businesses.",
      imgUrl: projImg2,
      url: "https://github.com/Zineb2a/Fleetflow",
      category: "Web development",
      stack: ["JavaScript", "MySQL", "HTML", "CSS", "Bootstrap"],
    },
    {
      title: "Radius 15",
      description: "An application designed to promote sustainable living by visualizing essential services within a 15-minute walking radius.",
      imgUrl: projImg3,
      url: "https://github.com/iyers16/polyhacks_24",
      category: "Web development",
      stack: ["React", "Google Maps API", "Google Places API", "HTML", "CSS", "JavaScript", "Bootstrap"],
    },
    {
      title: "C-Movie-Recommendation-System",
      description: "A C-based movie recommendation system where users can rate movies stored in an external database and get movie recommendations based on ratings.",
      imgUrl: projImg4,
      url: "https://github.com/iyers16/polyhacks_24",
      category: "Object-Oriented",
      stack: ["C"],
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>In this Projects section, discover my passion for coding brought to life – where every line of code transforms my ideas into tangible, functional creations.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="Web development">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="Web development">Web development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="Object-Oriented">Object-Oriented</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="Web development">
                        <Row>
                          {
                            projects.filter(project => project.category === "Web development").map((project, index) => (
                              <ProjectCards
                                key={index}
                                {...project}
                              />
                            ))
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="Object-Oriented">
                        <Row>
                          {
                            projects.filter(project => project.category === "Object-Oriented").map((project, index) => (
                              <ProjectCards
                                key={index}
                                {...project}
                              />
                            ))
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
