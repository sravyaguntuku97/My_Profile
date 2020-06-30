import React from 'react'
import { Label, Menu, Tab, Grid } from 'semantic-ui-react'
import Education from "./Education"
import About from "./"
const panes = [
  {
    menuItem: { key: 'users', icon: 'graduation cap', content: 'Education' },
    render: () => <Tab.Pane>
        <Education/>
    </Tab.Pane>,
  },
  {
    menuItem: { key: 'users', icon: 'user', content: 'About' },
    render: () => <Tab.Pane>My name is Sravya and I am having more than 2+ years of  experince in reputated organization from ground level to mid-level.</Tab.Pane>,
  },
  {
    menuItem: { key: 'users', icon: 'thumbs up', content: 'Achievements' },
    render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
  },
  {
    menuItem: { key: 'users', icon: 'users', content: 'Strengths' },
    render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
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
        <Grid.Column  mobile={16} tablet={13} computer={10}  centered>
    <Tab  menu={{ fluid: true, vertical: true }} panes={panes} />
    </Grid.Column>
    </Grid.Row>
</Grid>
  



export default TabExampleCustomMenuItem