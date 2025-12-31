import {useState,useEffect} from "react"; // pour l'animation
import {Container,Row,Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/astro_avion.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
export const Banner=() =>{
    const [loopNum,setLoopNum]=useState(0);
    const [isDeleting,setIsDeleting]=useState(false);
    const toRotate=[" Ibrahim Diakité "];
    const[text,setText]=useState('');
    const [delta,setDelta]=useState(300-Math.random()*100);
    const period=2000;

    useEffect(()=>{
        let ticker=setInterval(()=>{
            tick();
        },delta)
        return()=>{clearInterval(ticker)};
    },[text])

    const tick=()=>{
        let i=loopNum % toRotate.length;
        let fullText=toRotate[i];
        let updatedText=isDeleting ? fullText.substring(0,text.length-1):fullText.substring(0,text.length+1);
        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta=>prevDelta/2)
        }
        if(!isDeleting && updatedText===fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }
return(
   <section className={"banner"} id={"home"}>
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                        {({isVisible})=>
                    <div className={isVisible ? "animate__animated animate__fadeIn":""}>
                   <span className={"tagline"}>Bienvenue dans mon portfolio</span>
                    <h1>Je m'appelle<br />
                        <span className={"wrap"}>{text}</span>
                        <p>Etudiant en Maîtrise en génie informatique à l'école Polytechnique de Montréal.</p>
                        <a href="#connect" className={"connect"}>Me contacter<ArrowRightCircle size={25}/></a>
                    </h1>
                    </div>}
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    {/*<img src={headerImg} alt={"Header img"}/>*/}
                </Col>
            </Row>
        </Container>
   </section>
)
}