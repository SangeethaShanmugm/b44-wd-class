import React, { Component } from "react";

export default class LifeCycleB extends Component {
  componentDidMount() {
    console.log("LifeCycleB componentDidMount");
  }

  constructor(props) {
    super(props);
    this.state = {
      name: "John",
      age: 20,
    };
    console.log("LifeCycleB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps");
    // console.log(state.name);
    return state.name;
  }

  render() {
    console.log("LifeCycleB render");
    return (
      <>
        <div>LifeCycleB</div>
      </>
    );
  }
}
