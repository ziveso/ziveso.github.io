import React, { Component } from "react";
import { Timeline } from "antd";

export class Education extends Component {
  render() {
    return (
      <div style={{ color: "white" }}>
        <Timeline mode="alternate" style={{ color: "white" }} reverse>
          <Timeline.Item color="green">
            (2003 - 2009) Primary school : Lasalle college school, intensive
            program (international).
          </Timeline.Item>
          <Timeline.Item color="green">
            (2010 - 2012) Secondary school : Ratwinit Bangkeao school, Science -
            Mathematics program.
          </Timeline.Item>
          <Timeline.Item color="green">
            (2013 - 2015) High school : Ratwinit Bangkeao school, Field of
            Science - Mathematics .
          </Timeline.Item>
          <Timeline.Item color="green">
            (2016 - current) Kasetsart University, Bachelor of Engineering,
            Software and Knowledge Engineering<br />
            International Undergraduated Program
          </Timeline.Item>
        </Timeline>
        <hr />
        <div style={{ textAlign: "left" }}>
          <h3>Special course (related field)</h3>
          <p>
            Highschool, Robotics coding. (2012 - 2014)
            <br />
            Academic school, Netdesign, Programming program. (2014)
            <br />
            Highschool, Programming language Foundation. (2015)
            <br />
            Udemy, Ruby on rails. (2017).
            <br />
            University, System security Lab. (2018)
          </p>
        </div>
      </div>
    );
  }
}

export default Education;
