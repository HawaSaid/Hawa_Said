import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCards } from "./ProjectCards";
import projImg1 from "../assets/img/Real_Estate_System.png";
import projImg2 from "../assets/img/fleetflow.png";
import projImg3 from "../assets/img/radius15.png";
import projImg4 from "../assets/img/c-project.png";
import projImg5 from "../assets/img/WebScraping.png";
import "../App.css";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Luxium",
      description: "Real Estate System aimed to be used by brokers, renters and system administrators.",
      skills: "Skils: HTML, CSS, JavaScript, Java, MongoDB, Node.js, React.js",
      imgUrl: projImg1,
      url: "https://github.com/6amigos-concordia/6amigos-soen341projectF2023",
      category: "Web-Development",
      imgStyle: { width: '350px', height: '250px' },
      textStyle: {color: '#8e3563'}  
    },
    {
      title: "FleetFlow",
      description: "Scheduling software designed to optimize appointment processes for vehicle service businesses",
       skills: "Skils: HTML, CSS, JavaScript,SQL",
      imgUrl: projImg2,
      url: "https://github.com/Zineb2a/Fleetflow",
      category: "Web-Development",
      imgStyle: { width: '375px', height: '250px' },
      textStyle: {color: '#8e3563'}  
    },
    {
      title: "Radius 15",
      description: "App that visualizes essential services within a 15-minute walking radius.",
      skills: "Skils: React.js, HTML, CSS, JavaScript, Google Maps API, Google Places API",
      imgUrl: projImg3,
      url: "https://github.com/iyers16/polyhacks_24",
      category: "Web-Development",
      imgStyle: { width: '375px', height: '250px' },
      textStyle: {color: '#8e3563'}   
    },
    {
      title: "Movie Recommendation System",
      description: "An app that lets users rate the movies get movie recommendations based on the movie they rated",
      skills: "Skils: C, dynamic memory allocation(malloc)",
      imgUrl: projImg4,
      url: "https://github.com/HawaSaid/C-Movie-Recommendation-System",
      category: "Object-Oriented",
      imgStyle: { width: '400px', height: '250px' },
      textStyle: {color: '#8e3563'}  
    },
    {
      title: "Web Scraping",
      description: "Scraping of the redflags deals website to find information such as the top stores",
      imgUrl: projImg5,
      skills: "Skils: Python",
      url: "https://github.com/HawaSaid/Python-Web-Scraping",
      category: "Object-Oriented",
      imgStyle: { width: '425px', height: '250px' },
      textStyle: {color: '#8e3563'}  
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>In this Projects section, discover my passion for coding brought to life – where every line of code transforms my ideas into tangible, functional creations.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="Web-Development">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="Web-Development">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Object-Oriented">Object-Oriented</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="Web-Development">
                      <Row>
                        {
                          projects.filter(project => project.category === "Web-Development").map((project, index) => {
                            return (
                              <ProjectCards
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="Object-Oriented">
                      <Row>
                        {
                          projects.filter(project => project.category === "Object-Oriented").map((project, index) => {
                            return (
                              <ProjectCards
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
