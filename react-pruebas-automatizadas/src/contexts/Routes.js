import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pruebas/home";
import TestTemperamento from "../pruebas/TestTemperamento";
import TIE from "../pruebas/TIE";
import CAM from "../pruebas/CAM";
import GRIT from "../pruebas/GRIT";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Temperamento" component={TestTemperamento} />
      <Route exact path="/TIE" component={TIE} />
      <Route exact path="/CAM" component={CAM} />
      <Route exact path="/GRIT" component={GRIT} />
    </Switch>
  );
}
