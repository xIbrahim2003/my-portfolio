import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Col, Container, Row} from "react-bootstrap";
import cppicon from '../assets/img/cpp.svg';
import colorSharp from"../assets/img/color-sharp.png";
import pythonicon from '../assets/img/python-5.svg';
import htmlicon from '../assets/img/html-1.svg';
import cssicon from '../assets/img/css-3.svg';
import jsicon from '../assets/img/javascript-1.svg';
import reacticon from '../assets/img/react-2.svg';
import kotlinicon from '../assets/img/kotlin-1.svg';
import sqlicon from '../assets/img/database-icon.svg';
import cybersecurityicon from '../assets/img/cybersecu.svg';
import mlicon from '../assets/img/machinelearning.svg';
import reseauicon from '../assets/img/reseau.svg';
import cloud from '../assets/img/cloud.svg';
import forensic from '../assets/img/forensic.svg'; 
import docker from '../assets/img/docker.svg'; 
import TrackVisibility from 'react-on-screen';
export const Skills=() =>{
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return(
        <section className="skill" id={"skills"}>
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({isVisible})=>
                                <div className={isVisible ? "animate__animated animate__fadeIn":""}>
                        <div className={"skill-bx"}>
                            <h2>
                                Compétences
                            </h2>
                            <p>Voici une liste de compétences en informatique acquises tout au long de mon parcours  </p>
                            <Carousel responsive={responsive} infinite={true} className={"skill-slider"}>
                                <div className={"item"}>
                                    <img src={cppicon} alt="C++"/>
                                    <h5>C++</h5>
                                </div>
                                <div className={"item"}>
                                    <img src={pythonicon} alt="Python"/>
                                    <h5>Python</h5>
                                </div>
                                <div className={"item"}>
                                    <img src={cloud} alt="Cloud"/>
                                    <h6><br></br> </h6>
                                    <h5>Cloud</h5>
                                </div>
                                <div className={"item"}>
                                    <img src={forensic} alt="Forensic"/>
                                    <h6> <br></br></h6>
                                    <h5>Forensic</h5>
                                </div>
                                <div className={"item"}>
                                    <img src={cybersecurityicon} alt="CyberSécurité"/>
                                    <h5>CyberSécurité</h5>
                                </div>
                                <div className={"item"}>
                                    <img src={mlicon} alt="Machine Learning"/>
                                    <h5>Machine Learning</h5>
                                </div>
                                <div className={"item"}>
                                    <img src={docker} alt="Docker"/>
                                    <h6> <br></br></h6>
                                    <h5>Docker</h5>
                                </div>                                
                                <div className={"item"}>
                                    <img src={sqlicon} alt="SQL"/>
                                    <h5>SQL</h5>
                                </div>
                                <div className={"item"}>
                                    <img src={reseauicon} alt="Réseau"/>
                                    <h5>Réseau d'ordinateurs</h5>
                                </div>
                                <div className={"item"}>
                                    <img src={reacticon} alt="React"/>
                                    <h5>ReactJs</h5>
                                </div>
                                <div className={"item"}>
                                    <img src={kotlinicon} alt="Kotlin"/>
                                    <h5>Kotlin</h5>
                                </div>
                                 <div className={"item"}>
                                    <img src={htmlicon} alt="HTML"/>
                                    <h5>Html</h5>
                                </div>
                                <div className={"item"}>
                                    <img src={cssicon} alt="CSS"/>
                                    <h5>Css</h5>
                                </div>
                                <div className={"item"}>
                                    <img src={jsicon} alt="JavaScript"/>
                                    <h5>JavaScript</h5>
                                </div>
                            </Carousel>
                        </div>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className={"background-image-left"} src={colorSharp} alt=""/>
        </section>
    )
}
