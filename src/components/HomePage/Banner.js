import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import '../css/banner.css'
import TrackVisibility from 'react-on-screen';
import astronaut from "../../assets/img/astronaut.png"
import { HashLink } from 'react-router-hash-link';
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Developer", "Designer", "Data Management Consultant", "Data Science specialist" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Mikołaj`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Developer", "Designer", "Data Management Consultant", "Data Science specialist" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Welcome to my personal website! I am a passionate and dedicated software developer with a strong foundation in computer science and a flair for creating innovative solutions. With a keen eye for detail and a commitment to excellence, I strive to develop software that not only meets but exceeds expectations. My journey in the tech world has been driven by curiosity, continuous learning, and the joy of solving complex problems.</p>
                  <HashLink to='#connect'>
                    <button className="vvd"><span>Let’s Connect <ArrowRightCircle size={25} /></span></button>
                  </HashLink>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={astronaut} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}