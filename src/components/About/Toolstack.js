import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiIntellijidea,
    SiDatagrip,
    SiMacos,
    SiLinux,
    SiInsomnia
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
            <SiLinux />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiIntellijidea />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiDatagrip />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiInsomnia />
        </Col>
    </Row>
  );
}

export default Toolstack;
