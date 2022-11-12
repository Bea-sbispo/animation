import { Card, Row } from "react-bootstrap";
import styled from "styled-components";

export const Cardrow = styled(Row)`
  margin-top: 8rem;
`;

export const Cardbase = styled(Card)`
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.25);
  height: 100%;
  max-width: 315px;
  transition: all 0.5s ease-in-out;
  cursor: default;
  box-shadow: -3px -4px 11px 0 #3f3f3f4d;
  margin: 0;

  &:hover {
    background-color: #036635;
    -webkit-transform: scale(1.3);
    -ms-transform: scale(1.3);
    transform: scale(1.3);
  }
`;

export const Cardimage = styled(Card.Img)`
  height: 10rem;
  width: 6rem;
  margin: -75px auto 0;
`;

export const Cardtitle = styled(Card.Title)`
  color: #a29a8e;
  font-weight: 800;
  font-size: 24px;
  text-align: center;
`;

export const Cardtext = styled(Card.Text)`
  color: #b7bab7;
  font-size: 18px;
  margin-left: 15px;
  font-weight: 500;
  margin-bottom: 50px;
  margin-top: 30px;
`;

export const Buttonadd = styled.button`
  border-radius: 20px;
  color: black;
  padding: 10px 35px;
  border: none;
`;

export const Buttonarea = styled.div`
  display: flex;
  justify-content: center;
`;
