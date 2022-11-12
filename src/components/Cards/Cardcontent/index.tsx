import React from "react";
import { BsCartPlus } from "react-icons/bs";
import { Buttonadd, Buttonarea, Cardtext } from "./styles";

const Contentcard: React.FC = () => (
  <>
    <Cardtext>
      Calories
      <br />
      Total fat - 19g
      <br />
      Saturated fat - 13g
      <br />
      Trans fat - 0.5g
    </Cardtext>
    <Buttonarea>
      <Buttonadd>
        Add to basket
        <BsCartPlus size={22} style={{ margin: "0 0 0 15px" }} />
      </Buttonadd>
    </Buttonarea>
  </>
);

export default Contentcard;
