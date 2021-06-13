import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import { Layout } from 'antd';
import { Navbar, Login, Signup, Home } from './';
import { getAuthTokenFromLocalStorage } from '../helpers/utils';
import { authenticateUser } from '../actions/auth';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    const token = getAuthTokenFromLocalStorage();
    if (token) {
      const user = jwtDecode(token);
      this.props.dispatch(authenticateUser(user));
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Layout>
            <Navbar />
            <Route exact path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
