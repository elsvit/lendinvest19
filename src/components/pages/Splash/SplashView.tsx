import Paper from "@material-ui/core/Paper";
import React from "react";
import {NavLink} from "react-router-dom";


import {ROUTES} from "../../../constants";
import "./splash.scss";

const SplashView = () => {
  return (
    <Paper className={'splash-page'}>
      <NavLink to={ROUTES.LOANS} className={'loans-link'}>
        LOANS
      </NavLink>
    </Paper>
  );
};

export default SplashView;
