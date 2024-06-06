import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Download } from "react-bootstrap-icons";
import heartGif from "../assets/img/heart.gif";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Software Engineer","Game Developer"];
  const [text, setText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, cursorVisible]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  const downloadCV = () => {
    const path = process.env.PUBLIC_URL + '/Hawa_Afnane_Said_resume1.pdf';
    const link = document.createElement('a');
    link.href = path;
    link.download = 'hawa_afnane_said_cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {({isVisible}) =>
            <div className={isVisible ? "animated_animated animate_fadeIn":""}>
            <h1>{`Hi! I'm Hawa`}<span className="wrap"> , an Aspiring {text}</span></h1>
            <p>
              Hi! I'm a second-year Software Engineering
              Student at Concordia University who loves to game and code in her
              free time.
            </p>
            <div className="d-flex">
              <button className="CV" onClick={downloadCV}>
                <Download size={25} /> &nbsp; Download CV
              </button>
            </div>
            </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="heart-gif">
              {/*https://tenor.com/view/hearts-sparkling-pinkheart-gif-19094455?utm_source=share-button&utm_medium=Social&utm_content=pinterest */}
              <img src={heartGif} alt="Heart GIF" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
