import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from "semantic-ui-react";
import Loader from "../../Components/CircularProgressBar/loader";
import TechSkills from "./tech"
export default class TechnicalSkills extends Component {
  render() {
    return (
      <Segment style={{ backgroundColor: "#400f06a6", marginTop: "0rem" }}>
        <Grid container style={{ margin: "2rem 0rem" }}>
          <Grid.Row centered>
            <Header as="h3" style={{ fontSize: "2em" }}>
              <div style={{color:"white"}}> <b>MY TECHNICAL SKILLS</b></div>
            </Header>
          </Grid.Row>

          <Grid.Row style={{margin:"0.5rem 0rem"}}>
          {TechSkills.map(el=>{
              return(
                <Grid.Column
                style={{margin:"1.3rem 0rem"}}
                className="col_center"
                mobile={16}
                tablet={8}
                computer={5}
              >
                <Loader textColor={el.color} pathColor={el.color} roundedValue={el.value} />
              <div style={{color:"white"}}><b>{el.skill}</b></div>
              </Grid.Column>
              )
          })}
            
          </Grid.Row>
        </Grid>
        <style jsx="true">
          {`
            .col_center {
              text-align: -webkit-center;
            }
          `}
        </style>
      </Segment>
    );
  }
}
