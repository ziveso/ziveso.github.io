import React, { Component } from "react";
import { Card, Col } from "antd";

class DetailCard extends Component {
  render() {
    return (
      <Col md={this.props.col} xl={this.props.col} sm={24}>
        <Card title={this.props.title} style={{ ...this.props.style }}>
          {/* <Card.Grid className={this.props.classname}>Content */}
          {this.props.children}
          {/* </Card.Grid> */}
        </Card>
      </Col>
    );
  }
}

export default DetailCard;
