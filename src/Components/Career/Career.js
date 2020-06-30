import React, { Component } from 'react'
import {
    Button,
    Grid,
    Header,
    Image,
    Segment,
  } from 'semantic-ui-react'
  import CareerImg from "../../assets/carrers/images (1).jpeg"
export default class Career extends Component {
    render() {
        return (
            <Segment style={{ padding: '8em 0em',backgroundColor:"#fef3e6"}} vertical>
            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header as='h3' style={{ fontSize: '2em' }}>
                  MY CAREER OBJECTIVE
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>
                      "
                  I want to be in a Creative, Challenging and Professional Environment, where I can take part in the growth of the organization by giving my best abilities and where there is room for upgrading my skills and knowledge."
                  </p>
                  {/* <Header as='h3' style={{ fontSize: '2em' }}>
                    We Make Bananas That Can Dance
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>
                    Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                    bioengineered.
                  </p> */}
                </Grid.Column>
                <Grid.Column floated='right' width={6}>
                  <Image bordered rounded size='large' src={CareerImg} />
                </Grid.Column>
              </Grid.Row>
              {/* <Grid.Row>
                <Grid.Column textAlign='center'>
                  <Button size='huge'>Check Them Out</Button>
                </Grid.Column>
              </Grid.Row> */}
            </Grid>
          </Segment>
        )
    }
}
