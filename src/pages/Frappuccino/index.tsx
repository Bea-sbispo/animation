import React from "react";
import Frappuccinocards from "../../components/Cards/Cardsfrappuccino";
import { Drinklayout } from "../../layouts/Drinks";

const Frappuccino: React.FC = () => {
  return (
    <>
      <Drinklayout>
        <Frappuccinocards />
      </Drinklayout>
    </>
  );
};

export default Frappuccino;
