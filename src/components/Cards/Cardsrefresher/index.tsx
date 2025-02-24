import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import lemonade from "../../../assets/png/refresher/lemonade.png";
import mango from "../../../assets/png/refresher/mango-dragonfruit.png";
import pinkDrink from "../../../assets/png/refresher/pink-drink.png";
import strawberry from "../../../assets/png/refresher/strawberry.png";
import Contentcard from "../Cardcontent";
import { Cardbase, Cardimage, Cardtitle } from "./styles";
const cardData = [
  {
    image: lemonade,
    title: "Lemonade",
  },
  {
    image: mango,
    title: "Mango Dragonfruit",
  },
  {
    image: pinkDrink,
    title: "Pink Drink",
  },
  {
    image: strawberry,
    title: "Strawberry",
  },
];
const Refreshercards: React.FC = () => (
  <Container>
    <Row>
      {cardData.map((item, index) => (
        <Col className="m-0" key={index}>
          <Cardbase>
            <Cardimage variant="top" src={item.image} />
            <Card.Body>
              <Cardtitle>{item.title}</Cardtitle>
              <Cardtitle>Refresher</Cardtitle>
              <Contentcard />
            </Card.Body>
          </Cardbase>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Refreshercards;
