import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arslan Küçükkafa </span>
            from <span className="purple"> Corum, Turkey.</span>
            <br />
            I am a 4th year software engineering student at Fırat University.
            <br />

            Other activities I like to do !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Farming
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Even though I'm infinity, I'm so tight inside myself"{" "}
          </p>
          <footer className="blockquote-footer">Franz Kafka</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
