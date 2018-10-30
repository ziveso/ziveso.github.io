import React, { Component } from "react";
import { Progress } from "antd";

export class Skills extends Component {
  render() {
    return (
      <div style={{ textAlign: "left" }}>
        <h3>Git, Unix</h3>
        <Progress percent={75} />
        <h3>Java</h3>
        <Progress percent={70} />
        <h3>HTML CSS JS</h3>
        <Progress percent={70} />
        <h3>Node.js</h3>
        <Progress percent={60} />
        <h3>PHP</h3>
        <Progress percent={60} />
      </div>
    );
  }
}

export default Skills;
