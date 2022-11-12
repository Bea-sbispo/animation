import React from "react";
import { Col, Row } from "react-bootstrap";

import firstFrappuccino from "../../assets/png/frappuccino/first-showcase.png";
import pumpkinFrappuccino from "../../assets/png/frappuccino/pumpkin.png";
import secondFrappuccino from "../../assets/png/frappuccino/second-showcase.png";
import thirdFrappuccino from "../../assets/png/frappuccino/third-showcase.png";
import Globalnav from "../../components/Navbars/Navglobal";
import {
  Container,
  Content,
  Father,
  Fourthfrap,
  Grabtext,
  Imagearea,
  Showcase,
  Subtitle,
  Textarea,
  Title,
  Widthmobile,
} from "./styles";

const Home: React.FC = () => {
  // logica
  return (
    <>
      <Globalnav />
      <Container>
        <Father>
          <Content>
            <Widthmobile>
              <Textarea>
                <Grabtext>
                  <Title>Grab your</Title>
                  <Subtitle>Frappuccino</Subtitle>
                </Grabtext>
              </Textarea>
              <Showcase>
                <Row>
                  <Col className="first-frap frappuccino-showcase">
                    <img src={firstFrappuccino} />
                  </Col>
                  <Col className="second-frap frappuccino-showcase">
                    <img src={secondFrappuccino} />
                  </Col>
                  <Col className="third-frap frappuccino-showcase">
                    <img src={thirdFrappuccino} />
                  </Col>
                </Row>
              </Showcase>
            </Widthmobile>
            <Imagearea>
              <Fourthfrap src={pumpkinFrappuccino} />
            </Imagearea>
          </Content>
        </Father>
      </Container>
    </>
  );
};

export default Home;
