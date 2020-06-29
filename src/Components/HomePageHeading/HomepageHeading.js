import PropTypes from 'prop-types'
import React from 'react'
import {
  Button,
  Container,
  Header,
  Icon,
  Image
} from 'semantic-ui-react'

import Profile from "../../assets/WhatsApp Image 2020-06-24 at 4.16.20 PM.jpeg"

const HomepageHeading = ({ mobile }) => (
    <Container text >
       <Image src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='small' circular centered style={{marginTop: mobile ? '1.5em' : '8.5em',}}/>
      <Header
        as='h2'
        content="Hi! I'm Sravya Guntuku"
        inverted
        style={{    
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'bold',
          marginBottom: '-0.3em',
          marginTop: mobile ? '1.5em' : '0.5em',
        }}
      />
      <Header
        as='h1'
        content='FULL STACK WEB DEVELOPER'
        // subheader='Creates modern and responsive Web Applications'
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '2em',
          fontWeight: 'bold',
          marginTop: mobile ? '0.5em' : '1.5em',
        }}
      />
      {/* <Button primary size='huge'>
        Get Started
        <Icon name='right arrow' />
      </Button> */}
      
    </Container>
  )
  
  HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
  }

  export default HomepageHeading