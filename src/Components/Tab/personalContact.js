import React, { Component } from 'react'
import { Icon,List } from "semantic-ui-react";

export default class PersonalConatct extends Component {
    render() {
        return (
            <React.Fragment>
     
        <div style={{margin:"1.5rem 1rem" ,fontSize:"18px"}}>
            <h1 ><Icon name="user" size="small"/>About Me</h1>
            <List  >
                  <List.Item ><b>FullName:</b>Ratna Sravya Guntuku</List.Item>
                  <List.Item ><b>D/O: </b>G.Krishna Kumar</List.Item>
                  <List.Item ><b>Date of Birth : </b>31st July 1997</List.Item>
                  <List.Item ><b>Nationality :</b> Indian</List.Item>
                  <List.Item ><b>Marital Status :</b> Unmarried</List.Item>
                  <List.Item >
                  <b>Known Languages : </b>English, Telugu and Hind.
                  </List.Item>
                </List>

        </div>

        <div style={{margin:"1.5rem 1rem" ,fontSize:"18px"}}>
            <h1 >Contact Me</h1>
            <List  >
                  <List.Item >
                    {" "}
                    <Icon name="phone" size="large" /> &nbsp;&nbsp;91-9885112928
                  </List.Item>
                  <List.Item >
                    {" "}
                    <Icon name="whatsapp" size="large" /> &nbsp;&nbsp;9885112928
                  </List.Item>
                  <List.Item href={"mailto:sravyaguntuku97@gmail.com"}>
                    <Icon name="mail" size="large" />{" "}
                    &nbsp;&nbsp;sravyaguntuku97@gmail.com
                  </List.Item>
                  
                  <List.Item >
                    <Icon name="map marker alternate" size="large" />{" "}
                    &nbsp;&nbsp;D/NO-72-2-13, Saidurganagar 5th street, opposite
                    HYUNDAI showroom, Lalacheruvu, Rajahmundry.
                  </List.Item>
                </List>

        </div>
        </React.Fragment>
        )
    }
}
