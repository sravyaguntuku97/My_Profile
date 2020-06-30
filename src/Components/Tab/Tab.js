import React from 'react'
import { Label, Menu, Tab, Grid } from 'semantic-ui-react'

const panes = [
  {
    menuItem: { key: 'users', icon: 'users', content: 'Users' },
    render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>,
  },
  {
    menuItem: (
      <Menu.Item key='messages'>
        Messages<Label>15</Label>
      </Menu.Item>
    ),
    render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>,
  },
]

const TabExampleCustomMenuItem = () => 
<Grid>
<Grid.Row  columns={1} centered>
        <Grid.Column width={10} centered>
    <Tab  menu={{ fluid: true, vertical: true }} panes={panes} />
    </Grid.Column>
    </Grid.Row>
</Grid>
  



export default TabExampleCustomMenuItem