import PropTypes from 'prop-types'
import React from 'react'
import {
  Button,
  Container,
  Header,
  Icon,
} from 'semantic-ui-react'

const HomepageHeading = ({ mobile }) => (
    <Container text >
      <Header
        as='h2'
        content="Hi! I'm Sravya Guntuku"
        inverted
        style={{    
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'bold',
          marginBottom: '-0.3em',
          marginTop: mobile ? '1.5em' : '3em',
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