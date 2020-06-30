import React, { Component } from "react";
import TabExampleCustomMenuItem from "./Tab";
import { Segment } from "semantic-ui-react";

export default class Tab extends Component {
  render() {
    return (
      <Segment style={{ backgroundColor:"#000000d9", marginTop: "-1rem" }}>
        <div style={{textAlign:"center",margin:"3rem 0rem",color:"white"}}><h1> My Details</h1></div>
        <TabExampleCustomMenuItem />
      </Segment>
    );
  }
}
