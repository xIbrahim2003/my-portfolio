import {Row,Col, Container,Tab,Nav} from "react-bootstrap";
import projImg1 from "../assets/img/prog-socket.png";
import projImg2 from "../assets/img/memory_game.png";
import projImg3 from "../assets/img/rsz_drawingcirclelogo.jpg";
import projImg4 from "../assets/img/rsz_bases-de-donnees.jpg";
// projImg5 removed (unused): ../assets/img/chat_app.png
import projImg6 from "../assets/img/marche_aleatoire.png";
import projImg8 from "../assets/img/cnn.png";
import projImg7 from "../assets/img/datasci.jpg";
import projImg9 from "../assets/img/projet_aws.png";
import projImg10 from "../assets/img/plc.png";
import projImg11 from "../assets/img/azure.png";
import projImg12 from "../assets/img/ai.png";
import projImg13 from "../assets/img/data_sci_accident.jpg";
import projImg14 from "../assets/img/Prediction_bg.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImginfo from "../assets/img/infographie.png";
import projImgtextmining from "../assets/img/textmining.png";
import audit from "../assets/img/audit.png";
import TrackVisibility from 'react-on-screen';
import {ProjectCard} from "./ProjectCard";

export const Projects=() =>{
    const projects = [
        {
            title: "Application client-serveur",
            description: "Développement d'une application client-serveur permettant d'envoyer,de recevoir et de sauvegarder des ressources dans un serveur. Un protocole simplifié inspiré de HTTP a été implémenté sur TCP permettant la gestion des ressources",
            imgUrl: projImg1,
        },
        {
           
            title: "Vaisseau spatial",
            description: "Conception d'un modèle 3D de vaisseau spatial en JavaScript avec WebGL, en créant des géométries complexes et en appliquant des textures et des transformations pour rendre le vaisseau interactif en 3D" ,
            videoLink: "<a href='https://drive.google.com/file/d/1VU8H7HI1pmYIkx6M6qx0v9HKhhUa5_RZ/view?usp=sharing' target='_blank'>Voir la vidéo</a>",
            imgUrl: projImginfo,
        },
        {
            title: "Jeu de mémoire",
            description: "Création et implémentation d'un jeu de mémoire en javascript",
            videoLink: "<a href='https://drive.google.com/file/d/1PDAQ_D0WAPXrmK-5rkrn_CTLuZx_X97W/view?usp=sharing' target='_blank'>Voir la vidéo</a>",
            imgUrl: projImg2,
        },
        {
            title: "Réseau Social Mobile",
            description: "Ce projet consistait à développer une application mobile de réseau social permettant aux utilisateurs de dessiner et de partager leurs créations avec leur communauté. ",
            videoLink: "<a href='https://drive.google.com/file/d/1kkyZo7Joa_xQ3SHowZ_S9dRMD7FbFz7r/view?usp=sharing' target='_blank'>Voir la vidéo</a>",
            imgUrl: projImg3,
        },
        
        {
            title: "Réseau Social Microservices",
            description: "Conception et déploiement d'un réseau social distribué en .NET basé sur une architecture microservices (MVC , Workers , API) , déployé sur Azure kubernetes avec Docker , CI/CD automatisé, Cosmos DB. ",
            imgUrl: projImg11,
        },
        {
            title: "Simulation de marche aléatoire",
            description: "Ce projet consistait à simuler une marche aléatoire en utilisant des algorithmes probabilistes avec une visualisation des trajectoires pour analyser les dynamiques et comportements des déplacements.",
            imgUrl: projImg6,
        },
        {
            title: "Gestion de base données",
            description: "Conception et manipulation d'une base de données pour gérer efficacement des données structurées en utilisant des requêtes SQL optimisées et des outils de gestion relationnelle",
            imgUrl: projImg4,
        },
    ];
    const projects2 = [
        {
            title: "Ia de transcription et résumé automatique de vidéos",
            description: "Développement d'une IA capable de transcrire et de résumer automatiquement le contenu audio de vidéos en utilisant des techniques de traitement du langage naturel (NLP) et des modèles de deep learning.",
            //videoLink: "<a href=''>Lien vers le travail</a>",
            imgUrl: projImg12,
        },
        {
            title: "Analyse des données d'accidents du Quebec 2022",
            description: "Analyse et interpretations d'un jeu de données contenant tous les accidents enregistrés au Quebec en 2022 avec l'utilisation de bibliothèques comme numpy et pandas(python)",
            videoLink: "<a href='https://drive.google.com/file/d/15cL_MaF3b-u4Oek30QE5-fHOecnPqi_U/view?usp=sharing'>Lien vers le travail</a>",
            imgUrl: projImg13,
        },
        {
            title: "Text mining",
            description: "Application des techniques de fouille de texte (text mining) en utilisant R pour analyser un roman.Extraction d'informations pertinentes telles que les fréquences de mots, les thèmes dominants et les relations entre les termes afin de mieux comprendre le contenu du texte. ",
            videoLink: "<a href='https://drive.google.com/file/d/1I1s36EAjQMmcOdKmh6OOFn6Wwgwgri8y/view?usp=sharing'>Lien vers le travail</a>",
            imgUrl: projImgtextmining,
        },
        {
            title: "Prediction de fraude",
            description: "Ce projet visait à détecter les fraudes en comparant deux approches de classification : un classificateur binaire et un classificateur multiclasses. Les performances des deux modèles ont été évaluées sur des critères tels que la précision, le rappel et la capacité à identifier efficacement les transactions frauduleuses.",
            imgUrl: projImg14,
        },
        {
            title: "CNN VS PMC ",
            description: "Comparaison d'un Réseau neuronal convolutif de Keras à un perceptron multicouche sur un jeu de données afin de trouver le modèle le plus optimal",
            videoLink: "<a href='https://drive.google.com/file/d/1ynELf1quSeS_pMLRfnz89ispebFbwh_E/view?usp=sharing'>Lien vers le travail</a>",
            imgUrl: projImg8,
        },
        {
            title: "Comparaison de modèles : XGBoost vs Regression logistique",
            description: "Evaluation et comparaison des performances d'un modèle XGBoost et de régression logistique sur un ensemble de données. L'objectif était de mesurer leur précision, leur robustesse et leur capacité à éviter le surapprentissage, en explorant leurs avantages et leurs limites respectifs.",
            videoLink: "<a href='https://drive.google.com/file/d/1InWSol0pmVJQmNrIP8l2nCDyWp1qCdZN/view?usp=sharing'>Lien vers le travail</a>",
            imgUrl: projImg7,
        },

    ];
    const projects3 = [
        {
            title: "Rapport d'audit de sécurité",
            description: "Réalisation d'un scannage de vulnérabilités sur un site web en utilisant ZAP OWASP et Nessus pour identifier diverses failles de sécurité puis rédaction d'un rapport d'audit de sécurité , détaillant les vulnérabilités détectées et proposant des recommandations pour améliorer la sécurité de l'application.",
            videoLink: "<a href='https://drive.google.com/file/d/1EyMre5WMWsuQX3gzXxPS6MxaYnIDIV4H/view?usp=sharing'>Voir le rapport</a>",
            imgUrl: audit,
        },
        {
            title: "Système de contrôle industriel",
            description: "Conception d’un banc d’essai hybride simulant un système de traitement et de distribution d’eau afin d’analyser les vulnérabilités du protocole Modbus/TCP.  Le projet met en œuvre un environnement industriel (OpenPLC, Node-RED, Factory I/O, Docker) et démontre des scénarios d’attaque réalistes (MITM, modification de registres) ainsi que des mécanismes de remédiation via pare-feu et IDS.",
            //videoLink: "<a href='https://drive.google.com/file/d/1InWSol0pmVJQmNrIP8l2nCDyWp1qCdZN/view?usp=sharing'>Lien vers le travail</a>",
            imgUrl: projImg10,
        },
        {
            title: "Sécurité Cloud et IaC",
            description: "Conception et sécurisation d’une infrastructure AWS à l’aide de l’Infrastructure as Code (IaC). Le projet inclut le déploiement automatisé d’un VPC, d’instances EC2 et de buckets S3 sécurisés, l’activation des logs (VPC Flow Logs, CloudTrail), la mise en place de rôles IAM et d’alarmes CloudWatch, ainsi que l’analyse des vulnérabilités du code IaC avec Trivy.",
            //videoLink: "<a href='https://drive.google.com/file/d/1InWSol0pmVJQmNrIP8l2nCDyWp1qCdZN/view?usp=sharing'>Lien vers le travail</a>",
            imgUrl: projImg9,
        },

    ];
    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({isVisible})=>
                                <div className={isVisible ? "animate__animated animate__fadeIn":""}>
                        <h2>Mes Projets</h2>
                        <p>Dans cette section, je vous invite à explorer les différents projets que j'ai eu le plaisir de réaliser.
                            Jetez un coup d'œil à mes travaux et plongez dans l'univers de mes réalisations</p>

                                </div>}
                            </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Développement</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">ScienceDesDonnées / IA</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">CyberSécurité</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey={"first"}>
                                    <Row>
                                        {
                                            projects.map((project,index)=>{
                                                return(
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
                                            projects2.map((project,index)=>{
                                                return(
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row></Tab.Pane>
                                <Tab.Pane eventKey="third"><Row>
                                        {
                                            projects3.map((project,index)=>{
                                                return(
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row></Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>

                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section>

    )
}