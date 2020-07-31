import React, { Component } from 'react'
import { Menu} from 'semantic-ui-react'

export default class MenuExampleHeader extends Component {
    state = {}
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Menu inverted>
          <Menu.Item as='a' header >Gist-App</Menu.Item>
          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          />
        </Menu>
      )
    }
  }