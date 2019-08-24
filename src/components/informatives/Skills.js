import React, { Component } from "react";
// import { Progress } from "antd";

export class Skills extends Component {
  render() {
    return (
      <div style={{ textAlign: "left" }}>
        <h3 style={{ color: "white" }}>Advanced in Git.</h3>
        <hr />
        <h3 style={{ color: "white" }}>
          Advanced in Javascript language - React, Node, JQuery, Pure
          javascript.
        </h3>
        <hr />
        <h3 style={{ color: "white" }}>Advanced in HTML, CSS, SCSS.</h3>
        <hr />
        <h3 style={{ color: "white" }}>Pre-advanced in Unix command line.</h3>
        <hr />
        <h3 style={{ color: "white" }}>Pre-advanced in Java language.</h3>
        <hr />
        <h3 style={{ color: "white" }}>
          Pre-advanced in C++. Game development - Unity
        </h3>
        <hr />
        <h3 style={{ color: "white" }}>
          Pre-intermediate in PHP framework, Laravel.
        </h3>
        <hr />

        {/* <h3>Git, Unix</h3>
        <Progress percent={75} />
        <h3>Java</h3>
        <Progress percent={70} />
        <h3>HTML CSS JS</h3>
        <Progress percent={70} />
        <h3>Node.js</h3>
        <Progress percent={60} />
        <h3>PHP</h3>
        <Progress percent={60} /> */}
      </div>
    );
  }
}

export default Skills;
