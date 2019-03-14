import React, { Component } from "react";
import MainRoute from "./MainRoute";
import { withRouter } from "react-router-dom";
import Navigation from './component/Navigation';


class AppRouter extends Component {
  
  postSignout = () => {
    localStorage.removeItem("is_login");
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <Navigation postSignout={this.postSignout}/>
        <MainRoute />
      </div>
    );
  }
}

export default withRouter(AppRouter);