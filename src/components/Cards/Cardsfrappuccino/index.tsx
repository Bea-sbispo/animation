import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import fukushima from "../../../assets/png/frappuccino/fukushima.png";
import osaka from "../../../assets/png/frappuccino/osaka.png";
import pumpkin from "../../../assets/png/frappuccino/pumpkin.png";
import unicorn from "../../../assets/png/frappuccino/unicorn.png";
import yamanashi from "../../../assets/png/frappuccino/yamanashi.png";
import zombie from "../../../assets/png/frappuccino/zombie.png";
import Contentcard from "../Cardcontent";
import { Cardbase, Cardimage, Cardtitle } from "./styles";

const cardData = [
  {
    image: zombie,
    title: "Zombie Frappuccino",
  },
  {
    image: pumpkin,
    title: "Pumpkin Frappuccino",
  },
  {
    image: unicorn,
    title: "Unicorn Frappuccino",
  },
  {
    image: fukushima,
    title: "Fukushima Frappuccino",
  },
  {
    image: yamanashi,
    title: "Yamanashi Frappuccino",
  },
  {
    image: osaka,
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
