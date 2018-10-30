import React, { Component } from "react";
import DetailCard from "./components/DetailCard";
import Skills from "./components/informatives/Skills";
import { Row } from "antd";
import Background from "./components/Background";
import "./App.css";

const details = [
  {
    title: "Profile",
    components: <div>my profile</div>,
    col: 12,
    style: {
      margin: "10px"
    }
  },
  {
    title: "Skills",
    components: <Skills />,
    col: 12,
    style: {
      margin: "10px",
      backgroundColor: "#3366CC"
    }
  },
  {
    title: "Education",
    components: <div>my education</div>,
    col: 18,
    style: {
      margin: "10px",
      backgroundColor: "#3366CC"
    }
  },
  {
    title: "Languages",
    components: <div>my Language</div>,
    col: 6,
    style: {
      margin: "10px"
    }
  },
  {
    title: "Contact",
    components: <div>my contact</div>,
    col: 6,
    style: {
      margin: "10px"
    }
  },
  {
    title: "Experiences",
    components: <div>my Experiences</div>,
    col: 18,
    style: {
      margin: "10px",
      backgroundColor: "#3366CC"
    }
  }
];

class App extends Component {
  render() {
    const _details = details.map(item => {
      return (
        <DetailCard title={item.title} style={item.style} col={item.col}>
          {item.components}
        </DetailCard>
      );
    });
    return (
      <div className="App">
        <Background />
        <header>
          <img
            className="avatar circle"
            src="https://avatars2.githubusercontent.com/u/24351238?s=460&v=4"
            alt="avatar"
          />
          <div
            style={{
              borderBottom: "1px solid #3366CC",
              width: "150px",
              margin: "auto",
              padding: "5px 0"
            }}
          />
          <h1
            style={{
              color: "#66CCFF",
              textShadow: "1px 1px #000",
              fontWeight: "bold"
            }}
          >
            Hi, I am Guy
          </h1>
          <h1 style={{ textShadow: "1px 1px #000", color: "white" }}>
            Software Developer
          </h1>
        </header>
        <div className="detail">
          <Row gutter={16} style={{ width: "100%" }}>
            {_details}
          </Row>
        </div>
        <footer>
          <div>copyright</div>
          icon
        </footer>
      </div>
    );
  }
}

export default App;
