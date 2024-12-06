import { Container, Row, Col, Tab, Nav, Modal, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { useState } from "react";
import todo from "../assets/img/todo.png";
import todolist from "../assets/img/todolist.png";
import b2cart from "../assets/img/b2cart.png";
import voice from "../assets/img/voice.png";
import book from "../assets/img/book.png";
import artnook from "../assets/img/artnook.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShowModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const webapps = [
    {
      title: "To-DO-List",
      description:
        "Developed a React.js To-Do-List web app, hosted on Netlify, with features like task creation, editing, deletion, and completion tracking.",
      imgUrl: todolist,
      githubLink: "https://github.com/shyamsundar-10/to-do-app",
      projectLink: "https://todo-shyamsundar-10.netlify.app/",
    },
    {
      title: "ArtNook",
      description:
        "A visually appealing website using HTML, CSS, JavaScript, where users can upload and explore various artworks.",
      imgUrl: artnook,
      githubLink: "https://github.com/shyamsundar-10/artnook",
      projectLink: "https://artnook-shyamsundar-10.netlify.app/",
    },
    {
      title: "Simple To-Do-List",
      description:
        "Developed a simple To-Do-List web app, hosted on Netlify, with features like task creation deletion, and completion tracking.",
      imgUrl: todo,
      githubLink: "https://github.com/shyamsundar-10/simple-to-do-list",
      projectLink: "https://simple-todo-shyamsundar-10.netlify.app/",
    },
  ];

  const mobileapps = [
    {
      title: "B2cart",
      description:
        "Developed a mobile application using React Native, leveraging cross-platform development expertise to deliver a seamless user experience.",
      imgUrl: b2cart,
      githubLink: "https://github.com/shyamsundar-10/ReactNative",
      projectLink:
        "https://www.linkedin.com/posts/shyam-sundar-mohanty-487062290_b2cart-activity-7216614609133129728-7FnQ?utm_source=share&utm_medium=member_desktop",
    },
  ];

  const others = [
    {
      title: "Book Recommender System",
      description: "Machine Learning group project.",
      imgUrl: book,
      githubLink: "https://github.com/shyamsundar-10/book-recommender",
      projectLink: "https://findbook-shyamsundar-10.netlify.app/",
    },
    {
      title: "Voice Controlled Light System",
      description:
        "Internet Of Things(IoT) project using Raspberry Pi and Arduino (IoT)",
      imgUrl: voice,
      githubLink: "https://github.com/shyamsundar-10/smart-light",
      projectLink:
        "https://www.linkedin.com/posts/shyam-sundar-mohanty-487062290_smart-light-activity-7240604743981539328-03B0?utm_source=share&utm_medium=member_desktop",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Explore a diverse range of projects, from dynamic web
                    applications to fully functional mobile apps.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Mobile Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Others</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated" : ""}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {webapps.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              onClick={() => handleShowModal(project)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {mobileapps.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              onClick={() => handleShowModal(project)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {others.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              onClick={() => handleShowModal(project)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {selectedProject && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header>
            <Modal.Title className="mx-auto">
              {selectedProject.title}
            </Modal.Title>{" "}
            <button onClick={handleCloseModal} className="close-btn">
              &times;
            </button>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col xs={12} md={4}>
                <img
                  src={selectedProject.imgUrl}
                  alt={selectedProject.title}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
              </Col>
              <Col xs={12} md={8}>
                <p>{selectedProject.description}</p>{" "}
                {/* Keep the description only */}
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            {" "}
            <Button
              variant="secondary"
              href={selectedProject.githubLink}
              target="_blank"
            >
              GitHub
            </Button>
            <Button
              variant="primary"
              href={selectedProject.projectLink}
              target="_blank"
            >
              Visit
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
};
