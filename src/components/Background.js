import React, { Component } from "react";
import background1 from "../background/background1.jpg";
import background2 from "../background/background2.jpg";
import Loading from "react-loading-bar";
import "react-loading-bar/dist/index.css";

const backgrounds = [background1, background2];
let counter = 0;

export class Background extends Component {
  state = {
    show: true,
    currentBackground: 0
  };

  componentDidMount() {
    this.onShow();
  }

  onShow = () => {
    this.setState({ show: true });
  };

  onHide = () => {
    this.setState({ show: false });
  };

  loaded = () => {
    this.onShow();
    counter += 1;
    if (counter === backgrounds.length) {
      this.onHide();
      // var self = this;
      // setInterval(() => {
      //   self.setState({
      //     currentBackground:
      //       (this.state.currentBackground + 1) % backgrounds.length
      //   });
      // }, 5000);
    }
  };

  getClassName = index => {
    if (this.state.currentBackground === index)
      return "full-screen-background-image";
    return "full-screen-background-image d-none";
  };

  render() {
    const _backgrounds = backgrounds.map((background, index) => {
      const cn = this.getClassName(index);
      return (
        <img
          src={background}
          className={cn}
          alt="background"
          onLoad={this.loaded}
        />
      );
    });
    return (
      <div className="background">
        <Loading show={this.state.show} color="red" />
        {_backgrounds}
      </div>
    );
  }
}

export default Background;
