import { Col } from "react-bootstrap";

export const ProjectCards = ({ title, description, imgUrl, url, skills, imgStyle, textStyle}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img src={imgUrl} alt={title} style={imgStyle} />
          <div className="proj-txtx">
            <h4 style={textStyle}>{title}</h4>
            <span className="description" style={textStyle}>{description}</span>
            <br/>
            <span className="skills" style={textStyle}>{skills}</span>
          </div>
        </a>
      </div>
    </Col>
  );
};

export default ProjectCards;
