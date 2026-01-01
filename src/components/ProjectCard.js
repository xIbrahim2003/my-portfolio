import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, videoLink }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt={title || "project image"} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    {/* Si un lien vidéo est passé, l'ajouter après la description */}
                    {videoLink && (
                        <div>
                            <span dangerouslySetInnerHTML={{ __html: videoLink }} />
                        </div>
                    )}
                </div>
            </div>
        </Col>
    )
}