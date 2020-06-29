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
        as='h1'
        content='Sravya Guntuku'
        inverted
        style={{    
          fontSize: mobile ? '2em' : '4em',
          fontWeight: 'bold',
          marginBottom: '-0.3em',
          marginTop: mobile ? '1.5em' : '2.5em',
        }}
      />
      <Header
        as='h2'
        content='--- Full Stack Developer ---'
        inverted
        style={{
          fontSize: mobile ? '1.5em' : '1.7em',
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