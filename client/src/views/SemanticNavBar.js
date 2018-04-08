import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react';

class NavigationBar extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  handleClick(){
      
    console.log("clicked menu")
  }

  render() {
    const { visible } = this.state
    return (
      <div>
        <Icon onClick={this.toggleVisibility} name="sidebar big"/>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='overlay' direction='top' visible={visible} inverted>
            <Menu.Item name='home'>
                <Icon name='home' />
                <Link to="/">HOME</Link>
            </Menu.Item>
            
            <Menu.Item name='login'>
                <Link to="/login">LOGIN</Link>
                <Icon name='sign in' />
            </Menu.Item>

            <Menu.Item name='signUp'>
                <Link to="/signup">SIGN UP</Link>
                <Icon name='wpforms' />      
            </Menu.Item>

            <Menu.Item name='templates' onClick={this.handleClick.bind(this)}>
                <Link to="/templates">TEMPLATES</Link>
                <Icon name='block layout' />
            </Menu.Item>

          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'></Header>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default NavigationBar
