import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,

  Menu,
  Responsive,
  Segment,

  Visibility,
} from 'semantic-ui-react'
import HomepageHeading from '../../Components/HomePageHeading/HomepageHeading'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class DesktopContainer extends Component {
    state = {}
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  
    render() {
      const { children } = this.props
      const { fixed } = this.state
  
      return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 700, padding: '1em 0em',
              backgroundImage: `url(https://www.grweb.eu/grweb19/123b.jpg)`,
              // backgroundImage: `url(https://i.pinimg.com/originals/88/7a/fe/887afe1b320569750a2eac301292f8c3.jpg)`,
              backgroundSize:"cover",
              // backgroundBlendMode: 'hard-light'
               }}
              vertical
              
            >
              <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
              >
                <Container>
                  <Menu.Item as='a' active>
                    Home
                  </Menu.Item>
                  <Menu.Item as='a'>Work</Menu.Item>
                  {/* <Menu.Item as='a'>Company</Menu.Item>
                  <Menu.Item as='a'>Careers</Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted={!fixed}>
                      Log in
                    </Button>
                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Menu.Item> */}
                </Container>
              </Menu>
              <HomepageHeading />
            </Segment>
          </Visibility>
  
          {children}
          
        </Responsive>
      )
    }
  }
  
  DesktopContainer.propTypes = {
    children: PropTypes.node,
  }

  export default DesktopContainer