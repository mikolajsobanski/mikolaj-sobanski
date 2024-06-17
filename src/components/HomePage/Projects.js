import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import regresion from "../../assets/img/regresion.jpg";
import decision_tree from "../../assets/img/decision_tree.jpg";
import perceptron from "../../assets/img/perceptron.jpg";
import knn from "../../assets/img/knn.jpg";
import shop from "../../assets/img/shop.jpg";
import animal from "../../assets/img/animal.jpg";
import marketplace from "../../assets/img/marketplace.jpg";
import portfolio from "../../assets/img/portfolio.jpg";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../css/projects.css'

export const Projects = () => {

  const projects = [
    {
      title: "Animal Management System Web Application",
      description: "Design & Development",
      imgUrl: animal,
      sourceUrl: "https://github.com/mikolajsobanski?tab=repositories",
    },
    {
      title: "Portfolio Web Application",
      description: "Design & Development",
      imgUrl: portfolio,
      sourceUrl: "https://github.com/mikolajsobanski?tab=repositories",
    },
    {
      title: "Shop Web Application",
      description: "Design & Development",
      imgUrl: shop,
      sourceUrl: "https://github.com/mikolajsobanski?tab=repositories",
    },
    {
      title: "Marketplace Web Application",
      description: "Design & Development",
      imgUrl: marketplace,
      sourceUrl: "https://github.com/mikolajsobanski?tab=repositories",
      
    },
  ];

  const dataScienceProjects = [
    {
      title: "Decision Tree",
      description: "Design & Development",
      imgUrl: decision_tree,
      sourceUrl: "https://github.com/mikolajsobanski?tab=repositories",
      
    },
    {
      title: "K-Nearest Neighbors (KNN)",
      description: "Design & Development",
      imgUrl: knn,
      sourceUrl: "https://github.com/mikolajsobanski?tab=repositories",
    },
    {
      title: "Perceptron",
      description: "Design & Development",
      imgUrl: perceptron,
      sourceUrl: "https://github.com/mikolajsobanski?tab=repositories",
    },
    {
      title: "Linear Regresion",
      description: "Design & Development",
      imgUrl: regresion,
      sourceUrl: "https://github.com/mikolajsobanski?tab=repositories",
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
                <p>I have had the opportunity to work on a variety of exciting projects that showcase my skills and creativity. Some of the highlights include:</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Software development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Data science</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          dataScienceProjects.map((dataScienceProject, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...dataScienceProject}
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}