import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div style={{ textAlign: "left" }}>
        <p>
          <div>
            <i className="material-icons">location_city</i>
            {" "}97/36 Krungthepkritha road, Bangkok, 10250
          </div>
          <div>
            <i className="material-icons">phone</i>
            {" "}+66-83-770-0808
          </div>
          <div>
            <i className="material-icons">email</i>
            {" "}thitiwat.thongbor@gmail.com
          </div>
        </p>
      </div>
    );
  }
}

export default Contact;
