import React, { Component } from 'react'
import { Icon,List } from "semantic-ui-react";
export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                 <div style={{margin:"1.5rem 1rem" }}>
                <h1><Icon name="building" size="small"/>Companies</h1>
                <List>
                    <List.Item>
                        <b>Company Name: Carmatec IT Solutions</b>

                    </List.Item>
                    <List.Item>
                       <b> Designation : </b> Full Stack developer
                    </List.Item>
                    <List.Item>
                        <b>Work Duration :</b> Feb 11th 2020 – Current
                    </List.Item>
                    <List.Item>
                        <b>Location :</b> Bangalore, Karnataka 
                    </List.Item>
                </List>



                <List>
                    <List.Item>
                        <b>Company Name: NT Solutions</b>

                    </List.Item>
                    <List.Item>
                       <b> Designation : </b> Full Stack developer
                    </List.Item>
                    <List.Item>
                        <b>Work Duration :</b> May 9th 2018 – Jan 3st 2020
                    </List.Item>
                    <List.Item>
                        <b>Location :</b> Rajahmundry, AndhraPradesh
                    </List.Item>
                </List>
               
                </div>
                <div style={{margin:"1.5rem 1rem" }}>
                <h1><Icon name="user" size="small"/>Experience</h1>
                <p> I am having <b style={{fontSize:"20px"}}>2+ Years</b> of experience in Full-stack development, rich user interface design and Application development. </p>
                </div>
            <div style={{margin:"1.5rem 1rem" }}>
                <h1 ><Icon name="user" size="small"/>About My Technical Summary</h1>
                <List bulleted >
    
    <List.Item>Proficient in ReactJs and have extensive experience on working with Dynamic Web Application.</List.Item>
    <List.Item>Strong in developing API using node(ExpressJs) using MongoDB as a DataBase.</List.Item>
    <List.Item> Experience in DOM (Document Object Model) manipulation in the HTML document to make interactive applications using JavaScript.
</List.Item>
    <List.Item> Experience in writing RESTful Api’s and integrating them with React user face components.
</List.Item>
    <List.Item>Expert in creating Web Interfaces, Layouts, and Flow of Future Pages UI web applications using front-end technologies
</List.Item>
    <List.Item>Strong communication, collaboration & team building skills with proficiency in grasping new technical concepts quickly.
</List.Item>
    <List.Item>Self-starter always inclined to learn new technologies and Team Player with very good communication, organizational and interpersonal skills.
</List.Item>


</List>
                {/* My name is Sravya and I am having more than 2+ years of  experince in reputated organization from ground level to mid-level. */}

            </div>
            </React.Fragment>
        )
    }
}
