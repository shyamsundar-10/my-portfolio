import { Col } from "react-bootstrap";

export const ProjectCard = ({ imgUrl, onClick }) => {
  return (
    <Col
      size={12}
      sm={6}
      md={4}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <div className="proj-imgbx">
        <img
          src={imgUrl}
          alt="Project"
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </div>
    </Col>
  );
};
