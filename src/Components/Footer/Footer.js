import React, { Component } from "react";
import {
  Container,
  Grid,
  Header,
  List,
  Segment,
  Icon,
} from "semantic-ui-react";
export default class Footer extends Component {
  render() {
    return (
      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={5}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as="a">FullName:Ratna Sravya Guntuku</List.Item>
                  <List.Item as="a">D/O: G.Krishna Kumar</List.Item>
                  <List.Item as="a">Date of Birth : 31st July 1997</List.Item>
                  <List.Item as="a">Nationality : Indian</List.Item>
                  <List.Item as="a">Marital Status : Unmarried</List.Item>
                  <List.Item as="a">
                    Known Languages : English, Telugu and Hind.
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={5}>
                <Header inverted as="h4" content="Contact" />
                <List link inverted>
                  <List.Item as="a">
                    {" "}
                    <Icon name="phone" size="large" /> &nbsp;&nbsp;91-9885112928
                  </List.Item>
                  <List.Item as="a">
                    {" "}
                    <Icon name="whatsapp" size="large" /> &nbsp;&nbsp;9885112928
                  </List.Item>
                  <List.Item href={"mailto:sravyaguntuku97@gmail.com"}>
                    <Icon name="mail" size="large" />{" "}
                    &nbsp;&nbsp;sravyaguntuku97@gmail.com
                  </List.Item>
                  
                  <List.Item as="a">
                    <Icon name="map marker alternate" size="large" />{" "}
                    &nbsp;&nbsp;D/NO-72-2-13, Saidurganagar 5th street, opposite
                    HYUNDAI showroom, Lalacheruvu, Rajahmundry.
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={5}>
                <Header as="h4" inverted>
                  More Projects
                </Header>
                <p>
                  NOTE : Some of the Sample projects are in the Github
                  For More details about the Projects and my work
                  Please visit <br/><br/>
                  <a href="https://github.com/sravyaguntuku97" style={{color:"white"}}>
                  <Icon name="github" size="large"/><b>https://github.com/sravyaguntuku97</b></a>
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}
