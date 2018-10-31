import React, { Component } from "react";
import { Row } from "antd";
import DetailCard from "./components/DetailCard";
import Background from "./components/Background";
import Skills from "./components/informatives/Skills";
import Profile from "./components/informatives/Profile";
import Education from "./components/informatives/Education";
import Languages from "./components/informatives/Languages";
import Contact from "./components/informatives/Contact";
import Experiences from "./components/informatives/Experiences";
import "./App.css";

const details = [
  {
    title: "Profile",
    components: <Profile />,
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
    },
    headStyle: true
  },
  {
    title: "Education",
    components: <Education />,
    col: 18,
    style: {
      margin: "10px",
      backgroundColor: "#3366CC"
    },
    headStyle: true
  },
  {
    title: "Languages",
    components: <Languages />,
    col: 6,
    style: {
      margin: "10px"
    }
  },
  {
    title: "Contact",
    components: <Contact />,
    col: 6,
    style: {
      margin: "10px"
    }
  },
  {
    title: "Experiences",
    components: <Experiences />,
    col: 18,
    style: {
      margin: "10px",
      backgroundColor: "#3366CC"
    },
    headStyle: true
  }
];

class App extends Component {
  render() {
    const _details = details.map(item => {
      return (
        <DetailCard
          title={item.title}
          style={item.style}
          col={item.col}
          headStyle={item.headStyle}
        >
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
      </div>
    );
  }
}

export default App;
