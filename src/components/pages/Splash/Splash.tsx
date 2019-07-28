import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";

import {IAppState} from "../../../store";
// import { ROUTES } from '../../../constants';
import SplashView from "./SplashView";

interface IStateMap {}

interface IDispatchMap {}

type ISignUpContainerProps = IStateMap & IDispatchMap;

class Splash extends Component<ISignUpContainerProps> {
  render() {
    return <SplashView />;
  }
}

const mapStateToProps = (state: IAppState) => ({});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
