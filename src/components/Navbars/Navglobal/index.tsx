import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GoLocation } from "react-icons/go";
import { LinkContainer } from "react-router-bootstrap";
import { Logo } from "../Logo";
import { Navback } from "./styles";

const Globalnav: React.FC = () => (
  <Navback bg="transparent" expand="lg" fixed="top">
    <Container fluid>
      <LinkContainer to="/">
        <Navbar.Brand>
          <Logo />
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="me-auto">
          <LinkContainer to="/frappuccino">
            <Nav.Link>FRAPPUCCINO</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/refreshers">
            <Nav.Link>REFRESHERS</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/rewards">
            <Nav.Link>REWARDS</Nav.Link>
          </LinkContainer>
          <Nav.Link href="https://www.starbucks.com.br/lojas" target="_blank">
            <GoLocation size={24} /> FIND A STORE
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navback>
);

export default Globalnav;
