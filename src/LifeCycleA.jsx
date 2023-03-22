import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export default class LifeCycleA extends Component {
  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  constructor(props) {
    super(props);
    this.state = {
      name: "John",
      age: 20,
    };
    console.log("LifeCycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDerivedStateFromProps");
    // console.log(state.name);
    return state.name;
  }

  render() {
    console.log("LifeCycleA render");
    return (
      <>
        <div>
          LifeCycleA
          <h1>{this.state.name}</h1>
          <p>{this.state.age}</p>
          <LifeCycleB />
        </div>
      </>
    );
  }
}
