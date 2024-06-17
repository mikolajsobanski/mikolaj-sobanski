import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, sourceUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <span></span>
          <div></div>
          <a href={sourceUrl} target="_blank" rel="noopener noreferrer">See the code</a>
        </div>
      </div>
    </Col>
  );
};
