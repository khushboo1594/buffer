import React, { Component } from "react";
import LifeCycleChild from "./LifecycleMethodsChild";

export default class LifeCycleParent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0
    };
    console.log("constructor parent");
  }
  componentDidMount() {
    console.log("componentDidMount parent");
  }

  render() {
    console.log("render parent");
    return (
      <div>
        <center>
          <h1>Different Life Cycle Methods</h1>
          <LifeCycleChild/>
        </center>
      </div>
    );
  }
}
