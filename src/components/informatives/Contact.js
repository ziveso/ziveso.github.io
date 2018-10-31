import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div style={{ textAlign: "left" }}>
          <div>
            <i className="fas fa-city" /> 97/36 Krungthepkritha road, Bangkok,
            10250
          </div>
          <div>
            <i className="fas fa-mobile" /> +66-83-770-0808
          </div>
          <div>
            <i className="fas fa-envelope" /> thitiwat.thongbor@gmail.com
          </div>
        </div>
        <hr />
        <div style={{ fontSize: "2rem" }}>
          <a href="https://www.facebook.com/thitiwat.thongbor">
            <i style={{ margin: "10px" }} className="fab fa-facebook" />
          </a>
          <a href="https://twitter.com/GuyZivesO">
            <i style={{ margin: "10px" }} className="fab fa-twitter-square" />
          </a>
          <a href="https://www.instagram.com/guy_zives/">
            <i style={{ margin: "10px" }} className="fab fa-instagram" />
          </a>
          <a href="https://github.com/ziveso">
            <i style={{ margin: "10px" }} className="fab fa-github-square" />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
