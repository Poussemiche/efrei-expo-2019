import React from 'react';
import { Container, Button, Content, Form, Item, Input, Text } from 'native-base';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      firstNameError: false,
      lastName: '',
      lastNameError: false,
      city: '',
      cityError: false,
      password: '',
      passwordError: false,
      confirmPassword: '',
      confirmPasswordError: false,
    };
  }

  handleInputChange = (field, value) => {
    const newState = {
      ...this.state,
      [field]: value,
    };
    this.setState(newState);
  };

  handleSubmit = () => {
    const { firstName, lastName, city, password, confirmPassword } = this.state;
    if (firstName.length === 0) {
      return this.setState({ firstNameError: true });
    }
    this.setState({ firstNameError: false });

    if (lastName.length === 0) {
        return this.setState({ lastNameError: true });
      }
      this.setState({ lastNameError: false });

      if (city.length === 0) {
        return this.setState({ cityError: true });
      }
      this.setState({ cityError: false });

    if (password.length === 0) {
      return this.setState({ passwordError: true });
    }
    this.setState({ passwordError: false });

    if (confirmPassword.length === 0) {
      return this.setState({ confirmPasswordError: true });
    }
    this.setState({ confirmPasswordError: false });

    if (password !== confirmPassword) {
      return this.setState({ passwordError: true, confirmPasswordError: true });
    }
    this.setState({ passwordError: false, confirmPasswordError: false });

    return this.props.screenProps.changeLoginState(true);
  };

  render() {
    const { navigation } = this.props;
    const { firstNameError, lastNameError, cityError, passwordError, confirmPasswordError } = this.state;

    return (
      <Container>
        <Content>
          <Form>
            <Item error={firstNameError}>
              <Input
                placeholder="First Name"
                onChangeText={value => this.handleInputChange('firstName', value)}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </Item>
            <Item error={lastNameError}>
              <Input
                placeholder="Last Name"
                onChangeText={value => this.handleInputChange('lastName', value)}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </Item>
            <Item error={cityError}>
              <Input
                placeholder="City"
                onChangeText={value => this.handleInputChange('city', value)}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </Item>
            <Item error={passwordError}>
              <Input
                placeholder="Password"
                onChangeText={value => this.handleInputChange('password', value)}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
              />
            </Item>
            <Item last error={confirmPasswordError}>
              <Input
                placeholder="Confirm Password"
                onChangeText={value => this.handleInputChange('confirmPassword', value)}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
              />
            </Item>
          </Form>
          <Button full onPress={this.handleSubmit}>
            <Text>Sign Up</Text>
          </Button>
          <Button full transparent onPress={() => navigation.navigate('Login')}>
            <Text>Sign In</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Register;

Register.navigationOptions = {
    title: 'Register'
  }