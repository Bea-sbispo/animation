import React from "react";
import Refreshercards from "../../components/Cards/Cardsrefresher";
import { Drinklayout } from "../../layouts/Drinks";

const Frappuccino: React.FC = () => {
  return (
    <Drinklayout>
      <Refreshercards />
    </Drinklayout>
  );
};

export default Frappuccino;
