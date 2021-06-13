import React, { Component } from 'react';
import { Layout } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { userLogin } from '../actions/auth';

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
    return (
      <div>
        <Content
          className="site-layout"
          style={{ padding: '150px 50px', height: '100vh' }}
        >
          <div className="site-layout-background">
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
            >
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
                <Button
                  type="primary"
                  htmlType="submit"
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
      </div>
    );
  }
}

export default connect()(Login);
