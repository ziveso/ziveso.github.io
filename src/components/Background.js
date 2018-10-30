import React, { Component } from "react";
import background1 from "../background/background1.jpg";
import background2 from "../background/background2.jpg";

const backgrounds = [background1, background2];

export class Background extends Component {
  render() {
    const _backgrounds = backgrounds.map(background => {
      return (
        <img
          src={background}
          className="full-screen-background-image"
          alt="background"
        />
      );
    });
    return <div className="background">{_backgrounds}</div>;
  }
}

export default Background;
