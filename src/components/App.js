import React, { Component } from 'react';
import 'antd/dist/antd.css';

import { Layout } from 'antd';
import { Navbar, Login } from './';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Navbar />
          <Login />
        </Layout>
      </div>
    );
  }
}

export default App;
