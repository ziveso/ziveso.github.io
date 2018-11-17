import React, { Component } from "react";
import { Timeline } from "antd";

export class Experiences extends Component {
  getTimeLineItem(items) {
    return items.map((item, id) => {
      return (
        <Timeline.Item key={`timeline-${id}`} color={item.color}>
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
          {
            color: "gold",
            detail: (
              <div>
                1st Place, Esport DotA2 PCCP DotA League
                <a
                  className="skills"
                  href="https://www.signature.in.th/dota2-high-school-result/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-globe" aria-hidden="true" />
                  News
                </a>
              </div>
            )
          },
          { color: "black", detail: "2015", detailStyle: { color: "black" } },
          {
            color: "gold",
            detail: (
              <div>
                1st Place, LocalHackDay hosted by Github and Local hack day
                (2016)
                <a
                  className="skills"
                  href="https://www.enterpriselab.co/project-page-6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-globe" aria-hidden="true" />
                  News
                </a>
                <a
                  className="skills"
                  href="https://github.com/ziveso/TouchYou_Hackaton"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-code" />
                  Source code
                </a>
              </div>
            )
          },
          {
            detail: (
              <div>
                Class project
                <a
                  className="skills"
                  href="https://github.com/ziveso/remec"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-code" />
                  REMEC
                </a>
              </div>
            )
          },
          {
            color: "black",
            detail: "2016 University",
            detailStyle: { color: "black" }
          },
          {
            detail: (
              <div>
                Web Developer at Barcamp bangkhen 2017
                <a
                  className="skills"
                  href="http://2017.barcampbangkhen.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-globe" aria-hidden="true" />
                  BCBK 8
                </a>
              </div>
            )
          },
          {
            detail: (
              <div>
                Code warning script
                <a
                  className="skills"
                  href="https://github.com/ziveso/code-warning-script"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-code" />
                  Source code
                </a>
              </div>
            )
          },
          { detail: "Class project" },
          { color: "black", detail: "2017", detailStyle: { color: "black" } },
          {
            detail: (
              <div>
                Responsive Preview
                <a
                  className="skills"
                  href="https://github.com/ziveso/responsive-preview"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-code" />
                  Source code
                </a>
              </div>
            )
          },
          {
            detail: (
              <div>
                Exceed 15 Voting system
                <a
                  className="skills"
                  href="https://github.com/ziveso/Exceed15-Voting-System"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-code" />
                  Source code
                </a>
              </div>
            )
          },
          {
            detail: (
              <div>
                Internship at Rabbit's tale, Code and Craft, Software developer.
                <a
                  className="skills"
                  href="https://www.malee.co.th"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-globe" aria-hidden="true" />
                  malee.co.th
                </a>
              </div>
            )
          },
          {
            color: "gold",
            detail: (
              <div>
                1st place, Best Internship project award.
                <a
                  className="skills"
                  href="https://ziveso.github.io/we-dont-walk-we-jump/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-globe" aria-hidden="true" />
                  Web app
                </a>
                <a
                  className="skills"
                  href="https://github.com/ziveso/we-dont-walk-we-jump"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-code" />
                  Source code
                </a>
              </div>
            )
          },
          {
            detail: (
              <div>
                CPSK Freshy camp 2018 color(team) generator
                <a
                  className="skills"
                  href="https://github.com/ziveso/cpsk-colorgenerator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-code" />
                  Source code
                </a>
              </div>
            )
          },
          {
            detail: (
              <div>
                Web Developer at Barcamp bangkhen 2018
                <a
                  className="skills"
                  href="http://2018.barcampbangkhen.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-globe" aria-hidden="true" />
                  BCBK 9
                </a>
              </div>
            )
          },
          {
            detail: (
              <div>
                Class project
                <a
                  className="skills"
                  href="https://wsp.thitgorn.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-globe" aria-hidden="true" />
                  Amicus
                </a>
                <a
                  className="skills"
                  href="https://github.com/wsp-amicus/salad"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-code" />
                  Source code
                </a>
              </div>
            )
          },
          {
            detail: (
              <div>
                YWC homework - spotify web player
                <a
                  className="skills"
                  href="https://ywc.thitgorn.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-globe" aria-hidden="true" />
                  YWC
                </a>
                <a
                  className="skills"
                  href="https://github.com/ziveso/ywc16-hw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-code" />
                  Source code
                </a>
              </div>
            )
          },
          { detail: "Outsource Programming Work, ITTP co. ltd" },
          { detail: "Participating TESA TGR 2019#13" },
          { color: "black", detail: "2018", detailStyle: { color: "black" } }
        ])}
      </Timeline>
    );
  }
}

export default Experiences;
