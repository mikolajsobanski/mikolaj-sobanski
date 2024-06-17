import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../css/projects.css'
import WorkHistory from "./Work&EduHistory/WorkHistory";
import EducationHistory from "./Work&EduHistory/EducationHistory";

export const WorkAndEdu = () => {

  return (
    <section className="project" id="workandedu">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Work & Education</h2>
                <p>My academic background has laid a solid foundation for my career in software development and data science. Throughout my education, I have remained committed to expanding my knowledge, keeping abreast of the latest industry trends and advancements to continually refine my skill set. My professional experiences have spanned across multiple domains, including web development, data management, and cloud computing. I have a proven track record of delivering high-quality software projects on time and within budget, ensuring client satisfaction and fostering long-term professional relationships.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Work</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <EducationHistory />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <WorkHistory />
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