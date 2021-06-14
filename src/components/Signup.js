import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { Alert } from 'antd';

import { clearAuth, userSignup } from '../actions/auth';
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

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  componentWillUnmount() {
    this.props.dispatch(clearAuth());
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  handleSubmit = () => {
    console.log('signup info', this.state);

    const { name, email, password, confirmPassword } = this.state;
    if (name && email && password && confirmPassword) {
      this.props.dispatch(userSignup(name, email, password, confirmPassword));
      this.setState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } else {
      console.log('Please put all values');
    }
  };

  render() {
    const { success, error, inProgress } = this.props.auth;
    const { name, email, password, confirmPassword } = this.state;
    return (
      <div>
        <Content className="site-layout" style={{ padding: '150px 50px' }}>
          <div
            className="site-layout-background"
            // style={{ padding: 24, minHeight: 380 }}
          >
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
            >
              {success ? (
                <Alert message={success} type="success" showIcon />
              ) : error ? (
                <Alert message={error} type="error" showIcon />
              ) : null}

              <Form.Item
                label="Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your name!',
                  },
                ]}
              >
                <Input
                  onChange={(e) => this.handleChange('name', e.target.value)}
                  value={name}
                />
              </Form.Item>

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
                  value={email}
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
                  value={password}
                />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                name="confirm-password"
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                ]}
              >
                <Input.Password
                  onChange={(e) =>
                    this.handleChange('confirmPassword', e.target.value)
                  }
                  value={confirmPassword}
                />
              </Form.Item>

              <Form.Item
                {...tailLayout}
                name="remember"
                valuePropName="unchecked"
              >
                <Checkbox>Agree to terms and conditions</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                {inProgress ? (
                  <Button type="primary" htmlType="submit">
                    Signing Up...
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={this.handleSubmit}
                  >
                    Sign Up
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

export default connect(mapStateToProps)(Signup);
