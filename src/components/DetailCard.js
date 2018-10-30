import React, { Component } from "react";
import { Card, Col } from "antd";

class DetailCard extends Component {
  render() {
    return (
      <Col md={this.props.col} xl={this.props.col} sm={24}>
        <Card
          title={this.props.title}
          style={{ ...this.props.style }}
          headStyle={{
            fontSize: "2rem",
            color: this.props.headStyle ? "white" : "",
            textAlign: 'left',
            paddingLeft: '40px'
          }}
        >
          {this.props.children}
        </Card>
      </Col>
    );
  }
}

export default DetailCard;
