import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function NotificationCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        <span className="purple"> Annonucments </span>
                        <br />
                        Hi everyone, I am wanting to backend job. If you have backend job and you are write java , i think you call me.
                        <br />
                        <span className="purple"> What can i do for you </span>
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight />Java job
                        </li>
                        <li className="about-activity">
                            <ImPointRight />JUnit Test
                        </li>
                        <li className="about-activity">
                            <ImPointRight />Karate Test,
                        </li>
                        <li className="about-activity">
                            <ImPointRight />Fix issue
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

export default NotificationCard;
