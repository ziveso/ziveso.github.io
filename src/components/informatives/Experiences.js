import React, { Component } from "react";
import { Timeline } from "antd";

export class Experiences extends Component {
  getTimeLineItem(items) {
    return items.map(item => {
      return (
        <Timeline.Item color={item.color}>
          <div style={item.detailStyle}>{item.detail}</div>
        </Timeline.Item>
      );
    });
  }
  render() {
    return (
      <Timeline style={{ color: "white", textAlign: "left" }} reverse>
        {this.getTimeLineItem([
          { color: "gold", detail: "Gold medal, Robotic contest (2012)" },
          { color: "gold", detail: "Gold medal, Robotic contest (2013)" },
          { color: "black", detail: "2012", detailStyle: { color: "black" } },
          { color: "gold", detail: "Gold medal, Robotic contest (2014)" },
          { color: "gold", detail: "Best Programming Award, Netdesign" },
          {
            color: "gold",
            detail: "Best Programming Award, Computer Science Camp, KMITL"
          },
          {
            detail: "3rd Place, Programming high school contest Thailand (2014)"
          },
          { color: "black", detail: "2014", detailStyle: { color: "black" } },
          {
            detail: "3rd Place, Programming high school contest Thailand (2015)"
          },
          {
            color: "gold",
            detail: "Gold medal, Programming ABAC University Thailand"
          },
          { color: "gold", detail: "1st Place, Esport DotA2 PCCP DotA League" },
          { color: "black", detail: "2015", detailStyle: { color: "black" } },
          {
            color: "gold",
            detail:
              "1st Place, LocalHackDay hosted by Github and Local hack day (2016)"
          },
          { detail: "Class project" },
          {
            color: "black",
            detail: "2016 University",
            detailStyle: { color: "black" }
          },
          { detail: "Web Developer at Barcamp bangkhen 2017" },
          { detail: "Class project" },
          { color: "black", detail: "2017", detailStyle: { color: "black" } },
          {
            detail:
              "Internship at Rabbit's tale, Code and Craft, Software developer."
          },
          {
            color: "gold",
            detail: "1st place, Best Internship project award."
          },
          { detail: "Web Developer at Barcamp bangkhen 2018" },
          { detail: "Class project" },
          { detail: "Outsource Programming Work, ITTP co. ltd" },
          { color: "black", detail: "2018", detailStyle: { color: "black" } }
        ])}
      </Timeline>
    );
  }
}

export default Experiences;
