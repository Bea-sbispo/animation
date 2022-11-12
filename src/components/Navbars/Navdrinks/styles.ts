import { Button, Navbar } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { GoSearch } from "react-icons/go";
import styled from "styled-components";

export const Navback = styled(Navbar)`
  z-index: 999;
  .nav-link {
    color: #686868;
    margin-right: 2rem;

    &:hover {
      color: #015e3e;
    }
  }
  @media screen and (max-width: 769px) {
    position: absolute !important;
  }
`;

export const Searchbox = styled(Form.Control)`
  background-color: transparent;
  border: none;
  border-radius: 0;
  border-bottom: 2px solid #b7bab7;

  &:focus {
    background: none;
    border: none;
    outline: none;
    box-shadow: none;
    border-bottom: 3px solid #015e3e;
  }
`;

export const Searchicon = styled(GoSearch)`
  color: #686868;
`;

export const Searchbutton = styled(Button)`
  &:hover {
    background: none;
    border: none;
    outline: none;
    box-shadow: none;
  }
`;
