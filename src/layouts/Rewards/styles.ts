import styled from "styled-components";
import circle from "../../assets/png/circle.png";

export const Maincontainer = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 127px;
  width: 100%;
  background-image: url(${circle});
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: 40%;
`;

export const Textcontainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 5rem;
`;

export const Textbox = styled.div`
  width: 50%;
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 800;
  color: #036635;
  margin-bottom: 2rem;
  @media screen and (max-width: 321px) {
  }
  @media screen and (min-width: 322px) and (max-width: 376px) {
  }
  @media screen and (min-width: 377px) and (max-width: 769px) {
  }
`;

export const Subtitle = styled.p`
  color: #8b8c8b;
  @media screen and (max-width: 321px) {
  }
  @media screen and (min-width: 322px) and (max-width: 376px) {
  }
  @media screen and (min-width: 377px) and (max-width: 769px) {
  }
`;
