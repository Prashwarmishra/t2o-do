import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Layout } from 'antd';
import { Navbar, Login, Signup } from './';

const Home = () => <div style={{ marginTop: 200 }}>Home</div>;

class App extends Component {
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

export default App;
