import { Layout, Menu } from 'antd';
import React, { Component } from 'react';

const { Header } = Layout;

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Header
          style={{ position: 'fixed', zIndex: 1, width: '100%', height: 50 }}
          className="header"
        >
          <div className="logo">
            <h2>Todo</h2>
          </div>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">Login</Menu.Item>
            <Menu.Item key="2">Sign Up</Menu.Item>
          </Menu>
        </Header>
      </div>
    );
  }
}

export default Navbar;
