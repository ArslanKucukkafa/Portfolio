import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import report from "../../Assets/Projects/reportmngsystem.png";
import defaul_t from "../../Assets/Projects/default.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={report}
                isBlog={false}
                title="Report Managment System For Staj Case App"
                description="Report Managment System developed for laboratories. You can create,update,delete,get reports also you can add image in report. User authenticate with jwt token. You can check it for more details"
                ghLink="https://github.com/ArslanKucukkafa/StajCaseApplication"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={defaul_t}
                isBlog={false}
                title="Field Management System For Farmer And Field Owner"
                description="Field Managment System Project is multi module Spring Boot Project so you can say microservice project. It use mongo, apache pulsar, spring cloud gateway, eureka server. The purpose of this project is to enable farmers to monitor the condition of their fields."
                ghLink="https://github.com/ArslanKucukkafa/Field-Managment-Services"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
