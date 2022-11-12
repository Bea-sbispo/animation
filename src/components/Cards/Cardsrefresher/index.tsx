import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Contentcard from "../Cardcontent";
import { Cardbase, Cardimage, Cardtitle } from "./styles";
const cardData = [
  {
    image: "src/assets/png/refresher/lemonade.png",
    title: "Lemonade Refresher",
  },
  {
    image: "src/assets/png/refresher/mango-dragonfruit.png",
    title: "Mango Dragonfruit Refresher",
  },
  {
    image: "src/assets/png/refresher/pink-drink.png",
    title: "Pink Drink Refresher",
  },
  {
    image: "src/assets/png/refresher/strawberry.png",
    title: "Strawberry Refresher",
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
              <Contentcard />
            </Card.Body>
          </Cardbase>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Refreshercards;
