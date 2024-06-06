import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/Pet_Adoption_Website.png";
import projImg2 from "../assets/img/Real_Estate_System.png";
import projImg3 from "../assets/img/c-project.png";
import ProjectCards from "../components/ProjectCards";

export const Projects = () => {
    const projects = [
        {
            title: "Pet Adoption Website",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Real Estate SYstem",
            description: "Design & Development",
            imgUrl: projImg2,
          },
          {
            title: "Movie Recommendation System",
            description: "Design & Development",
            imgUrl: projImg3,
          },

    ];
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2> Projects </h2>
                        <br/>
                        <p>In this project section, the projects i worked on these past few semesters are being displayed and showcase my talent as a frontend developper and my interest for coding</p>

                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                    Tab Three
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <br/>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project,index) =>{
                                            return(
                                                <ProjectCards
                                                key={index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second"> Lorem Ipsum</Tab.Pane>
                            <Tab.Pane eventKey="third"> Lorem Ipsum</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Projects