import { Navbar } from "react-bootstrap";
import styled from "styled-components";

export const Navback = styled(Navbar)`
  .nav-link {
    color: aliceblue;
    margin-right: 2rem;

    &:hover {
      color: #e6b980 !important;
    }
  }
  @media screen and (max-width: 769px) {
    position: absolute !important;
  }
`;
