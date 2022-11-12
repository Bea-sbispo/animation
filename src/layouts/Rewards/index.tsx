import React from "react";

import Drinksnav from "../../components/Navbars/Navdrinks";
import { Maincontainer } from "./styles";

type DrinklayoutProps = { children: React.ReactElement };

export const RewardsLayout: React.FC<DrinklayoutProps> = ({ children }) => (
  <>
    <Drinksnav />
    <Maincontainer>{children}</Maincontainer>
  </>
);
