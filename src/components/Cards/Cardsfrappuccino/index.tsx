import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Contentcard from "../Cardcontent";
import { Cardbase, Cardimage, Cardtitle } from "./styles";
const cardData = [
  {
    image: "src/assets/png/frappuccino/zombie.png",
    title: "Zombie Frappuccino",
  },
  {
    image: "src/assets/png/frappuccino/pumpkin.png",
    title: "Pumpkin Frappuccino",
  },
  {
    image: "src/assets/png/frappuccino/unicorn.png",
    title: "Unicorn Frappuccino",
  },
  {
    image: "src/assets/png/frappuccino/unicorn.png",
    title: "Unicorn Frappuccino",
  },
  {
    image: "src/assets/png/frappuccino/fukushima.png",
    title: "Fukushima Frappuccino",
  },
  {
    image: "src/assets/png/frappuccino/yamanashi.png",
    title: "Yamanashi Frappuccino",
  },
  {
    image: "src/assets/png/frappuccino/osaka.png",
    title: "Osaka Frappuccino",
  },
];

const Frappuccinocards: React.FC = () => (
  <Container>
    <Row>
      {cardData.map((item, index) => (
        <Col className="px-4" style={{ marginTop: "7rem" }} key={index}>
          <Cardbase>
            <Cardimage variant="top" src={item.image} />
            <Card.Body>
              <Cardtitle>{item.title}</Cardtitle>
              <Contentcard />
            </Card.Body>
          </Cardbase>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Frappuccinocards;
