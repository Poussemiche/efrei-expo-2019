import React, { Component } from "react";
import { Text, View } from "react-native";
class Register extends Component {
   state = {
       login: true,
       firstname: '',
       lastName: '',
       city: '',
       password: ''
   }
   render() {
       const { login, firstname, lastName, city, password } = this.state
       return (
        <View>
                <Text>
                test
                </Text>
            </View>
        //  <div>
        //    <h4 className="mv3">{login ? 'Login' : 'Sign Up'}</h4>
        //    <div className="flex flex-column">
        //      {!login && (
        //        <input
        //        value={lastName}
        //        onChange={e => this.setState({ lastName: e.target.value })}
        //        type="text"
        //        placeholder="Your lastName address"
        //      /> &&
        //      <input
        //        value={city}
        //        onChange={e => this.setState({ city: e.target.value })}
        //        type="text"
        //        placeholder="Your city"
        //      />
        //      )}
        //      <input
        //          value={firstname}
        //          onChange={e => this.setState({ firstName: e.target.value })}
        //          type="text"
        //          placeholder="Your first name"
        //        />
        //      <input
        //        value={password}
        //        onChange={e => this.setState({ password: e.target.value })}
        //        type="password"
        //        placeholder="Choose a safe password"
        //      />
        //    </div>
        //    <div className="flex mt3">
        //      <div className="pointer mr2 button" onClick={() => this._confirm()}>
        //        {login ? 'login' : 'create account'}
        //      </div>
        //      <div
        //        className="pointer button"
        //        onClick={() => this.setState({ login: !login })}
        //      >
        //        {login
        //          ? 'need to create an account?'
        //          : 'already have an account?'}
        //      </div>
        //    </div>
        //  </div>
       )
   }
   _confirm = async () => {
       // ... you'll implement this :soon:
     }
     _saveUserData = token => {
       localStorage.setItem(AUTH_TOKEN, token)
     }
   }
   export default Register;



