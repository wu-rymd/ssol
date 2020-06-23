import React, { Component } from 'react';
import { Button, Image, Menu } from 'semantic-ui-react';

class Navbar extends Component {
    state = {activeItem: 'dashboard'}

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        this.props.portalChange(name);
    }

    render() {
        const { activeItem } = this.state;

        return (
            <Menu pointing secondary>
              <Menu.Item>
                <img src='https://upload.wikimedia.org/wikipedia/en/2/23/Columbia_Crown_simple.svg' alt="Profile" />
              </Menu.Item>
              <Menu.Item
                  name='dashboard'
                  active={activeItem === 'dashboard'}
                  onClick={this.handleItemClick}
              />
              <Menu.Item
                  name='academics'
                  active={activeItem === 'academics'}
                  onClick={this.handleItemClick}
              />
              <Menu.Item
                  name='finances'
                  active={activeItem === 'finances'}
                  onClick={this.handleItemClick}
              />
              <Menu.Item
                  name='campusLife'
                  active={activeItem === 'campusLife'}
                  onClick={this.handleItemClick}
              />
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Image src='placeholders/aisha/patricia.jpg' avatar />
                  <span>Your Name</span>
                </Menu.Item>
                <Menu.Item
                    name='logout'
                    onClick={this.handleItemClick}
                >
                  <Button negative compact>Log out</Button>
                </Menu.Item>
              </Menu.Menu>
            </Menu>
        )
    }
}

export default Navbar;
