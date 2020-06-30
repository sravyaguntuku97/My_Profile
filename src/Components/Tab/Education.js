import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
export default class Education extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{margin:"1rem 0.5rem"}}>
          <h1>
            <Icon name="graduation cap" />
            Graduation
          </h1>
          <p>
            <b>Department :</b> Electronics And Communication Engineering
          </p>
          <p>
            <b>College : </b>Aditya Engineering College, Surampalem. (affiliated
            by JNTUK)
          </p>
          <p>
            <b>Year of Passing :</b> 2014 - 2018
          </p>
          <p>
            <b>Percentage :</b> 79%
          </p>
        </div>
        <div style={{margin:"1rem 0.5rem"}}>
          <h1>
            <Icon name="graduation cap" />
            Intermediate
          </h1>
          <p>
            <b>Department :</b> MPC
          </p>
          <p>
            <b>College : </b>Sri Chaitanya Junior college
          </p>
          <p>
            <b>Year of Passing :</b> 2012-2014
          </p>
          <p>
            <b>Percentage :</b> 90.7%
          </p>
        </div>
        <div style={{margin:"1rem 0.5rem"}}>
          <h1>
            <Icon name="graduation cap" />
            SSC
          </h1>

          <p>
            <b>School : </b>K.V.R Talent school
          </p>
          <p>
            <b>Year of Passing :</b> 2012
          </p>
          <p>
            <b>Percentage :</b> 9.2 CGPA
          </p>
        </div>
      </React.Fragment>
    );
  }
}
