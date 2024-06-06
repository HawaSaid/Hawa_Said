import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import nav1icon from "../assets/img/linkedin.svg";
import nav2icon from "../assets/img/github.svg";
import nav3icon from "../assets/img/envelope.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                        <div className="copyright">
                            <p>Built and designed by Hawa-Afnane Said.</p>
                            <p className="text-center"> CopyRight 2024. <br/> All rights reserved. ©</p>
                            </div>
                </Row>
            </Container>
        </footer>
    )
}