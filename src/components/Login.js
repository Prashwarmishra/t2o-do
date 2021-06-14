import React, { Component } from 'react';
import { Layout } from 'antd';
import { Alert } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { clearAuth, userLogin } from '../actions/auth';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    // span: 8,
  },
};

const { Content } = Layout;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentWillUnmount() {
    this.props.dispatch(this.props.dispatch(clearAuth()));
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    if (email && password) {
      this.props.dispatch(userLogin(email, password));
    }
  };

  render() {
    const { isLoggedin, error, inProgress } = this.props.auth;
    if (isLoggedin) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Content className="site-layout" style={{ padding: '150px 50px' }}>
          <div className="site-layout-background">
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
            >
              {error && <Alert message={error} type="error" showIcon />}
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                ]}
              >
                <Input
                  onChange={(e) => this.handleChange('email', e.target.value)}
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password
                  onChange={(e) =>
                    this.handleChange('password', e.target.value)
                  }
                />
              </Form.Item>

              <Form.Item
                {...tailLayout}
                name="remember"
                valuePropName="checked"
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                {inProgress ? (
                  <Button type="primary" htmlType="submit">
                    Logging In...
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={this.handleSubmit}
                  >
                    Log In
                  </Button>
                )}
              </Form.Item>
            </Form>
          </div>
        </Content>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Login);
