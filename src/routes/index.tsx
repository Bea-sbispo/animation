import React from "react";
import { Route, Routes as Switch } from "react-router-dom";

import Frappuccino from "../pages/Frappuccino";
import Home from "../pages/Home";
import Refreshers from "../pages/Refreshers";
import SbRewards from "../pages/Rewards";

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" element={<Home />} />
    <Route path="/frappuccino" element={<Frappuccino />} />
    <Route path="/refreshers" element={<Refreshers />} />
    <Route path="/rewards" element={<SbRewards />} />
  </Switch>
);
