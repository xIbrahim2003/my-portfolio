import {Container, Row,Col} from "react-bootstrap";
import logo from "../assets/img/imba_logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";

export const Footer=()=>{
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={2}>
                        <img src={logo} alt={"logo"}/>
                    </Col>
                    <Col sm={9} className={"text-center text-sm-end"}>

                        <p>Developed by Ibrahim Diakité © 2024<div className={"social-icon"}>
                            <a href="https://www.linkedin.com/in/ibrahimdkt/?originalSubdomain=ca"><img src={navIcon1} alt="" /></a>
                        </div></p>
                    </Col>
                </Row>
            </Container>
        </footer>

    )
}