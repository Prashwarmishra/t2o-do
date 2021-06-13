import { Layout, Menu } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../actions/auth';

const { Header } = Layout;

class Navbar extends Component {
  handleSignout = () => {
    localStorage.removeItem('token');
    this.props.dispatch(logOut());
  };

  render() {
    const { isLoggedin, user } = this.props.auth;

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
          {!isLoggedin ? (
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1">
                <Link to="/login">Login</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/signup">Sign Up</Link>
              </Menu.Item>
            </Menu>
          ) : (
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1">{user.name}</Menu.Item>
              <Menu.Item key="2">
                <Link to="/login" onClick={this.handleSignout}>
                  Sign Out
                </Link>
              </Menu.Item>
            </Menu>
          )}
        </Header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Navbar);
