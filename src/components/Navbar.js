import { Layout, Menu } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/">
              <h2>Todo</h2>
            </Link>
          </div>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/signup">Sign Up</Link>
            </Menu.Item>
          </Menu>
        </Header>
      </div>
    );
  }
}

export default Navbar;
