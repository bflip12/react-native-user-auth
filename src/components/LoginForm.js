import React, { Component } from 'react';
import { } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder='user@gmail.com'
            label='Email'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            style={{ height: 20, width: 100 }}
          />
        </CardSection>
        
        <CardSection>
          <Input
            placeholder='password'
            label='Password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            style={{ height: 20, width: 100 }}
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
