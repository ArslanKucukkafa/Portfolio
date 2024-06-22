import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiDocker,
  DiReact,
  DiMongodb,
  DiGoogleCloudPlatform,
  DiGit,
  DiJava
} from "react-icons/di";
import {
  SiPostgresql,
  SiSpringboot,
  SiAzuredevops
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiSpringboot />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
         <DiDocker />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiGoogleCloudPlatform />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAzuredevops />
        </Col>
    </Row>
  );
}

export default Techstack;
