import { Container, Row } from "react-bootstrap";

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