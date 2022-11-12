import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GoLocation } from "react-icons/go";
import { LinkContainer } from "react-router-bootstrap";
import { Logo } from "../Logo";
import { Navback, Searchbox, Searchbutton, Searchicon } from "./styles";

const Drinksnav: React.FC = () => (
  <Navback bg="white" expand="lg" className="position-absolute w-100">
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
          <LinkContainer to="/find">
            <Nav.Link>
              <GoLocation size={24} /> FIND A STORE
            </Nav.Link>
          </LinkContainer>
          <Form className="d-flex">
            <Searchbox
              type="search"
              placeholder="Search"
              className="search-box me-2"
              aria-label="Search"
            />
            <Searchbutton>
              <Searchicon size={20} />
            </Searchbutton>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navback>
);

export default Drinksnav;
