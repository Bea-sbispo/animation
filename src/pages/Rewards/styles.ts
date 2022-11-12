import { Button, Card, Col, Nav, TabContent } from "react-bootstrap";
import styled from "styled-components";
import back from "../../assets/jpg/rewards-back.jpg";

export const ContentSection = styled.section``;

export const NavSection = styled.section`
  background-color: #33433d;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const ButtonParticipe = styled(Button)`
  color: white;
  font-weight: 600;

  border: 1px solid white;
  border-radius: 20px;
  background-color: transparent;
  transition: transform 150ms ease-out;

  :hover {
    color: #fff;
    transform: scale(0.8);
  }
`;

export const NavRewards = styled(Nav)`
  width: 90%;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
`;

export const LeftArea = styled(Col)`
  position: sticky;
  top: 0;
  height: 100vh;

  display: flex;
  padding: 0;

  background-image: url(${back});
  background-size: cover;
  background-position-x: center;

  .c-left {
    margin-top: auto;
    position: sticky;
    bottom: 0;
    width: 100%;
    height: max-content;
    padding: 3.2rem;

    background: linear-gradient(
      180deg,
      transparent 0,
      rgba(0, 0, 0, 0.01) 8.1%,
      rgba(0, 0, 0, 0.039) 15.5%,
      rgba(0, 0, 0, 0.083) 22.5%,
      rgba(0, 0, 0, 0.14) 29%,
      rgba(0, 0, 0, 0.207) 35.3%,
      rgba(0, 0, 0, 0.282) 41.2%,
      rgba(0, 0, 0, 0.36) 47.1%,
      rgba(0, 0, 0, 0.44) 52.9%,
      rgba(0, 0, 0, 0.518) 58.8%,
      rgba(0, 0, 0, 0.593) 64.7%,
      rgba(0, 0, 0, 0.66) 71%,
      rgba(0, 0, 0, 0.717) 77.5%,
      rgba(0, 0, 0, 0.761) 84.5%,
      rgba(0, 0, 0, 0.79) 91.9%,
      rgba(0, 0, 0, 0.8)
    );

    &__title {
      font-size: 27px;
      color: #fff;
    }

    &__buttons {
      display: flex;
      gap: 8px;
    }
  }

  @media (max-width: 990px) {
    width: 100%;
    background-size: contain;
  }
`;

export const RightArea = styled(Col)`
  background-color: #f7f7f7;
  font-weight: 400;
  .container-right {
    padding: 3rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: "Times New Roman", Times, serif;
  }
  @media (max-width: 990px) {
    display: none;
  }
  @media (min-width: 1400px) {
    .container-right {
      max-width: 950px;
    }
  }
`;

export const RewardCard = styled(Card)`
  background-color: transparent;
  border: none;
`;

export const ButtonParticipeRight = styled(Button)`
  color: green;
  font-weight: 600;

  border: 1px solid green;
  border-radius: 20px;
  background-color: transparent;
  transition: transform 150ms ease-out;

  :hover {
    background: rgba(0, 0, 0, 0.06);
    color: green;
    border: 1px solid green;
    transform: scale(0.8);
  }
`;

export const TabsCustom = styled(Nav)`
  .nav-link {
    border-radius: 0;
    background: transparent;
    border: none;
    filter: grayscale(1);

    &:hover {
      filter: grayscale(0);
      color: green;
    }
  }

  .nav-link.active {
    filter: grayscale(0);
    background: transparent;
    border: none;
    border-bottom: 5px solid green;
    color: green;
  }
`;
export const TabsContent = styled(TabContent)`
  background: #edebe9;
  box-shadow: inset 0px 4px 26px -20px #000000;
  p {
    font-weight: 600;
  }
  h2 {
    font-family: "Times New Roman", Times, serif;
  }
  .link-more {
    color: green;
    text-decoration: none;
  }
`;

export const ButtonParticipeRightFill = styled(Button)`
  color: white;
  font-weight: 600;
  border-radius: 20px;
  background-color: green;
  transition: transform 150ms ease-out;

  :hover {
    transform: scale(0.8);
    color: white;
    background-color: green;
  }
`;
