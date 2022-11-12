import React from "react";
import { Container } from "react-bootstrap";

import Drinksnav from "../../components/Navbars/Navdrinks";
import {
  Maincontainer,
  Subtitle,
  Textbox,
  Textcontainer,
  Title,
} from "./styles";

type DrinklayoutProps = { children: React.ReactElement };

export const Drinklayout: React.FC<DrinklayoutProps> = ({ children }) => (
  <>
    <Drinksnav />
    <Maincontainer>
      <Container>
        <Textcontainer>
          <Textbox>
            <Title>The happiest hour of the year</Title>
            <Subtitle>
              Sign up to get exclusive access to deals on drinks this holiday
              season.
            </Subtitle>
          </Textbox>
        </Textcontainer>
        {children}
      </Container>
    </Maincontainer>
  </>
);
