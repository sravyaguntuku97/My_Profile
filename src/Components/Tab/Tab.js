import React from 'react'
import { Label, Menu, Tab, Grid } from 'semantic-ui-react'
import Education from "./Education"
import About from "./About"
import PersonalContact from "./personalContact"
import Strengths from "./Strength"


const panes = [
  {
    menuItem: { key: 'users', icon: 'graduation cap', content: 'Education' },
    render: () => <Tab.Pane style={{minHeight:"600px"}}>
        <Education/>
    </Tab.Pane>,
  },
  {
    menuItem: { key: 'users', icon: 'user', content: 'Work & Experience' },
    render: () => <Tab.Pane style={{minHeight:"600px"}}><About/></Tab.Pane>,
  },
//   {
//     menuItem: { key: 'users', icon: 'thumbs up', content: 'Achievements' },
//     render: () => <Tab.Pane style={{minHeight:"600px"}}><Achievements/></Tab.Pane>,
//   },
  {
    menuItem: { key: 'users', icon: 'users', content: 'Strength & Capability' },
    render: () => <Tab.Pane style={{minHeight:"600px"}}><Strengths/></Tab.Pane>,
  },
  {
    menuItem: { key: 'users', icon: 'users', content: 'Personal & Contact' },
    render: () => <Tab.Pane style={{minHeight:"600px"}}><PersonalContact/></Tab.Pane>,
  },
//   {
//     menuItem: (
//       <Menu.Item key='messages'>
//         Messages<Label>15</Label>
//       </Menu.Item>
//     ),
//     render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
//   },
]

const TabExampleCustomMenuItem = () => 
<Grid>
<Grid.Row  columns={1} centered>
        <Grid.Column  mobile={16} tablet={13} computer={12}  centered>
    <Tab  menu={{  pointing: true, fluid: true, vertical: true }} panes={panes}  />
    </Grid.Column>
    </Grid.Row>
</Grid>
  



export default TabExampleCustomMenuItem